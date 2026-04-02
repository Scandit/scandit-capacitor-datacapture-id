import { IdCaptureListenerProxy } from 'scandit-datacapture-frameworks-id';
export declare class NativeIdCaptureListenerProxy implements IdCaptureListenerProxy {
    private eventEmitter;
    private didCaptureEventListener;
    private didLocalizeEventListener;
    private didRejectListener;
    private didTimeoutListener;
    isModeEnabled: () => boolean;
    constructor();
    subscribeDidCaptureListener(): Promise<void>;
    subscribeDidLocalizeListener(): Promise<void>;
    subscribeDidRejectListener(): Promise<void>;
    subscribeDidTimeOutListener(): Promise<void>;
    finishDidCaptureCallback(isEnabled: boolean): void;
    finishDidLocalizeCallback(isEnabled: boolean): void;
    finishDidRejectCallback(isEnabled: boolean): void;
    finishDidTimeOutCallback(isEnabled: boolean): void;
    unregisterListenerForEvents(): void;
    private emitInCallback;
    private notifyListeners;
}
