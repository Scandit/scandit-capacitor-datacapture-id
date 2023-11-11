/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import ScanditIdCapture
import ScanditCapacitorDatacaptureCore

extension ScanditIdNative: IdCaptureListener {
    public func idCapture(_ idCapture: IdCapture,
                          didCaptureIn session: IdCaptureSession,
                          frameData: FrameData) {
        guard let callback = callbacks.idCaptureListener else {
            return
        }

        idCaptureSession = session

        let listenerEvent = ListenerEvent(name: .didCaptureInIdCapture,
                                          argument: ["session": session.jsonString],
                                          shouldNotifyWhenFinished: true)
        waitForFinished(listenerEvent, callbackId: callback.id)
        finishBlockingCallback(with: idCapture, for: listenerEvent)
    }

    public func idCapture(_ idCapture: IdCapture,
                          didLocalizeIn session: IdCaptureSession,
                          frameData: FrameData) {
        guard let callback = callbacks.idCaptureListener else {
            return
        }

        idCaptureSession = session

        let listenerEvent = ListenerEvent(name: .didLocalizeInIdCapture,
                                          argument: ["session": session.jsonString],
                                          shouldNotifyWhenFinished: true)
        waitForFinished(listenerEvent, callbackId: callback.id)
        finishBlockingCallback(with: idCapture, for: listenerEvent)
    }

    public func idCapture(_ idCapture: IdCapture,
                          didRejectIn session: IdCaptureSession,
                          frameData: FrameData) {
        guard let callback = callbacks.idCaptureListener else {
            return
        }

        idCaptureSession = session

        let listenerEvent = ListenerEvent(name: .didRejectInIdCapture,
                                          argument: ["session": session.jsonString],
                                          shouldNotifyWhenFinished: true)
        waitForFinished(listenerEvent, callbackId: callback.id)
        finishBlockingCallback(with: idCapture, for: listenerEvent)
    }
}
