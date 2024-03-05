import type { Defaults } from './Defaults';
export declare const Capacitor: {
    pluginName: string;
    defaults: Defaults;
    exec: (success: Function | null, error: Function | null, functionName: string, args: [any] | null) => void;
};
export interface CapacitorWindow extends Window {
    Scandit: any;
    Capacitor: any;
}
export declare enum CapacitorFunction {
    GetDefaults = "getDefaults",
    ResetIdCapture = "resetIdCapture",
    VerifyCapturedId = "verifyCapturedId",
    VerifyCapturedIdAsync = "verifyCapturedIdAsync",
    FinishCallback = "finishCallback",
    CreateContextForBarcodeVerification = "createContextForBarcodeVerification",
    SetModeEnabledState = "setModeEnabledState"
}
export declare const getDefaults: () => Promise<Defaults>;
