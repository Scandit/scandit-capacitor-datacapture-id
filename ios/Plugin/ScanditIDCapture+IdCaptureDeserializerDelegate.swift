/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import ScanditIdCapture
import ScanditCapacitorDatacaptureCore

extension ScanditIdNative: IdCaptureDeserializerDelegate {
    public func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                                      didStartDeserializingMode mode: IdCapture,
                                      from JSONValue: JSONValue) {
    }

    public func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                                      didFinishDeserializingMode mode: IdCapture,
                                      from JSONValue: JSONValue) {
        idCapture = mode

        mode.isEnabled = JSONValue.bool(forKey: "enabled")

        mode.addListener(self)
    }

    public func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                                      didStartDeserializingSettings settings: IdCaptureSettings,
                                      from JSONValue: JSONValue) {
    }

    public func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                                      didFinishDeserializingSettings settings: IdCaptureSettings,
                                      from JSONValue: JSONValue) {
    }

    public func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                                      didStartDeserializingOverlay overlay: IdCaptureOverlay,
                                      from JSONValue: JSONValue) {
    }

    public func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                                      didFinishDeserializingOverlay overlay: IdCaptureOverlay,
                                      from JSONValue: JSONValue) {
    }
}