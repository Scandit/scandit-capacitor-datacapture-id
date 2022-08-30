import { CameraSettings } from '../../../../scandit-capacitor-datacapture-core/src/ts/Camera+Related';
import { Color } from '../../../../scandit-capacitor-datacapture-core/src/ts/Common';
export const defaultsFromJSON = (json) => {
    return {
        IdCapture: {
            RecommendedCameraSettings: CameraSettings
                .fromJSON(json.IdCapture.RecommendedCameraSettings),
            IdCaptureOverlayDefaults: {
                defaultCapturedBrush: {
                    fillColor: Color
                        .fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.fillColor),
                    strokeColor: Color
                        .fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeColor),
                    strokeWidth: json.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeWidth,
                },
                defaultLocalizedBrush: {
                    fillColor: Color
                        .fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.fillColor),
                    strokeColor: Color
                        .fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeColor),
                    strokeWidth: json.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeWidth,
                },
                defaultRejectedBrush: {
                    fillColor: Color
                        .fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.fillColor),
                    strokeColor: Color
                        .fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeColor),
                    strokeWidth: json.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeWidth,
                },
            },
        },
    };
};
//# sourceMappingURL=Defaults.js.map