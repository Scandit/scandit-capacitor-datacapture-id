/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

import ScanditIdCapture
import ScanditCapacitorDatacaptureCore

fileprivate typealias IdCaptureOverlayClass = IdCaptureOverlay

struct ScanditIdCaptureDefaults: Encodable {
    struct IdCaptureDefaultsContainer: Encodable {
        let RecommendedCameraSettings: CameraSettingsDefaults
        let IdCaptureOverlay: [String: BrushDefaults]
    }
    static let defaults = IdCaptureDefaultsContainer()
}

extension ScanditIdCaptureDefaults.IdCaptureDefaultsContainer {

    init() {
        self.RecommendedCameraSettings = CameraSettingsDefaults.from(IdCapture.recommendedCameraSettings)
        self.IdCaptureOverlay = [
            "DefaultCapturedBrush": BrushDefaults.from(
                IdCaptureOverlayClass.defaultCapturedBrush
            ),
            "DefaultLocalizedBrush": BrushDefaults.from(
                IdCaptureOverlayClass.defaultLocalizedBrush
            ),
            "DefaultRejectedBrush": BrushDefaults.from(
                IdCaptureOverlayClass.defaultRejectedBrush
            ),
        ]
    }
}
