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
import com.scandit.capacitor.datacapture.core.data.SerializableCallbackAction.Companion.FIELD_FINISH_CALLBACK_ID
import com.scandit.capacitor.datacapture.core.data.SerializableFinishModeCallbackData
import com.scandit.capacitor.datacapture.core.errors.JsonParseError
import com.scandit.capacitor.datacapture.core.utils.CapacitorResult
import com.scandit.datacapture.frameworks.core.events.Emitter
import com.scandit.datacapture.frameworks.id.IdCaptureModule
import com.scandit.datacapture.frameworks.id.listeners.FrameworksIdCaptureListener
import org.json.JSONException
import org.json.JSONObject

@CapacitorPlugin(name = "ScanditIdNative")
class ScanditIdNative : Plugin(), Emitter {

    private val idCaptureModule = IdCaptureModule(FrameworksIdCaptureListener(this))

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

        idCaptureModule.onCreate(bridge.context)
        idCaptureModule.addListener()
    }

    override fun handleOnStart() {
        idCaptureModule.setModeEnabled(lastIdCaptureEnabledState)
    }

    override fun handleOnStop() {
        lastIdCaptureEnabledState = idCaptureModule.isModeEnabled()
        idCaptureModule.setModeEnabled(false)
    }

    override fun handleOnDestroy() {
        idCaptureModule.onDestroy()
    }

    @PluginMethod
    fun getDefaults(call: PluginCall) {
        call.resolve(JSObject.fromJSONObject(JSONObject(idCaptureModule.getDefaults())))
    }

    @PluginMethod
    fun verifyCapturedId(call: PluginCall) {
        try {
            val capturedIdJson = call.data.getString("capturedId")
                ?: return call.reject("Request doesn't contain the captureId")

            idCaptureModule.verifyCaptureId(capturedIdJson, CapacitorResult(call))
        } catch (e: Exception) {
            call.reject(JsonParseError(e.message).toString())
        }
    }

    @PluginMethod
    fun resetIdCapture(call: PluginCall) {
        idCaptureModule.resetMode()
        call.resolve()
    }

    @PluginMethod
    fun verifyCapturedIdAsync(call: PluginCall) {
        try {
            val capturedIdJson = call.data.getString("capturedId")
                ?: return call.reject("Request doesn't contain the captureId")

            idCaptureModule.verifyCapturedIdBarcode(capturedIdJson, CapacitorResult(call))
        } catch (e: Exception) {
            call.reject(JsonParseError(e.message).toString())
        }
    }

    @PluginMethod
    fun createContextForBarcodeVerification(call: PluginCall) {
        idCaptureModule.createContextForBarcodeVerification(CapacitorResult(call))
    }

    @PluginMethod
    fun setModeEnabledState(call: PluginCall) {
        idCaptureModule.setModeEnabled(call.data.getBoolean("enabled"))
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

            if (!result.has(FIELD_FINISH_CALLBACK_ID)) {
                throw JSONException("Cannot recognise finish callback action with data $data")
            }

            val resultData = SerializableFinishModeCallbackData.fromJson(result)

            when (result[FIELD_FINISH_CALLBACK_ID]) {
                FrameworksIdCaptureListener.ON_ID_CAPTURED_EVENT_NAME ->
                    idCaptureModule.finishDidCaptureId(resultData?.enabled == true)

                FrameworksIdCaptureListener.ON_ID_LOCALIZED_EVENT_NAME ->
                    idCaptureModule.finishDidLocalizeId(resultData?.enabled == true)

                FrameworksIdCaptureListener.ON_ID_REJECTED_EVENT_NAME ->
                    idCaptureModule.finishDidRejectId(resultData?.enabled == true)

                FrameworksIdCaptureListener.ON_TIMEOUT_EVENT_NAME ->
                    idCaptureModule.finishDidTimeout(resultData?.enabled == true)
            }
        } catch (e: JSONException) {
            println(e)
            call.reject(JsonParseError(e.message).toString())
        } catch (e: RuntimeException) {
            println(e)
            call.reject(JsonParseError(e.message).toString())
        }
    }

    override fun emit(eventName: String, payload: MutableMap<String, Any?>) {
        payload[FIELD_EVENT_NAME] = eventName

        notifyListeners(eventName, JSObject.fromJSONObject(JSONObject(payload)))
    }


    override fun hasListenersForEvent(eventName: String): Boolean = this.hasListeners(eventName)

    companion object {
        private const val FIELD_RESULT = "result"
        private const val CORE_PLUGIN_NAME = "ScanditCaptureCoreNative"

        private const val FIELD_EVENT_ARGUMENT = "argument"
        private const val FIELD_EVENT_NAME = "name"
    }
}
