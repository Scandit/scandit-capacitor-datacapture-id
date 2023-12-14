import { CameraSettings } from '../../../../scandit-capacitor-datacapture-core/src/ts/Camera+Related';
import type { CameraSettingsDefaultsJSON, IdCaptureOverlayDefaults, IdCaptureOverlayDefaultsJSON } from '../../../../scandit-capacitor-datacapture-core/src/ts/Capacitor/Defaults';
export interface Defaults {
    IdCapture: {
        RecommendedCameraSettings: CameraSettings;
        IdCaptureOverlayDefaults: IdCaptureOverlayDefaults;
    };
}
export interface DefaultsJSON {
    RecommendedCameraSettings: CameraSettingsDefaultsJSON;
    IdCaptureOverlay: IdCaptureOverlayDefaultsJSON;
}
export declare const defaultsFromJSON: (json: DefaultsJSON) => Defaults;
