export { DateResult, IdAnonymizationMode, IdImageType, CapturedSides, TextHintPosition, BarcodeResult, Duration } from 'scandit-datacapture-frameworks-id';
export { AamvaBarcodeVerificationResult, AamvaBarcodeVerificationStatus, AamvaBarcodeVerifier, CapturedId, MRZResult, ProfessionalDrivingPermit, VehicleRestriction, VIZResult } from 'scandit-datacapture-frameworks-id';
export { IdCapture, IdCaptureFeedback, IdCaptureListener, IdCaptureOverlay, IdCaptureSettings, IdLayoutLineStyle, IdLayoutStyle, RejectionReason } from 'scandit-datacapture-frameworks-id';
export { IdCaptureDocumentType, DriverLicense, HealthInsuranceCard, IdCaptureDocument, IdCard, Passport, RegionSpecific, ResidencePermit, VisaIcao } from 'scandit-datacapture-frameworks-id';
export { IdCaptureScanner, SingleSideScanner, FullDocumentScanner, IdCaptureRegion, RegionSpecificSubtype, IdImages, IdSide } from 'scandit-datacapture-frameworks-id';
export interface ScanditIdCapturePluginInterface {
    initialize(coreDefaults: any): Promise<any>;
}
