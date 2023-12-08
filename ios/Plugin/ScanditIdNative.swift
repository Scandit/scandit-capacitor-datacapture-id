/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import Capacitor
import Foundation
import ScanditCapacitorDatacaptureCore
import ScanditFrameworksId

class IdCaptureCallbacks {
    var idCaptureListener: Callback?

    func reset() {
        idCaptureListener = nil
    }
}

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
public class ScanditIdNative: CAPPlugin {
    var idModule: IdCaptureModule!
    lazy var callbacks = IdCaptureCallbacks()

    override public func load() {
        let emitter = CapacitorEventEmitter(with: self)
        let idCaptureListener = FrameworksIdCaptureListener(emitter: emitter)
        idModule = IdCaptureModule(idCaptureListener: idCaptureListener)
        idModule.didStart()
        idModule.addListener()
    }

    func onReset() {
        idModule.didStop()
    }

    // MARK: Listeners

    @objc(finishCallback:)
    func finishCallback(_ call: CAPPluginCall) {
        guard let resultObject = call.getObject("result") else {
            call.reject(CommandError.invalidJSON.toJSONString())
            return
        }

        guard let finishCallbackId = resultObject["finishCallbackID"] else {
            call.reject(CommandError.invalidJSON.toJSONString())
            return
        }

        guard let result = IdCaptureCallbackResult.from(([
            "finishCallbackID": finishCallbackId,
            "result": resultObject] as NSDictionary).jsonString) else {
            call.reject(CommandError.invalidJSON.toJSONString())
            return
        }
        let enabled = result.enabled ?? false
        if result.isForListenerEvent(.didLocalizeInIdCapture) {
            idModule.finishDidLocalizeId(enabled: enabled)
        } else if result.isForListenerEvent(.didCaptureInIdCapture) {
            idModule.finishDidCaptureId(enabled: enabled)
        } else if result.isForListenerEvent(.didRejectInIdCapture) {
            idModule.finishDidRejectId(enabled: enabled)
        } else if result.isForListenerEvent(.didTimoutInIdCapture) {
            idModule.finishTimeout(enabled: enabled)
        } else {
            call.reject("Invalid 'finishCallbackId' for IdCapture: \(result.finishCallbackID.rawValue)")
        }
        call.resolve()
    }

    @objc(verifyCapturedId:)
    func verifyCapturedId(_ call: CAPPluginCall) {
        guard let jsonString = call.options["capturedId"] as! String? else {
            call.reject(CommandError.invalidJSON.toJSONString())
            return
        }
        idModule.verifyCapturedIdAamvaViz(jsonString: jsonString,
                                          result: CapacitorResult(call))
    }

    @objc(verifyCapturedIdAsync:)
    func verifyCapturedIdAsync(_ call: CAPPluginCall) {
        guard let jsonString = call.options["capturedId"] as! String? else {
            call.reject(CommandError.invalidJSON.toJSONString())
            return
        }
        idModule.verifyCapturedIdWithCloud(jsonString: jsonString,
                                          result: CapacitorResult(call))
    }

    @objc(createContextForBarcodeVerification:)
    func createContextForBarcodeVerification(_ call: CAPPluginCall) {
        idModule.createAamvaBarcodeVerifier(result: CapacitorResult(call))
    }

    // MARK: Defaults

    @objc(getDefaults:)
    func getDefaults(_ call: CAPPluginCall) {
        call.resolve(idModule.defaults.toEncodable() as PluginCallResultData)
    }

    // MARK: Reset

    @objc(resetIdCapture:)
    func resetIdCapture(_ call: CAPPluginCall) {
        idModule.resetMode()
        call.resolve()
    }

    @objc(setModeEnabledState:)
    func setModeEnabledState(_ call: CAPPluginCall) {
        idModule.setModeEnabled(enabled: call.getBool("enabled", false))
        call.resolve()
    }
}
