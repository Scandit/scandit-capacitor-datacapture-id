import { CameraSettings } from '../../../../scandit-capacitor-datacapture-core/src/ts/Camera+Related';
import { CameraSettingsDefaultsJSON, IdCaptureOverlayDefaults, IdCaptureOverlayDefaultsJSON } from '../../../../scandit-capacitor-datacapture-core/src/ts/Capacitor/Defaults';
export interface Defaults {
    IdCapture: {
        RecommendedCameraSettings: CameraSettings;
        IdCaptureOverlayDefaults: IdCaptureOverlayDefaults;
    };
}
export interface DefaultsJSON {
    IdCapture: {
        RecommendedCameraSettings: CameraSettingsDefaultsJSON;
        IdCaptureOverlayDefaults: IdCaptureOverlayDefaultsJSON;
    };
}
export declare const defaultsFromJSON: (json: DefaultsJSON) => Defaults;
