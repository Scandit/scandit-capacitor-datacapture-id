/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import Capacitor
import Foundation
import ScanditCapacitorDatacaptureCore
import ScanditFrameworksCore
import ScanditFrameworksId

@objc(ScanditIdNative)
public class ScanditIdNative: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "ScanditIdNative"
    public let jsName = "ScanditIdNative"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "getDefaults", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "executeId", returnType: CAPPluginReturnPromise),
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

    @objc(getDefaults:)
    func getDefaults(_ call: CAPPluginCall) {
        call.resolve(idModule.getDefaults() as PluginCallResultData)
    }

    @objc(executeId:)
    func executeId(_ call: CAPPluginCall) {
        let coreModuleName = String(describing: CoreModule.self)
        guard let coreModule = DefaultServiceLocator.shared.resolve(clazzName: coreModuleName) as? CoreModule else {
            call.reject("Unable to retrieve the CoreModule from the locator.")
            return
        }

        let result = CapacitorResult(call)
        let handled = coreModule.execute(
            CapacitorMethodCall(call),
            result: result,
            module: idModule
        )

        if !handled {
            let methodName = call.getString("methodName") ?? "unknown"
            call.reject("Unknown Core method: \(methodName)")
        }
    }
}
