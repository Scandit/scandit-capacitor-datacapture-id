import { WebPlugin, registerWebPlugin } from '@capacitor/core';
import { getDefaults } from './ts/Capacitor/Capacitor';
import { AAMVABarcodeResult, AamvaVizBarcodeComparisonResult, AamvaVizBarcodeComparisonVerifier, CapturedId, RejectedId, LocalizedOnlyId, DateResult, MRZResult, USUniformedServicesBarcodeResult, VIZResult, ArgentinaIdBarcodeResult, ColombiaIdBarcodeResult, SouthAfricaDlBarcodeResult, SouthAfricaIdBarcodeResult, } from './ts/CapturedId';
import { CapturedResultType, DocumentType, IdImageType, IdDocumentType, SupportedSides, IdLayoutStyle, IdLayoutLineStyle, IdLayout, ComparisonCheckResult, } from './ts/Enums';
import { IdCapture, } from './ts/IdCapture';
import { IdCaptureOverlay, IdCaptureSession, } from './ts/IdCapture+Related';
import { IdCaptureSettings, } from './ts/IdCaptureSettings';
export class ScanditIdPlugin extends WebPlugin {
    constructor() {
        super({
            name: 'ScanditIdPlugin',
            platforms: ['android', 'ios'],
        });
    }
    async initialize() {
        const api = {
            IdCapture,
            IdCaptureOverlay,
            IdCaptureSession,
            IdCaptureSettings,
            CapturedResultType,
            DocumentType,
            IdImageType,
            IdDocumentType,
            SupportedSides,
            IdLayoutStyle,
            IdLayoutLineStyle,
            IdLayout,
            ComparisonCheckResult,
            AAMVABarcodeResult,
            AamvaVizBarcodeComparisonResult,
            AamvaVizBarcodeComparisonVerifier,
            CapturedId,
            RejectedId,
            LocalizedOnlyId,
            DateResult,
            MRZResult,
            USUniformedServicesBarcodeResult,
            VIZResult,
            ArgentinaIdBarcodeResult,
            ColombiaIdBarcodeResult,
            SouthAfricaDlBarcodeResult,
            SouthAfricaIdBarcodeResult,
        };
        return new Promise((resolve, reject) => getDefaults.then(() => {
            resolve(api);
        }, reject));
    }
}
const scanditId = new ScanditIdPlugin();
export { scanditId };
registerWebPlugin(scanditId);
//# sourceMappingURL=web.js.map