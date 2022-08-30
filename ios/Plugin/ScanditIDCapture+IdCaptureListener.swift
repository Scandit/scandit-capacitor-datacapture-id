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

    public func idCapture(_ idCapture: IdCapture,
                          didFailWithError error: Error,
                          session: IdCaptureSession,
                          frameData: FrameData) {
        guard let callback = callbacks.idCaptureListener else {
            return
        }

        idCaptureSession = session

        let listenerEvent = ListenerEvent(name: .didFailInIdCapture,
                                  argument: ["session": session.jsonString])
        waitForFinished(listenerEvent, callbackId: callback.id)
        finishBlockingCallback(with: idCapture, for: listenerEvent)
    }
}
