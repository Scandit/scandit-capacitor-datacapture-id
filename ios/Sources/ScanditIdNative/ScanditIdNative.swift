/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import Capacitor
import Foundation
import ScanditCapacitorDatacaptureCore
import ScanditFrameworksId

struct IdCaptureCallbackResult: BlockingListenerCallbackResult {
    struct ResultJSON: Decodable {
        let enabled: Bool?
    }

    let finishCallbackID: ListenerEvent.Name
    let result: ResultJSON?

    var enabled: Bool? {
        guard let result = result else {
            return nil
        }

        return result.enabled
    }
}

@objc(ScanditIdNative)
public class ScanditIdNative: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "ScanditIdNative"
    public let jsName = "ScanditIdNative"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "getDefaults", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "resetIdCaptureMode", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "setModeEnabledState", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "addIdCaptureListener", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "removeIdCaptureListener", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "finishDidCaptureCallback", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "finishDidRejectCallback", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "updateIdCaptureOverlay", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "updateIdCaptureMode", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "applyIdCaptureModeSettings", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "updateFeedback", returnType: CAPPluginReturnPromise),
    ]
    var idModule: IdCaptureModule!

    override public func load() {
        let emitter = CapacitorEventEmitter(with: self)
        idModule = IdCaptureModule(emitter: emitter)
        idModule.didStart()
    }

    func onReset() {
        idModule.didStop()
    }

    // MARK: Defaults

    @objc(getDefaults:)
    func getDefaults(_ call: CAPPluginCall) {
        call.resolve(idModule.defaults.toEncodable() as PluginCallResultData)
    }

    // MARK: Reset

    @objc(resetIdCaptureMode:)
    func resetIdCaptureMode(_ call: CAPPluginCall) {
        guard let modeId = call.getInt("modeId") else {
            call.reject(CommandError.noModeIdParameter.toJSONString())
            return
        }
        idModule.resetMode(modeId: modeId)
        call.resolve()
    }

    @objc(addIdCaptureListener:)
    func addIdCaptureListener(_ call: CAPPluginCall) {
        guard let modeId = call.getInt("modeId") else {
            call.reject(CommandError.noModeIdParameter.toJSONString())
            return
        }
        idModule.addListener(modeId: modeId)
        call.resolve()
    }

    @objc(removeIdCaptureListener:)
    func removeIdCaptureListener(_ call: CAPPluginCall) {
        guard let modeId = call.getInt("modeId") else {
            call.reject(CommandError.noModeIdParameter.toJSONString())
            return
        }
        idModule.removeListener(modeId: modeId)
        call.resolve()
    }

    @objc(finishDidCaptureCallback:)
    func finishDidCaptureCallback(_ call: CAPPluginCall) {
        guard let modeId = call.getInt("modeId") else {
            call.reject(CommandError.noModeIdParameter.toJSONString())
            return
        }
        idModule.finishDidCaptureId(modeId: modeId, enabled: call.getBool("enabled", false))
        call.resolve()
    }

    @objc(finishDidRejectCallback:)
    func finishDidRejectCallback(_ call: CAPPluginCall) {
        guard let modeId = call.getInt("modeId") else {
            call.reject(CommandError.noModeIdParameter.toJSONString())
            return
        }
        idModule.finishDidRejectId(modeId: modeId, enabled: call.getBool("enabled", false))
        call.resolve()
    }

    @objc(setModeEnabledState:)
    func setModeEnabledState(_ call: CAPPluginCall) {
        guard let modeId = call.getInt("modeId") else {
            call.reject(CommandError.noModeIdParameter.toJSONString())
            return
        }
        idModule.setModeEnabled(modeId: modeId, enabled: call.getBool("enabled", false))
        call.resolve()
    }

    @objc(updateIdCaptureOverlay:)
    func updateIdCaptureOverlay(_ call: CAPPluginCall) {
        guard let overlayJson = call.getString("overlayJson") else {
            call.reject(CommandError.invalidJSON.toJSONString())
            return
        }
        idModule.updateOverlay(overlayJson: overlayJson, result: CapacitorResult(call))
    }

    @objc(updateIdCaptureMode:)
    func updateIdCaptureMode(_ call: CAPPluginCall) {
        guard let modeId = call.getInt("modeId") else {
            call.reject(CommandError.noModeIdParameter.toJSONString())
            return
        }
        guard let modeJson = call.getString("modeJson") else {
            call.reject(CommandError.invalidJSON.toJSONString())
            return
        }
        idModule.updateModeFromJson(modeId: modeId, modeJson: modeJson, result: CapacitorResult(call))
    }

    @objc(applyIdCaptureModeSettings:)
    func applyIdCaptureModeSettings(_ call: CAPPluginCall) {
        guard let modeId = call.getInt("modeId") else {
            call.reject(CommandError.noModeIdParameter.toJSONString())
            return
        }
        guard let modeSettingsJson = call.getString("settingsJson") else {
            call.reject(CommandError.invalidJSON.toJSONString())
            return
        }
        idModule.applyModeSettings(modeId: modeId, modeSettingsJson: modeSettingsJson, result: CapacitorResult(call))
    }

    @objc(updateFeedback:)
    func updateFeedback(_ call: CAPPluginCall) {
        guard let modeId = call.getInt("modeId") else {
            call.reject(CommandError.noModeIdParameter.toJSONString())
            return
        }
        guard let feedbackJson = call.getString("feedbackJson") else {
            call.reject(CommandError.invalidJSON.toJSONString())
            return
        }
        idModule.updateFeedback(modeId: modeId, feedbackJson: feedbackJson, result: CapacitorResult(call))
    }
}
