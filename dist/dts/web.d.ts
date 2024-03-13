import type { ScanditIdCapturePluginInterface } from './definitions';
export * from './definitions';
export declare class ScanditIdPluginImplementation implements ScanditIdCapturePluginInterface {
    initialize(coreDefaults: any): Promise<any>;
}
export declare const ScanditIdPlugin: ScanditIdPluginImplementation;
