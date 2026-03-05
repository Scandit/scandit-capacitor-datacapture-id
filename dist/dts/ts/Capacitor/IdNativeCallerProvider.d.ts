import { IdNativeCallerProvider, IdProxyType } from 'scandit-datacapture-frameworks-id';
import { NativeCaller } from 'scandit-datacapture-frameworks-core';
export declare class CapacitorIdNativeCallerProvider implements IdNativeCallerProvider {
    getNativeCaller(_proxyType: IdProxyType): NativeCaller;
}
