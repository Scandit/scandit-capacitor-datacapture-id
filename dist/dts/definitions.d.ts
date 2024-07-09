export { ComparisonCheck, ComparisonCheckResult, DateResult, IdAnonymizationMode, IdDocumentType, IdImageType, LocalizedOnlyId, RejectedId, SupportedSides } from 'scandit-datacapture-frameworks-id';
export { AAMVABarcodeResult, AamvaBarcodeVerificationResult, AamvaBarcodeVerifier, AamvaVizBarcodeComparisonResult, AamvaVizBarcodeComparisonVerifier, ApecBusinessTravelCardMrzResult, ArgentinaIdBarcodeResult, CapturedId, CapturedResultType, ChinaExitEntryPermitMRZResult, ChinaMainlandTravelPermitMRZResult, ChinaOneWayPermitBackMrzResult, ChinaOneWayPermitFrontMrzResult, ColombiaDlBarcodeResult, ColombiaIdBarcodeResult, CommonAccessCardBarcodeResult, DocumentType, MRZResult, ProfessionalDrivingPermit, SouthAfricaDlBarcodeResult, SouthAfricaIdBarcodeResult, USUniformedServicesBarcodeResult, USVisaVIZResult, VehicleRestriction, VIZResult } from 'scandit-datacapture-frameworks-id';
export { IdCapture, IdCaptureError, IdCaptureFeedback, IdCaptureListener, IdCaptureOverlay, IdCaptureSession, IdCaptureSettings, IdLayout, IdLayoutLineStyle, IdLayoutStyle } from 'scandit-datacapture-frameworks-id';
export interface ScanditIdCapturePluginInterface {
    initialize(coreDefaults: any): Promise<any>;
}
