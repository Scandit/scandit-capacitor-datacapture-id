/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.capacitor.datacapture.id

import android.util.Log
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import com.scandit.capacitor.datacapture.core.ScanditCaptureCoreNative
import com.scandit.capacitor.datacapture.core.communication.ModeDeserializersProvider
import com.scandit.capacitor.datacapture.core.data.SerializableCallbackAction.Companion.FIELD_FINISH_CALLBACK_ID
import com.scandit.capacitor.datacapture.core.data.SerializableFinishModeCallbackData
import com.scandit.capacitor.datacapture.core.data.defaults.SerializableCameraSettingsDefault
import com.scandit.capacitor.datacapture.core.errors.JsonParseError
import com.scandit.capacitor.datacapture.id.callbacks.IdCaptureCallback
import com.scandit.capacitor.datacapture.id.data.defaults.SerializableIdCaptureDefaults
import com.scandit.capacitor.datacapture.id.data.defaults.SerializableIdCaptureOverlayDefaults
import com.scandit.capacitor.datacapture.id.data.defaults.SerializableIdDefaults
import com.scandit.capacitor.datacapture.id.factories.IdCaptureActions.ACTION_ID_CAPTURED
import com.scandit.capacitor.datacapture.id.factories.IdCaptureActions.ACTION_ID_LOCALIZED
import com.scandit.capacitor.datacapture.id.factories.IdCaptureActions.ACTION_ID_REJECTED
import com.scandit.capacitor.datacapture.id.handlers.IdCaptureHandler
import com.scandit.datacapture.core.data.FrameData
import com.scandit.datacapture.core.json.JsonValue
import com.scandit.datacapture.id.capture.IdCapture
import com.scandit.datacapture.id.capture.IdCaptureListener
import com.scandit.datacapture.id.capture.IdCaptureSession
import com.scandit.datacapture.id.capture.serialization.IdCaptureDeserializer
import com.scandit.datacapture.id.capture.serialization.IdCaptureDeserializerListener
import com.scandit.datacapture.id.data.CapturedId
import com.scandit.datacapture.id.ui.overlay.IdCaptureOverlay
import com.scandit.datacapture.id.verification.aamvavizbarcode.AamvaVizBarcodeComparisonVerifier
import org.json.JSONException
import org.json.JSONObject

@CapacitorPlugin(name = "ScanditIdNative")
class ScanditIdNative :
    Plugin(),
    com.scandit.capacitor.datacapture.id.CapacitorPlugin,
    ModeDeserializersProvider,
    IdCaptureDeserializerListener,
    IdCaptureListener {

    companion object {
        private const val FIELD_RESULT = "result"
        private const val CORE_PLUGIN_NAME = "ScanditCaptureCoreNative"
    }

    private var idCaptureCallback: IdCaptureCallback? = null
    private val idCaptureHandler: IdCaptureHandler = IdCaptureHandler(this)

    private var lastIdCaptureEnabledState: Boolean = false

    override fun load() {
        super.load()

        // We need to register the plugin with its Core dependency for serializers to load.
        val corePlugin = bridge.getPlugin(CORE_PLUGIN_NAME)
        if (corePlugin != null) {
            (corePlugin.instance as ScanditCaptureCoreNative)
                .registerPluginInstance(pluginHandle.instance)
        } else {
            Log.e("Registering:", "Core not found")
        }
    }

    fun onStop() {
        lastIdCaptureEnabledState = idCaptureHandler.idCapture?.isEnabled ?: false
        idCaptureHandler.idCapture?.isEnabled = false
        idCaptureCallback?.forceRelease()
    }

    fun onStart() {
        idCaptureHandler.idCapture?.isEnabled = lastIdCaptureEnabledState
    }

    fun onReset() {
        idCaptureHandler.disposeCurrent()
        idCaptureCallback?.dispose()
    }

    override fun provideModeDeserializers() = listOf(
        IdCaptureDeserializer().also {
            it.listener = this
        }
    )

    override fun onModeDeserializationFinished(
        deserializer: IdCaptureDeserializer,
        mode: IdCapture,
        json: JsonValue
    ) {
        if (json.contains("enabled")) {
            mode.isEnabled = json.requireByKeyAsBoolean("enabled")
        }
        idCaptureHandler.attachIdCapture(mode)
    }

    override fun onIdCaptured(mode: IdCapture, session: IdCaptureSession, data: FrameData) {
        idCaptureCallback?.onIdCaptured(mode, session, data)
    }

    override fun onIdLocalized(mode: IdCapture, session: IdCaptureSession, data: FrameData) {
        idCaptureCallback?.onIdLocalized(mode, session, data)
    }

    override fun onIdRejected(mode: IdCapture, session: IdCaptureSession, data: FrameData) {
        idCaptureCallback?.onIdCaptured(mode, session, data)
    }

    private fun onFinishIdCaptureMode(finishData: SerializableFinishModeCallbackData?) {
        idCaptureCallback?.onFinishCallback(finishData)
    }

    @PluginMethod
    fun getDefaults(call: PluginCall) {
        try {
            val defaults = SerializableIdDefaults(
                serializableIdCaptureDefaults = SerializableIdCaptureDefaults(
                    recommendedCameraSettings = SerializableCameraSettingsDefault(
                        IdCapture.createRecommendedCameraSettings()
                    ),
                    idCaptureOverlay = SerializableIdCaptureOverlayDefaults(
                        IdCaptureOverlay.defaultCapturedBrush(),
                        IdCaptureOverlay.defaultLocalizedBrush(),
                        IdCaptureOverlay.defaultRejectedBrush()
                    )
                )
            )
            call.resolve(JSObject.fromJSONObject(defaults.toJson()))
        } catch (e: Exception) {
            println(e)
            call.reject(JsonParseError(e.message).toString())
        }
    }

    @PluginMethod
    fun verifyCapturedId(call: PluginCall) {
        try {
            val capturedIdJson = call.data.getString("capturedId") ?: return
            val capturedId = CapturedId.fromJson(capturedIdJson)
            call.resolve(
                JSObject.fromJSONObject(
                    JSONObject(
                        mapOf(
                            FIELD_RESULT to AamvaVizBarcodeComparisonVerifier
                                .create()
                                .verify(capturedId)
                                .toJson()
                        )
                    )
                )
            )
        } catch (e: Exception) {
            call.reject(JsonParseError(e.message).toString())
        }
    }

    @PluginMethod
    fun subscribeIdCaptureListener(call: PluginCall) {
        idCaptureCallback?.dispose()
        idCaptureCallback = IdCaptureCallback(this)
        call.resolve()
    }

    @PluginMethod
    fun resetIdCapture(call: PluginCall) {
        idCaptureHandler.idCapture?.reset()
        call.resolve()
    }

    @PluginMethod
    fun finishCallback(call: PluginCall) {
        try {
            val data = call.data
            // We need the "result" field to exist ( null is also allowed )
            if (!data.has(FIELD_RESULT)) {
                throw JSONException("Missing $FIELD_RESULT field in response json")
            }
            val result: JSONObject = data.optJSONObject(FIELD_RESULT) ?: JSONObject()
            when {
                isFinishIdCaptureModeCallback(result) -> onFinishIdCaptureMode(
                    SerializableFinishModeCallbackData.fromJson(result)
                )
                else ->
                    throw JSONException("Cannot recognise finish callback action with data $data")
            }
        } catch (e: JSONException) {
            println(e)
            call.reject(JsonParseError(e.message).toString())
        } catch (e: RuntimeException) {
            println(e)
            call.reject(JsonParseError(e.message).toString())
        }
    }

    private fun isFinishIdCaptureModeCallback(data: JSONObject) =
        data.has(FIELD_FINISH_CALLBACK_ID) && (
            data[FIELD_FINISH_CALLBACK_ID] == ACTION_ID_CAPTURED ||
                data[FIELD_FINISH_CALLBACK_ID] == ACTION_ID_LOCALIZED ||
                data[FIELD_FINISH_CALLBACK_ID] == ACTION_ID_REJECTED
            )

    override fun notify(name: String, data: JSObject) {
        notifyListeners(name, data)
    }
}

interface CapacitorPlugin {
    fun notify(name: String, data: JSObject)
}
