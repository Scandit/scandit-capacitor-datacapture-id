import { NativeCallResult } from 'scandit-datacapture-frameworks-core';
import { IdCaptureProxy } from 'scandit-datacapture-frameworks-id';
export declare class NativeIdCaptureProxy implements IdCaptureProxy {
    createContextForBarcodeVerification(contextJSON: string): Promise<void>;
    resetMode(): Promise<void>;
    verifyCapturedIdAsync(capturedId: string): Promise<NativeCallResult>;
    updateIdCaptureMode(modeJson: string): Promise<void>;
    applyIdCaptureModeSettings(newSettingsJson: string): Promise<void>;
    updateIdCaptureOverlay(overlayJson: string): Promise<void>;
    setModeEnabledState(enabled: boolean): void;
    updateFeedback(feedbackJson: string): Promise<void>;
}
