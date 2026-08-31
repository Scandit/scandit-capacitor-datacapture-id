import { DefaultSerializeable, Feedback, Sound, Color, CameraSettings, DataCaptureMode, DataCaptureContext, PrivateDataCaptureMode, BaseProxy, BaseController, DataCaptureOverlay, Brush, NativeCallerProvider } from 'scandit-capacitor-datacapture-core/dist/dts/core';

declare enum IdAnonymizationMode {
    None = "none",
    FieldsOnly = "fieldsOnly",
    ImagesOnly = "imagesOnly",
    FieldsAndImages = "fieldsAndImages"
}

interface DurationJSON {
    days: number;
    months: number;
    years: number;
}
interface PrivateDuration {
    fromJSON(json: DurationJSON): Duration;
}
declare class Duration extends DefaultSerializeable {
    private _days;
    private _months;
    private _years;
    get days(): number;
    get months(): number;
    get years(): number;
    private static fromJSON;
    constructor(days: number, months: number, years: number);
}

declare enum IdLayoutStyle {
    Rounded = "rounded",
    Square = "square"
}

declare enum IdLayoutLineStyle {
    Light = "light",
    Bold = "bold"
}

interface IdDefaults {
    IdCapture: {
        Feedback: {
            idCaptured: Feedback;
            idRejected: Feedback;
        };
        DefaultSuccessSound: Sound;
        DefaultFailureSound: Sound;
        IdCaptureOverlayDefaults: {
            defaultCapturedBrush: {
                fillColor: Color;
                strokeColor: Color;
                strokeWidth: number;
            };
            defaultLocalizedBrush: {
                fillColor: Color;
                strokeColor: Color;
                strokeWidth: number;
            };
            defaultRejectedBrush: {
                fillColor: Color;
                strokeColor: Color;
                strokeWidth: number;
            };
            defaultIdLayoutStyle: IdLayoutStyle;
            defaultIdLayoutLineStyle: IdLayoutLineStyle;
        };
        RecommendedCameraSettings: CameraSettings;
        IdCaptureSettings: {
            anonymizationMode: IdAnonymizationMode;
            anonymizeDefaultFields: boolean;
            rejectVoidedIds: boolean;
            decodeBackOfEuropeanDrivingLicense: boolean;
            rejectExpiredIds: boolean;
            rejectIdsExpiringIn: Duration | null;
            rejectNotRealIdCompliant: boolean;
            rejectForgedAamvaBarcodes: boolean;
            rejectInconsistentData: boolean;
            rejectHolderBelowAge: number | null;
        };
    };
}
declare function parseIdDefaults(jsonDefaults: any): IdDefaults;

declare function getIdDefaults(): IdDefaults;

declare enum IdCaptureDocumentType {
    IdCard = "idCard",
    DriverLicense = "driverLicense",
    Passport = "passport",
    VisaIcao = "visaIcao",
    RegionSpecific = "regionSpecific",
    ResidencePermit = "residencePermit",
    HealthInsuranceCard = "healthInsuranceCard"
}

declare enum IdCaptureRegion {
    Any = "any",
    EuAndSchengen = "euAndSchengen",
    Aruba = "aruba",
    Afghanistan = "afghanistan",
    Angola = "angola",
    Anguilla = "anguilla",
    AlandIslands = "alandIslands",
    Albania = "albania",
    Andorra = "andorra",
    Uae = "uae",
    Argentina = "argentina",
    Armenia = "armenia",
    AmericanSamoa = "americanSamoa",
    Antarctica = "antarctica",
    FrenchSouthernTerritories = "frenchSouthernTerritories",
    AntiguaAndBarbuda = "antiguaAndBarbuda",
    Australia = "australia",
    Austria = "austria",
    Azerbaijan = "azerbaijan",
    Burundi = "burundi",
    Belgium = "belgium",
    Benin = "benin",
    BonaireSintEustatiusAndSaba = "bonaireSintEustatiusAndSaba",
    BurkinaFaso = "burkinaFaso",
    Bangladesh = "bangladesh",
    Bulgaria = "bulgaria",
    Bahrain = "bahrain",
    Bahamas = "bahamas",
    BosniaHerzegovina = "bosniaHerzegovina",
    SaintBarthelemy = "saintBarthelemy",
    Belarus = "belarus",
    Belize = "belize",
    Bermuda = "bermuda",
    Bolivia = "bolivia",
    Brazil = "brazil",
    Barbados = "barbados",
    BruneiDarussalam = "bruneiDarussalam",
    Bhutan = "bhutan",
    BouvetIsland = "bouvetIsland",
    Botswana = "botswana",
    Car = "car",
    Canada = "canada",
    CocosIslands = "cocosIslands",
    Switzerland = "switzerland",
    Chile = "chile",
    China = "china",
    CoteIvoire = "coteIvoire",
    Cameroon = "cameroon",
    DemocraticRepublicOfCongo = "democraticRepublicOfCongo",
    Congo = "congo",
    CookIslands = "cookIslands",
    Colombia = "colombia",
    Comoros = "comoros",
    CaboVerde = "caboVerde",
    CostaRica = "costaRica",
    Cuba = "cuba",
    Curacao = "curacao",
    ChristmasIsland = "christmasIsland",
    CaymanIslands = "caymanIslands",
    Cyprus = "cyprus",
    Czechia = "czechia",
    Germany = "germany",
    Djibouti = "djibouti",
    Dominica = "dominica",
    Denmark = "denmark",
    DominicanRepublic = "dominicanRepublic",
    Algeria = "algeria",
    Ecuador = "ecuador",
    Egypt = "egypt",
    Eritrea = "eritrea",
    WesternSahara = "westernSahara",
    Spain = "spain",
    Estonia = "estonia",
    Ethiopia = "ethiopia",
    Finland = "finland",
    Fiji = "fiji",
    FalklandIslands = "falklandIslands",
    France = "france",
    FaroeIslands = "faroeIslands",
    Micronesia = "micronesia",
    Gabon = "gabon",
    Uk = "uk",
    Georgia = "georgia",
    Guernsey = "guernsey",
    Ghana = "ghana",
    Gibraltar = "gibraltar",
    Guinea = "guinea",
    Guadeloupe = "guadeloupe",
    Gambia = "gambia",
    GuineaBissau = "guineaBissau",
    EquatorialGuinea = "equatorialGuinea",
    Greece = "greece",
    Grenada = "grenada",
    Greenland = "greenland",
    Guatemala = "guatemala",
    FrenchGuiana = "frenchGuiana",
    Guam = "guam",
    Guyana = "guyana",
    HongKong = "hongKong",
    HeardIslandAndMcDonaldIslands = "heardIslandAndMcDonaldIslands",
    Honduras = "honduras",
    Croatia = "croatia",
    Haiti = "haiti",
    Hungary = "hungary",
    Indonesia = "indonesia",
    IsleOfMan = "isleOfMan",
    India = "india",
    BritishIndianOceanTerritory = "britishIndianOceanTerritory",
    Ireland = "ireland",
    Iran = "iran",
    Iraq = "iraq",
    Iceland = "iceland",
    Israel = "israel",
    Italy = "italy",
    Jamaica = "jamaica",
    Jersey = "jersey",
    Jordan = "jordan",
    Japan = "japan",
    Kazakhstan = "kazakhstan",
    Kenya = "kenya",
    Kyrgyzstan = "kyrgyzstan",
    Cambodia = "cambodia",
    Kiribati = "kiribati",
    SaintKittsAndNevis = "saintKittsAndNevis",
    SouthKorea = "southKorea",
    Kuwait = "kuwait",
    Lao = "lao",
    Lebanon = "lebanon",
    Liberia = "liberia",
    Libya = "libya",
    SaintLucia = "saintLucia",
    Liechtenstein = "liechtenstein",
    SriLanka = "sriLanka",
    Lesotho = "lesotho",
    Lithuania = "lithuania",
    Luxembourg = "luxembourg",
    Latvia = "latvia",
    Macao = "macao",
    FrenchSaintMartin = "frenchSaintMartin",
    Morocco = "morocco",
    Monaco = "monaco",
    Moldova = "moldova",
    Madagascar = "madagascar",
    Maldives = "maldives",
    Mexico = "mexico",
    MarshallIslands = "marshallIslands",
    NorthMacedonia = "northMacedonia",
    Mali = "mali",
    Malta = "malta",
    Myanmar = "myanmar",
    Montenegro = "montenegro",
    Mongolia = "mongolia",
    NorthernMarianaIslands = "northernMarianaIslands",
    Mozambique = "mozambique",
    Mauritania = "mauritania",
    Montserrat = "montserrat",
    Martinique = "martinique",
    Mauritius = "mauritius",
    Malawi = "malawi",
    Malaysia = "malaysia",
    Mayotte = "mayotte",
    Namibia = "namibia",
    NewCaledonia = "newCaledonia",
    Niger = "niger",
    NorfolkIsland = "norfolkIsland",
    Nigeria = "nigeria",
    Nicaragua = "nicaragua",
    Niue = "niue",
    Netherlands = "netherlands",
    Norway = "norway",
    Nepal = "nepal",
    Nauru = "nauru",
    NewZealand = "newZealand",
    Oman = "oman",
    Pakistan = "pakistan",
    Panama = "panama",
    Pitcairn = "pitcairn",
    Peru = "peru",
    Philippines = "philippines",
    Palau = "palau",
    PapuaNewGuinea = "papuaNewGuinea",
    Poland = "poland",
    PuertoRico = "puertoRico",
    NorthKorea = "northKorea",
    Portugal = "portugal",
    Paraguay = "paraguay",
    Palestine = "palestine",
    FrenchPolynesia = "frenchPolynesia",
    Qatar = "qatar",
    Reunion = "reunion",
    Romania = "romania",
    Russia = "russia",
    Rwanda = "rwanda",
    SaudiArabia = "saudiArabia",
    Sudan = "sudan",
    Senegal = "senegal",
    Singapore = "singapore",
    SouthGeorgiaAndTheSouthSandwichIslands = "southGeorgiaAndTheSouthSandwichIslands",
    SaintHelena = "saintHelena",
    SvalbardAndJanMayen = "svalbardAndJanMayen",
    SolomonIslands = "solomonIslands",
    SierraLeone = "sierraLeone",
    ElSalvador = "elSalvador",
    SanMarino = "sanMarino",
    Somalia = "somalia",
    SaintPierreAndMiquelon = "saintPierreAndMiquelon",
    Serbia = "serbia",
    SouthSudan = "southSudan",
    SaoTomeAndPrincipe = "saoTomeAndPrincipe",
    Suriname = "suriname",
    Slovakia = "slovakia",
    Slovenia = "slovenia",
    Sweden = "sweden",
    Eswatini = "eswatini",
    DutchSintMaarten = "dutchSintMaarten",
    Seychelles = "seychelles",
    Syria = "syria",
    TurksAndCaicosIslands = "turksAndCaicosIslands",
    Chad = "chad",
    Togo = "togo",
    Thailand = "thailand",
    Tajikistan = "tajikistan",
    Tokelau = "tokelau",
    Turkmenistan = "turkmenistan",
    TimorLeste = "timorLeste",
    Tonga = "tonga",
    TrinidadAndTobago = "trinidadAndTobago",
    Tunisia = "tunisia",
    Turkey = "turkey",
    Tuvalu = "tuvalu",
    Taiwan = "taiwan",
    Tanzania = "tanzania",
    Uganda = "uganda",
    Ukraine = "ukraine",
    UsMinorOutlyingIslands = "usMinorOutlyingIslands",
    Uruguay = "uruguay",
    Us = "us",
    Uzbekistan = "uzbekistan",
    HolySee = "holySee",
    SaintVincentAndTheGrenadines = "saintVincentAndTheGrenadines",
    Venezuela = "venezuela",
    BritishVirginIslands = "britishVirginIslands",
    UsVirginIslands = "usVirginIslands",
    Vietnam = "vietnam",
    Vanuatu = "vanuatu",
    WallisAndFutuna = "wallisAndFutuna",
    Samoa = "samoa",
    Kosovo = "kosovo",
    Yemen = "yemen",
    SouthAfrica = "southAfrica",
    Zambia = "zambia",
    Zimbabwe = "zimbabwe"
}

interface IdCaptureDocument {
    readonly region: IdCaptureRegion;
    readonly documentType: IdCaptureDocumentType;
    isIdCard: boolean;
    isDriverLicense: boolean;
    isPassport: boolean;
    isVisaIcao: boolean;
    isRegionSpecific: boolean;
    isResidencePermit: boolean;
    isHealthInsuranceCard: boolean;
}

declare class DriverLicense extends DefaultSerializeable implements IdCaptureDocument {
    private readonly _region;
    private readonly _documentType;
    constructor(region: IdCaptureRegion);
    get documentType(): IdCaptureDocumentType;
    get region(): IdCaptureRegion;
    get isIdCard(): boolean;
    get isDriverLicense(): boolean;
    get isPassport(): boolean;
    get isVisaIcao(): boolean;
    get isRegionSpecific(): boolean;
    get isResidencePermit(): boolean;
    get isHealthInsuranceCard(): boolean;
}

declare class HealthInsuranceCard extends DefaultSerializeable implements IdCaptureDocument {
    private readonly _region;
    private readonly _documentType;
    constructor(region: IdCaptureRegion);
    get documentType(): IdCaptureDocumentType;
    get region(): IdCaptureRegion;
    get isIdCard(): boolean;
    get isDriverLicense(): boolean;
    get isPassport(): boolean;
    get isVisaIcao(): boolean;
    get isRegionSpecific(): boolean;
    get isResidencePermit(): boolean;
    get isHealthInsuranceCard(): boolean;
}

declare class IdCard extends DefaultSerializeable implements IdCaptureDocument {
    private readonly _region;
    private readonly _documentType;
    constructor(region: IdCaptureRegion);
    get documentType(): IdCaptureDocumentType;
    get region(): IdCaptureRegion;
    get isIdCard(): boolean;
    get isDriverLicense(): boolean;
    get isPassport(): boolean;
    get isVisaIcao(): boolean;
    get isRegionSpecific(): boolean;
    get isResidencePermit(): boolean;
    get isHealthInsuranceCard(): boolean;
}

declare class Passport extends DefaultSerializeable implements IdCaptureDocument {
    private readonly _region;
    private readonly _documentType;
    constructor(region: IdCaptureRegion);
    get documentType(): IdCaptureDocumentType;
    get region(): IdCaptureRegion;
    get isIdCard(): boolean;
    get isDriverLicense(): boolean;
    get isPassport(): boolean;
    get isVisaIcao(): boolean;
    get isRegionSpecific(): boolean;
    get isResidencePermit(): boolean;
    get isHealthInsuranceCard(): boolean;
}

declare class RegionSpecific extends DefaultSerializeable implements IdCaptureDocument {
    private readonly _region;
    private readonly _documentSubtype;
    private readonly _documentType;
    constructor(subtype: RegionSpecificSubtype);
    get documentType(): IdCaptureDocumentType;
    get region(): IdCaptureRegion;
    get subtype(): RegionSpecificSubtype;
    get isIdCard(): boolean;
    get isDriverLicense(): boolean;
    get isPassport(): boolean;
    get isVisaIcao(): boolean;
    get isRegionSpecific(): boolean;
    get isResidencePermit(): boolean;
    get isHealthInsuranceCard(): boolean;
}

declare class ResidencePermit extends DefaultSerializeable implements IdCaptureDocument {
    private readonly _region;
    private readonly _documentType;
    constructor(region: IdCaptureRegion);
    get documentType(): IdCaptureDocumentType;
    get region(): IdCaptureRegion;
    get isIdCard(): boolean;
    get isDriverLicense(): boolean;
    get isPassport(): boolean;
    get isVisaIcao(): boolean;
    get isRegionSpecific(): boolean;
    get isResidencePermit(): boolean;
    get isHealthInsuranceCard(): boolean;
}

declare class VisaIcao extends DefaultSerializeable implements IdCaptureDocument {
    private readonly _region;
    private readonly _documentType;
    constructor(region: IdCaptureRegion);
    get documentType(): IdCaptureDocumentType;
    get region(): IdCaptureRegion;
    get isIdCard(): boolean;
    get isDriverLicense(): boolean;
    get isPassport(): boolean;
    get isVisaIcao(): boolean;
    get isRegionSpecific(): boolean;
    get isResidencePermit(): boolean;
    get isHealthInsuranceCard(): boolean;
}

interface DateResultJSON {
    day?: number | null;
    month?: number | null;
    year: number;
}
interface CommonIdFieldsJSON {
    firstName: string | null;
    lastName: string | null;
    fullName: string;
    sex: string | null;
    dateOfBirth: DateResultJSON | null;
    nationality: string | null;
    nationalityISO: string | null;
    address: string | null;
    documentNumber: string | null;
    dateOfExpiry: DateResultJSON | null;
    dateOfIssue: DateResultJSON | null;
}
interface ProfessionalDrivingPermitJSON {
    dateOfExpiry: DateResultJSON;
    codes: string[];
}
interface VehicleRestrictionJSON {
    vehicleCode: string;
    vehicleRestriction: string;
    dateOfIssue: DateResultJSON;
}
interface DrivingLicenseCategoryJSON {
    code: string;
    dateOfIssue: DateResultJSON | null;
    dateOfExpiry: DateResultJSON | null;
}
interface DrivingLicenseDetailsJSON {
    drivingLicenseCategories: DrivingLicenseCategoryJSON[];
    restrictions: string | null;
    endorsements: string | null;
}
interface DataConsistencyResultJSON {
    allChecksPassed: boolean;
    failedChecks: string[];
    skippedChecks: string[];
    passedChecks: string[];
    frontReviewImage: string | null;
}
interface MobileDocumentResultJSON extends CommonIdFieldsJSON {
    portrait: string | null;
    issuingAuthority: string;
    administrativeNumber: string | null;
    height: number | null;
    weight: number | null;
    eyeColor: string | null;
    hairColor: string | null;
    birthPlace: string | null;
    drivingLicenseCategories: DrivingLicenseCategoryJSON[];
    residentCity: string | null;
    residentCountry: string | null;
    age: number | null;
    issuingCountryIso: string | null;
    issuingJurisdictionIso: string | null;
}
interface MobileDocumentOCRResultJSON {
    firstName: string | null;
    lastName: string | null;
    fullName: string;
    dateOfBirth: DateResultJSON | null;
    documentNumber: string | null;
    dateOfExpiry: DateResultJSON | null;
    issuingJurisdiction: string | null;
    issuingJurisdictionIso: string | null;
    sex: string | null;
    nationality: string | null;
    nationalityISO: string | null;
    address: string | null;
    documentAdditionalNumber: string | null;
    dateOfIssue: DateResultJSON | null;
}
interface VerificationResultJSON {
    dataConsistencyResult: DataConsistencyResultJSON | null;
    aamvaBarcodeVerification: AamvaBarcodeVerificationResultJSON | null;
}
interface ImageInfoJSON {
    front: ImageJSON | null;
    back: ImageJSON | null;
}
interface ImageJSON {
    face: string | null;
    frame: string | null;
    croppedDocument: string | null;
}
interface CapturedIdJSON extends CommonIdFieldsJSON {
    age: number | null;
    isExpired: boolean | null;
    documentType: IdCaptureDocumentType | null;
    documentSubtype: RegionSpecificSubtype | null;
    issuingCountryIso: string | null;
    issuingCountry: IdCaptureRegion;
    documentAdditionalNumber: string | null;
    imageInfo: ImageInfoJSON | null;
    barcodeResult: BarcodeResultJSON | null;
    mrzResult: MRZResultJSON | null;
    vizResult: VIZResultJSON | null;
    mobileDocument: MobileDocumentResultJSON | null;
    mobileDocumentOcrResult: MobileDocumentOCRResultJSON | null;
    verificationResult: VerificationResultJSON | null;
    nfcResult: NfcResultJSON | null;
    rejectionDiagnosticJSON: string;
    isCitizenPassport: boolean;
    anonymizedFields: string[];
}
interface BarcodeResultJSON extends CommonIdFieldsJSON {
    aamvaVersion: number;
    isRealId: boolean;
    aliasFamilyName: string | null;
    aliasGivenName: string | null;
    aliasSuffixName: string | null;
    cardRevisionDate: DateResultJSON | null;
    documentDiscriminatorNumber: string | null;
    driverNamePrefix: string | null;
    driverNameSuffix: string | null;
    endorsementsCode: string | null;
    eyeColor: string | null;
    firstNameWithoutMiddleName: string | null;
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
    } | null;
    documentCopy: string;
    personalIdNumber: string;
    bloodType: string;
    categories: string[];
    identificationType: string;
    version: string;
    personDesignatorDocument: number;
    personDesignatorTypeCode: string;
    ediPersonIdentifier: string;
    personnelCategoryCode: string;
    branchOfService: string;
    personnelEntitlementConditionType: string;
    rank: string;
    payPlanCode: string;
    payPlanGradeCode: string;
    cardInstanceIdentifier: string;
    personMiddleInitial: string;
    licenseCountryOfIssue: string;
    personalIdNumberType: string;
    driverRestrictionCodes: number[];
    professionalDrivingPermit: ProfessionalDrivingPermitJSON | null;
    vehicleRestrictions: VehicleRestrictionJSON[];
    countryOfBirth: string;
    countryOfBirthIso: string;
    citizenshipStatus: string;
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
    familySequenceNumber: number;
    formNumber: string;
    genevaConventionCategory: string | null;
    height: number;
    jpegData: string;
    mwrFlagCode: string;
    mwrFlagDescription: string;
    payGrade: string | null;
    relationshipCode: string | null;
    relationshipDescription: string | null;
    securityCode: string;
    serviceCode: string;
    sponsorFlag: string;
    sponsorPersonDesignatorIdentifier: number | null;
    sponsorName: string | null;
    statusCode: string;
    statusCodeDescription: string;
    weight: number;
}
interface AamvaBarcodeVerificationResultJSON {
    allChecksPassed: boolean;
    verificationStatus: 'authentic' | 'maybeForged' | 'forged';
}
interface MRZResultJSON extends CommonIdFieldsJSON {
    documentCode: string;
    namesAreTruncated: boolean;
    optionalDataInLine1: string | null;
    optionalDataInLine2: string | null;
    capturedMrz: string;
    personalIdNumber: string | null;
    renewalTimes: number | null;
    fullNameSimplifiedChinese: string | null;
    omittedCharacterCountInGbkName: number | null;
    omittedNameCount: number | null;
    issuingAuthorityCode: string | null;
    passportIssuerIso: string | null;
    passportNumber: string | null;
    passportDateOfExpiry: DateResultJSON | null;
}
interface VIZResultJSON extends CommonIdFieldsJSON {
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
    usRealIdStatus: UsRealIdStatus | null;
    isBackSideCaptureSupported: boolean;
    bloodType: string | null;
    sponsor: string | null;
    mothersName: string | null;
    fathersName: string | null;
    visaNumber: string | null;
    passportNumber: string | null;
    vehicleOwner: string | null;
    drivingLicenseDetails: DrivingLicenseDetailsJSON | null;
}
interface NfcResultJSON {
    firstName: string | null;
    lastName: string | null;
    fullName: string | null;
    documentNumber: string | null;
    documentAdditionalNumber: string | null;
    issuingCountryIso: string | null;
    issuingCountry: string | null;
    issuingAuthority: string | null;
    dateOfIssue: DateResultJSON | null;
    dateOfExpiry: DateResultJSON | null;
    dateOfBirth: DateResultJSON | null;
    faceImage: string | null;
    signatureImage: string | null;
    chipVerificationStatus: string;
    cloneDetectionStatus: string;
}

declare function setIdDefaultsLoader(loader: () => void): void;
declare function ensureIdDefaults(): IdDefaults;
declare function loadIdDefaults(jsonDefaults: any): void;

declare class DateResult {
    private _day;
    private _month;
    private _year;
    constructor(day: number | null, month: number | null, year: number);
    get day(): number;
    get month(): number;
    get year(): number;
    get localDate(): Date;
    get utcDate(): Date;
    private static fromJSON;
}
interface PrivateDateResult {
    fromJSON(json: DateResultJSON | null): DateResult | null;
}

declare enum DataConsistencyCheck {
    IssuingCountryComparison = "issuingCountryComparison",
    IssuingJurisdictionComparison = "issuingJurisdictionComparison",
    FullNameComparison = "fullNameComparison",
    DocumentNumberComparison = "documentNumberComparison",
    DateOfBirthComparison = "dateOfBirthComparison",
    DateOfExpiryComparison = "dateOfExpiryComparison",
    DateOfIssueComparison = "dateOfIssueComparison"
}

declare enum IdImageType {
    Face = "face",
    CroppedDocument = "croppedDocument",
    Frame = "frame"
}

declare enum CapturedSides {
    FrontOnly = "frontOnly",
    FrontAndBack = "frontAndBack"
}

declare enum TextHintPosition {
    AboveViewfinder = "aboveViewfinder",
    BelowViewfinder = "belowViewfinder"
}

declare enum RejectionReason {
    NotAcceptedDocumentType = "notAcceptedDocumentType",
    InvalidFormat = "invalidFormat",
    DocumentVoided = "documentVoided",
    Timeout = "timeout",
    SingleImageNotRecognized = "singleImageNotRecognized",
    DocumentExpired = "documentExpired",
    DocumentExpiresSoon = "documentExpiresSoon",
    NotRealIdCompliant = "notRealIdCompliant",
    HolderUnderage = "holderUnderage",
    ForgedAamvaBarcode = "forgedAamvaBarcode",
    InconsistentData = "inconsistentData",
    BluetoothCommunicationError = "bluetoothCommunicationError",
    BluetoothUnavailable = "bluetoothUnavailable"
}

declare enum UsRealIdStatus {
    NotAvailable = "notAvailable",
    NotRealIdCompliant = "notRealIdCompliant",
    RealIdCompliant = "realIdCompliant"
}

declare enum RegionSpecificSubtype {
    UsBorderCrossingCard = "usBorderCrossingCard",
    ChinaExitEntryPermit = "chinaExitEntryPermit",
    UsGlobalEntryCard = "usGlobalEntryCard",
    ChinaMainlandTravelPermitTaiwan = "chinaMainlandTravelPermitTaiwan",
    UsNexusCard = "usNexusCard",
    ChinaMainlandTravelPermitHongKongMacau = "chinaMainlandTravelPermitHongKongMacau",
    ApecBusinessTravelCard = "apecBusinessTravelCard",
    PakistanAfghanCitizenCard = "pakistanAfghanCitizenCard",
    SingaporeFinCard = "singaporeFinCard",
    MalaysiaIkad = "malaysiaIkad",
    MalaysiaMykad = "malaysiaMykad",
    MalaysiaMypr = "malaysiaMypr",
    MexicoConsularVoterId = "mexicoConsularVoterId",
    GermanyEid = "germanyEid",
    UsCommonAccessCard = "usCommonAccessCard",
    PhilippinesMultipurposeId = "philippinesMultipurposeId",
    MalaysiaMykas = "malaysiaMykas",
    MalaysiaMykid = "malaysiaMykid",
    MalaysiaMytentera = "malaysiaMytentera",
    MexicoProfessionalId = "mexicoProfessionalId",
    MalaysiaRefugeeId = "malaysiaRefugeeId",
    CanadaTribalId = "canadaTribalId",
    UsUniformedServicesId = "usUniformedServicesId",
    UsVeteranId = "usVeteranId",
    PhilippinesWorkPermit = "philippinesWorkPermit",
    SingaporeWorkPermit = "singaporeWorkPermit",
    UsWorkPermit = "usWorkPermit",
    PhilippinesSocialSecurityCard = "philippinesSocialSecurityCard",
    SwedenSocialSecurityCard = "swedenSocialSecurityCard",
    CanadaSocialSecurityCard = "canadaSocialSecurityCard",
    UsSocialSecurityCard = "usSocialSecurityCard",
    BelgiumMinorsId = "belgiumMinorsId",
    ColombiaMinorsId = "colombiaMinorsId",
    PeruMinorsId = "peruMinorsId",
    BoliviaMinorsId = "boliviaMinorsId",
    HungaryAddressCard = "hungaryAddressCard",
    UkAsylumRequest = "ukAsylumRequest",
    CanadaCitizenshipCertificate = "canadaCitizenshipCertificate",
    SingaporeEmploymentPass = "singaporeEmploymentPass",
    CanadaMinorsPublicServicesCard = "canadaMinorsPublicServicesCard",
    MalaysiaMypolis = "malaysiaMypolis",
    PhilippinesNbiClearance = "philippinesNbiClearance",
    IndiaPanCard = "indiaPanCard",
    PhilippinesPostalId = "philippinesPostalId",
    PakistanProofOfRegistration = "pakistanProofOfRegistration",
    SingaporeSPass = "singaporeSPass",
    SwedenSisId = "swedenSisId",
    ColombiaTemporaryProtectionPermit = "colombiaTemporaryProtectionPermit",
    UsTwicCard = "usTwicCard",
    UsWeaponPermit = "usWeaponPermit",
    CanadaWeaponPermit = "canadaWeaponPermit",
    IrelandPublicServicesCard = "irelandPublicServicesCard",
    CanadaPublicServicesCard = "canadaPublicServicesCard",
    PakistanConsularId = "pakistanConsularId",
    GuatemalaConsularId = "guatemalaConsularId",
    MexicoConsularId = "mexicoConsularId",
    PhilippinesTaxId = "philippinesTaxId",
    MexicoTaxId = "mexicoTaxId",
    ChinaOneWayPermit = "chinaOneWayPermit",
    UsMedicalMarijuanaCard = "usMedicalMarijuanaCard",
    UsMunicipalId = "usMunicipalId",
    AustraliaAsicCard = "australiaAsicCard",
    UaeVehicleRegistrationCard = "uaeVehicleRegistrationCard",
    UaeEsaadCard = "uaeEsaadCard",
    UkMilitaryId = "ukMilitaryId",
    ChinaBusinessTravelPermitHongKongMacau = "chinaBusinessTravelPermitHongKongMacau",
    IrelandAgeCard = "irelandAgeCard"
}

declare enum IdSide {
    Front = "front",
    Back = "back"
}

declare class IdImages {
    private json;
    private static fromJSON;
    get face(): string | null;
    get frame(): string | null;
    getFrame(side: IdSide): string | null;
    getCroppedDocument(side: IdSide): string | null;
}
interface PrivateIdImages {
    fromJSON(json: ImageInfoJSON | null): IdImages;
}

declare enum Sex {
    Female = "female",
    Male = "male",
    Unspecified = "unspecified"
}

declare enum AamvaBarcodeVerificationStatus {
    Authentic = "authentic",
    LikelyForged = "maybeForged",
    Forged = "forged"
}

declare class AamvaBarcodeVerificationResult {
    private json;
    get allChecksPassed(): boolean;
    private _status;
    get status(): AamvaBarcodeVerificationStatus;
    private static fromJSON;
}

declare class ProfessionalDrivingPermit {
    private json;
    get dateOfExpiry(): DateResult;
    get codes(): string[];
    private static fromJSON;
}
interface PrivateProfessionalDrivingPermit {
    fromJSON(json: ProfessionalDrivingPermitJSON | null): ProfessionalDrivingPermit | null;
}

declare class VehicleRestriction {
    private json;
    get vehicleCode(): string;
    get vehicleRestriction(): string;
    get dateOfIssue(): DateResult;
    private static fromJSON;
}
interface PrivateVehicleRestriction {
    fromJSON(json: VehicleRestrictionJSON | null): VehicleRestriction;
}

declare class BarcodeResult {
    private json;
    private static fromJSON;
    private constructor();
    get aamvaVersion(): number | null;
    get aliasFamilyName(): string | null;
    get aliasGivenName(): string | null;
    get aliasSuffixName(): string | null;
    get bloodType(): string | null;
    get branchOfService(): string | null;
    get cardInstanceIdentifier(): string | null;
    get cardRevisionDate(): DateResult | null;
    get categories(): string[];
    get champusEffectiveDate(): DateResult | null;
    get champusExpiryDate(): DateResult | null;
    get citizenshipStatus(): string | null;
    get civilianHealthCareFlagCode(): string | null;
    get civilianHealthCareFlagDescription(): string | null;
    get commissaryFlagCode(): string | null;
    get commissaryFlagDescription(): string | null;
    get countryOfBirth(): string | null;
    get countryOfBirthIso(): string | null;
    get deersDependentSuffixCode(): number | null;
    get deersDependentSuffixDescription(): string | null;
    get directCareFlagCode(): string | null;
    get directCareFlagDescription(): string | null;
    get documentCopy(): string | null;
    get documentDiscriminatorNumber(): string | null;
    get driverNamePrefix(): string | null;
    get driverNameSuffix(): string | null;
    get driverRestrictionCodes(): number[];
    get ediPersonIdentifier(): string | null;
    get endorsementsCode(): string | null;
    get exchangeFlagCode(): string | null;
    get exchangeFlagDescription(): string | null;
    get eyeColor(): string | null;
    get familySequenceNumber(): number | null;
    get firstNameTruncation(): string | null;
    get firstNameWithoutMiddleName(): string | null;
    get formNumber(): string | null;
    get genevaConventionCategory(): string | null;
    get hairColor(): string | null;
    get heightCm(): number | null;
    get heightInch(): number | null;
    get iin(): string | null;
    get identificationType(): string | null;
    get issuingJurisdiction(): string | null;
    get issuingJurisdictionIso(): string | null;
    get jpegData(): string | null;
    get jurisdictionVersion(): number | null;
    get lastNameTruncation(): string | null;
    get licenseCountryOfIssue(): string | null;
    get middleName(): string | null;
    get middleNameTruncation(): string | null;
    get mwrFlagCode(): string | null;
    get mwrFlagDescription(): string | null;
    get payGrade(): string | null;
    get payPlanCode(): string | null;
    get payPlanGradeCode(): string | null;
    get personDesignatorDocument(): number | null;
    get personDesignatorTypeCode(): string | null;
    get personMiddleInitial(): string | null;
    get personalIdNumber(): string | null;
    get personalIdNumberType(): string | null;
    get personnelCategoryCode(): string | null;
    get personnelEntitlementConditionType(): string | null;
    get placeOfBirth(): string | null;
    get professionalDrivingPermit(): ProfessionalDrivingPermit | null;
    get race(): string | null;
    get rank(): string | null;
    get relationshipCode(): string | null;
    get relationshipDescription(): string | null;
    get restrictionsCode(): string | null;
    get securityCode(): string | null;
    get serviceCode(): string | null;
    get sponsorFlag(): string | null;
    get sponsorName(): string | null;
    get sponsorPersonDesignatorIdentifier(): number | null;
    get statusCode(): string | null;
    get statusCodeDescription(): string | null;
    get vehicleClass(): string | null;
    get vehicleRestrictions(): VehicleRestriction[];
    get version(): string | null;
    get weightKg(): number | null;
    get weightLbs(): number | null;
    get isRealId(): boolean | null;
    get barcodeDataElements(): {
        [key: string]: string;
    };
    get firstName(): string | null;
    get lastName(): string | null;
    get fullName(): string | null;
    get sex(): string | null;
    get dateOfBirth(): DateResult | null;
    get nationality(): string | null;
    get address(): string | null;
    get documentNumber(): string | null;
    get dateOfExpiry(): DateResult | null;
    get dateOfIssue(): DateResult | null;
}
interface PrivateBarcodeResult {
    fromJSON(json: BarcodeResultJSON): BarcodeResult;
}

declare class MRZResult {
    private json;
    get documentCode(): string;
    get namesAreTruncated(): boolean;
    get optionalDataInLine1(): string | null;
    get optionalDataInLine2(): string | null;
    get capturedMrz(): string | null;
    get personalIdNumber(): string | null;
    get renewalTimes(): number | null;
    get fullNameSimplifiedChinese(): string | null;
    get omittedCharacterCountInGbkName(): number | null;
    get omittedNameCount(): number | null;
    get issuingAuthorityCode(): string | null;
    get passportIssuerIso(): string | null;
    get passportNumber(): string | null;
    get passportDateOfExpiry(): DateResult | null;
    get firstName(): string | null;
    get lastName(): string | null;
    get fullName(): string | null;
    get sex(): string | null;
    get dateOfBirth(): DateResult | null;
    get nationality(): string | null;
    get address(): string | null;
    get documentNumber(): string | null;
    get dateOfExpiry(): DateResult | null;
    get dateOfIssue(): DateResult | null;
    private static fromJSON;
}
interface PrivateMRZResult {
    fromJSON(json: MRZResultJSON): MRZResult;
}

declare class DrivingLicenseCategory {
    private json;
    get code(): string;
    get dateOfIssue(): DateResult | null;
    get dateOfExpiry(): DateResult | null;
    private static fromJSON;
}
interface PrivateDrivingLicenseCategory {
    fromJSON(json: DrivingLicenseCategoryJSON | null): DrivingLicenseCategory | null;
}

declare class DrivingLicenseDetails {
    private json;
    private _drivingLicenseCategories;
    private static fromJSON;
    get drivingLicenseCategories(): DrivingLicenseCategory[];
    get restrictions(): string | null;
    get endorsements(): string | null;
}
interface PrivateDrivingLicenseDetails {
    fromJSON(json: DrivingLicenseDetailsJSON | null): DrivingLicenseDetails | null;
}

declare class VIZResult {
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
    private get usRealIdStatus();
    get capturedSides(): CapturedSides;
    get isBackSideCaptureSupported(): boolean;
    get bloodType(): string | null;
    get sponsor(): string | null;
    get mothersName(): string | null;
    get fathersName(): string | null;
    get passportNumber(): string | null;
    get visaNumber(): string | null;
    get vehicleOwner(): string | null;
    get drivingLicenseDetails(): DrivingLicenseDetails | null;
    get firstName(): string | null;
    get lastName(): string | null;
    get fullName(): string | null;
    get sex(): string | null;
    get dateOfBirth(): DateResult | null;
    get nationality(): string | null;
    get address(): string | null;
    get documentNumber(): string | null;
    get dateOfExpiry(): DateResult | null;
    get dateOfIssue(): DateResult | null;
    private static fromJSON;
}
interface PrivateVIZResult {
    fromJSON(json: VIZResultJSON): VIZResult;
    readonly usRealIdStatus: UsRealIdStatus | null;
}



declare class MobileDocumentOCRResult {
    private json;
    get firstName(): string | null;
    get lastName(): string | null;
    get fullName(): string | null;
    get dateOfBirth(): DateResult | null;
    get documentNumber(): string | null;
    get dateOfExpiry(): DateResult | null;
    get issuingJurisdiction(): string | null;
    get issuingJurisdictionIso(): string | null;
    get sex(): string | null;
    get nationality(): string | null;
    get address(): string | null;
    get documentAdditionalNumber(): string | null;
    get dateOfIssue(): DateResult | null;
    private static fromJSON;
}
interface PrivateMobileDocumentOCRResult {
    fromJSON(json: MobileDocumentOCRResultJSON | null): MobileDocumentOCRResult | null;
}

declare class MobileDocumentResult {
    private json;
    private _drivingLicenseCategories;
    get portrait(): string | null;
    get issuingAuthority(): string;
    get administrativeNumber(): string | null;
    get height(): number | null;
    get weight(): number | null;
    get eyeColor(): string | null;
    get hairColor(): string | null;
    get birthPlace(): string | null;
    get drivingLicenseCategories(): DrivingLicenseCategory[];
    get residentCity(): string | null;
    get residentCountry(): string | null;
    get firstName(): string | null;
    get lastName(): string | null;
    get fullName(): string | null;
    get sex(): string | null;
    get dateOfBirth(): DateResult | null;
    get age(): number | null;
    get nationality(): string | null;
    get address(): string | null;
    get issuingCountryIso(): string | null;
    get issuingJurisdictionIso(): string | null;
    get documentNumber(): string | null;
    get dateOfExpiry(): DateResult | null;
    get dateOfIssue(): DateResult | null;
    private static fromJSON;
}
interface PrivateMobileDocumentResult {
    fromJSON(json: MobileDocumentResultJSON | null): MobileDocumentResult | null;
}

declare class DataConsistencyResult {
    private json;
    get allChecksPassed(): boolean;
    get failedChecks(): DataConsistencyCheck[];
    get skippedChecks(): DataConsistencyCheck[];
    get passedChecks(): DataConsistencyCheck[];
    get frontReviewImage(): string | null;
    private static fromJSON;
}
interface PrivateDataConsistencyResult {
    fromJSON(json: DataConsistencyResultJSON | null): DataConsistencyResult | null;
}

declare class VerificationResult {
    private json;
    private _dataConsistency;
    private _aamvaBarcodeVerification;
    get dataConsistency(): DataConsistencyResult | null;
    get aamvaBarcodeVerification(): AamvaBarcodeVerificationResult | null;
    private static fromJSON;
}
interface PrivateVerificationResult {
    fromJSON(json: VerificationResultJSON | null): VerificationResult;
}

declare enum IdFieldType {
    AdditionalAddressInformation = "additionalAddressInformation",
    AdditionalNameInformation = "additionalNameInformation",
    Address = "address",
    Age = "age",
    BarcodeDictionary = "barcodeDictionary",
    BloodType = "bloodType",
    DateOfBirth = "dateOfBirth",
    DateOfExpiry = "dateOfExpiry",
    DateOfIssue = "dateOfIssue",
    DocumentAdditionalNumber = "documentAdditionalNumber",
    DocumentNumber = "documentNumber",
    Employer = "employer",
    FathersName = "fathersName",
    FirstName = "firstName",
    FullName = "fullName",
    IssuingAuthority = "issuingAuthority",
    LastName = "lastName",
    MaritalStatus = "maritalStatus",
    MothersName = "mothersName",
    MrzOptionalDataInLine1 = "mrzOptionalDataInLine1",
    MrzOptionalDataInLine2 = "mrzOptionalDataInLine2",
    Nationality = "nationality",
    PersonalIdNumber = "personalIdNumber",
    PlaceOfBirth = "placeOfBirth",
    Profession = "profession",
    Race = "race",
    Religion = "religion",
    ResidentialStatus = "residentialStatus",
    Sex = "sex"
}

declare class CapturedId {
    private _mobileDocument;
    private _mobileDocumentOcr;
    private _verificationResult;
    private json;
    private _document;
    private _barcodeResult;
    private _mrzResult;
    private _vizResult;
    private _images;
    private static fromJSON;
    private static getDocument;
    get age(): number | null;
    get isExpired(): boolean | null;
    get isCitizenPassport(): boolean;
    get document(): IdCaptureDocument | null;
    get issuingCountryIso(): string | null;
    get issuingCountry(): IdCaptureRegion;
    get documentAdditionalNumber(): string | null;
    get barcode(): BarcodeResult | null;
    get mrzResult(): MRZResult | null;
    get vizResult(): VIZResult | null;
    isIdCard(): boolean;
    get usRealIdStatus(): UsRealIdStatus;
    isDriverLicense(): boolean;
    isPassport(): boolean;
    isVisaIcao(): boolean;
    isRegionSpecific(subtype: RegionSpecificSubtype): boolean;
    isResidencePermit(): boolean;
    isHealthInsuranceCard(): boolean;
    get images(): IdImages;
    get firstName(): string | null;
    get lastName(): string | null;
    get fullName(): string | null;
    get sex(): string | null;
    get dateOfBirth(): DateResult | null;
    get nationality(): string | null;
    get nationalityISO(): string | null;
    get address(): string | null;
    get documentNumber(): string | null;
    get dateOfExpiry(): DateResult | null;
    get dateOfIssue(): DateResult | null;
    get sexType(): Sex;
    get mobileDocument(): MobileDocumentResult | null;
    /**
     * The additional information extracted from a mobile document using optical character recognition (OCR).
     * Returns null if not available.
     */
    get mobileDocumentOcr(): MobileDocumentOCRResult | null;
    get verificationResult(): VerificationResult;
    get rejectionDiagnosticJSON(): string;
    get anonymizedFields(): IdFieldType[];
    isAnonymized(field: IdFieldType): boolean;
}
interface PrivateCapturedId {
    fromJSON(json: CapturedIdJSON): CapturedId;
}

declare enum MobileDocumentDataElement {
    FamilyName = "familyName",
    GivenName = "givenName",
    BirthDate = "birthDate",
    IssueDate = "issueDate",
    ExpiryDate = "expiryDate",
    IssuingCountry = "issuingCountry",
    IssuingAuthority = "issuingAuthority",
    DocumentNumber = "documentNumber",
    Portrait = "portrait",
    DrivingPrivileges = "drivingPrivileges",
    AdministrativeNumber = "administrativeNumber",
    SexIso = "sexIso",
    Height = "height",
    Weight = "weight",
    EyeColour = "eyeColour",
    HairColour = "hairColour",
    BirthPlace = "birthPlace",
    ResidentAddress = "residentAddress",
    IssuingJurisdiction = "issuingJurisdiction",
    Nationality = "nationality",
    NameSuffix = "nameSuffix",
    FamilyNameTruncation = "familyNameTruncation",
    GivenNameTruncation = "givenNameTruncation",
    AkaFamilyName = "akaFamilyName",
    AkaGivenName = "akaGivenName",
    AkaSuffix = "akaSuffix",
    WeightRange = "weightRange",
    RaceEthnicity = "raceEthnicity",
    ResidentCounty = "residentCounty",
    SexAamva = "sexAamva",
    AamvaVersion = "aamvaVersion"
}

interface IdCaptureListener {
    didCaptureId?(idCapture: IdCapture, capturedId: CapturedId): void;
    didRejectId?(idCapture: IdCapture, rejectedId: CapturedId | null, reason: RejectionReason): void;
}

interface PhysicalDocumentScanner {
}

declare class MobileDocumentScanner extends DefaultSerializeable {
    private readonly _iso180135;
    private readonly _ocr;
    private readonly _elementsToRetain;
    constructor(iso180135: boolean, ocr: boolean, elementsToRetain?: Set<MobileDocumentDataElement>);
    get iso180135(): boolean;
    get ocr(): boolean;
    get elementsToRetain(): Set<MobileDocumentDataElement>;
}

declare class IdCaptureScanner extends DefaultSerializeable {
    private readonly _physicalDocumentScanner;
    private readonly _mobileDocumentScanner;
    constructor(physicalDocumentScanner?: PhysicalDocumentScanner, mobileDocumentScanner?: MobileDocumentScanner);
    get physicalDocument(): PhysicalDocumentScanner | null;
    get mobileDocument(): MobileDocumentScanner | null;
}

declare class SingleSideScanner extends DefaultSerializeable implements PhysicalDocumentScanner {
    protected readonly _barcode: boolean;
    protected readonly _machineReadableZone: boolean;
    protected readonly _visualInspectionZone: boolean;
    private readonly _isFull;
    private options;
    constructor(barcode: boolean, machineReadableZone: boolean, visualInspectionZone: boolean);
    get barcode(): boolean;
    get machineReadableZone(): boolean;
    get visualInspectionZone(): boolean;
}

declare class FullDocumentScanner extends DefaultSerializeable implements PhysicalDocumentScanner {
    protected readonly _barcode: boolean;
    protected readonly _machineReadableZone: boolean;
    protected readonly _visualInspectionZone: boolean;
    private readonly _isFull;
    private options;
    constructor();
}

declare class IdCaptureSettings extends DefaultSerializeable {
    anonymizationMode: IdAnonymizationMode;
    anonymizeDefaultFields: boolean;
    rejectVoidedIds: boolean;
    decodeBackOfEuropeanDrivingLicense: boolean;
    acceptedDocuments: IdCaptureDocument[];
    rejectedDocuments: IdCaptureDocument[];
    scanner: IdCaptureScanner;
    rejectExpiredIds: boolean;
    rejectIdsExpiringIn: Duration | null;
    rejectNotRealIdCompliant: boolean;
    rejectForgedAamvaBarcodes: boolean;
    rejectInconsistentData: boolean;
    rejectHolderBelowAge: number | null;
    private properties;
    private imageToResult;
    private anonymizationMap;
    constructor();
    private static get idCaptureDefaults();
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    setShouldPassImageTypeToResult(type: IdImageType, shouldPass: boolean): void;
    getShouldPassImageTypeToResult(type: IdImageType): boolean;
    addAnonymizedField(document: IdCaptureDocument, fieldType: IdFieldType): void;
}

declare class IdCaptureFeedback extends DefaultSerializeable {
    private controller;
    static get defaultFeedback(): IdCaptureFeedback;
    private _idCaptured;
    get idCaptured(): Feedback;
    set idCaptured(idCaptured: Feedback);
    private _idRejected;
    get idRejected(): Feedback;
    set idRejected(idRejected: Feedback);
    static get defaultSuccessSound(): Sound;
    static get defaultFailureSound(): Sound;
    private static fromJSON;
    private static get idDefaults();
    private constructor();
    private updateFeedback;
}
interface PrivateIdCaptureFeedback {
    controller: IdCaptureController;
    fromJSON(json: IdCaptureFeedbackJSON): IdCaptureFeedback;
}
interface IdCaptureFeedbackJSON {
    idCaptured: Feedback;
    idRejected: Feedback;
    idCaptureTimeout: Feedback;
}

declare class IdCapture extends DefaultSerializeable implements DataCaptureMode {
    protected parentId: number | null;
    private type;
    private modeId;
    private settings;
    get context(): DataCaptureContext | null;
    get feedback(): IdCaptureFeedback;
    set feedback(feedback: IdCaptureFeedback);
    private _isEnabled;
    private _externalTransactionId;
    private _feedback;
    private privateContext;
    private listeners;
    private _hasListeners;
    private controller;
    private listenerController;
    private isInListenerCallback;
    static createRecommendedCameraSettings(): CameraSettings;
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    get externalTransactionId(): string | null;
    set externalTransactionId(externalTransactionId: string | null);
    private get _context();
    private set _context(value);
    private static get idCaptureDefaults();
    constructor(settings: IdCaptureSettings);
    applySettings(settings: IdCaptureSettings): Promise<void>;
    addListener(listener: IdCaptureListener): Promise<void>;
    removeListener(listener: IdCaptureListener): Promise<void>;
    reset(): Promise<void>;
}
interface PrivateIdCapture extends PrivateDataCaptureMode {
    _context: DataCaptureContext | null;
    listeners: IdCaptureListener[];
    parentId: number | null;
}

/**
 * ID module - identity document scanning and verification
 * Generated from schema definition.
 *
 * Single entry point interface - all operations go through $executeId.
 * The IdController handles method-specific logic and calls this proxy.
 * The NativeProxy automatically handles the `$` prefix for native method calls.
 */
interface IdProxy extends BaseProxy {
    /**
     * Single entry point for all Id operations.
     * Routes to appropriate native command based on moduleName and methodName.
     *
     * @param params Object containing:
     *   - moduleName: The name of the module to execute against
     *   - methodName: The name of the method to execute
     *   - ...other parameters specific to the method
     *
     * @returns Promise resolving to the result (type depends on methodName)
     *
     * Note: This method is called with the `$` prefix ($executeId) which is
     * automatically handled by NativeProxy to route to native implementation.
     */
    $executeId(params: {
        moduleName: string;
        methodName: string;
        [key: string]: any;
    }): Promise<any>;
}

declare class IdCaptureController extends BaseController<IdProxy> {
    private idCapture;
    private adapter;
    constructor(idCapture?: IdCapture | null);
    reset(): Promise<void>;
    setModeEnabledState(enabled: boolean): Promise<void>;
    updateIdCaptureMode(): Promise<void>;
    applyIdCaptureModeSettings(newSettings: IdCaptureSettings): Promise<void>;
    updateFeedback(feedback: IdCaptureFeedback): Promise<void>;
    private get modeId();
}

declare enum IdCaptureListenerEvents {
    didCapture = "IdCaptureListener.didCaptureId",
    didReject = "IdCaptureListener.didRejectId"
}
declare class IdCaptureListenerController extends BaseController<IdProxy> {
    private idCapture;
    private adapter;
    private hasListeners;
    constructor(idCapture: IdCapture);
    subscribeListener(): Promise<void>;
    unsubscribeListener(): Promise<void>;
    dispose(): void;
    private initialize;
    private handleDidCapture;
    private handleDidReject;
    private notifyListenersOfDidCapture;
    private notifyListenersOfDidReject;
    private enrichCapturedIdJson;
    private get modeId();
    private handleDidCaptureWrapper;
    private handleDidRejectWrapper;
}

declare class IdCaptureOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private controller;
    private _view;
    private modeId;
    private get view();
    private set view(value);
    private _idLayoutStyle;
    private _idLayoutLineStyle;
    private _textHintPosition;
    private _showTextHints;
    private static get idCaptureDefaults();
    static get defaultIdLayoutStyle(): IdLayoutStyle;
    static get defaultIdLayoutLineStyle(): IdLayoutLineStyle;
    private _defaultCapturedBrush;
    private _defaultLocalizedBrush;
    private _defaultRejectedBrush;
    private _capturedBrush;
    private _localizedBrush;
    private _rejectedBrush;
    private _frontSideTextHint;
    private _backSideTextHint;
    constructor(mode: IdCapture);
    setFrontSideTextHint(text: string): void;
    setBackSideTextHint(text: string): void;
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
    get textHintPosition(): TextHintPosition;
    set textHintPosition(position: TextHintPosition);
    get showTextHints(): boolean;
    set showTextHints(enabled: boolean);
}

declare class IdCaptureOverlayController extends BaseController<IdProxy> {
    private overlay;
    private adapter;
    constructor(overlay: IdCaptureOverlay);
    updateIdCaptureOverlay(overlay: IdCaptureOverlay): Promise<void>;
    dispose(): void;
}

declare const ID_PROXY_TYPE_NAMES: readonly ["IdProxy"];
type IdProxyType = (typeof ID_PROXY_TYPE_NAMES)[number];
interface IdNativeCallerProvider extends NativeCallerProvider<IdProxyType> {
}

declare function registerIdProxies(provider: IdNativeCallerProvider): void;

export { AamvaBarcodeVerificationResult, AamvaBarcodeVerificationStatus, BarcodeResult, CapturedId, CapturedSides, DataConsistencyCheck, DataConsistencyResult, DateResult, DriverLicense, DrivingLicenseCategory, DrivingLicenseDetails, Duration, FullDocumentScanner, HealthInsuranceCard, ID_PROXY_TYPE_NAMES, IdAnonymizationMode, IdCapture, IdCaptureController, IdCaptureDocumentType, IdCaptureFeedback, IdCaptureListenerController, IdCaptureListenerEvents, IdCaptureOverlay, IdCaptureOverlayController, IdCaptureRegion, IdCaptureScanner, IdCaptureSettings, IdCard, IdFieldType, IdImageType, IdImages, IdLayoutLineStyle, IdLayoutStyle, IdSide, MRZResult, MobileDocumentDataElement, MobileDocumentOCRResult, MobileDocumentResult, MobileDocumentScanner, Passport, ProfessionalDrivingPermit, RegionSpecific, RegionSpecificSubtype, RejectionReason, ResidencePermit, Sex, SingleSideScanner, TextHintPosition, UsRealIdStatus, VIZResult, VehicleRestriction, VerificationResult, VisaIcao, ensureIdDefaults, getIdDefaults, loadIdDefaults, parseIdDefaults, registerIdProxies, setIdDefaultsLoader };
export type { AamvaBarcodeVerificationResultJSON, BarcodeResultJSON, CapturedIdJSON, CommonIdFieldsJSON, DataConsistencyResultJSON, DateResultJSON, DrivingLicenseCategoryJSON, DrivingLicenseDetailsJSON, DurationJSON, IdCaptureDocument, IdCaptureFeedbackJSON, IdCaptureListener, IdDefaults, IdNativeCallerProvider, IdProxyType, ImageInfoJSON, ImageJSON, MRZResultJSON, MobileDocumentOCRResultJSON, MobileDocumentResultJSON, NfcResultJSON, PhysicalDocumentScanner, PrivateBarcodeResult, PrivateCapturedId, PrivateDataConsistencyResult, PrivateDateResult, PrivateDrivingLicenseCategory, PrivateDrivingLicenseDetails, PrivateDuration, PrivateIdCapture, PrivateIdCaptureFeedback, PrivateIdImages, PrivateMRZResult, PrivateMobileDocumentOCRResult, PrivateMobileDocumentResult, PrivateProfessionalDrivingPermit, PrivateVIZResult, PrivateVehicleRestriction, PrivateVerificationResult, ProfessionalDrivingPermitJSON, VIZResultJSON, VehicleRestrictionJSON, VerificationResultJSON };
