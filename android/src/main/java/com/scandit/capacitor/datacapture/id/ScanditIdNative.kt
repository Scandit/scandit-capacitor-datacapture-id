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

    private val idCaptureModule = IdCaptureModule(this)

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
    }

    override fun handleOnStart() {
        idCaptureModule.setTopmostModeEnabled(lastIdCaptureEnabledState)
    }

    override fun handleOnStop() {
        lastIdCaptureEnabledState = idCaptureModule.isTopmostModeEnabled()
        idCaptureModule.setTopmostModeEnabled(false)
    }

    override fun handleOnDestroy() {
        idCaptureModule.onDestroy()
    }

    @PluginMethod
    fun getDefaults(call: PluginCall) {
        call.resolve(JSObject.fromJSONObject(JSONObject(idCaptureModule.getDefaults())))
    }

    @PluginMethod
    fun resetIdCaptureMode(call: PluginCall) {
        idCaptureModule.resetMode(getModeId(call))
        call.resolve()
    }

    @PluginMethod
    fun addIdCaptureListener(call: PluginCall) {
        idCaptureModule.addListener(getModeId(call))
        call.resolve()
    }

    @PluginMethod
    fun removeIdCaptureListener(call: PluginCall) {
        idCaptureModule.removeListener(getModeId(call))
        call.resolve()
    }

    @PluginMethod
    fun setModeEnabledState(call: PluginCall) {
        idCaptureModule.setModeEnabled(getModeId(call), call.data.getBoolean("enabled"))
        call.resolve()
    }

    @PluginMethod
    fun finishDidCaptureCallback(call: PluginCall) {
        idCaptureModule.finishDidCaptureId(getModeId(call), call.data.getBoolean("enabled"))
    }

    @PluginMethod
    fun finishDidRejectCallback(call: PluginCall) {
        idCaptureModule.finishDidRejectId(getModeId(call), call.data.getBoolean("enabled"))
    }

    @PluginMethod
    fun updateIdCaptureOverlay(call: PluginCall) {
        val overlayJson = call.data.getString("overlayJson")
            ?: return call.reject(WRONG_INPUT)
        idCaptureModule.updateOverlay(overlayJson, CapacitorResult(call))
    }

    @PluginMethod
    fun updateIdCaptureMode(call: PluginCall) {
        val modeJson = call.data.getString("modeJson")
            ?: return call.reject(WRONG_INPUT)
        idCaptureModule.updateModeFromJson(getModeId(call), modeJson, CapacitorResult(call))
    }

    @PluginMethod
    fun applyIdCaptureModeSettings(call: PluginCall) {
        val modeSettingsJson = call.data.getString("settingsJson")
            ?: return call.reject(WRONG_INPUT)
        idCaptureModule.applyModeSettings(getModeId(call), modeSettingsJson, CapacitorResult(call))
    }

    override fun emit(eventName: String, payload: MutableMap<String, Any?>) {
        val capacitorPayload = JSObject()
        capacitorPayload.put("name", eventName)
        capacitorPayload.put("data", JSONObject(payload).toString())

        notifyListeners(eventName, capacitorPayload)
    }

    @PluginMethod
    fun updateFeedback(call: PluginCall) {
        val feedbackJson = call.data.getString("feedbackJson")
            ?: return call.reject(WRONG_INPUT)
        idCaptureModule.updateFeedback(getModeId(call), feedbackJson, CapacitorResult(call))
    }

    private fun getModeId(call: PluginCall): Int {
        return call.data.getInt("modeId")
    }

    override fun hasListenersForEvent(eventName: String): Boolean = this.hasListeners(eventName)

    companion object {
        private const val FIELD_RESULT = "result"
        private const val CORE_PLUGIN_NAME = "ScanditCaptureCoreNative"

        private const val WRONG_INPUT = "Wrong input parameter"
    }
}
