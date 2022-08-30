import ScanditIdCapture
import ScanditCapacitorDatacaptureCore

struct ScanditIdCaptureDefaults: Encodable {
    typealias CameraSettingsDefaults = ScanditCaptureCoreDefaults.CameraSettingsDefaults

    struct IdCaptureDefaultsContainer: Encodable {
        let RecommendedCameraSettings: CameraSettingsDefaults
        let IdCaptureOverlayDefaults: [String: ScanditCaptureCoreDefaults.BrushDefaults]
    }

    let IdCapture = IdCaptureDefaultsContainer()
}

extension ScanditIdCaptureDefaults.IdCaptureDefaultsContainer {
    typealias BrushDefaults = ScanditCaptureCoreDefaults.BrushDefaults

    init() {
        self.RecommendedCameraSettings = ScanditCaptureCoreDefaults.CameraSettingsDefaults
            .from(IdCapture.recommendedCameraSettings)
        self.IdCaptureOverlayDefaults = [
            "defaultCapturedBrush": BrushDefaults.from(
                IdCaptureOverlay.defaultCapturedBrush
            ),
            "defaultLocalizedBrush": BrushDefaults.from(
                IdCaptureOverlay.defaultLocalizedBrush
            ),
            "defaultRejectedBrush": BrushDefaults.from(
                IdCaptureOverlay.defaultRejectedBrush
            ),
        ]
    }
}
