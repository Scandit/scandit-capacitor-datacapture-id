import type { ScanditIdCapturePlugin } from './definitions';
export * from './definitions';
export declare class ScanditIdPluginImplementation implements ScanditIdCapturePlugin {
    initialize(): Promise<any>;
}
export declare const ScanditIdPlugin: ScanditIdPluginImplementation;
