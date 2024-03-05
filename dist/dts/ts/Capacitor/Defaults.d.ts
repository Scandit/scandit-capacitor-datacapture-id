import { CameraSettings } from 'scandit-datacapture-frameworks-core';
import type { CameraSettingsJSON } from 'scandit-datacapture-frameworks-core';
import { Color } from 'scandit-datacapture-frameworks-core';
import { IdAnonymizationMode } from 'scandit-datacapture-frameworks-id';
export interface IdCaptureOverlayJSON {
    DefaultCapturedBrush: {
        fillColor: string;
        strokeColor: string;
        strokeWidth: number;
    };
    DefaultLocalizedBrush: {
        fillColor: string;
        strokeColor: string;
        strokeWidth: number;
    };
    DefaultRejectedBrush: {
        fillColor: string;
        strokeColor: string;
        strokeWidth: number;
    };
}
export interface IdCaptureOverlayDefaults {
    defaultCapturedBrush: {
        fillColor: Color;
        strokeColor: Color;
        strokeWidth: number;
    };
    defaultLocalizedBrush: {
        fillColor: Color;
        strokeColor: Color;
        strokeWidth: number;
    };
    defaultRejectedBrush: {
        fillColor: Color;
        strokeColor: Color;
        strokeWidth: number;
    };
}
export interface Defaults {
    IdCapture: {
        RecommendedCameraSettings: CameraSettings;
        IdCaptureOverlayDefaults: IdCaptureOverlayDefaults;
    };
}
export interface IdCaptureSettingsJSON {
    anonymizationMode: IdAnonymizationMode;
}
export interface DefaultsJSON {
    RecommendedCameraSettings: CameraSettingsJSON;
    IdCaptureOverlay: IdCaptureOverlayJSON;
    IdCaptureSettings: IdCaptureSettingsJSON;
}
export declare const defaultsFromJSON: (json: DefaultsJSON) => Defaults;
