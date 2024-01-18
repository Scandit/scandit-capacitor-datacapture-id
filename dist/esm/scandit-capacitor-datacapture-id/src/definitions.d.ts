export interface ScanditIdCapturePlugin {
    initialize(coreDefaults: any): Promise<any>;
}
declare module Scandit {
 
export class IdCaptureListenerProxy {
    private static cordovaExec;
    private idCapture;
    static forIdCapture(idCapture: IdCapture): IdCaptureListenerProxy;
    private initialize;
    private subscribeListener;
    private notifyListeners;
}

 
export class IdCaptureProxy {
    private static cordovaExec;
    private idCapture;
    static forIdCapture(idCapture: IdCapture): IdCaptureProxy;
    reset(): Promise<void>;
    verifyCapturedId(capturedId: string): Promise<VerificationResult>;
}
export interface VerificationResult {
    data: any | null;
}


export interface DateResultJSON {
    day: number;
    month: number;
    year: number;
}
export interface ProfessionalDrivingPermitJSON {
    dateOfExpiry: DateResultJSON;
    codes: string[];
}
export interface VehicleRestrictionJSON {
    vehicleCode: string;
    vehicleRestriction: string;
    dateOfIssue: DateResultJSON;
}
export interface ImageInfoJSON {
    face: string;
    idFront: string;
    idBack: string;
}
export interface CommonCapturedIdFieldsJSON {
    firstName: string | null;
    lastName: string | null;
    fullName: string;
    sex: string | null;
    dateOfBirth: DateResultJSON | null;
    nationality: string | null;
    address: string | null;
    documentType: string | null;
    documentNumber: string | null;
    issuingCountry: string | null;
    issuingCountryIso: string | null;
    dateOfExpiry: DateResultJSON | null;
    dateOfIssue: DateResultJSON | null;
}
export interface CapturedIdJSON {
    capturedResultType: string;
    capturedResultTypes: string[];
    firstName: string | null;
    lastName: string | null;
    fullName: string;
    sex: string | null;
    dateOfBirth: DateResultJSON | null;
    nationality: string | null;
    address: string | null;
    documentType: string;
    issuingCountryIso: string | null;
    issuingCountry: string | null;
    documentNumber: string | null;
    dateOfExpiry: DateResultJSON | null;
    dateOfIssue: DateResultJSON | null;
    imageInfo: ImageInfoJSON | null;
    aamvaBarcodeResult: AAMVABarcodeResultJSON | null;
    argentinaIdBarcodeResult: ArgentinaIdBarcodeResultJSON | null;
    colombiaIdBarcodeResult: ColombiaIdBarcodeResultJSON | null;
    mrzResult: MRZResultJSON | null;
    southAfricaDlBarcodeResult: SouthAfricaDlBarcodeResultJSON | null;
    southAfricaIdBarcodeResult: SouthAfricaIdBarcodeResultJSON | null;
    usUniformedServicesBarcodeResult: USUniformedServicesBarcodeResultJSON | null;
    vizResult: VIZResultJSON | null;
}
export interface AAMVABarcodeResultJSON {
    aamvaVersion: number;
    aliasFamilyName: string | null;
    aliasGivenName: string | null;
    aliasSuffixName: string | null;
    cardRevisionDate: DateResultJSON | null;
    documentDiscriminatorNumber: string | null;
    driverNamePrefix: string | null;
    driverNameSuffix: string | null;
    endorsementsCode: string | null;
    eyeColor: string | null;
    firstNameTruncation: string | null;
    hairColor: string | null;
    heightCm: number | null;
    heightInch: number | null;
    iin: string;
    issuingJurisdiction: string;
    issuingJurisdictionIso: string;
    jurisdictionVersion: number;
    lastNameTruncation: string | null;
    middleName: string | null;
    middleNameTruncation: string | null;
    placeOfBirth: string | null;
    race: string | null;
    restrictionsCode: string | null;
    vehicleClass: string | null;
    weightKg: number | null;
    weightLbs: number | null;
    dictionary: {
        [key: string]: string;
    };
}
export interface ArgentinaIdBarcodeResultJSON {
    documentCopy: string;
    personalIdNumber: string;
}
export interface ColombiaIdBarcodeResultJSON {
    bloodType: string;
}
export interface MRZResultJSON {
    documentCode: string;
    namesAreTruncated: boolean;
    optional: string | null;
    optional1: string | null;
    capturedMrz: string;
}
export interface SouthAfricaDlBarcodeResultJSON {
    version: number;
    licenseCountryOfIssue: string;
    personalIdNumber: string;
    personalIdNumberType: string;
    documentCopy: number;
    driverRestrictionCodes: number[];
    professionalDrivingPermit: ProfessionalDrivingPermitJSON | null;
    vehicleRestrictions: VehicleRestrictionJSON[];
}
export interface SouthAfricaIdBarcodeResultJSON {
    countryOfBirth: string;
    countryOfBirthIso: string;
    citizenshipStatus: string;
    personalIdNumber: string;
}
export interface USUniformedServicesBarcodeResultJSON {
    bloodType: string | null;
    branchOfService: string;
    champusEffectiveDate: DateResultJSON | null;
    champusExpiryDate: DateResultJSON | null;
    civilianHealthCareFlagCode: string;
    civilianHealthCareFlagDescription: string;
    commissaryFlagCode: string;
    commissaryFlagDescription: string;
    deersDependentSuffixCode: number;
    deersDependentSuffixDescription: string;
    directCareFlagCode: string;
    directCareFlagDescription: string;
    exchangeFlagCode: string;
    exchangeFlagDescription: string;
    eyeColor: string;
    familySequenceNumber: number;
    formNumber: string;
    genevaConventionCategory: string | null;
    hairColor: string;
    height: number;
    jpegData: string;
    mwrFlagCode: string;
    mwrFlagDescription: string;
    payGrade: string | null;
    personDesignatorDocument: number;
    rank: string;
    relationshipCode: string | null;
    relationshipDescription: string | null;
    securityCode: string;
    serviceCode: string;
    sponsorFlag: string;
    sponsorPersonDesignatorIdentifier: number | null;
    sponsorName: string | null;
    statusCode: string;
    statusCodeDescription: string;
    version: number;
    weight: number;
}
export interface VIZResultJSON {
    additionalAddressInformation: string | null;
    additionalNameInformation: string | null;
    documentAdditionalNumber: string | null;
    employer: string | null;
    issuingAuthority: string | null;
    issuingJurisdiction: string;
    issuingJurisdictionIso: string;
    maritalStatus: string | null;
    personalIdNumber: string | null;
    placeOfBirth: string | null;
    profession: string | null;
    race: string | null;
    religion: string | null;
    residentialStatus: string | null;
    capturedSides: string;
    isBackSideCaptureSupported: boolean;
}
export interface LocalizedIdJSON {
    location: QuadrilateralJSON;
}
export interface RejectedIdJSON {
    location: QuadrilateralJSON;
}
export interface IdCaptureErrorJSON {
    type: string;
    message: string;
}
export interface IdCaptureSessionJSON {
    newlyCapturedId: CapturedIdJSON | null;
    localizedOnlyId: LocalizedIdJSON;
    newlyRejectedId: RejectedIdJSON;
    frameSequenceId: number;
    error: IdCaptureErrorJSON;
}
export interface ComparisonCheckJSON {
    checkResult: ComparisonCheckResult;
    resultDescription: string;
}
export interface StringComparisonCheckJSON extends ComparisonCheckJSON {
    vizValue: string | null;
    aamvaBarcodeValue: string | null;
}
export interface DateComparisonCheckJSON extends ComparisonCheckJSON {
    vizValue: DateResultJSON | null;
    aamvaBarcodeValue: DateResultJSON | null;
}
export interface AamvaVizBarcodeComparisonResultJSON {
    checksPassed: boolean;
    resultDescription: string;
    issuingCountryIsoMatch: StringComparisonCheckJSON;
    issuingJurisdictionIsoMatch: StringComparisonCheckJSON;
    documentNumbersMatch: StringComparisonCheckJSON;
    fullNamesMatch: StringComparisonCheckJSON;
    datesOfBirth: DateComparisonCheckJSON;
    datesOfExpiry: DateComparisonCheckJSON;
    datesOfIssue: DateComparisonCheckJSON;
}


interface PrivateCommonCapturedIdFields {
    fromJSON(json: CommonCapturedIdFieldsJSON | null): CommonCapturedIdFields;
}
interface PrivateDateResult {
    fromJSON(json: DateResultJSON | null): DateResult;
}
interface PrivateProfessionalDrivingPermit {
    fromJSON(json: ProfessionalDrivingPermitJSON | null): ProfessionalDrivingPermit;
}
interface PrivateVehicleRestriction {
    fromJSON(json: VehicleRestrictionJSON | null): VehicleRestriction;
}
interface PrivateAAMVABarcodeResult {
    fromJSON(json: AAMVABarcodeResultJSON): AAMVABarcodeResult;
}
interface PrivateArgentinaIdBarcodeResult {
    fromJSON(json: ArgentinaIdBarcodeResultJSON): ArgentinaIdBarcodeResult;
}
interface PrivateColombiaIdBarcodeResult {
    fromJSON(json: ColombiaIdBarcodeResultJSON): ColombiaIdBarcodeResult;
}
interface PrivateMRZResult {
    fromJSON(json: MRZResultJSON): MRZResult;
}
interface PrivateUSUniformedServicesBarcodeResult {
    fromJSON(json: USUniformedServicesBarcodeResultJSON): USUniformedServicesBarcodeResult;
}
interface PrivateVIZResult {
    fromJSON(json: VIZResultJSON): VIZResult;
}
interface PrivateSouthAfricaIdBarcodeResult {
    fromJSON(json: SouthAfricaIdBarcodeResultJSON): SouthAfricaIdBarcodeResult;
}
interface PrivateSouthAfricaDlBarcodeResult {
    fromJSON(json: SouthAfricaDlBarcodeResultJSON): SouthAfricaDlBarcodeResult;
}
interface PrivateCapturedId {
    fromJSON(json: CapturedIdJSON): CapturedId;
}
interface PrivateLocalizedId {
    fromJSON(json: LocalizedIdJSON): LocalizedOnlyId;
}
interface PrivateRejectedId {
    fromJSON(json: RejectedIdJSON): RejectedId;
}
interface PrivateStringComparisonCheck {
    fromJSON(json: StringComparisonCheckJSON): StringComparisonCheck;
}
interface PrivateDateComparisonCheck {
    fromJSON(json: DateComparisonCheckJSON): DateComparisonCheck;
}
interface PrivateAamvaVizBarcodeComparisonResult {
    fromJSON(json: AamvaVizBarcodeComparisonResultJSON): AamvaVizBarcodeComparisonResult;
}
export class DateResult {
    private json;
    get day(): number;
    get month(): number;
    get year(): number;
    private static fromJSON;
}
export class ProfessionalDrivingPermit {
    private json;
    get dateOfExpiry(): DateResult;
    get codes(): string[];
    private static fromJSON;
}
export class VehicleRestriction {
    private json;
    get vehicleCode(): string;
    get vehicleRestriction(): string;
    get dateOfIssue(): DateResult;
    private static fromJSON;
} class CommonCapturedIdFields {
    private json;
    get firstName(): string | null;
    get lastName(): string | null;
    get fullName(): string;
    get sex(): string | null;
    get dateOfBirth(): DateResult | null;
    get nationality(): string | null;
    get address(): string | null;
    get documentType(): string | null;
    get documentNumber(): string | null;
    get issuingCountry(): string | null;
    get issuingCountryIso(): string | null;
    get dateOfExpiry(): DateResult | null;
    get dateOfIssue(): DateResult | null;
    private static fromJSON;
}
export class CapturedId {
    private json;
    private commonCapturedFields;
    get firstName(): string | null;
    get lastName(): string | null;
    get fullName(): string;
    get sex(): string | null;
    get dateOfBirth(): DateResult | null;
    get nationality(): string | null;
    get address(): string | null;
    get capturedResultType(): CapturedResultType;
    get capturedResultTypes(): CapturedResultType[];
    get documentType(): DocumentType;
    get issuingCountryIso(): string | null;
    get issuingCountry(): string | null;
    get documentNumber(): string | null;
    get dateOfExpiry(): DateResult | null;
    get dateOfIssue(): DateResult | null;
    private _aamvaBarcodeResult;
    get aamvaBarcodeResult(): AAMVABarcodeResult | null;
    private _argentinaIdBarcodeResult;
    get argentinaIdBarcodeResult(): ArgentinaIdBarcodeResult | null;
    private _colombiaIdBarcodeResult;
    get colombiaIdBarcodeResult(): ColombiaIdBarcodeResult | null;
    private _mrzResult;
    get mrzResult(): MRZResult | null;
    private _southAfricaIdBarcodeResult;
    get southAfricaIdBarcodeResult(): SouthAfricaIdBarcodeResult | null;
    private _southAfricaDlBarcodeResult;
    get southAfricaDlBarcodeResult(): SouthAfricaDlBarcodeResult | null;
    private _usUniformedServicesBarcodeResult;
    get usUniformedServicesBarcodeResult(): USUniformedServicesBarcodeResult | null;
    private _vizResult;
    get vizResult(): VIZResult | null;
    private static fromJSON;
    idImageOfType(type: IdImageType): string | null;
}
export class AAMVABarcodeResult {
    private json;
    get aamvaVersion(): number;
    get aliasFamilyName(): string | null;
    get aliasGivenName(): string | null;
    get aliasSuffixName(): string | null;
    get driverNamePrefix(): string | null;
    get driverNameSuffix(): string | null;
    get endorsementsCode(): string | null;
    get eyeColor(): string | null;
    get firstNameTruncation(): string | null;
    get hairColor(): string | null;
    get heightCm(): number | null;
    get heightInch(): number | null;
    get iIN(): string;
    get issuingJurisdiction(): string;
    get issuingJurisdictionIso(): string;
    get jurisdictionVersion(): number;
    get lastNameTruncation(): string | null;
    get middleName(): string | null;
    get middleNameTruncation(): string | null;
    get placeOfBirth(): string | null;
    get race(): string | null;
    get restrictionsCode(): string | null;
    get vehicleClass(): string | null;
    get weightKg(): number | null;
    get weightLbs(): number | null;
    get cardRevisionDate(): DateResult | null;
    get documentDiscriminatorNumber(): string | null;
    get barcodeDataElements(): {
        [key: string]: string;
    };
    private static fromJSON;
}
export class MRZResult {
    private json;
    get documentCode(): string;
    get namesAreTruncated(): boolean;
    get optional(): string | null;
    get optional1(): string | null;
    get capturedMrz(): string;
    private static fromJSON;
}
export class USUniformedServicesBarcodeResult {
    private json;
    get bloodType(): string | null;
    get branchOfService(): string;
    get champusEffectiveDate(): DateResult | null;
    get champusExpiryDate(): DateResult | null;
    get civilianHealthCareFlagCode(): string;
    get civilianHealthCareFlagDescription(): string;
    get commissaryFlagCode(): string;
    get commissaryFlagDescription(): string;
    get deersDependentSuffixCode(): number;
    get deersDependentSuffixDescription(): string;
    get directCareFlagCode(): string;
    get directCareFlagDescription(): string;
    get exchangeFlagCode(): string;
    get exchangeFlagDescription(): string;
    get eyeColor(): string;
    get familySequenceNumber(): number;
    get formNumber(): string;
    get genevaConventionCategory(): string | null;
    get hairColor(): string;
    get height(): number;
    get jpegData(): string | null;
    get mwrFlagCode(): string;
    get mwrFlagDescription(): string;
    get payGrade(): string | null;
    get personDesignatorDocument(): number;
    get rank(): string;
    get relationshipCode(): string | null;
    get relationshipDescription(): string | null;
    get securityCode(): string;
    get serviceCode(): string;
    get sponsorFlag(): string;
    get sponsorName(): string | null;
    get sponsorPersonDesignatorIdentifier(): number | null;
    get statusCode(): string;
    get statusCodeDescription(): string;
    get version(): number;
    get weight(): number;
    private static fromJSON;
}
export class VIZResult {
    private json;
    get additionalAddressInformation(): string | null;
    get additionalNameInformation(): string | null;
    get documentAdditionalNumber(): string | null;
    get employer(): string | null;
    get issuingAuthority(): string | null;
    get issuingJurisdiction(): string | null;
    get issuingJurisdictionIso(): string | null;
    get maritalStatus(): string | null;
    get personalIdNumber(): string | null;
    get placeOfBirth(): string | null;
    get profession(): string | null;
    get race(): string | null;
    get religion(): string | null;
    get residentialStatus(): string | null;
    get capturedSides(): SupportedSides;
    get isBackSideCaptureSupported(): boolean;
    private static fromJSON;
}
export class ArgentinaIdBarcodeResult {
    private json;
    get personalIdNumber(): string;
    get documentCopy(): string;
    private static fromJSON;
}
export class ColombiaIdBarcodeResult {
    private json;
    get bloodType(): string;
    private static fromJSON;
}
export class SouthAfricaIdBarcodeResult {
    private json;
    get countryOfBirth(): string;
    get countryOfBirthIso(): string;
    get citizenshipStatus(): string;
    get personalIdNumber(): string;
    private static fromJSON;
}
export class SouthAfricaDlBarcodeResult {
    private json;
    get version(): number;
    get licenseCountryOfIssue(): string;
    get personalIdNumber(): string;
    get personalIdNumberType(): string;
    get documentCopy(): number;
    get driverRestrictionCodes(): number[];
    get professionalDrivingPermit(): ProfessionalDrivingPermit | null;
    get vehicleRestrictions(): VehicleRestriction[];
    private static fromJSON;
}
export class LocalizedOnlyId {
    private _location;
    get location(): Quadrilateral;
    private static fromJSON;
}
export class RejectedId {
    private _location;
    get location(): Quadrilateral;
    private static fromJSON;
}
export interface ComparisonCheck<T> {
    readonly aamvaBarcodeValue: T | null;
    readonly checkResult: ComparisonCheckResult;
    readonly resultDescription: string;
    readonly vizValue: T | null;
} class StringComparisonCheck implements ComparisonCheck<string> {
    private json;
    get vizValue(): string | null;
    get aamvaBarcodeValue(): string | null;
    get checkResult(): ComparisonCheckResult;
    get resultDescription(): string;
    private static fromJSON;
} class DateComparisonCheck implements ComparisonCheck<DateResult> {
    private json;
    get vizValue(): DateResult | null;
    get aamvaBarcodeValue(): DateResult | null;
    get checkResult(): ComparisonCheckResult;
    get resultDescription(): string;
    private static fromJSON;
}
export class AamvaVizBarcodeComparisonResult {
    private json;
    get checksPassed(): boolean;
    get resultDescription(): string;
    get issuingCountryIsoMatch(): ComparisonCheck<string>;
    get issuingJurisdictionIsoMatch(): ComparisonCheck<string>;
    get documentNumbersMatch(): ComparisonCheck<string>;
    get fullNamesMatch(): ComparisonCheck<string>;
    get datesOfBirthMatch(): ComparisonCheck<DateResult>;
    get datesOfExpiryMatch(): ComparisonCheck<DateResult>;
    get datesOfIssueMatch(): ComparisonCheck<DateResult>;
    private static fromJSON;
}
export class AamvaVizBarcodeComparisonVerifier {
    private proxy;
    static create(): AamvaVizBarcodeComparisonVerifier;
    verify(capturedId: CapturedId): Promise<AamvaVizBarcodeComparisonResult>;
}

export enum CapturedResultType {
    AAMVABarcodeResult = "aamvaBarcodeResult",
    ArgentinaIdBarcodeResult = "argentinaIdBarcodeResult",
    ColombiaIdBarcodeResult = "colombiaIdBarcodeResult",
    MRZResult = "mrzResult",
    SouthAfricaDlBarcodeResult = "southAfricaDlBarcodeResult",
    SouthAfricaIdBarcodeResult = "southAfricaIdBarcodeResult",
    USUniformedServicesBarcodeResult = "usUniformedServicesBarcodeResult",
    VIZResult = "vizResult"
}
export enum DocumentType {
    None = "none",
    ConsularId = "consularId",
    DrivingLicense = "drivingLicense",
    DrivingLicensePublicServicesCard = "drivingLicensePublicServicesCard",
    EmploymentPass = "employmentPass",
    FinCard = "finCard",
    Id = "id",
    MultipurposeId = "multipurposeId",
    MyKad = "myKad",
    MyKid = "myKid",
    MyPR = "myPr",
    MyTentera = "myTentera",
    PanCard = "panCard",
    ProfessionalId = "professionalId",
    PublicServicesCard = "publicServicesCard",
    ResidencePermit = "residencePermit",
    ResidentId = "residentId",
    TemporaryResidencePermit = "temporaryResidencePermit",
    VoterId = "voterId",
    WorkPermit = "workPermit",
    IKad = "iKad",
    MilitaryId = "militaryId",
    MyKas = "myKas",
    SocialSecurityCard = "socialSecurityCard",
    HealthInsuranceCard = "healthInsuranceCard",
    Passport = "passport",
    DiplomaticPassport = "diplomaticPassport",
    ServicePassport = "servicePassport",
    TemporaryPassport = "temporaryPassport",
    Visa = "visa",
    SPass = "sPass",
    AddressCard = "addressCard",
    AlienId = "alienId",
    AlienPassport = "alienPassport",
    GreenCard = "greenCard",
    MinorsId = "minorsId",
    PostalId = "postalId",
    ProfessionalDl = "professionalDl",
    TaxId = "taxId",
    WeaponPermit = "weaponPermit",
    BorderCrossingCard = "borderCrossingCard",
    DriverCard = "driverCard",
    GlobalEntryCard = "globalEntryCard",
    MyPolis = "myPolis",
    NexusCard = "nexusCard",
    PassportCard = "passportCard",
    ProofOfAgeCard = "proofOfAgeCard",
    RefugeeId = "refugeeId",
    TribalId = "tribalId",
    VeteranId = "veteranId",
    CitizenshipCertificate = "citizenshipCertificate",
    MyNumberCard = "myNumberCard"
}
export enum IdDocumentType {
    AAMVABarcode = "aamvaBarcode",
    ArgentinaIdBarcode = "argentinaIdBarcode",
    ColombiaIdBarcode = "colombiaIdBarcode",
    DLVIZ = "dlViz",
    IdCardMRZ = "idCardMrz",
    IdCardVIZ = "idCardViz",
    PassportMRZ = "passportMrz",
    SouthAfricaDlBarcode = "southAfricaDlBarcode",
    SouthAfricaIdBarcode = "southAfricaIdBarcode",
    SwissDLMRZ = "swissDlMrz",
    USUSIdBarcode = "usUsIdBarcode",
    VisaMRZ = "visaMrz"
}
export enum SupportedSides {
    FrontOnly = "frontOnly",
    FrontAndBack = "frontAndBack"
}
export enum IdImageType {
    Face = "face",
    IdFront = "idFront",
    IdBack = "idBack"
}
export enum IdLayout {
    TD1 = "td1",
    TD2 = "td2",
    TD3 = "td3",
    MRVa = "mrvA",
    VIZ = "viz",
    PDF417 = "pdf417",
    Auto = "auto",
    None = "none"
}
export enum IdLayoutStyle {
    Rounded = "rounded",
    Square = "square"
}
export enum IdLayoutLineStyle {
    Light = "light",
    Bold = "bold"
}
export enum ComparisonCheckResult {
    Passed = "passed",
    Skipped = "skipped",
    Failed = "failed"
}


interface PrivateIdCaptureSession {
    _error: IdCaptureError | null;
    fromJSON(json: IdCaptureSessionJSON): IdCaptureSession;
}
interface PrivateIdCaptureError {
    fromJSON(json: IdCaptureErrorJSON): IdCaptureError;
}
export class IdCaptureError {
    private _type;
    get type(): string;
    private _message;
    get message(): string;
    private static fromJSON;
}
export class IdCaptureSession {
    private _newlyCapturedId;
    get newlyCapturedId(): CapturedId | null;
    private _frameSequenceId;
    get frameSequenceId(): number;
    private _localizedOnlyId;
    get localizedOnlyId(): LocalizedOnlyId | null;
    private _newlyRejectedId;
    get newlyRejectedId(): RejectedId | null;
    private _error;
    private static fromJSON;
}
export interface IdCaptureListener {
    didCaptureId?(idCapture: IdCapture, session: IdCaptureSession): void;
    didLocalizeId?(idCapture: IdCapture, session: IdCaptureSession): void;
    didRejectId?(idCapture: IdCapture, session: IdCaptureSession): void;
    /**
     * @deprecated This method is no longer executed by the listener.
     * See didRejectId for scenarios previously reported by this callback.
     */
    didFailWithError?(idCapture: IdCapture, error: IdCaptureError, session: IdCaptureSession): void;
}
export class IdCaptureOverlay implements DataCaptureOverlay {
    private type;
    private idCapture;
    private _idLayout;
    private _idLayoutStyle;
    private _defaultCapturedBrush;
    private _defaultLocalizedBrush;
    private _defaultRejectedBrush;
    private _capturedBrush;
    private _localizedBrush;
    private _rejectedBrush;
    private _idLayoutLineStyle;
    static withIdCapture(idCapture: IdCapture): IdCaptureOverlay;
    static withIdCaptureForView(idCapture: IdCapture, view: DataCaptureView | null): IdCaptureOverlay;
    private constructor();
    setIdLayout(idLayout: IdLayout): void;
    get idLayoutStyle(): IdLayoutStyle;
    set idLayoutStyle(style: IdLayoutStyle);
    get idLayoutLineStyle(): IdLayoutLineStyle;
    set idLayoutLineStyle(lineStyle: IdLayoutLineStyle);
    get capturedBrush(): Brush;
    set capturedBrush(brush: Brush);
    get localizedBrush(): Brush;
    set localizedBrush(brush: Brush);
    get rejectedBrush(): Brush;
    set rejectedBrush(brush: Brush);
    get defaultCapturedBrush(): Brush;
    get defaultLocalizedBrush(): Brush;
    get defaultRejectedBrush(): Brush;
}


interface PrivateIdCapture extends PrivateDataCaptureMode {
    _context: DataCaptureContext | null;
    didChange: () => Promise<void>;
}
export class IdCapture implements DataCaptureMode {
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    get context(): DataCaptureContext | null;
    static get recommendedCameraSettings(): CameraSettings;
    private type;
    private _isEnabled;
    private settings;
    private _context;
    private listeners;
    private listenerProxy;
    private proxy;
    private isInListenerCallback;
    static forContext(context: DataCaptureContext | null, settings: IdCaptureSettings): IdCapture;
    addListener(listener: IdCaptureListener): void;
    removeListener(listener: IdCaptureListener): void;
    reset(): Promise<void>;
    private didChange;
}


export class IdCaptureSettings {
    private properties;
    private imageToResult;
    supportedDocuments: IdDocumentType[];
    supportedSides: SupportedSides;
    constructor();
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    setShouldPassImageTypeToResult(type: IdImageType, shouldPass: boolean): void;
    getShouldPassImageTypeToResult(type: IdImageType): boolean;
}


export enum FrameSourceState {
    On = "on",
    Off = "off",
    Starting = "starting",
    Stopping = "stopping",
    Standby = "standby",
    BootingUp = "bootingUp",
    WakingUp = "wakingUp",
    GoingToSleep = "goingToSleep",
    ShuttingDown = "shuttingDown"
}
export enum TorchState {
    On = "on",
    Off = "off",
    Auto = "auto"
}
export enum CameraPosition {
    WorldFacing = "worldFacing",
    UserFacing = "userFacing",
    Unspecified = "unspecified"
}
export enum VideoResolution {
    Auto = "auto",
    HD = "hd",
    FullHD = "fullHd",
    UHD4K = "uhd4k"
}
export enum FocusRange {
    Full = "full",
    Near = "near",
    Far = "far"
}
export enum FocusGestureStrategy {
    None = "none",
    Manual = "manual",
    ManualUntilCapture = "manualUntilCapture",
    AutoOnLocation = "autoOnLocation"
}
export interface FrameSourceListener {
    didChangeState?(frameSource: FrameSource, newState: FrameSourceState): void;
}
export interface FrameSource {
    readonly desiredState: FrameSourceState;
    switchToDesiredState(desiredState: FrameSourceState): Promise<void>;
    getCurrentState(): Promise<FrameSourceState>;
    addListener(listener: FrameSourceListener): void;
    removeListener(listener: FrameSourceListener): void;
}
export interface CameraSettingsJSON {
    preferredResolution: string;
    zoomFactor: number;
    focusRange: string;
    zoomGestureZoomFactor: number;
    focusGestureStrategy: string;
    shouldPreferSmoothAutoFocus: boolean;
    properties: {
        [key: string]: any;
    };
}
interface PrivateCameraSettings {
    fromJSON(json: CameraSettingsJSON): CameraSettings;
}
export class CameraSettings {
    private focusHiddenProperties;
    preferredResolution: VideoResolution;
    zoomFactor: number;
    zoomGestureZoomFactor: number;
    private api;
    private focus;
    get focusRange(): FocusRange;
    set focusRange(newRange: FocusRange);
    get focusGestureStrategy(): FocusGestureStrategy;
    set focusGestureStrategy(newStrategy: FocusGestureStrategy);
    get shouldPreferSmoothAutoFocus(): boolean;
    set shouldPreferSmoothAutoFocus(newShouldPreferSmoothAutoFocus: boolean);
    private static fromJSON;
    constructor();
    constructor(settings: CameraSettings);
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
}
export interface FrameDataJSON {
    imageBuffers: ImageBufferJSON[];
    orientation: number;
}
export interface ImageBufferJSON {
    width: number;
    height: number;
    data: string;
}
interface PrivateImageBuffer {
    _width: number;
    _height: number;
    _data: string;
}
export interface FrameData {
    readonly imageBuffers: ImageBuffer[];
    readonly orientation: number;
}
export class ImageBuffer {
    private _width;
    private _height;
    private _data;
    get width(): number;
    get height(): number;
    get data(): string;
}
class PrivateFrameData implements FrameData {
    private _imageBuffers;
    private _orientation;
    get imageBuffers(): ImageBuffer[];
    get orientation(): number;
    static fromJSON(json: FrameDataJSON): FrameData;
}

 
export class DataCaptureContextProxy {
    private context;
    static forDataCaptureContext(context: DataCaptureContext): DataCaptureContextProxy;
    updateContextFromJSON(): Promise<void>;
    dispose(): void;
    private initialize;
    private initializeContextFromJSON;
    private subscribeListener;
    private notifyListeners;
}


export class DataCaptureViewProxy {
    private view;
    static forDataCaptureView(view: DataCaptureView): DataCaptureViewProxy;
    setPositionAndSize(top: number, left: number, width: number, height: number, shouldBeUnderWebView: boolean): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    viewPointForFramePoint(point: Point): Promise<Point>;
    viewQuadrilateralForFrameQuadrilateral(quadrilateral: Quadrilateral): Promise<Quadrilateral>;
    private subscribeListener;
    unregisterListenerForViewEvents(): void;
    subscribeDidChangeSize(): void;
    private notifyListeners;
    private initialize;
}


export interface PointJSON {
    x: number;
    y: number;
}
interface PrivatePoint {
    fromJSON(json: PointJSON): Point;
}
export class Point {
    private _x;
    private _y;
    get x(): number;
    get y(): number;
    private static fromJSON;
    constructor(x: number, y: number);
}
export interface QuadrilateralJSON {
    topLeft: PointJSON;
    topRight: PointJSON;
    bottomRight: PointJSON;
    bottomLeft: PointJSON;
}
interface PrivateQuadrilateral {
    fromJSON(json: QuadrilateralJSON): Quadrilateral;
}
export class Quadrilateral {
    private _topLeft;
    private _topRight;
    private _bottomRight;
    private _bottomLeft;
    get topLeft(): Point;
    get topRight(): Point;
    get bottomRight(): Point;
    get bottomLeft(): Point;
    private static fromJSON;
    constructor(topLeft: Point, topRight: Point, bottomRight: Point, bottomLeft: Point);
}
export enum MeasureUnit {
    DIP = "dip",
    Pixel = "pixel",
    Fraction = "fraction"
}
export interface NumberWithUnitJSON {
    value: number;
    unit: string;
}
interface PrivateNumberWithUnit {
    fromJSON(json: NumberWithUnitJSON): NumberWithUnit;
}
export class NumberWithUnit {
    private _value;
    private _unit;
    get value(): number;
    get unit(): MeasureUnit;
    private static fromJSON;
    constructor(value: number, unit: MeasureUnit);
}
export interface PointWithUnitJSON {
    x: NumberWithUnitJSON;
    y: NumberWithUnitJSON;
}
interface PrivatePointWithUnit {
    readonly zero: PointWithUnit;
    fromJSON(json: PointWithUnitJSON): PointWithUnit;
}
export class PointWithUnit {
    private _x;
    private _y;
    get x(): NumberWithUnit;
    get y(): NumberWithUnit;
    private static fromJSON;
    private static get zero();
    constructor(x: NumberWithUnit, y: NumberWithUnit);
}
export class Rect {
    private _origin;
    private _size;
    get origin(): Point;
    get size(): Size;
    constructor(origin: Point, size: Size);
}
export class RectWithUnit {
    private _origin;
    private _size;
    get origin(): PointWithUnit;
    get size(): SizeWithUnit;
    constructor(origin: PointWithUnit, size: SizeWithUnit);
}
export class SizeWithUnit {
    private _width;
    private _height;
    get width(): NumberWithUnit;
    get height(): NumberWithUnit;
    constructor(width: NumberWithUnit, height: NumberWithUnit);
}
export interface SizeJSON {
    width: number;
    height: number;
}
export class Size {
    private _width;
    private _height;
    get width(): number;
    get height(): number;
    private static fromJSON;
    constructor(width: number, height: number);
}
export class SizeWithAspect {
    private _size;
    private _aspect;
    get size(): NumberWithUnit;
    get aspect(): number;
    constructor(size: NumberWithUnit, aspect: number);
}
export enum SizingMode {
    WidthAndHeight = "widthAndHeight",
    WidthAndAspectRatio = "widthAndAspectRatio",
    HeightAndAspectRatio = "heightAndAspectRatio",
    ShorterDimensionAndAspectRatio = "shorterDimensionAndAspectRatio"
}
export interface SizeWithUnitAndAspectJSON {
    width?: NumberWithUnitJSON;
    height?: NumberWithUnitJSON;
    shorterDimension?: NumberWithUnitJSON;
    aspect?: number;
}
interface PrivateSizeWithUnitAndAspect {
    fromJSON(json: SizeWithUnitAndAspectJSON): SizeWithUnitAndAspect;
}
export class SizeWithUnitAndAspect {
    private _widthAndHeight;
    private _widthAndAspectRatio;
    private _heightAndAspectRatio;
    private _shorterDimensionAndAspectRatio;
    get widthAndHeight(): Optional<SizeWithUnit>;
    get widthAndAspectRatio(): Optional<SizeWithAspect>;
    get heightAndAspectRatio(): Optional<SizeWithAspect>;
    get shorterDimensionAndAspectRatio(): SizeWithAspect | null;
    get sizingMode(): SizingMode;
    private static sizeWithWidthAndHeight;
    private static sizeWithWidthAndAspectRatio;
    private static sizeWithHeightAndAspectRatio;
    private static sizeWithShorterDimensionAndAspectRatio;
    private static fromJSON;
    toJSON(): object;
}
export interface MarginsWithUnitJSON {
    left: NumberWithUnitJSON;
    right: NumberWithUnitJSON;
    top: NumberWithUnitJSON;
    bottom: NumberWithUnitJSON;
}
interface PrivateMarginsWithUnit {
    readonly zero: MarginsWithUnit;
    fromJSON(json: MarginsWithUnitJSON): MarginsWithUnit;
}
export class MarginsWithUnit {
    private _left;
    private _right;
    private _top;
    private _bottom;
    get left(): NumberWithUnit;
    get right(): NumberWithUnit;
    get top(): NumberWithUnit;
    get bottom(): NumberWithUnit;
    private static fromJSON;
    private static get zero();
    constructor(left: NumberWithUnit, right: NumberWithUnit, top: NumberWithUnit, bottom: NumberWithUnit);
}
type ColorJSON = string;
interface PrivateColor {
    fromJSON(json: ColorJSON): Color;
}
export class Color {
    private hexadecimalString;
    get redComponent(): string;
    get greenComponent(): string;
    get blueComponent(): string;
    get alphaComponent(): string;
    get red(): number;
    get green(): number;
    get blue(): number;
    get alpha(): number;
    static fromHex(hex: string): Color;
    static fromRGBA(red: number, green: number, blue: number, alpha?: number): Color;
    private static hexToNumber;
    private static fromJSON;
    private static numberToHex;
    private static normalizeHex;
    private static normalizeAlpha;
    private constructor();
    withAlpha(alpha: number): Color;
    toJSON(): string;
}
export enum Orientation {
    Unknown = "unknown",
    Portrait = "portrait",
    PortraitUpsideDown = "portraitUpsideDown",
    LandscapeRight = "landscapeRight",
    LandscapeLeft = "landscapeLeft"
}
export enum Direction {
    None = "none",
    Horizontal = "horizontal",
    LeftToRight = "leftToRight",
    RightToLeft = "rightToLeft",
    Vertical = "vertical",
    TopToBottom = "topToBottom",
    BottomToTop = "bottomToTop"
}


export interface DataCaptureContextListener {
    didChangeStatus?(context: DataCaptureContext, contextStatus: ContextStatus): void;
    didStartObservingContext?(context: DataCaptureContext): void;
}
interface ContextStatusJSON {
    code: number;
    isValid: boolean;
    message: string;
}
interface PrivateContextStatus {
    fromJSON(json: ContextStatusJSON): ContextStatus;
}
export class ContextStatus {
    private _message;
    private _code;
    private _isValid;
    private static fromJSON;
    get message(): string;
    get code(): number;
    get isValid(): boolean;
}


interface PrivateDataCaptureMode {
    _context: Optional<DataCaptureContext>;
}
export interface DataCaptureMode {
    isEnabled: boolean;
    readonly context: Optional<DataCaptureContext>;
}
interface PrivateDataCaptureComponent {
    _context: DataCaptureContext;
}
export interface DataCaptureComponent {
    readonly id: string;
}
interface PrivateDataCaptureContext {
    proxy: DataCaptureContextProxy;
    modes: [DataCaptureMode];
    components: [DataCaptureComponent];
    initialize: () => void;
    update: () => Promise<void>;
    addComponent: (component: DataCaptureComponent) => Promise<void>;
}
export interface DataCaptureContextCreationOptions {
    deviceName?: Optional<string>;
}
export class DataCaptureContextSettings {
    constructor();
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
}
export class DataCaptureContext {
    private licenseKey;
    private deviceName;
    private framework;
    private frameworkVersion;
    private settings;
    private _frameSource;
    private view;
    private modes;
    private components;
    private proxy;
    private listeners;
    get frameSource(): Optional<FrameSource>;
    static get deviceID(): Optional<string>;
    static forLicenseKey(licenseKey: string): DataCaptureContext;
    static forLicenseKeyWithSettings(licenseKey: string, settings: DataCaptureContextSettings | null): DataCaptureContext;
    static forLicenseKeyWithOptions(licenseKey: string, options: Optional<DataCaptureContextCreationOptions>): DataCaptureContext;
    private constructor();
    setFrameSource(frameSource: Optional<FrameSource>): Promise<void>;
    addListener(listener: DataCaptureContextListener): void;
    removeListener(listener: DataCaptureContextListener): void;
    addMode(mode: DataCaptureMode): void;
    removeMode(mode: DataCaptureMode): void;
    removeAllModes(): void;
    dispose(): void;
    applySettings(settings: DataCaptureContextSettings): Promise<void>;
    private initialize;
    private update;
    private addComponent;
}


export interface FocusGesture {
}
export interface FocusGestureJSON {
    type: string;
}
class PrivateFocusGestureDeserializer {
    static fromJSON(json: FocusGestureJSON | null): FocusGesture | null;
}
export class TapToFocus implements FocusGesture {
    private type;
    constructor();
}
export interface ZoomGesture {
}
export interface ZoomGestureJSON {
    type: string;
}
class PrivateZoomGestureDeserializer {
    static fromJSON(json: ZoomGestureJSON | null): ZoomGesture | null;
}
export class SwipeToZoom implements ZoomGesture {
    private type;
    constructor();
}
export enum LogoStyle {
    Minimal = "minimal",
    Extended = "extended"
}


export interface DataCaptureOverlay {
}
export interface Control {
}
export class TorchSwitchControl implements Control {
    private type;
    private icon;
    private view;
    get torchOffImage(): string | null;
    set torchOffImage(torchOffImage: string | null);
    get torchOffPressedImage(): string | null;
    set torchOffPressedImage(torchOffPressedImage: string | null);
    get torchOnImage(): string | null;
    set torchOnImage(torchOnImage: string | null);
    get torchOnPressedImage(): string | null;
    set torchOnPressedImage(torchOnPressedImage: string | null);
}
export class ZoomSwitchControl implements Control {
    private type;
    private icon;
    private view;
    get zoomedOutImage(): string | null;
    set zoomedOutImage(zoomedOutImage: string | null);
    get zoomedInImage(): string | null;
    set zoomedInImage(zoomedInImage: string | null);
    get zoomedInPressedImage(): string | null;
    set zoomedInPressedImage(zoomedInPressedImage: string | null);
    get zoomedOutPressedImage(): string | null;
    set zoomedOutPressedImage(zoomedOutPressedImage: string | null);
}
export interface DataCaptureViewListener {
    didChangeSize?(view: DataCaptureView, size: Size, orientation: Orientation): void;
}
export enum Anchor {
    TopLeft = "topLeft",
    TopCenter = "topCenter",
    TopRight = "topRight",
    CenterLeft = "centerLeft",
    Center = "center",
    CenterRight = "centerRight",
    BottomLeft = "bottomLeft",
    BottomCenter = "bottomCenter",
    BottomRight = "bottomRight"
}
export class HTMLElementState {
    isShown: boolean;
    position: Optional<{
        top: number;
        left: number;
    }>;
    size: Optional<{
        width: number;
        height: number;
    }>;
    shouldBeUnderContent: boolean;
    get isValid(): boolean;
    didChangeComparedTo(other: HTMLElementState): boolean;
}
interface PrivateDataCaptureView {
    htmlElement: Optional<HTMLElement>;
    _htmlElementState: HTMLElementState;
    htmlElementState: HTMLElementState;
    readonly viewProxy: DataCaptureViewProxy;
    _viewProxy: DataCaptureViewProxy;
    overlays: DataCaptureOverlay[];
    controls: Control[];
    listeners: DataCaptureViewListener[];
    addControl(control: Control): void;
    removeControl(control: Control): void;
    initialize(): void;
    updatePositionAndSize(): void;
    _show(): void;
    _hide(): void;
    elementDidChange(): void;
    subscribeToChangesOnHTMLElement(): void;
    controlUpdated(): void;
}
export class DataCaptureView {
    private _context;
    get context(): Optional<DataCaptureContext>;
    set context(context: Optional<DataCaptureContext>);
    scanAreaMargins: MarginsWithUnit;
    pointOfInterest: PointWithUnit;
    logoAnchor: Anchor;
    logoOffset: PointWithUnit;
    focusGesture: FocusGesture | null;
    zoomGesture: ZoomGesture | null;
    logoStyle: LogoStyle;
    private overlays;
    private controls;
    private _viewProxy;
    private get viewProxy();
    private listeners;
    private htmlElement;
    private _htmlElementState;
    private set htmlElementState(value);
    private get htmlElementState();
    private scrollListener;
    private domObserver;
    private orientationChangeListener;
    /**
     * The current context as a PrivateDataCaptureContext
     */
    private get privateContext();
    static forContext(context: Optional<DataCaptureContext>): DataCaptureView;
    constructor();
    connectToElement(element: HTMLElement): void;
    detachFromElement(): void;
    setFrame(frame: Rect, isUnderContent?: boolean): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    addOverlay(overlay: DataCaptureOverlay): void;
    removeOverlay(overlay: DataCaptureOverlay): void;
    addListener(listener: DataCaptureViewListener): void;
    removeListener(listener: DataCaptureViewListener): void;
    viewPointForFramePoint(point: Point): Promise<Point>;
    viewQuadrilateralForFrameQuadrilateral(quadrilateral: Quadrilateral): Promise<Quadrilateral>;
    addControl(control: Control): void;
    removeControl(control: Control): void;
    private controlUpdated;
    private initialize;
    private subscribeToChangesOnHTMLElement;
    private unsubscribeFromChangesOnHTMLElement;
    private elementDidChange;
    private updatePositionAndSize;
    private _show;
    private _hide;
}

export interface Serializeable {
    toJSON: () => object;
}
export interface StringSerializeable {
    toJSON: () => string;
}
export function ignoreFromSerialization(target: any, propertyName: string): void;
export function nameForSerialization(customName: string): (target: any, propertyName: string) => void;
export function ignoreFromSerializationIfNull(target: any, propertyName: string): void;
export function serializationDefault(defaultValue: any): (target: any, propertyName: string) => void;
export class DefaultSerializeable {
    toJSON(): object;
}


export enum RectangularViewfinderStyle {
    Legacy = "legacy",
    Rounded = "rounded",
    Square = "square"
}
export enum RectangularViewfinderLineStyle {
    Light = "light",
    Bold = "bold"
}
export enum LaserlineViewfinderStyle {
    Legacy = "legacy",
    Animated = "animated"
}
interface RectangularViewfinderAnimationJSON {
    readonly looping: boolean;
}
interface PrivateRectangularViewfinderAnimation {
    fromJSON(json: RectangularViewfinderAnimationJSON): RectangularViewfinderAnimation;
}
export class RectangularViewfinderAnimation {
    private readonly _isLooping;
    private static fromJSON;
    get isLooping(): boolean;
    constructor(isLooping: boolean);
}


interface PrivateBrush {
    toJSON(): BrushJSON;
}
export interface BrushJSON {
    fill: {
        color: Color;
    };
    stroke: {
        color: Color;
        width: number;
    };
}
export class Brush {
    private fill;
    private stroke;
    static get transparent(): Brush;
    get fillColor(): Color;
    get strokeColor(): Color;
    get strokeWidth(): number;
    constructor();
    constructor(fillColor: Color, strokeColor: Color, strokeWidth: number);
}
export interface Viewfinder {
}
export const NoViewfinder: {
    type: string;
};
export class LaserlineViewfinder implements Viewfinder {
    private type;
    private readonly _style;
    width: NumberWithUnit;
    enabledColor: Color;
    disabledColor: Color;
    constructor();
    constructor(style: LaserlineViewfinderStyle);
    get style(): LaserlineViewfinderStyle;
}
export class RectangularViewfinder implements Viewfinder {
    private type;
    private readonly _style;
    private readonly _lineStyle;
    private _dimming;
    private _disabledDimming;
    private _animation;
    private _sizeWithUnitAndAspect;
    color: Color;
    get sizeWithUnitAndAspect(): SizeWithUnitAndAspect;
    constructor();
    constructor(style: RectangularViewfinderStyle);
    constructor(style: RectangularViewfinderStyle, lineStyle: RectangularViewfinderLineStyle);
    get style(): RectangularViewfinderStyle;
    get lineStyle(): RectangularViewfinderLineStyle;
    get dimming(): number;
    set dimming(value: number);
    get disabledDimming(): number;
    set disabledDimming(value: number);
    get animation(): RectangularViewfinderAnimation | null;
    set animation(animation: RectangularViewfinderAnimation | null);
    setSize(size: SizeWithUnit): void;
    setWidthAndAspectRatio(width: NumberWithUnit, heightToWidthAspectRatio: number): void;
    setHeightAndAspectRatio(height: NumberWithUnit, widthToHeightAspectRatio: number): void;
    setShorterDimensionAndAspectRatio(fraction: number, aspectRatio: number): void;
}
export class AimerViewfinder implements Viewfinder {
    private type;
    frameColor: Color;
    dotColor: Color;
    constructor();
}

}
