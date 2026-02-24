import { IdDefaults } from 'scandit-datacapture-frameworks-id';
export declare const Capacitor: {
    pluginName: string;
    defaults: IdDefaults;
    exec: (success: Function | null, error: Function | null, functionName: string, args: [
        any
    ] | null) => void;
};
export interface CapacitorWindow extends Window {
    Scandit: any;
    Capacitor: any;
}
export declare enum CapacitorFunction {
    GetDefaults = "getDefaults",
    ResetIdCapture = "resetIdCapture",
    VerifyCapturedIdAsync = "verifyCapturedIdAsync",
    FinishCallback = "finishCallback",
    CreateContextForBarcodeVerification = "createContextForBarcodeVerification",
    SetModeEnabledState = "setModeEnabledState",
    UpdateIdCaptureOverlay = "updateIdCaptureOverlay",
    UpdateIdCaptureMode = "updateIdCaptureMode",
    ApplyIdCaptureModeSettings = "applyIdCaptureModeSettings",
    UpdateIdCaptureFeedback = "updateIdCaptureFeedback"
}
export declare const getDefaults: () => Promise<void>;
