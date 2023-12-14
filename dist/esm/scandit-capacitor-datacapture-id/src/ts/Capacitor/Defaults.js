import { CameraSettings } from '../../../../scandit-capacitor-datacapture-core/src/ts/Camera+Related';
import { Color } from '../../../../scandit-capacitor-datacapture-core/src/ts/Common';
export const defaultsFromJSON = (json) => {
    return {
        IdCapture: {
            RecommendedCameraSettings: CameraSettings
                .fromJSON(json.RecommendedCameraSettings),
            IdCaptureOverlayDefaults: {
                defaultCapturedBrush: {
                    fillColor: Color
                        .fromJSON(json.IdCaptureOverlay.DefaultCapturedBrush.fillColor),
                    strokeColor: Color
                        .fromJSON(json.IdCaptureOverlay.DefaultCapturedBrush.strokeColor),
                    strokeWidth: json.IdCaptureOverlay.DefaultCapturedBrush.strokeWidth,
                },
                defaultLocalizedBrush: {
                    fillColor: Color
                        .fromJSON(json.IdCaptureOverlay.DefaultLocalizedBrush.fillColor),
                    strokeColor: Color
                        .fromJSON(json.IdCaptureOverlay.DefaultLocalizedBrush.strokeColor),
                    strokeWidth: json.IdCaptureOverlay.DefaultLocalizedBrush.strokeWidth,
                },
                defaultRejectedBrush: {
                    fillColor: Color
                        .fromJSON(json.IdCaptureOverlay.DefaultRejectedBrush.fillColor),
                    strokeColor: Color
                        .fromJSON(json.IdCaptureOverlay.DefaultRejectedBrush.strokeColor),
                    strokeWidth: json.IdCaptureOverlay.DefaultRejectedBrush.strokeWidth,
                },
            },
        },
    };
};
//# sourceMappingURL=Defaults.js.map