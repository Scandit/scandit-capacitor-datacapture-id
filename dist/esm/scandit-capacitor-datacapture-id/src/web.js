import { registerPlugin } from '@capacitor/core';
import { getDefaults } from './ts/Capacitor/Capacitor';
import { AAMVABarcodeResult, AamvaVizBarcodeComparisonResult, AamvaVizBarcodeComparisonVerifier, CapturedId, RejectedId, LocalizedOnlyId, DateResult, MRZResult, USUniformedServicesBarcodeResult, VIZResult, ArgentinaIdBarcodeResult, ColombiaIdBarcodeResult, SouthAfricaDlBarcodeResult, SouthAfricaIdBarcodeResult, } from './ts/CapturedId';
import { CapturedResultType, DocumentType, IdImageType, IdDocumentType, SupportedSides, IdLayoutStyle, IdLayoutLineStyle, IdLayout, ComparisonCheckResult, } from './ts/Enums';
import { IdCapture, } from './ts/IdCapture';
import { IdCaptureOverlay, IdCaptureSession, } from './ts/IdCapture+Related';
import { IdCaptureSettings, } from './ts/IdCaptureSettings';
export * from './definitions';
export class ScanditIdPluginImplementation {
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
registerPlugin('ScanditIdPlugin', {
    android: () => new ScanditIdPluginImplementation(),
    ios: () => new ScanditIdPluginImplementation(),
});
// tslint:disable-next-line:variable-name
export const ScanditIdPlugin = new ScanditIdPluginImplementation();
//# sourceMappingURL=web.js.map