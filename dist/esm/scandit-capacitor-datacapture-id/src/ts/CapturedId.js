var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Quadrilateral } from '../../../scandit-capacitor-datacapture-core/src/ts/Common';
import { ignoreFromSerialization } from '../../../scandit-capacitor-datacapture-core/src/ts/Serializeable';
import { IdCaptureProxy } from './Capacitor/IdCaptureProxy';
export class DateResult {
    get day() { return this.json.day; }
    get month() { return this.json.month; }
    get year() { return this.json.year; }
    static fromJSON(json) {
        if (json === null) {
            return null;
        }
        const dateResult = new DateResult();
        dateResult.json = json;
        return dateResult;
    }
}
export class ProfessionalDrivingPermit {
    get dateOfExpiry() {
        return DateResult.fromJSON(this.json.dateOfExpiry);
    }
    get codes() { return this.json.codes; }
    static fromJSON(json) {
        if (json === null) {
            return null;
        }
        const object = new ProfessionalDrivingPermit();
        object.json = json;
        return object;
    }
}
export class VehicleRestriction {
    get vehicleCode() { return this.json.vehicleCode; }
    get vehicleRestriction() { return this.json.vehicleRestriction; }
    get dateOfIssue() {
        return DateResult.fromJSON(this.json.dateOfIssue);
    }
    static fromJSON(json) {
        if (json === null) {
            return null;
        }
        const object = new VehicleRestriction();
        object.json = json;
        return object;
    }
}
class CommonCapturedIdFields {
    get firstName() { return this.json.firstName; }
    get lastName() { return this.json.lastName; }
    get fullName() { return this.json.fullName; }
    get sex() { return this.json.sex; }
    get dateOfBirth() {
        return DateResult.fromJSON(this.json.dateOfBirth);
    }
    get nationality() { return this.json.nationality; }
    get address() { return this.json.address; }
    get documentType() { return this.json.documentType; }
    get documentNumber() { return this.json.documentNumber; }
    get issuingCountry() { return this.json.issuingCountry; }
    get issuingCountryIso() { return this.json.issuingCountryIso; }
    get dateOfExpiry() {
        return DateResult.fromJSON(this.json.dateOfExpiry);
    }
    get dateOfIssue() {
        return DateResult.fromJSON(this.json.dateOfIssue);
    }
    static fromJSON(json) {
        if (json === null) {
            return null;
        }
        const object = new CommonCapturedIdFields();
        object.json = json;
        return object;
    }
}
export class CapturedId {
    get firstName() { return this.commonCapturedFields.firstName; }
    get lastName() { return this.commonCapturedFields.lastName; }
    get fullName() { return this.commonCapturedFields.fullName; }
    get sex() { return this.commonCapturedFields.sex; }
    get dateOfBirth() {
        return DateResult.fromJSON(this.commonCapturedFields.dateOfBirth);
    }
    get nationality() { return this.commonCapturedFields.nationality; }
    get address() { return this.commonCapturedFields.address; }
    get capturedResultType() { return this.json.capturedResultType; }
    get capturedResultTypes() {
        return this.json.capturedResultTypes;
    }
    get documentType() { return this.commonCapturedFields.documentType; }
    get issuingCountryIso() { return this.commonCapturedFields.issuingCountryIso; }
    get issuingCountry() { return this.commonCapturedFields.issuingCountry; }
    get documentNumber() { return this.commonCapturedFields.documentNumber; }
    get dateOfExpiry() {
        return DateResult.fromJSON(this.commonCapturedFields.dateOfExpiry);
    }
    get dateOfIssue() {
        return DateResult.fromJSON(this.commonCapturedFields.dateOfIssue);
    }
    get aamvaBarcodeResult() {
        if (this._aamvaBarcodeResult == null && this.json.aamvaBarcodeResult != null) {
            this._aamvaBarcodeResult = AAMVABarcodeResult.
                fromJSON(this.json.aamvaBarcodeResult);
        }
        return this._aamvaBarcodeResult;
    }
    get argentinaIdBarcodeResult() {
        if (this._argentinaIdBarcodeResult == null && this.json.argentinaIdBarcodeResult != null) {
            this._argentinaIdBarcodeResult = ArgentinaIdBarcodeResult.
                fromJSON(this.json.argentinaIdBarcodeResult);
        }
        return this._argentinaIdBarcodeResult;
    }
    get colombiaIdBarcodeResult() {
        if (this._colombiaIdBarcodeResult == null && this.json.colombiaIdBarcodeResult != null) {
            this._colombiaIdBarcodeResult = ColombiaIdBarcodeResult.
                fromJSON(this.json.colombiaIdBarcodeResult);
        }
        return this._colombiaIdBarcodeResult;
    }
    get mrzResult() {
        if (this._mrzResult == null && this.json.mrzResult != null) {
            this._mrzResult = MRZResult.fromJSON(this.json.mrzResult);
        }
        return this._mrzResult;
    }
    get southAfricaIdBarcodeResult() {
        if (this._southAfricaIdBarcodeResult == null && this.json.southAfricaIdBarcodeResult != null) {
            this._southAfricaIdBarcodeResult = SouthAfricaIdBarcodeResult.
                fromJSON(this.json.southAfricaIdBarcodeResult);
        }
        return this._southAfricaIdBarcodeResult;
    }
    get southAfricaDlBarcodeResult() {
        if (this._southAfricaDlBarcodeResult == null && this.json.southAfricaDlBarcodeResult != null) {
            this._southAfricaDlBarcodeResult = SouthAfricaDlBarcodeResult.
                fromJSON(this.json.southAfricaDlBarcodeResult);
        }
        return this._southAfricaDlBarcodeResult;
    }
    get usUniformedServicesBarcodeResult() {
        if (this._usUniformedServicesBarcodeResult == null && this.json.usUniformedServicesBarcodeResult != null) {
            const fromJSON = USUniformedServicesBarcodeResult.fromJSON;
            this._usUniformedServicesBarcodeResult = fromJSON(this.json.usUniformedServicesBarcodeResult);
        }
        return this._usUniformedServicesBarcodeResult;
    }
    get vizResult() {
        if (this._vizResult == null && this.json.vizResult != null) {
            this._vizResult = VIZResult.fromJSON(this.json.vizResult);
        }
        return this._vizResult;
    }
    static fromJSON(json) {
        const result = new CapturedId();
        result.json = json;
        if (json.aamvaBarcodeResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.aamvaBarcodeResult);
        }
        if (json.argentinaIdBarcodeResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.argentinaIdBarcodeResult);
        }
        if (json.colombiaIdBarcodeResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.colombiaIdBarcodeResult);
        }
        if (json.mrzResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.mrzResult);
        }
        if (json.southAfricaIdBarcodeResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.southAfricaIdBarcodeResult);
        }
        if (json.southAfricaDlBarcodeResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.southAfricaDlBarcodeResult);
        }
        if (json.usUniformedServicesBarcodeResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.usUniformedServicesBarcodeResult);
        }
        if (json.vizResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.vizResult);
        }
        return result;
    }
    idImageOfType(type) {
        if (this.json.imageInfo === null) {
            return null;
        }
        return this.json.imageInfo[type];
    }
}
export class AAMVABarcodeResult {
    get aamvaVersion() { return this.json.aamvaVersion; }
    get aliasFamilyName() { return this.json.aliasFamilyName; }
    get aliasGivenName() { return this.json.aliasGivenName; }
    get aliasSuffixName() { return this.json.aliasSuffixName; }
    get driverNamePrefix() { return this.json.driverNamePrefix; }
    get driverNameSuffix() { return this.json.driverNameSuffix; }
    get endorsementsCode() { return this.json.endorsementsCode; }
    get eyeColor() { return this.json.eyeColor; }
    get firstNameTruncation() { return this.json.firstNameTruncation; }
    get hairColor() { return this.json.hairColor; }
    get heightCm() { return this.json.heightCm; }
    get heightInch() { return this.json.heightInch; }
    get iIN() { return this.json.iin; }
    get issuingJurisdiction() { return this.json.issuingJurisdiction; }
    get issuingJurisdictionIso() { return this.json.issuingJurisdictionIso; }
    get jurisdictionVersion() { return this.json.jurisdictionVersion; }
    get lastNameTruncation() { return this.json.lastNameTruncation; }
    get middleName() { return this.json.middleName; }
    get middleNameTruncation() { return this.json.middleNameTruncation; }
    get placeOfBirth() { return this.json.placeOfBirth; }
    get race() { return this.json.race; }
    get restrictionsCode() { return this.json.restrictionsCode; }
    get vehicleClass() { return this.json.vehicleClass; }
    get weightKg() { return this.json.weightKg; }
    get weightLbs() { return this.json.weightLbs; }
    get cardRevisionDate() {
        return DateResult.fromJSON(this.json.cardRevisionDate);
    }
    get documentDiscriminatorNumber() { return this.json.documentDiscriminatorNumber; }
    get barcodeDataElements() { return this.json.barcodeDataElements; }
    static fromJSON(json) {
        const result = new AAMVABarcodeResult();
        result.json = json;
        return result;
    }
}
export class MRZResult {
    get documentCode() { return this.json.documentCode; }
    get namesAreTruncated() { return this.json.namesAreTruncated; }
    get optional() { return this.json.optional; }
    get optional1() { return this.json.optional1; }
    get capturedMrz() { return this.json.capturedMrz; }
    static fromJSON(json) {
        const result = new MRZResult();
        result.json = json;
        return result;
    }
}
export class USUniformedServicesBarcodeResult {
    get bloodType() { return this.json.bloodType; }
    get branchOfService() { return this.json.branchOfService; }
    get champusEffectiveDate() {
        return DateResult.fromJSON(this.json.champusEffectiveDate);
    }
    get champusExpiryDate() {
        return DateResult.fromJSON(this.json.champusExpiryDate);
    }
    get civilianHealthCareFlagCode() { return this.json.civilianHealthCareFlagCode; }
    get civilianHealthCareFlagDescription() { return this.json.civilianHealthCareFlagDescription; }
    get commissaryFlagCode() { return this.json.commissaryFlagCode; }
    get commissaryFlagDescription() { return this.json.commissaryFlagDescription; }
    get deersDependentSuffixCode() { return this.json.deersDependentSuffixCode; }
    get deersDependentSuffixDescription() { return this.json.deersDependentSuffixDescription; }
    get directCareFlagCode() { return this.json.directCareFlagCode; }
    get directCareFlagDescription() { return this.json.directCareFlagDescription; }
    get exchangeFlagCode() { return this.json.exchangeFlagCode; }
    get exchangeFlagDescription() { return this.json.exchangeFlagDescription; }
    get eyeColor() { return this.json.eyeColor; }
    get familySequenceNumber() { return this.json.familySequenceNumber; }
    get formNumber() { return this.json.formNumber; }
    get genevaConventionCategory() { return this.json.genevaConventionCategory; }
    get hairColor() { return this.json.hairColor; }
    get height() { return this.json.height; }
    get jpegData() { return this.json.jpegData; }
    get mwrFlagCode() { return this.json.mwrFlagCode; }
    get mwrFlagDescription() { return this.json.mwrFlagDescription; }
    get payGrade() { return this.json.payGrade; }
    get personDesignatorDocument() { return this.json.personDesignatorDocument; }
    get rank() { return this.json.rank; }
    get relationshipCode() { return this.json.relationshipCode; }
    get relationshipDescription() { return this.json.relationshipDescription; }
    get securityCode() { return this.json.securityCode; }
    get serviceCode() { return this.json.serviceCode; }
    get sponsorFlag() { return this.json.sponsorFlag; }
    get sponsorName() { return this.json.sponsorName; }
    get sponsorPersonDesignatorIdentifier() {
        return this.json.sponsorPersonDesignatorIdentifier;
    }
    get statusCode() { return this.json.statusCode; }
    get statusCodeDescription() { return this.json.statusCodeDescription; }
    get version() { return this.json.version; }
    get weight() { return this.json.weight; }
    static fromJSON(json) {
        const result = new USUniformedServicesBarcodeResult();
        result.json = json;
        return result;
    }
}
export class VIZResult {
    get additionalAddressInformation() { return this.json.additionalAddressInformation; }
    get additionalNameInformation() { return this.json.additionalNameInformation; }
    get documentAdditionalNumber() { return this.json.documentAdditionalNumber; }
    get employer() { return this.json.employer; }
    get issuingAuthority() { return this.json.issuingAuthority; }
    get issuingJurisdiction() { return this.json.issuingJurisdiction; }
    get issuingJurisdictionIso() { return this.json.issuingJurisdictionIso; }
    get maritalStatus() { return this.json.maritalStatus; }
    get personalIdNumber() { return this.json.personalIdNumber; }
    get placeOfBirth() { return this.json.placeOfBirth; }
    get profession() { return this.json.profession; }
    get race() { return this.json.race; }
    get religion() { return this.json.religion; }
    get residentialStatus() { return this.json.residentialStatus; }
    get capturedSides() { return this.json.capturedSides; }
    get isBackSideCaptureSupported() { return this.json.isBackSideCaptureSupported; }
    static fromJSON(json) {
        const result = new VIZResult();
        result.json = json;
        return result;
    }
}
export class ArgentinaIdBarcodeResult {
    get personalIdNumber() { return this.json.personalIdNumber; }
    get documentCopy() { return this.json.documentCopy; }
    static fromJSON(json) {
        const result = new ArgentinaIdBarcodeResult();
        result.json = json;
        return result;
    }
}
export class ColombiaIdBarcodeResult {
    get bloodType() { return this.json.bloodType; }
    static fromJSON(json) {
        const result = new ColombiaIdBarcodeResult();
        result.json = json;
        return result;
    }
}
export class SouthAfricaIdBarcodeResult {
    get countryOfBirth() { return this.json.countryOfBirth; }
    get countryOfBirthIso() { return this.json.countryOfBirthIso; }
    get citizenshipStatus() { return this.json.citizenshipStatus; }
    get personalIdNumber() { return this.json.personalIdNumber; }
    static fromJSON(json) {
        const result = new SouthAfricaIdBarcodeResult();
        result.json = json;
        return result;
    }
}
export class SouthAfricaDlBarcodeResult {
    get version() { return this.json.version; }
    get licenseCountryOfIssue() { return this.json.licenseCountryOfIssue; }
    get personalIdNumber() { return this.json.personalIdNumber; }
    get personalIdNumberType() { return this.json.personalIdNumberType; }
    get documentCopy() { return this.json.documentCopy; }
    get driverRestrictionCodes() { return this.json.driverRestrictionCodes; }
    get professionalDrivingPermit() {
        return ProfessionalDrivingPermit
            .fromJSON(this.json.professionalDrivingPermit);
    }
    get vehicleRestrictions() {
        return this.json.vehicleRestrictions.map(json => VehicleRestriction.fromJSON(json));
    }
    static fromJSON(json) {
        const result = new SouthAfricaDlBarcodeResult();
        result.json = json;
        return result;
    }
}
export class LocalizedOnlyId {
    get location() {
        return this._location;
    }
    static fromJSON(json) {
        const result = new LocalizedOnlyId();
        result._location = Quadrilateral.fromJSON(json.location);
        return result;
    }
}
export class RejectedId {
    get location() {
        return this._location;
    }
    static fromJSON(json) {
        const result = new RejectedId();
        result._location = Quadrilateral.fromJSON(json.location);
        return result;
    }
}
class StringComparisonCheck {
    get vizValue() { return this.json.vizValue; }
    get aamvaBarcodeValue() { return this.json.aamvaBarcodeValue; }
    get checkResult() { return this.json.checkResult; }
    get resultDescription() { return this.json.resultDescription; }
    static fromJSON(json) {
        const result = new StringComparisonCheck();
        result.json = json;
        return result;
    }
}
class DateComparisonCheck {
    get vizValue() {
        return DateResult.fromJSON(this.json.vizValue);
    }
    get aamvaBarcodeValue() {
        return DateResult.fromJSON(this.json.aamvaBarcodeValue);
    }
    get checkResult() { return this.json.checkResult; }
    get resultDescription() { return this.json.resultDescription; }
    static fromJSON(json) {
        const result = new DateComparisonCheck();
        result.json = json;
        return result;
    }
}
export class AamvaVizBarcodeComparisonResult {
    get checksPassed() { return this.json.checksPassed; }
    get resultDescription() { return this.json.resultDescription; }
    get issuingCountryIsoMatch() {
        return StringComparisonCheck
            .fromJSON(this.json.issuingCountryIsoMatch);
    }
    get issuingJurisdictionIsoMatch() {
        return StringComparisonCheck
            .fromJSON(this.json.issuingJurisdictionIsoMatch);
    }
    get documentNumbersMatch() {
        return StringComparisonCheck
            .fromJSON(this.json.documentNumbersMatch);
    }
    get fullNamesMatch() {
        return StringComparisonCheck
            .fromJSON(this.json.fullNamesMatch);
    }
    get datesOfBirthMatch() {
        return DateComparisonCheck
            .fromJSON(this.json.datesOfBirth);
    }
    get datesOfExpiryMatch() {
        return DateComparisonCheck
            .fromJSON(this.json.datesOfExpiry);
    }
    get datesOfIssueMatch() {
        return DateComparisonCheck
            .fromJSON(this.json.datesOfIssue);
    }
    static fromJSON(json) {
        const result = new AamvaVizBarcodeComparisonResult();
        result.json = json;
        return result;
    }
}
export class AamvaVizBarcodeComparisonVerifier {
    constructor() {
        this.proxy = new IdCaptureProxy();
    }
    static create() {
        return new AamvaVizBarcodeComparisonVerifier();
    }
    verify(capturedId) {
        return new Promise((resolve, reject) => {
            this.proxy
                .verifyCapturedId(JSON.stringify(capturedId))
                .then((json) => {
                if (!json) {
                    resolve();
                }
                else {
                    resolve(AamvaVizBarcodeComparisonResult
                        .fromJSON(JSON.parse(json.result)));
                }
            }, reject);
        });
    }
}
__decorate([
    ignoreFromSerialization
], AamvaVizBarcodeComparisonVerifier.prototype, "proxy", void 0);
//# sourceMappingURL=CapturedId.js.map