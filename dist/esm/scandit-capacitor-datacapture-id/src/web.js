import { registerPlugin } from '@capacitor/core';
import { Capacitor as CapacitorCore } from '../../scandit-capacitor-datacapture-core/src/ts/Capacitor/Capacitor';
import { getDefaults, Capacitor as CapacitorId } from './ts/Capacitor/Capacitor';
import { AAMVABarcodeResult, AamvaVizBarcodeComparisonResult, AamvaVizBarcodeComparisonVerifier, CapturedId, RejectedId, LocalizedOnlyId, DateResult, MRZResult, USUniformedServicesBarcodeResult, VIZResult, ArgentinaIdBarcodeResult, ColombiaIdBarcodeResult, SouthAfricaDlBarcodeResult, SouthAfricaIdBarcodeResult, } from './ts/CapturedId';
import { CapturedResultType, DocumentType, IdImageType, IdDocumentType, SupportedSides, IdLayoutStyle, IdLayoutLineStyle, IdLayout, ComparisonCheckResult, } from './ts/Enums';
import { IdCapture, } from './ts/IdCapture';
import { IdCaptureOverlay, IdCaptureSession, } from './ts/IdCapture+Related';
import { IdCaptureSettings, } from './ts/IdCaptureSettings';
export * from './definitions';
export class ScanditIdPluginImplementation {
    async initialize(coreDefaults) {
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
        CapacitorCore.defaults = coreDefaults;
        const idDefaults = await getDefaults();
        CapacitorId.defaults = idDefaults;
        return api;
    }
}
registerPlugin('ScanditIdPlugin', {
    android: () => new ScanditIdPluginImplementation(),
    ios: () => new ScanditIdPluginImplementation(),
    web: () => new ScanditIdPluginImplementation(),
});
// tslint:disable-next-line:variable-name
export const ScanditIdPlugin = new ScanditIdPluginImplementation();
//# sourceMappingURL=web.js.map