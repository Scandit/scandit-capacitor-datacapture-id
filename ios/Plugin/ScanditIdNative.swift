/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import Foundation
import Capacitor
import ScanditCaptureCore
import ScanditCapacitorDatacaptureCore
import ScanditIdCapture

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

    lazy public var modeDeserializer: IdCaptureDeserializer = {
            let idCaptureDeserializer = IdCaptureDeserializer()
            idCaptureDeserializer.delegate = self
            return idCaptureDeserializer
    }()

    lazy var callbacks = IdCaptureCallbacks()
    lazy var callbackLocks = CallbackLocks()

    var idCapture: IdCapture?
    var idCaptureSession: IdCaptureSession?

    override public func load() {
        ScanditCapacitorCore.registerModeDeserializer(modeDeserializer)
    }

    // MARK: Listeners

    @objc(subscribeIdCaptureListener:)
    func subscribeIdCaptureListener(_ call: CAPPluginCall) {
        callbacks.idCaptureListener = Callback(id: call.callbackId)
        call.resolve()
    }

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
        callbackLocks.setResult(result, for: result.finishCallbackID)
        callbackLocks.release(for: result.finishCallbackID)
        call.resolve()
    }

    @objc(verifyCapturedId:)
    func verifyCapturedId(_ call: CAPPluginCall) {
        guard let jsonString = call.options["capturedId"] as! String? else {
            call.reject(CommandError.invalidJSON.toJSONString())
            return
        }
        guard let capturedId = try? CapturedId(jsonString: jsonString) else {
            call.resolve()
            return
        }
        let result = AAMVAVizBarcodeComparisonVerifier.init().verify(capturedId).jsonString
        call.resolve([
            "data": result
        ])
    }

    func waitForFinished(_ listenerEvent: ListenerEvent, callbackId: String) {
        callbackLocks.wait(for: listenerEvent.name, afterDoing: {
            self.notifyListeners(listenerEvent.name.rawValue, data: listenerEvent.resultMessage as? [String: Any])
        })
    }

    func finishBlockingCallback(with mode: DataCaptureMode, for listenerEvent: ListenerEvent) {
        defer {
            callbackLocks.clearResult(for: listenerEvent.name)
        }

        guard let result = callbackLocks.getResult(for: listenerEvent.name) as? IdCaptureCallbackResult,
            let enabled = result.enabled else {
            return
        }

        if enabled != mode.isEnabled {
            mode.isEnabled = enabled
        }
    }

    // MARK: Defaults

    @objc(getDefaults:)
    func getDefaults(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            let defaults = ScanditIdCaptureDefaults.defaults

            var defaultsDictionary: [String: Any]? {
                    guard let data = try? JSONEncoder().encode(defaults) else {
                        return nil
                    }
                    guard let json = try? JSONSerialization.jsonObject(with: data, options: []) as? [String: Any] else
                    {
                        return nil
                    }
                    return json
                }

            call.resolve(defaultsDictionary ?? [:])
        }
    }

    // MARK: Reset

    @objc(resetIdCapture:)
    func resetIdCapture(_ call: CAPPluginCall) {
        if let idCapture = idCapture {
            idCapture.reset()
        }
        call.resolve()
    }
}
