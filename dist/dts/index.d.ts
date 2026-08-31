export { AamvaBarcodeVerificationResult, AamvaBarcodeVerificationStatus, BarcodeResult, CapturedId, CapturedSides, DataConsistencyCheck, DataConsistencyResult, DateResult, DriverLicense, DrivingLicenseCategory, DrivingLicenseDetails, Duration, FullDocumentScanner, HealthInsuranceCard, IdAnonymizationMode, IdCapture, IdCaptureDocument, IdCaptureDocumentType, IdCaptureFeedback, IdCaptureListener, IdCaptureOverlay, IdCaptureRegion, IdCaptureScanner, IdCaptureSettings, IdCard, IdFieldType, IdImageType, IdImages, IdLayoutLineStyle, IdLayoutStyle, IdSide, MRZResult, MobileDocumentDataElement, MobileDocumentOCRResult, MobileDocumentResult, MobileDocumentScanner, Passport, PhysicalDocumentScanner, ProfessionalDrivingPermit, RegionSpecific, RegionSpecificSubtype, RejectionReason, ResidencePermit, Sex, SingleSideScanner, TextHintPosition, UsRealIdStatus, VIZResult, VehicleRestriction, VerificationResult, VisaIcao } from './id';

interface ScanditIdCapturePluginInterface {
    initialize(coreDefaults: any): Promise<any>;
}



declare class ScanditIdPluginImplementation implements ScanditIdCapturePluginInterface {
    initialize(coreDefaults: any): Promise<any>;
}
declare const ScanditIdPlugin: ScanditIdPluginImplementation;

export { ScanditIdPlugin, ScanditIdPluginImplementation };
export type { ScanditIdCapturePluginInterface };
