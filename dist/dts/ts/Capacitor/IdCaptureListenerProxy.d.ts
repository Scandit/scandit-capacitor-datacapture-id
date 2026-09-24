import { IdCaptureListenerProxy } from 'scandit-datacapture-frameworks-id';
export declare class NativeIdCaptureListenerProxy implements IdCaptureListenerProxy {
    private eventEmitter;
    private didCaptureEventListener;
    private didRejectListener;
    isModeEnabled: () => boolean;
    constructor();
    subscribeDidCaptureListener(): Promise<void>;
    subscribeDidRejectListener(): Promise<void>;
    finishDidCaptureCallback(isEnabled: boolean): void;
    finishDidRejectCallback(isEnabled: boolean): void;
    unregisterListenerForEvents(): void;
    private notifyListeners;
}
