import { WebPlugin } from '@capacitor/core';
import type { ScanditIdCapturePlugin } from './definitions';
export declare class ScanditIdPlugin extends WebPlugin implements ScanditIdCapturePlugin {
    constructor();
    initialize(): Promise<any>;
}
declare const scanditId: ScanditIdPlugin;
export { scanditId };
