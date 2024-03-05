import { IdCaptureProxy } from 'scandit-datacapture-frameworks-id';
export declare class NativeIdCaptureProxy implements IdCaptureProxy {
    createContextForBarcodeVerification(contextJSON: string): Promise<void>;
    resetMode(): Promise<void>;
    verifyCapturedId(capturedId: string): Promise<string | null>;
    verifyCapturedIdAsync(capturedId: string): Promise<string | null>;
    setModeEnabledState(enabled: boolean): void;
}
export interface VerificationResult {
    data: any | null;
}
