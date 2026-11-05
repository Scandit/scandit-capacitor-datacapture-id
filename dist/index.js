import { nameForSerialization, LogLevel, LogCategory, ScanditLogger, ignoreFromSerializationIfNull, DefaultSerializeable, FactoryMaker, Feedback, ignoreFromSerialization, ModeBase, ListenerRegistry, CameraSettings, Brush, Sound, Color, BaseController, registerProxies } from 'scandit-capacitor-datacapture-core/dist/core';
import { Capacitor as Capacitor$1, registerPlugin } from '@capacitor/core';
import { CapacitorCore, capacitorExec, CapacitorNativeCaller } from 'scandit-capacitor-datacapture-core';

/**
 * A date extracted from a personal identification document. May represent either a full date (day, month, year), just a month and a year or just a year.
 *
 * @since 6.14.0
 */
class DateResult {
    /**
     * Constructs a new instance of this class from an optional day, optional month and a year.
     *
     * @since 8.3.0
     */
    constructor(day, month, year) {
        this._day = day !== null && day !== void 0 ? day : 1;
        this._month = month !== null && month !== void 0 ? month : 1;
        this._year = year;
    }
    /**
     * The extracted day of the month or 0 if this result represents a month and a year only.
     *
     * @since 6.14.0
     */
    get day() {
        return this._day;
    }
    /**
     * A number from 1 to 12 representing the extracted month, where 1 represents January, 2 - February and so on or 0 if the results represents a year only.
     *
     * @since 6.14.0
     */
    get month() {
        return this._month;
    }
    /**
     * The extracted year.
     *
     * @since 6.14.0
     */
    get year() {
        return this._year;
    }
    /**
     * A Date corresponding to this DateResult using the local timezone. If the day information is missing, it is set to the 1st day of the month, if the month information is missing, it is set to the 1st month of the year
     *
     * @since 6.21.0
     */
    get localDate() {
        return new Date(this._year, this._month - 1, this._day);
    }
    /**
     * A Date corresponding to this DateResult. The timezone is set to UTC, the time to midnight. If the day information is missing, it is set to the 1st day of the month, if the month information is missing, it is set to the 1st month of the year.
     *
     * @since 6.21.0
     */
    get utcDate() {
        return new Date(Date.UTC(this._year, this._month - 1, this._day));
    }
    static fromJSON(json) {
        var _a, _b;
        if (json === null || json === undefined) {
            return null;
        }
        const dateResult = new DateResult((_a = json.day) !== null && _a !== void 0 ? _a : null, (_b = json.month) !== null && _b !== void 0 ? _b : null, json.year);
        return dateResult;
    }
}

/**
 * The verification status returned by the barcode verifier
 *
 * @since 8.0.0
 */
var DataConsistencyCheck;
(function (DataConsistencyCheck) {
    /**
     * Comparison of issuing country between zones
     *
     * @since 8.0.0
     */
    DataConsistencyCheck["IssuingCountryComparison"] = "issuingCountryComparison";
    /**
     * Comparison of issuing jurisdiction between zones
     *
     * @since 8.0.0
     */
    DataConsistencyCheck["IssuingJurisdictionComparison"] = "issuingJurisdictionComparison";
    /**
     * Comparison of full name between zones
     *
     * @since 8.0.0
     */
    DataConsistencyCheck["FullNameComparison"] = "fullNameComparison";
    /**
     * Comparison of document number between zones
     *
     * @since 8.0.0
     */
    DataConsistencyCheck["DocumentNumberComparison"] = "documentNumberComparison";
    /**
     * Comparison of date of birth between zones
     *
     * @since 8.0.0
     */
    DataConsistencyCheck["DateOfBirthComparison"] = "dateOfBirthComparison";
    /**
     * Comparison of date of expiry between zones
     *
     * @since 8.0.0
     */
    DataConsistencyCheck["DateOfExpiryComparison"] = "dateOfExpiryComparison";
    /**
     * Comparison of date of issue between zones
     *
     * @since 8.0.0
     */
    DataConsistencyCheck["DateOfIssueComparison"] = "dateOfIssueComparison";
})(DataConsistencyCheck || (DataConsistencyCheck = {}));

/**
 * This enum specifies what type of anonymization should be applied. Note: This only affects specific fields on certain documents.
 *
 * @since 6.21.0
 */
var IdAnonymizationMode;
(function (IdAnonymizationMode) {
    /**
     * No Anonymization, the result will contain all data.
     *
     * @since 6.21.0
     */
    IdAnonymizationMode["None"] = "none";
    /**
     * Sensitive data is removed from result fields.
     *
     * @since 6.21.0
     */
    IdAnonymizationMode["FieldsOnly"] = "fieldsOnly";
    /**
     * Black boxes cover sensitive data in result images. Note: Frame anonymization requires that relevant fields are successfully captured by the SDK. For Visual Inspection Zone (VIZ) data anonymization, IdImageType.CroppedDocument must be enabled.
     *
     * @since 6.21.0
     */
    IdAnonymizationMode["ImagesOnly"] = "imagesOnly";
    /**
     * A combination of ImagesOnly and FieldsOnly modes. Note: Frame anonymization requires that relevant fields are successfully captured by the SDK. For Visual Inspection Zone (VIZ) data anonymization, IdImageType.CroppedDocument must be enabled.
     *
     * @since 6.21.0
     */
    IdAnonymizationMode["FieldsAndImages"] = "fieldsAndImages";
})(IdAnonymizationMode || (IdAnonymizationMode = {}));

/**
 * Possible image types that can be extracted from a recognized document.
 *
 * @since 6.14.0
 */
var IdImageType;
(function (IdImageType) {
    /**
     * A photo of the document’s holder.
     *
     * @since 6.14.0
     */
    IdImageType["Face"] = "face";
    /**
     * A cropped image of the document.
     *
     * @since 7.0.0
     */
    IdImageType["CroppedDocument"] = "croppedDocument";
    /**
     * An image of the full frame the document was captured on.
     *
     * @since 7.0.0
     */
    IdImageType["Frame"] = "frame";
})(IdImageType || (IdImageType = {}));

/**
 * Sides of a personal identification document scanned by ID Capture.
 *
 * @since 6.14.0
 */
var CapturedSides;
(function (CapturedSides) {
    /**
     * Only the front side of a document.
     *
     * @since 6.14.0
     */
    CapturedSides["FrontOnly"] = "frontOnly";
    /**
     * Both the front and the back side of a document.
     *
     * @since 6.14.0
     */
    CapturedSides["FrontAndBack"] = "frontAndBack";
})(CapturedSides || (CapturedSides = {}));

/**
 * Sets the position of the textual hints.
 *
 * @since 6.23.0
 */
var TextHintPosition;
(function (TextHintPosition) {
    /**
     * Places the text hint above viewfinder.
     *
     * @since 6.23.0
     */
    TextHintPosition["AboveViewfinder"] = "aboveViewfinder";
    /**
     * Places the text hint below viewfinder.
     *
     * @since 6.23.0
     */
    TextHintPosition["BelowViewfinder"] = "belowViewfinder";
})(TextHintPosition || (TextHintPosition = {}));

/**
 * Possible reasons why a document can be rejected.
 *
 * When multiple rejection conditions apply, only the highest-priority reason is reported. The evaluation order, from highest to lowest priority, is:
 *
 * 1. {@link RejectionReason.NotAcceptedDocumentType} — document is in the rejected list
 * 2. {@link RejectionReason.NotAcceptedDocumentType} — document is not in the accepted list
 * 3. {@link RejectionReason.ForgedAamvaBarcode}
 * 4. {@link RejectionReason.NotRealIdCompliant}
 * 5. {@link RejectionReason.InconsistentData}
 * 6. {@link RejectionReason.HolderUnderage}
 * 7. {@link RejectionReason.DocumentExpired}
 * 8. {@link RejectionReason.DocumentExpiresSoon}
 * 9. {@link RejectionReason.Timeout}
 * 10. {@link RejectionReason.DocumentVoided}, {@link RejectionReason.InvalidFormat}, and others
 *
 * Although {@link RejectionReason.InvalidFormat} has the lowest priority in the evaluation order, it arises when a document cannot be parsed at all. In that case, document type and authenticity cannot be determined, so higher-priority reasons are not applicable in practice.
 *
 * For two-sided documents, {@link RejectionReason.InconsistentData} is only evaluated after both sides have been captured. If the front side triggers a rejection — such as {@link RejectionReason.HolderUnderage}, {@link RejectionReason.DocumentExpired}, or {@link RejectionReason.DocumentExpiresSoon} — the back side is not scanned and {@link RejectionReason.InconsistentData} is never evaluated, even though it ranks higher in the precedence order.
 *
 * @since 6.25.0
 */
var RejectionReason;
(function (RejectionReason) {
    /**
     * The type of the presented document is not enabled in the settings.
     *
     * @since 6.25.0
     */
    RejectionReason["NotAcceptedDocumentType"] = "notAcceptedDocumentType";
    /**
     * The document format is incorrect.
     *
     * @since 6.25.0
     */
    RejectionReason["InvalidFormat"] = "invalidFormat";
    /**
     * The document is voided.
     *
     * @since 6.25.0
     */
    RejectionReason["DocumentVoided"] = "documentVoided";
    /**
     * The capture process resulted in a timeout.
     *
     * @since 7.0.0
     */
    RejectionReason["Timeout"] = "timeout";
    /**
     * The capture process resulted in no result. This reason is only used in conjunction with a single image frame source. ID Capture is automatically :meth:id.IdCapture.Reset when this rejection happens. Currently only used by the Web platform
     *
     * @since 7.0.0
     */
    RejectionReason["SingleImageNotRecognized"] = "singleImageNotRecognized";
    /**
     * The document is expired.
     *
     * @since 7.1.0
     */
    RejectionReason["DocumentExpired"] = "documentExpired";
    /**
     * The document will expire soon.
     *
     * @since 7.1.0
     */
    RejectionReason["DocumentExpiresSoon"] = "documentExpiresSoon";
    /**
     * The document is not REAL ID compliant.
     *
     * @since 7.1.0
     */
    RejectionReason["NotRealIdCompliant"] = "notRealIdCompliant";
    /**
     * The document’s holder is underage.
     *
     * @since 7.1.0
     */
    RejectionReason["HolderUnderage"] = "holderUnderage";
    /**
     * The document has a forged AAMVA barcode.
     *
     * @since 7.1.0
     */
    RejectionReason["ForgedAamvaBarcode"] = "forgedAamvaBarcode";
    /**
     * The document has inconsistent data.
     *
     * @since 7.1.0
     */
    RejectionReason["InconsistentData"] = "inconsistentData";
    /**
     * An error occurred while retrieving the document data via Bluetooth.
     *
     * @since 7.5.0
     */
    RejectionReason["BluetoothCommunicationError"] = "bluetoothCommunicationError";
    /**
     * Bluetooth is not supported, disabled, or missing required permissions on your device.
     *
     * @since 7.5.0
     */
    RejectionReason["BluetoothUnavailable"] = "bluetoothUnavailable";
    /**
     * A request to the cloud failed. The service may be temporarily unavailable.
     *
     * @since 8.7.0
     */
    RejectionReason["CloudRequestFailed"] = "cloudRequestFailed";
    /**
     * The cloud manipulation check flagged the document as manipulated.
     *
     * @since 8.7.0
     */
    RejectionReason["ManipulatedDocument"] = "manipulatedDocument";
})(RejectionReason || (RejectionReason = {}));

/**
 * Represents geographical regions associated with identification documents. This class is used to specify regions for various purposes, such as filtering captured documents or indicating where a document was issued. Regions include specific countries, broader areas and the generalized option “Any”.
 *
 * @since 7.0.0
 */
var IdCaptureRegion;
(function (IdCaptureRegion) {
    /**
     * Any Region.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Any"] = "any";
    /**
     * Any country contained in EU or Schengen Area, for simplicity this also includes the following states: {@link IdCaptureRegion.Andorra}, {@link IdCaptureRegion.Monaco}, {@link IdCaptureRegion.SanMarino}, {@link IdCaptureRegion.HolySee}. Note that this region does not include the {@link IdCaptureRegion.Uk}.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["EuAndSchengen"] = "euAndSchengen";
    /**
     * Aruba.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Aruba"] = "aruba";
    /**
     * Afghanistan.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Afghanistan"] = "afghanistan";
    /**
     * Angola.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Angola"] = "angola";
    /**
     * Anguilla.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Anguilla"] = "anguilla";
    /**
     * Åland Islands.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["AlandIslands"] = "alandIslands";
    /**
     * Albania.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Albania"] = "albania";
    /**
     * Andorra.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Andorra"] = "andorra";
    /**
     * United Arab Emirates.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Uae"] = "uae";
    /**
     * Argentina.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Argentina"] = "argentina";
    /**
     * Armenia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Armenia"] = "armenia";
    /**
     * American Samoa.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["AmericanSamoa"] = "americanSamoa";
    /**
     * Antarctica.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Antarctica"] = "antarctica";
    /**
     * French Southern Territories.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["FrenchSouthernTerritories"] = "frenchSouthernTerritories";
    /**
     * Antigua and Barbuda.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["AntiguaAndBarbuda"] = "antiguaAndBarbuda";
    /**
     * Australia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Australia"] = "australia";
    /**
     * Austria.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Austria"] = "austria";
    /**
     * Azerbaijan.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Azerbaijan"] = "azerbaijan";
    /**
     * Burundi.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Burundi"] = "burundi";
    /**
     * Belgium.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Belgium"] = "belgium";
    /**
     * Benin.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Benin"] = "benin";
    /**
     * Bonaire, Sint Eustatius and Saba.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["BonaireSintEustatiusAndSaba"] = "bonaireSintEustatiusAndSaba";
    /**
     * Burkina Faso.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["BurkinaFaso"] = "burkinaFaso";
    /**
     * Bangladesh.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Bangladesh"] = "bangladesh";
    /**
     * Bulgaria.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Bulgaria"] = "bulgaria";
    /**
     * Bahrain.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Bahrain"] = "bahrain";
    /**
     * Bahamas.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Bahamas"] = "bahamas";
    /**
     * Bosnia and Herzegovina.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["BosniaHerzegovina"] = "bosniaHerzegovina";
    /**
     * Saint Barthélemy.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SaintBarthelemy"] = "saintBarthelemy";
    /**
     * Belarus.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Belarus"] = "belarus";
    /**
     * Belize.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Belize"] = "belize";
    /**
     * Bermuda.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Bermuda"] = "bermuda";
    /**
     * Bolivia, Plurinational State of.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Bolivia"] = "bolivia";
    /**
     * Brazil.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Brazil"] = "brazil";
    /**
     * Barbados.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Barbados"] = "barbados";
    /**
     * Brunei Darussalam.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["BruneiDarussalam"] = "bruneiDarussalam";
    /**
     * Bhutan.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Bhutan"] = "bhutan";
    /**
     * Bouvet Island.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["BouvetIsland"] = "bouvetIsland";
    /**
     * Botswana.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Botswana"] = "botswana";
    /**
     * Central African Republic.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Car"] = "car";
    /**
     * Canada.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Canada"] = "canada";
    /**
     * Cocos (Keeling) Islands.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["CocosIslands"] = "cocosIslands";
    /**
     * Switzerland.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Switzerland"] = "switzerland";
    /**
     * Chile.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Chile"] = "chile";
    /**
     * China.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["China"] = "china";
    /**
     * Côte d’Ivoire.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["CoteIvoire"] = "coteIvoire";
    /**
     * Cameroon.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Cameroon"] = "cameroon";
    /**
     * Democratic Republic of the Congo.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["DemocraticRepublicOfCongo"] = "democraticRepublicOfCongo";
    /**
     * Congo.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Congo"] = "congo";
    /**
     * Cook Islands.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["CookIslands"] = "cookIslands";
    /**
     * Colombia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Colombia"] = "colombia";
    /**
     * Comoros.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Comoros"] = "comoros";
    /**
     * Cabo Verde.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["CaboVerde"] = "caboVerde";
    /**
     * Costa Rica.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["CostaRica"] = "costaRica";
    /**
     * Cuba.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Cuba"] = "cuba";
    /**
     * Curaçao.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Curacao"] = "curacao";
    /**
     * Christmas Island.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["ChristmasIsland"] = "christmasIsland";
    /**
     * Cayman Islands.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["CaymanIslands"] = "caymanIslands";
    /**
     * Cyprus.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Cyprus"] = "cyprus";
    /**
     * Czechia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Czechia"] = "czechia";
    /**
     * Germany.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Germany"] = "germany";
    /**
     * Djibouti.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Djibouti"] = "djibouti";
    /**
     * Dominica.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Dominica"] = "dominica";
    /**
     * Denmark.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Denmark"] = "denmark";
    /**
     * Dominican Republic.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["DominicanRepublic"] = "dominicanRepublic";
    /**
     * Algeria.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Algeria"] = "algeria";
    /**
     * Ecuador.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Ecuador"] = "ecuador";
    /**
     * Egypt.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Egypt"] = "egypt";
    /**
     * Eritrea.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Eritrea"] = "eritrea";
    /**
     * Western Sahara.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["WesternSahara"] = "westernSahara";
    /**
     * Spain.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Spain"] = "spain";
    /**
     * Estonia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Estonia"] = "estonia";
    /**
     * Ethiopia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Ethiopia"] = "ethiopia";
    /**
     * Finland.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Finland"] = "finland";
    /**
     * Fiji.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Fiji"] = "fiji";
    /**
     * Falkland Islands (Malvinas).
     *
     * @since 7.0.0
     */
    IdCaptureRegion["FalklandIslands"] = "falklandIslands";
    /**
     * France.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["France"] = "france";
    /**
     * Faroe Islands.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["FaroeIslands"] = "faroeIslands";
    /**
     * Micronesia, Federated States of.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Micronesia"] = "micronesia";
    /**
     * Gabon.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Gabon"] = "gabon";
    /**
     * United Kingdom of Great Britain and Northern Ireland.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Uk"] = "uk";
    /**
     * Georgia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Georgia"] = "georgia";
    /**
     * Guernsey.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Guernsey"] = "guernsey";
    /**
     * Ghana.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Ghana"] = "ghana";
    /**
     * Gibraltar.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Gibraltar"] = "gibraltar";
    /**
     * Guinea.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Guinea"] = "guinea";
    /**
     * Guadeloupe.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Guadeloupe"] = "guadeloupe";
    /**
     * Gambia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Gambia"] = "gambia";
    /**
     * Guinea-Bissau.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["GuineaBissau"] = "guineaBissau";
    /**
     * Equatorial Guinea.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["EquatorialGuinea"] = "equatorialGuinea";
    /**
     * Greece.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Greece"] = "greece";
    /**
     * Grenada.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Grenada"] = "grenada";
    /**
     * Greenland.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Greenland"] = "greenland";
    /**
     * Guatemala.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Guatemala"] = "guatemala";
    /**
     * French Guiana.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["FrenchGuiana"] = "frenchGuiana";
    /**
     * Guam.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Guam"] = "guam";
    /**
     * Guyana.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Guyana"] = "guyana";
    /**
     * Hong Kong.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["HongKong"] = "hongKong";
    /**
     * Heard Island and McDonald Islands.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["HeardIslandAndMcDonaldIslands"] = "heardIslandAndMcDonaldIslands";
    /**
     * Honduras.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Honduras"] = "honduras";
    /**
     * Croatia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Croatia"] = "croatia";
    /**
     * Haiti.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Haiti"] = "haiti";
    /**
     * Hungary.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Hungary"] = "hungary";
    /**
     * Indonesia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Indonesia"] = "indonesia";
    /**
     * Isle of Man.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["IsleOfMan"] = "isleOfMan";
    /**
     * India.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["India"] = "india";
    /**
     * British Indian Ocean Territory.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["BritishIndianOceanTerritory"] = "britishIndianOceanTerritory";
    /**
     * Ireland.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Ireland"] = "ireland";
    /**
     * Iran, Islamic Republic of.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Iran"] = "iran";
    /**
     * Iraq.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Iraq"] = "iraq";
    /**
     * Iceland.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Iceland"] = "iceland";
    /**
     * Israel.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Israel"] = "israel";
    /**
     * Italy.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Italy"] = "italy";
    /**
     * Jamaica.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Jamaica"] = "jamaica";
    /**
     * Jersey.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Jersey"] = "jersey";
    /**
     * Jordan.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Jordan"] = "jordan";
    /**
     * Japan.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Japan"] = "japan";
    /**
     * Kazakhstan.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Kazakhstan"] = "kazakhstan";
    /**
     * Kenya.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Kenya"] = "kenya";
    /**
     * Kyrgyzstan.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Kyrgyzstan"] = "kyrgyzstan";
    /**
     * Cambodia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Cambodia"] = "cambodia";
    /**
     * Kiribati.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Kiribati"] = "kiribati";
    /**
     * Saint Kitts and Nevis.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SaintKittsAndNevis"] = "saintKittsAndNevis";
    /**
     * Korea, Republic of.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SouthKorea"] = "southKorea";
    /**
     * Kuwait.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Kuwait"] = "kuwait";
    /**
     * Lao People’s Democratic Republic.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Lao"] = "lao";
    /**
     * Lebanon.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Lebanon"] = "lebanon";
    /**
     * Liberia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Liberia"] = "liberia";
    /**
     * Libya.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Libya"] = "libya";
    /**
     * Saint Lucia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SaintLucia"] = "saintLucia";
    /**
     * Liechtenstein.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Liechtenstein"] = "liechtenstein";
    /**
     * Sri Lanka.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SriLanka"] = "sriLanka";
    /**
     * Lesotho.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Lesotho"] = "lesotho";
    /**
     * Lithuania.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Lithuania"] = "lithuania";
    /**
     * Luxembourg.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Luxembourg"] = "luxembourg";
    /**
     * Latvia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Latvia"] = "latvia";
    /**
     * Macao.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Macao"] = "macao";
    /**
     * Saint Martin (French part).
     *
     * @since 7.0.0
     */
    IdCaptureRegion["FrenchSaintMartin"] = "frenchSaintMartin";
    /**
     * Morocco.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Morocco"] = "morocco";
    /**
     * Monaco.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Monaco"] = "monaco";
    /**
     * Moldova, Republic of.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Moldova"] = "moldova";
    /**
     * Madagascar.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Madagascar"] = "madagascar";
    /**
     * Maldives.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Maldives"] = "maldives";
    /**
     * Mexico.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Mexico"] = "mexico";
    /**
     * Marshall Islands.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["MarshallIslands"] = "marshallIslands";
    /**
     * North Macedonia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["NorthMacedonia"] = "northMacedonia";
    /**
     * Mali.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Mali"] = "mali";
    /**
     * Malta.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Malta"] = "malta";
    /**
     * Myanmar.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Myanmar"] = "myanmar";
    /**
     * Montenegro.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Montenegro"] = "montenegro";
    /**
     * Mongolia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Mongolia"] = "mongolia";
    /**
     * Northern Mariana Islands.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["NorthernMarianaIslands"] = "northernMarianaIslands";
    /**
     * Mozambique.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Mozambique"] = "mozambique";
    /**
     * Mauritania.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Mauritania"] = "mauritania";
    /**
     * Montserrat.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Montserrat"] = "montserrat";
    /**
     * Martinique.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Martinique"] = "martinique";
    /**
     * Mauritius.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Mauritius"] = "mauritius";
    /**
     * Malawi.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Malawi"] = "malawi";
    /**
     * Malaysia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Malaysia"] = "malaysia";
    /**
     * Mayotte.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Mayotte"] = "mayotte";
    /**
     * Namibia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Namibia"] = "namibia";
    /**
     * New Caledonia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["NewCaledonia"] = "newCaledonia";
    /**
     * Niger.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Niger"] = "niger";
    /**
     * Norfolk Island.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["NorfolkIsland"] = "norfolkIsland";
    /**
     * Nigeria.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Nigeria"] = "nigeria";
    /**
     * Nicaragua.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Nicaragua"] = "nicaragua";
    /**
     * Niue.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Niue"] = "niue";
    /**
     * Kingdom of the Netherlands.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Netherlands"] = "netherlands";
    /**
     * Norway.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Norway"] = "norway";
    /**
     * Nepal.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Nepal"] = "nepal";
    /**
     * Nauru.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Nauru"] = "nauru";
    /**
     * New Zealand.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["NewZealand"] = "newZealand";
    /**
     * Oman.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Oman"] = "oman";
    /**
     * Pakistan.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Pakistan"] = "pakistan";
    /**
     * Panama.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Panama"] = "panama";
    /**
     * Pitcairn.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Pitcairn"] = "pitcairn";
    /**
     * Peru.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Peru"] = "peru";
    /**
     * Philippines.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Philippines"] = "philippines";
    /**
     * Palau.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Palau"] = "palau";
    /**
     * Papua New Guinea.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["PapuaNewGuinea"] = "papuaNewGuinea";
    /**
     * Poland.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Poland"] = "poland";
    /**
     * Puerto Rico.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["PuertoRico"] = "puertoRico";
    /**
     * Korea, Democratic People’s Republic of.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["NorthKorea"] = "northKorea";
    /**
     * Portugal.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Portugal"] = "portugal";
    /**
     * Paraguay.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Paraguay"] = "paraguay";
    /**
     * Palestine, State of.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Palestine"] = "palestine";
    /**
     * French Polynesia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["FrenchPolynesia"] = "frenchPolynesia";
    /**
     * Qatar.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Qatar"] = "qatar";
    /**
     * Réunion.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Reunion"] = "reunion";
    /**
     * Romania.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Romania"] = "romania";
    /**
     * Russian Federation.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Russia"] = "russia";
    /**
     * Rwanda.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Rwanda"] = "rwanda";
    /**
     * Saudi Arabia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SaudiArabia"] = "saudiArabia";
    /**
     * Sudan.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Sudan"] = "sudan";
    /**
     * Senegal.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Senegal"] = "senegal";
    /**
     * Singapore.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Singapore"] = "singapore";
    /**
     * South Georgia and the South Sandwich Islands.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SouthGeorgiaAndTheSouthSandwichIslands"] = "southGeorgiaAndTheSouthSandwichIslands";
    /**
     * Saint Helena, Ascension and Tristan da Cunha.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SaintHelena"] = "saintHelena";
    /**
     * Svalbard and Jan Mayen.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SvalbardAndJanMayen"] = "svalbardAndJanMayen";
    /**
     * Solomon Islands.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SolomonIslands"] = "solomonIslands";
    /**
     * Sierra Leone.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SierraLeone"] = "sierraLeone";
    /**
     * El Salvador.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["ElSalvador"] = "elSalvador";
    /**
     * San Marino.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SanMarino"] = "sanMarino";
    /**
     * Somalia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Somalia"] = "somalia";
    /**
     * Saint Pierre and Miquelon.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SaintPierreAndMiquelon"] = "saintPierreAndMiquelon";
    /**
     * Serbia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Serbia"] = "serbia";
    /**
     * South Sudan.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SouthSudan"] = "southSudan";
    /**
     * Sao Tome and Principe.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SaoTomeAndPrincipe"] = "saoTomeAndPrincipe";
    /**
     * Suriname.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Suriname"] = "suriname";
    /**
     * Slovakia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Slovakia"] = "slovakia";
    /**
     * Slovenia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Slovenia"] = "slovenia";
    /**
     * Sweden.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Sweden"] = "sweden";
    /**
     * Eswatini.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Eswatini"] = "eswatini";
    /**
     * Sint Maarten (Dutch part).
     *
     * @since 7.0.0
     */
    IdCaptureRegion["DutchSintMaarten"] = "dutchSintMaarten";
    /**
     * Seychelles.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Seychelles"] = "seychelles";
    /**
     * Syrian Arab Republic.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Syria"] = "syria";
    /**
     * Turks and Caicos Islands.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["TurksAndCaicosIslands"] = "turksAndCaicosIslands";
    /**
     * Chad.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Chad"] = "chad";
    /**
     * Togo.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Togo"] = "togo";
    /**
     * Thailand.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Thailand"] = "thailand";
    /**
     * Tajikistan.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Tajikistan"] = "tajikistan";
    /**
     * Tokelau.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Tokelau"] = "tokelau";
    /**
     * Turkmenistan.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Turkmenistan"] = "turkmenistan";
    /**
     * Timor-Leste.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["TimorLeste"] = "timorLeste";
    /**
     * Tonga.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Tonga"] = "tonga";
    /**
     * Trinidad and Tobago.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["TrinidadAndTobago"] = "trinidadAndTobago";
    /**
     * Tunisia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Tunisia"] = "tunisia";
    /**
     * Türkiye.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Turkey"] = "turkey";
    /**
     * Tuvalu.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Tuvalu"] = "tuvalu";
    /**
     * Taiwan, Province of China.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Taiwan"] = "taiwan";
    /**
     * Tanzania, United Republic of.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Tanzania"] = "tanzania";
    /**
     * Uganda.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Uganda"] = "uganda";
    /**
     * Ukraine.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Ukraine"] = "ukraine";
    /**
     * United States Minor Outlying Islands.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["UsMinorOutlyingIslands"] = "usMinorOutlyingIslands";
    /**
     * Uruguay.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Uruguay"] = "uruguay";
    /**
     * United States of America.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Us"] = "us";
    /**
     * Uzbekistan.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Uzbekistan"] = "uzbekistan";
    /**
     * Holy See.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["HolySee"] = "holySee";
    /**
     * Saint Vincent and the Grenadines.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SaintVincentAndTheGrenadines"] = "saintVincentAndTheGrenadines";
    /**
     * Venezuela (Bolivarian Republic of).
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Venezuela"] = "venezuela";
    /**
     * Virgin Islands (British).
     *
     * @since 7.0.0
     */
    IdCaptureRegion["BritishVirginIslands"] = "britishVirginIslands";
    /**
     * Virgin Islands (U.S.).
     *
     * @since 7.0.0
     */
    IdCaptureRegion["UsVirginIslands"] = "usVirginIslands";
    /**
     * Viet Nam.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Vietnam"] = "vietnam";
    /**
     * Vanuatu.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Vanuatu"] = "vanuatu";
    /**
     * Wallis and Futuna.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["WallisAndFutuna"] = "wallisAndFutuna";
    /**
     * Samoa.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Samoa"] = "samoa";
    /**
     * Kosovo.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Kosovo"] = "kosovo";
    /**
     * Yemen.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Yemen"] = "yemen";
    /**
     * South Africa.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["SouthAfrica"] = "southAfrica";
    /**
     * Zambia.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Zambia"] = "zambia";
    /**
     * Zimbabwe.
     *
     * @since 7.0.0
     */
    IdCaptureRegion["Zimbabwe"] = "zimbabwe";
})(IdCaptureRegion || (IdCaptureRegion = {}));

/**
 * Indicates whether the document is REAL ID compliant.
 *
 * @since 7.5.0
 */
var UsRealIdStatus;
(function (UsRealIdStatus) {
    /**
     * 1. For driver’s licenses and IDs issued by US states, territories and District of Colombia: your license doesn’t include the feature to read the REAL ID indicator. Please contact Scandit if you would like to use this feature.
     * 2. Value returned for all other documents.
     *
     * @since 7.5.0
     */
    UsRealIdStatus["NotAvailable"] = "notAvailable";
    /**
     * The document is not REAL ID compliant
     *
     * @since 7.5.0
     */
    UsRealIdStatus["NotRealIdCompliant"] = "notRealIdCompliant";
    /**
     * The document is REAL ID compliant
     *
     * @since 7.5.0
     */
    UsRealIdStatus["RealIdCompliant"] = "realIdCompliant";
})(UsRealIdStatus || (UsRealIdStatus = {}));

/**
 * An enumeration that identifies specific types of Region Specific documents. These documents are tailored to fulfill unique roles or comply with local regulations within a particular region or jurisdiction. Examples include the APEC Business Travel Card, China Exit-Entry Permit, and Germany eID. Each subtype helps differentiate these documents based on their purpose and regional usage.
 *
 * @since 7.0.0
 */
var RegionSpecificSubtype;
(function (RegionSpecificSubtype) {
    /**
     * US Border Crossing Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["UsBorderCrossingCard"] = "usBorderCrossingCard";
    /**
     * China Exit Entry Permit.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["ChinaExitEntryPermit"] = "chinaExitEntryPermit";
    /**
     * US Global Entry Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["UsGlobalEntryCard"] = "usGlobalEntryCard";
    /**
     * China Mainland Travel Permit Taiwan.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["ChinaMainlandTravelPermitTaiwan"] = "chinaMainlandTravelPermitTaiwan";
    /**
     * US Nexus Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["UsNexusCard"] = "usNexusCard";
    /**
     * China Mainland Travel Permit Hong Kong Macau.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["ChinaMainlandTravelPermitHongKongMacau"] = "chinaMainlandTravelPermitHongKongMacau";
    /**
     * Apec Business Travel Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["ApecBusinessTravelCard"] = "apecBusinessTravelCard";
    /**
     * Pakistan Afghan Citizen Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["PakistanAfghanCitizenCard"] = "pakistanAfghanCitizenCard";
    /**
     * Singapore Fin Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["SingaporeFinCard"] = "singaporeFinCard";
    /**
     * Malaysia Ikad.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["MalaysiaIkad"] = "malaysiaIkad";
    /**
     * Malaysia Mykad.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["MalaysiaMykad"] = "malaysiaMykad";
    /**
     * Malaysia Mypr.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["MalaysiaMypr"] = "malaysiaMypr";
    /**
     * Mexico Consular Voter Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["MexicoConsularVoterId"] = "mexicoConsularVoterId";
    /**
     * Germany Eid.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["GermanyEid"] = "germanyEid";
    /**
     * US Common Access Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["UsCommonAccessCard"] = "usCommonAccessCard";
    /**
     * Philippines Multipurpose Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["PhilippinesMultipurposeId"] = "philippinesMultipurposeId";
    /**
     * Malaysia Mykas.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["MalaysiaMykas"] = "malaysiaMykas";
    /**
     * Malaysia Mykid.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["MalaysiaMykid"] = "malaysiaMykid";
    /**
     * Malaysia Mytentera.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["MalaysiaMytentera"] = "malaysiaMytentera";
    /**
     * Mexico Professional Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["MexicoProfessionalId"] = "mexicoProfessionalId";
    /**
     * Malaysia Refugee Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["MalaysiaRefugeeId"] = "malaysiaRefugeeId";
    /**
     * Canada Tribal Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["CanadaTribalId"] = "canadaTribalId";
    /**
     * US Uniformed Services Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["UsUniformedServicesId"] = "usUniformedServicesId";
    /**
     * US Veteran Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["UsVeteranId"] = "usVeteranId";
    /**
     * Philippines Work Permit.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["PhilippinesWorkPermit"] = "philippinesWorkPermit";
    /**
     * Singapore Work Permit.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["SingaporeWorkPermit"] = "singaporeWorkPermit";
    /**
     * US Work Permit.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["UsWorkPermit"] = "usWorkPermit";
    /**
     * Philippines Social Security Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["PhilippinesSocialSecurityCard"] = "philippinesSocialSecurityCard";
    /**
     * Sweden Social Security Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["SwedenSocialSecurityCard"] = "swedenSocialSecurityCard";
    /**
     * Canada Social Security Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["CanadaSocialSecurityCard"] = "canadaSocialSecurityCard";
    /**
     * US Social Security Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["UsSocialSecurityCard"] = "usSocialSecurityCard";
    /**
     * Belgium Minors Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["BelgiumMinorsId"] = "belgiumMinorsId";
    /**
     * Colombia Minors Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["ColombiaMinorsId"] = "colombiaMinorsId";
    /**
     * Peru Minors Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["PeruMinorsId"] = "peruMinorsId";
    /**
     * Bolivia Minors Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["BoliviaMinorsId"] = "boliviaMinorsId";
    /**
     * Hungary Address Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["HungaryAddressCard"] = "hungaryAddressCard";
    /**
     * Uk Asylum Request.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["UkAsylumRequest"] = "ukAsylumRequest";
    /**
     * Canada Citizenship Certificate.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["CanadaCitizenshipCertificate"] = "canadaCitizenshipCertificate";
    /**
     * Singapore Employment Pass.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["SingaporeEmploymentPass"] = "singaporeEmploymentPass";
    /**
     * Canada Minors Public Services Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["CanadaMinorsPublicServicesCard"] = "canadaMinorsPublicServicesCard";
    /**
     * Malaysia Mypolis.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["MalaysiaMypolis"] = "malaysiaMypolis";
    /**
     * Philippines Nbi Clearance.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["PhilippinesNbiClearance"] = "philippinesNbiClearance";
    /**
     * India Pan Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["IndiaPanCard"] = "indiaPanCard";
    /**
     * Philippines Postal Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["PhilippinesPostalId"] = "philippinesPostalId";
    /**
     * Pakistan Proof Of Registration.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["PakistanProofOfRegistration"] = "pakistanProofOfRegistration";
    /**
     * Singapore S Pass.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["SingaporeSPass"] = "singaporeSPass";
    /**
     * Sweden Sis Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["SwedenSisId"] = "swedenSisId";
    /**
     * Colombia Temporary Protection Permit.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["ColombiaTemporaryProtectionPermit"] = "colombiaTemporaryProtectionPermit";
    /**
     * US Twic Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["UsTwicCard"] = "usTwicCard";
    /**
     * US Weapon Permit.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["UsWeaponPermit"] = "usWeaponPermit";
    /**
     * Canada Weapon Permit.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["CanadaWeaponPermit"] = "canadaWeaponPermit";
    /**
     * Ireland Public Services Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["IrelandPublicServicesCard"] = "irelandPublicServicesCard";
    /**
     * Canada Public Services Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["CanadaPublicServicesCard"] = "canadaPublicServicesCard";
    /**
     * Pakistan Consular Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["PakistanConsularId"] = "pakistanConsularId";
    /**
     * Guatemala Consular Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["GuatemalaConsularId"] = "guatemalaConsularId";
    /**
     * Mexico Consular Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["MexicoConsularId"] = "mexicoConsularId";
    /**
     * Philippines Tax Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["PhilippinesTaxId"] = "philippinesTaxId";
    /**
     * Mexico Tax Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["MexicoTaxId"] = "mexicoTaxId";
    /**
     * China One Way Permit.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["ChinaOneWayPermit"] = "chinaOneWayPermit";
    /**
     * US Medical Marijuana Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["UsMedicalMarijuanaCard"] = "usMedicalMarijuanaCard";
    /**
     * US Municipal Id.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["UsMunicipalId"] = "usMunicipalId";
    /**
     * Australia Asic Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["AustraliaAsicCard"] = "australiaAsicCard";
    /**
     * UAE Vehicle Registration Card.
     *
     * @since 7.0.0
     */
    RegionSpecificSubtype["UaeVehicleRegistrationCard"] = "uaeVehicleRegistrationCard";
    /**
     * UAE Esaad Card.
     *
     * @since 7.6.0
     */
    RegionSpecificSubtype["UaeEsaadCard"] = "uaeEsaadCard";
    /**
     * Uk Military Id.
     *
     * @since 7.6.0
     */
    RegionSpecificSubtype["UkMilitaryId"] = "ukMilitaryId";
    /**
     * China Business Travel Permit to HK/Macau.
     *
     * @since 8.5.0
     */
    RegionSpecificSubtype["ChinaBusinessTravelPermitHongKongMacau"] = "chinaBusinessTravelPermitHongKongMacau";
    /**
     * Ireland Age Card.
     *
     * @since 8.5.0
     */
    RegionSpecificSubtype["IrelandAgeCard"] = "irelandAgeCard";
})(RegionSpecificSubtype || (RegionSpecificSubtype = {}));

/**
 * Sides of a document.
 *
 * @since 7.0.0
 */
var IdSide;
(function (IdSide) {
    /**
     * Front side of a document.
     *
     * @since 7.0.0
     */
    IdSide["Front"] = "front";
    /**
     * Back side of the document.
     *
     * @since 7.0.0
     */
    IdSide["Back"] = "back";
})(IdSide || (IdSide = {}));

/**
 * A class that contains the extracted images from a document.
 *
 * @since 7.0.0
 */
class IdImages {
    constructor() {
        this.json = null;
    }
    static fromJSON(json) {
        const result = new IdImages();
        if (json != null) {
            result.json = json;
        }
        return result;
    }
    /**
     * Returns a photo of the document’s holder. This method is only supported for documents whose Visual Inspection Zone (VIZ) has been captured.
     *
     * By default, this method returns the image as a base64-encoded string. If {@link DataCaptureContextSettings.frameDataSettings} is configured to use the filesystem cache, it returns the path to the cached file instead.
     *
     * @since 7.0.0
     */
    get face() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.json) === null || _a === void 0 ? void 0 : _a.front) === null || _b === void 0 ? void 0 : _b.face) !== null && _c !== void 0 ? _c : null;
    }
    /**
     * Returns the full frame the document was captured on.
     *
     * By default, this method returns the image as a base64-encoded string. If {@link DataCaptureContextSettings.frameDataSettings} is configured to use the filesystem cache, it returns the path to the cached file instead.
     *
     * @since 7.0.0
     */
    get frame() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.json) === null || _a === void 0 ? void 0 : _a.front) === null || _b === void 0 ? void 0 : _b.frame) !== null && _c !== void 0 ? _c : null;
    }
    /**
     * Returns the full frame the specified document side was captured on.
     *
     * By default, this method returns the image as a base64-encoded string. If {@link DataCaptureContextSettings.frameDataSettings} is configured to use the filesystem cache, it returns the path to the cached file instead.
     *
     * @since 7.0.0
     */
    getFrame(side) {
        var _a, _b, _c, _d, _e, _f;
        switch (side) {
            case IdSide.Front:
                return (_c = (_b = (_a = this.json) === null || _a === void 0 ? void 0 : _a.front) === null || _b === void 0 ? void 0 : _b.frame) !== null && _c !== void 0 ? _c : null;
            case IdSide.Back:
                return (_f = (_e = (_d = this.json) === null || _d === void 0 ? void 0 : _d.back) === null || _e === void 0 ? void 0 : _e.frame) !== null && _f !== void 0 ? _f : null;
        }
    }
    /**
     * Returns a cropped image of the specified document side. This method is only supported for documents whose Visual Inspection Zone (VIZ) has been captured.
     *
     * By default, this method returns the image as a base64-encoded string. If {@link DataCaptureContextSettings.frameDataSettings} is configured to use the filesystem cache, it returns the path to the cached file instead.
     *
     * @since 7.0.0
     */
    getCroppedDocument(side) {
        var _a, _b, _c, _d, _e, _f;
        switch (side) {
            case IdSide.Front:
                return (_c = (_b = (_a = this.json) === null || _a === void 0 ? void 0 : _a.front) === null || _b === void 0 ? void 0 : _b.croppedDocument) !== null && _c !== void 0 ? _c : null;
            case IdSide.Back:
                return (_f = (_e = (_d = this.json) === null || _d === void 0 ? void 0 : _d.back) === null || _e === void 0 ? void 0 : _e.croppedDocument) !== null && _f !== void 0 ? _f : null;
        }
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * Represents a duration of time in terms of days, months, and years.
 *
 * @since 7.6.0
 */
class Duration extends DefaultSerializeable {
    /**
     * The number of days in the duration.
     *
     * @since 7.6.0
     */
    get days() {
        return this._days;
    }
    /**
     * The number of months in the duration.
     *
     * @since 7.6.0
     */
    get months() {
        return this._months;
    }
    /**
     * The number of years in the duration.
     *
     * @since 7.6.0
     */
    get years() {
        return this._years;
    }
    static fromJSON(json) {
        return new Duration(json.days, json.months, json.years);
    }
    /**
     * Creates a new Duration instance.
     *
     * @since 7.6.0
     */
    constructor(days, months, years) {
        super();
        this._days = days;
        this._months = months;
        this._years = years;
    }
}
__decorate([
    nameForSerialization('days')
], Duration.prototype, "_days", void 0);
__decorate([
    nameForSerialization('months')
], Duration.prototype, "_months", void 0);
__decorate([
    nameForSerialization('years')
], Duration.prototype, "_years", void 0);

/**
 * An enumeration of possible sexes.
 *
 * @since 8.0.0
 */
var Sex;
(function (Sex) {
    /**
     * Female sex.
     *
     * @since 8.0.0
     */
    Sex["Female"] = "female";
    /**
     * Male sex.
     *
     * @since 8.0.0
     */
    Sex["Male"] = "male";
    /**
     * Unspecified sex.
     *
     * @since 8.0.0
     */
    Sex["Unspecified"] = "unspecified";
})(Sex || (Sex = {}));

function parseIdDefaults(jsonDefaults) {
    const idDefaults = {
        IdCapture: {
            Feedback: {
                idCaptured: Feedback.fromJSON(JSON.parse(jsonDefaults.IdCaptureFeedback).idCaptured),
                idRejected: Feedback.fromJSON(JSON.parse(jsonDefaults.IdCaptureFeedback).idRejected),
            },
            DefaultSuccessSound: Sound.fromJSON(JSON.parse(jsonDefaults.defaultSuccessSound)),
            DefaultFailureSound: Sound.fromJSON(JSON.parse(jsonDefaults.defaultFailureSound)),
            RecommendedCameraSettings: CameraSettings.fromJSON(jsonDefaults.RecommendedCameraSettings),
            IdCaptureOverlayDefaults: {
                defaultCapturedBrush: {
                    fillColor: Color.fromJSON(jsonDefaults.IdCaptureOverlay.DefaultCapturedBrush.fillColor),
                    strokeColor: Color.fromJSON(jsonDefaults.IdCaptureOverlay.DefaultCapturedBrush.strokeColor),
                    strokeWidth: jsonDefaults.IdCaptureOverlay.DefaultCapturedBrush.strokeWidth,
                },
                defaultLocalizedBrush: {
                    fillColor: Color.fromJSON(jsonDefaults.IdCaptureOverlay.DefaultLocalizedBrush.fillColor),
                    strokeColor: Color.fromJSON(jsonDefaults.IdCaptureOverlay.DefaultLocalizedBrush.strokeColor),
                    strokeWidth: jsonDefaults.IdCaptureOverlay.DefaultLocalizedBrush.strokeWidth,
                },
                defaultRejectedBrush: {
                    fillColor: Color.fromJSON(jsonDefaults.IdCaptureOverlay.DefaultRejectedBrush.fillColor),
                    strokeColor: Color.fromJSON(jsonDefaults.IdCaptureOverlay.DefaultRejectedBrush.strokeColor),
                    strokeWidth: jsonDefaults.IdCaptureOverlay.DefaultRejectedBrush.strokeWidth,
                },
                defaultIdLayoutStyle: jsonDefaults.IdCaptureOverlay.defaultIdLayoutStyle,
                defaultIdLayoutLineStyle: jsonDefaults.IdCaptureOverlay.defaultIdLayoutLineStyle,
            },
            IdCaptureSettings: {
                anonymizationMode: jsonDefaults.IdCaptureSettings.anonymizationMode,
                anonymizeDefaultFields: jsonDefaults.IdCaptureSettings.anonymizeDefaultFields,
                rejectVoidedIds: jsonDefaults.IdCaptureSettings.rejectVoidedIds,
                decodeBackOfEuropeanDrivingLicense: jsonDefaults.IdCaptureSettings.decodeBackOfEuropeanDrivingLicense,
                rejectExpiredIds: jsonDefaults.IdCaptureSettings.rejectExpiredIds,
                rejectIdsExpiringIn: jsonDefaults.IdCaptureSettings.rejectIdsExpiringIn
                    ? Duration.fromJSON(jsonDefaults.IdCaptureSettings.rejectIdsExpiringIn)
                    : null,
                rejectNotRealIdCompliant: jsonDefaults.IdCaptureSettings.rejectNotRealIdCompliant,
                rejectForgedAamvaBarcodes: jsonDefaults.IdCaptureSettings.rejectForgedAamvaBarcodes,
                rejectInconsistentData: jsonDefaults.IdCaptureSettings.rejectInconsistentData,
                rejectHolderBelowAge: jsonDefaults.IdCaptureSettings.rejectHolderBelowAge,
                rejectionTimeoutSeconds: jsonDefaults.IdCaptureSettings.rejectionTimeoutSeconds,
                notifyOnSideCapture: jsonDefaults.IdCaptureSettings.notifyOnSideCapture,
            },
        },
    };
    return idDefaults;
}
function ensureIdDefaults() {
    var _a, _b;
    const existing = (_a = FactoryMaker.instances.get('IdDefaults')) === null || _a === void 0 ? void 0 : _a.instance;
    if (existing) {
        return existing;
    }
    const reloaded = (_b = FactoryMaker.instances.get('IdDefaults')) === null || _b === void 0 ? void 0 : _b.instance;
    if (reloaded) {
        return reloaded;
    }
    throw new Error('IdDefaults missing and re-init failed');
}
function loadIdDefaults(jsonDefaults) {
    const idDefaults = parseIdDefaults(jsonDefaults);
    FactoryMaker.bindInstanceIfNotExists('IdDefaults', idDefaults);
}

function getIdDefaults() {
    return ensureIdDefaults();
}

/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */
// THIS FILE IS GENERATED by scripts/defaults_generator/generate.py from
// scripts/defaults_generator/defaults/id.json. Do not edit by hand.
const IdCaptureOverlayGeneratedDefaults = {
    DefaultCapturedBrush: { "fillColor": '#00000000', "strokeColor": '#FFFFFFFF', "strokeWidth": 3.0 },
    DefaultLocalizedBrushAndroid: { "fillColor": '#FFFFFF80', "strokeColor": '#00000000', "strokeWidth": 0.0 },
    DefaultLocalizedBrushIos: { "fillColor": '#FFFFFF7F', "strokeColor": '#00000000', "strokeWidth": 0.0 },
    DefaultRejectedBrushAndroid: { "fillColor": '#FFFFFF80', "strokeColor": '#00000000', "strokeWidth": 0.0 },
    DefaultRejectedBrushIos: { "fillColor": '#FFFFFF7F', "strokeColor": '#00000000', "strokeWidth": 0.0 },
    defaultIdLayoutStyle: 'rounded',
    defaultIdLayoutLineStyle: 'light',
};
const IdCaptureSettingsGeneratedDefaults = {
    anonymizationMode: 'fieldsOnly',
    rejectVoidedIds: false,
    decodeBackOfEuropeanDrivingLicense: false,
    rejectExpiredIds: false,
    rejectIdsExpiringIn: null,
    rejectNotRealIdCompliant: false,
    rejectForgedAamvaBarcodes: false,
    notifyOnSideCapture: false,
    rejectInconsistentData: false,
    rejectHolderBelowAge: null,
    anonymizeDefaultFields: true,
    rejectionTimeoutSeconds: 6,
};
const IdCaptureFeedbackGeneratedDefaults = {
    idCapturedAndroid: { "vibration": { "type": 'default' }, "sound": { "resource": 'sc_id_captured' } },
    idCapturedIos: { "vibration": { "type": 'successHaptic' }, "sound": { "resource": 'id_capture_id_captured.mp3' } },
    idRejected: {},
    defaultSuccessSoundAndroid: { "resource": 'sc_id_captured' },
    defaultSuccessSoundIos: { "resource": 'id_capture_id_captured.mp3' },
    defaultFailureSoundAndroid: { "resource": 'sc_id_rejected' },
    defaultFailureSoundIos: { "resource": 'id_capture_id_rejected.mp3' },
};

function platformDefault(android, ios, platform) {
    return platform === 'ios' ? ios : android;
}
/**
 * Assembles the nested JSON shape that IdDefaults.parseIdDefaults expects, out of the flat
 * generated defaults, restricted to the keys that are knowable statically at build time.
 *
 * Excluded (genuinely dynamic, native-only) key:
 * - RecommendedCameraSettings (mirrors IdCaptureDefaults.getDynamic() on Android)
 */
function buildStaticIdDefaultsJson(platform) {
    return {
        IdCaptureFeedback: JSON.stringify({
            idCaptured: platformDefault(IdCaptureFeedbackGeneratedDefaults.idCapturedAndroid, IdCaptureFeedbackGeneratedDefaults.idCapturedIos, platform),
            idRejected: IdCaptureFeedbackGeneratedDefaults.idRejected,
        }),
        defaultSuccessSound: JSON.stringify(platformDefault(IdCaptureFeedbackGeneratedDefaults.defaultSuccessSoundAndroid, IdCaptureFeedbackGeneratedDefaults.defaultSuccessSoundIos, platform)),
        defaultFailureSound: JSON.stringify(platformDefault(IdCaptureFeedbackGeneratedDefaults.defaultFailureSoundAndroid, IdCaptureFeedbackGeneratedDefaults.defaultFailureSoundIos, platform)),
        IdCaptureOverlay: {
            DefaultCapturedBrush: IdCaptureOverlayGeneratedDefaults.DefaultCapturedBrush,
            DefaultLocalizedBrush: platformDefault(IdCaptureOverlayGeneratedDefaults.DefaultLocalizedBrushAndroid, IdCaptureOverlayGeneratedDefaults.DefaultLocalizedBrushIos, platform),
            DefaultRejectedBrush: platformDefault(IdCaptureOverlayGeneratedDefaults.DefaultRejectedBrushAndroid, IdCaptureOverlayGeneratedDefaults.DefaultRejectedBrushIos, platform),
            defaultIdLayoutStyle: IdCaptureOverlayGeneratedDefaults.defaultIdLayoutStyle,
            defaultIdLayoutLineStyle: IdCaptureOverlayGeneratedDefaults.defaultIdLayoutLineStyle,
        },
        IdCaptureSettings: {
            anonymizationMode: IdCaptureSettingsGeneratedDefaults.anonymizationMode,
            anonymizeDefaultFields: IdCaptureSettingsGeneratedDefaults.anonymizeDefaultFields,
            rejectVoidedIds: IdCaptureSettingsGeneratedDefaults.rejectVoidedIds,
            decodeBackOfEuropeanDrivingLicense: IdCaptureSettingsGeneratedDefaults.decodeBackOfEuropeanDrivingLicense,
            rejectExpiredIds: IdCaptureSettingsGeneratedDefaults.rejectExpiredIds,
            rejectIdsExpiringIn: IdCaptureSettingsGeneratedDefaults.rejectIdsExpiringIn,
            rejectNotRealIdCompliant: IdCaptureSettingsGeneratedDefaults.rejectNotRealIdCompliant,
            rejectForgedAamvaBarcodes: IdCaptureSettingsGeneratedDefaults.rejectForgedAamvaBarcodes,
            notifyOnSideCapture: IdCaptureSettingsGeneratedDefaults.notifyOnSideCapture,
            rejectInconsistentData: IdCaptureSettingsGeneratedDefaults.rejectInconsistentData,
            rejectHolderBelowAge: IdCaptureSettingsGeneratedDefaults.rejectHolderBelowAge,
            rejectionTimeoutSeconds: IdCaptureSettingsGeneratedDefaults.rejectionTimeoutSeconds,
        },
        // RecommendedCameraSettings is dynamic (device-probed); not staticized.
    };
}

/**
 * The verification status returned by the barcode verifier
 *
 * @since 6.28.0
 */
var AamvaBarcodeVerificationStatus;
(function (AamvaBarcodeVerificationStatus) {
    /**
     * The barcode is authentic
     *
     * @since 6.28.0
     */
    AamvaBarcodeVerificationStatus["Authentic"] = "authentic";
    /**
     * The barcode is likely forged
     *
     * @since 6.28.0
     */
    AamvaBarcodeVerificationStatus["LikelyForged"] = "maybeForged";
    /**
     * The barcode is forged
     *
     * @since 6.28.0
     */
    AamvaBarcodeVerificationStatus["Forged"] = "forged";
})(AamvaBarcodeVerificationStatus || (AamvaBarcodeVerificationStatus = {}));

/**
 * The result of a verification of AAMVA-compliant personal identification document returned in {@link VerificationResult} when {@link IdCaptureSettings.rejectForgedAamvaBarcodes} is enabled.
 *
 * @since 6.21.0
 */
class AamvaBarcodeVerificationResult {
    /**
     * All checks passed and nothing suspicious about the document was detected.
     *
     * @since 6.21.0
     */
    get allChecksPassed() {
        return this.json.allChecksPassed;
    }
    /**
     * Verification status containing the result of the verification
     *
     * @since 6.28.0
     */
    get status() {
        return this._status;
    }
    static fromJSON(json) {
        const result = new AamvaBarcodeVerificationResult();
        result.json = json;
        switch (result.json.verificationStatus) {
            case 'authentic':
                result._status = AamvaBarcodeVerificationStatus.Authentic;
                break;
            case 'maybeForged':
                result._status = AamvaBarcodeVerificationStatus.LikelyForged;
                break;
            case 'forged':
                result._status = AamvaBarcodeVerificationStatus.Forged;
                break;
        }
        return result;
    }
}

/**
 * An enumeration of possible application status for a visa.
 *
 * @since 8.7.0
 */
var ApplicationStatus;
(function (ApplicationStatus) {
    /**
     * The visa application was approved.
     *
     * @since 8.7.0
     */
    ApplicationStatus["Approved"] = "approved";
    /**
     * The visa application was granted.
     *
     * @since 8.7.0
     */
    ApplicationStatus["Granted"] = "granted";
    /**
     * The visa application is pending.
     *
     * @since 8.7.0
     */
    ApplicationStatus["Pending"] = "pending";
    /**
     * The visa application was denied.
     *
     * @since 8.7.0
     */
    ApplicationStatus["Denied"] = "denied";
    /**
     * The visa application was revoked.
     *
     * @since 8.7.0
     */
    ApplicationStatus["Revoked"] = "revoked";
    /**
     * The visa application has expired.
     *
     * @since 8.7.0
     */
    ApplicationStatus["Expired"] = "expired";
    /**
     * The visa application was cancelled.
     *
     * @since 8.7.0
     */
    ApplicationStatus["Cancelled"] = "cancelled";
    /**
     * The visa application is of an unknown status.
     *
     * @since 8.7.0
     */
    ApplicationStatus["Other"] = "other";
    /**
     * The visa application is of an unknown status.
     *
     * @since 8.7.0
     */
    ApplicationStatus["Unknown"] = "unknown";
})(ApplicationStatus || (ApplicationStatus = {}));

/**
 * The professional driving permit (PrDP) of the Driver’s License holder.
 *
 * @since 6.14.0
 */
class ProfessionalDrivingPermit {
    /**
     * The date when this permit expires.
     *
     * @since 6.14.0
     */
    get dateOfExpiry() {
        return DateResult.fromJSON(this.json.dateOfExpiry);
    }
    /**
     * The categories of the permit. Check the information printed on the Driver’s License for the list of valid PrDP categories.
     *
     * @since 6.14.0
     */
    get codes() {
        return this.json.codes;
    }
    static fromJSON(json) {
        if (json === null || json === undefined) {
            return null;
        }
        const object = new ProfessionalDrivingPermit();
        object.json = json;
        return object;
    }
}

/**
 * @since 6.14.0
 */
class VehicleRestriction {
    /**
     * The category of motor vehicle the Driver’s License is valid for. Check the information printed on the Driver’s License for the list of valid codes.
     *
     * @since 6.14.0
     */
    get vehicleCode() {
        return this.json.vehicleCode;
    }
    /**
     * The restriction that applies to the motor vehicle category. Check the information printed on the Driver’s License for the list of possible restrictions.
     *
     * @since 6.14.0
     */
    get vehicleRestriction() {
        return this.json.vehicleRestriction;
    }
    /**
     * The date when this vehicle restriction starts to apply.
     *
     * @since 6.14.0
     */
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

/**
 * This class represents the data extracted from a document’s barcode. It aggregates information from various barcode types supported by the library. Some properties may not apply to certain document types and will be set to *null* if the corresponding data is not encoded in the barcode. For a complete overview of supported barcode types, refer to our supported documents.
 *
 * @since 7.0.0
 */
class BarcodeResult {
    static fromJSON(json) {
        return new BarcodeResult(json);
    }
    constructor(json) {
        this.json = json;
    }
    /**
     * The version level of the PDF417 barcode format. See the AAMVA DL/ID Card Design Standard for more details.
     *
     * @since 7.0.0
     */
    get aamvaVersion() {
        return this.json.aamvaVersion;
    }
    /**
     * Other family name by which cardholder is known.
     *
     * @since 7.0.0
     */
    get aliasFamilyName() {
        return this.json.aliasFamilyName;
    }
    /**
     * Other given name by which cardholder is known.
     *
     * @since 7.0.0
     */
    get aliasGivenName() {
        return this.json.aliasGivenName;
    }
    /**
     * Other suffix name by which cardholder is known.
     *
     * @since 7.0.0
     */
    get aliasSuffixName() {
        return this.json.aliasSuffixName;
    }
    /**
     * The blood type of the holder in the Rh system (A+, A-, B+, B-, O+, O-, AB+ or AB-).
     *
     * @since 7.0.0
     */
    get bloodType() {
        return this.json.bloodType;
    }
    /**
     * The holder’s branch of service.
     *
     * @since 7.0.0
     */
    get branchOfService() {
        return this.json.branchOfService;
    }
    /**
     * Machine-generated code that is used for security purposes.
     *
     * @since 7.0.0
     */
    get cardInstanceIdentifier() {
        return this.json.cardInstanceIdentifier;
    }
    /**
     * Card revision date.
     *
     * @since 7.0.0
     */
    get cardRevisionDate() {
        return DateResult.fromJSON(this.json.cardRevisionDate);
    }
    /**
     * Driving license categories.
     *
     * @since 7.0.0
     */
    get categories() {
        return this.json.categories;
    }
    /**
     * The CHAMPUS effective date.
     *
     * @since 7.0.0
     */
    get champusEffectiveDate() {
        return DateResult.fromJSON(this.json.champusEffectiveDate);
    }
    /**
     * The CHAMPUS expiration date.
     *
     * @since 7.0.0
     */
    get champusExpiryDate() {
        return DateResult.fromJSON(this.json.champusExpiryDate);
    }
    /**
     * Whether the holder is a citizen or a permanent resident.
     *
     * @since 7.0.0
     */
    get citizenshipStatus() {
        return this.json.citizenshipStatus;
    }
    /**
     * The code of the civilian health care privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get civilianHealthCareFlagCode() {
        return this.json.civilianHealthCareFlagCode;
    }
    /**
     * The description of the civilian health care privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get civilianHealthCareFlagDescription() {
        return this.json.civilianHealthCareFlagDescription;
    }
    /**
     * The code of the commissary privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get commissaryFlagCode() {
        return this.json.commissaryFlagCode;
    }
    /**
     * The description of the commissary privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get commissaryFlagDescription() {
        return this.json.commissaryFlagDescription;
    }
    /**
     * The human-readable name of the holder’s country of birth.
     *
     * @since 7.0.0
     */
    get countryOfBirth() {
        return this.json.countryOfBirth;
    }
    /**
     * The three-letter country code (ISO 3166-1) of the holder’s country of birth.
     *
     * @since 7.0.0
     */
    get countryOfBirthIso() {
        return this.json.countryOfBirthIso;
    }
    /**
     * The code of the relationship of a dependent to his or her sponsor.
     *
     * @since 7.0.0
     */
    get deersDependentSuffixCode() {
        return this.json.deersDependentSuffixCode;
    }
    /**
     * The description of the relationship of a dependent to his or her sponsor.
     *
     * @since 7.0.0
     */
    get deersDependentSuffixDescription() {
        return this.json.deersDependentSuffixDescription;
    }
    /**
     * The code of the direct care privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get directCareFlagCode() {
        return this.json.directCareFlagCode;
    }
    /**
     * The description of the direct care privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get directCareFlagDescription() {
        return this.json.directCareFlagDescription;
    }
    /**
     * Identifies if the document has been duplicated.
     *
     * @since 7.0.0
     */
    get documentCopy() {
        return this.json.documentCopy;
    }
    /**
     * The document discriminator number.
     *
     * @since 7.0.0
     */
    get documentDiscriminatorNumber() {
        return this.json.documentDiscriminatorNumber;
    }
    /**
     * The name prefix of the card holder.
     *
     * @since 7.0.0
     */
    get driverNamePrefix() {
        return this.json.driverNamePrefix;
    }
    /**
     * The name suffix of the card holder.
     *
     * @since 7.0.0
     */
    get driverNameSuffix() {
        return this.json.driverNameSuffix;
    }
    /**
     * The driver restriction codes. Empty array means that there is no restrictions. Number 1 stands for glasses/contact lenses. Number 2 stands for artificial limbs.
     *
     * @since 7.0.0
     */
    get driverRestrictionCodes() {
        return this.json.driverRestrictionCodes;
    }
    /**
     * The holder’s DEERS-assigned numeric identifier.
     *
     * @since 7.0.0
     */
    get ediPersonIdentifier() {
        return this.json.ediPersonIdentifier;
    }
    /**
     * The endorsement code.
     *
     * @since 7.0.0
     */
    get endorsementsCode() {
        return this.json.endorsementsCode;
    }
    /**
     * The code of the exchange privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get exchangeFlagCode() {
        return this.json.exchangeFlagCode;
    }
    /**
     * The description of the exchange privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get exchangeFlagDescription() {
        return this.json.exchangeFlagDescription;
    }
    /**
     * The holder’s eye color.
     *
     * @since 7.0.0
     */
    get eyeColor() {
        return this.json.eyeColor;
    }
    /**
     * Used to distinguish among sponsors who have the same SSN.
     *
     * @since 7.0.0
     */
    get familySequenceNumber() {
        return this.json.familySequenceNumber;
    }
    /**
     * The first name truncation. A code that indicates whether a field has been truncated (‘T’), has not been truncated (‘N’), unknown whether truncated (‘U’), or the information is not present in the document (*null*).
     *
     * @since 7.0.0
     */
    get firstNameTruncation() {
        return this.json.firstNameTruncation;
    }
    /**
     * The first name of the document holder. It doesn’t contain middle name(s).
     *
     * @since 7.0.0
     */
    get firstNameWithoutMiddleName() {
        return this.json.firstNameWithoutMiddleName;
    }
    /**
     * The form number.
     *
     * @since 7.0.0
     */
    get formNumber() {
        return this.json.formNumber;
    }
    /**
     * The sponsor’s appropriate Geneva Convention Category.
     *
     * @since 7.0.0
     */
    get genevaConventionCategory() {
        return this.json.genevaConventionCategory;
    }
    /**
     * The holder’s hair color.
     *
     * @since 7.0.0
     */
    get hairColor() {
        return this.json.hairColor;
    }
    /**
     * The height of the card holder in centimeters.
     *
     * @since 7.0.0
     */
    get heightCm() {
        return this.json.heightCm;
    }
    /**
     * The height of the card holder in inches.
     *
     * @since 7.0.0
     */
    get heightInch() {
        return this.json.heightInch;
    }
    /**
     * The Issuer Identification Number which uniquely identifies the issuing jurisdiction.
     *
     * @since 7.0.0
     */
    get iin() {
        return this.json.iin;
    }
    /**
     * The identification type of the driver’s license.
     *
     * @since 7.0.0
     */
    get identificationType() {
        return this.json.identificationType;
    }
    /**
     * The human readable name of the issuing jurisdiction (for example: an issuing state, territory or federal district for USA, or an issuing province or territory for Canada).
     *
     * @since 7.0.0
     */
    get issuingJurisdiction() {
        return this.json.issuingJurisdiction;
    }
    /**
     * The ISO code of the issuing jurisdiction (for example: an issuing state, territory or federal district for USA, or an issuing province or territory for Canada).
     *
     * @since 7.0.0
     */
    get issuingJurisdictionIso() {
        return this.json.issuingJurisdictionIso;
    }
    /**
     * A compressed version of the photograph printed on the front of the card.
     *
     * @since 7.0.0
     */
    get jpegData() {
        return this.json.jpegData;
    }
    /**
     * The jurisdiction specific version number of the implementation.
     *
     * @since 7.0.0
     */
    get jurisdictionVersion() {
        return this.json.jurisdictionVersion;
    }
    /**
     * The last name truncation. A code that indicates whether a field has been truncated (‘T’), has not been truncated (‘N’), unknown whether truncated (‘U’), or the information is not present in the document (*null*).
     *
     * @since 7.0.0
     */
    get lastNameTruncation() {
        return this.json.lastNameTruncation;
    }
    /**
     * The name of the country, where the Driver’s License was issued.
     *
     * @since 7.0.0
     */
    get licenseCountryOfIssue() {
        return this.json.licenseCountryOfIssue;
    }
    /**
     * The middle name of the card holder.
     *
     * @since 7.0.0
     */
    get middleName() {
        return this.json.middleName;
    }
    /**
     * The middle name truncation. A code that indicates whether a field has been truncated (‘T’), has not been truncated (‘N’), unknown whether truncated (‘U’), or the information is not present in the document (*null*).
     *
     * @since 7.0.0
     */
    get middleNameTruncation() {
        return this.json.middleNameTruncation;
    }
    /**
     * The code of the Morale, Welfare & Recreation (MWR) privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get mwrFlagCode() {
        return this.json.mwrFlagCode;
    }
    /**
     * The description of the Morale, Welfare & Recreation (MWR) privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get mwrFlagDescription() {
        return this.json.mwrFlagDescription;
    }
    /**
     * The pay grade of the sponsor. Available since version 2.
     *
     * @since 7.0.0
     */
    get payGrade() {
        return this.json.payGrade;
    }
    /**
     * The holder’s pay plan code.
     *
     * @since 7.0.0
     */
    get payPlanCode() {
        return this.json.payPlanCode;
    }
    /**
     * The holder’s pay plan grade code.
     *
     * @since 7.0.0
     */
    get payPlanGradeCode() {
        return this.json.payPlanGradeCode;
    }
    /**
     * The person’s designator identifier (usually, the cardholder’s SSN).
     *
     * @since 7.0.0
     */
    get personDesignatorDocument() {
        return this.json.personDesignatorDocument;
    }
    /**
     * The card’s person designator type code.
     *
     * @since 7.0.0
     */
    get personDesignatorTypeCode() {
        return this.json.personDesignatorTypeCode;
    }
    /**
     * The holder’s middle name initial.
     *
     * @since 7.0.0
     */
    get personMiddleInitial() {
        return this.json.personMiddleInitial;
    }
    /**
     * The personal ID number of this Driver’s License holder.
     *
     * @since 7.0.0
     */
    get personalIdNumber() {
        return this.json.personalIdNumber;
    }
    /**
     * The kind of personal ID number used - “02” means the number of the South Africa ID card.
     *
     * @since 7.0.0
     */
    get personalIdNumberType() {
        return this.json.personalIdNumberType;
    }
    /**
     * The holder’s personnel category code.
     *
     * @since 7.0.0
     */
    get personnelCategoryCode() {
        return this.json.personnelCategoryCode;
    }
    /**
     * The holder’s personnel entitlement condition type code.
     *
     * @since 7.0.0
     */
    get personnelEntitlementConditionType() {
        return this.json.personnelEntitlementConditionType;
    }
    /**
     * The place of birth of the card holder.
     *
     * @since 7.0.0
     */
    get placeOfBirth() {
        return this.json.placeOfBirth;
    }
    /**
     * Whether the holder of this License is allowed to transport goods, dangerous goods or passengers for an income.
     *
     * @since 7.0.0
     */
    get professionalDrivingPermit() {
        return ProfessionalDrivingPermit.fromJSON(this.json.professionalDrivingPermit);
    }
    /**
     * The race of the card holder.
     *
     * @since 7.0.0
     */
    get race() {
        return this.json.race;
    }
    /**
     * The holder’s rank.
     *
     * @since 7.0.0
     */
    get rank() {
        return this.json.rank;
    }
    /**
     * The code of the dependent’s relationship to the sponsor.
     *
     * @since 7.0.0
     */
    get relationshipCode() {
        return this.json.relationshipCode;
    }
    /**
     * The description of the dependent’s relationship to the sponsor.
     *
     * @since 7.0.0
     */
    get relationshipDescription() {
        return this.json.relationshipDescription;
    }
    /**
     * The restriction code.
     *
     * @since 7.0.0
     */
    get restrictionsCode() {
        return this.json.restrictionsCode;
    }
    /**
     * The card security code.
     *
     * @since 7.0.0
     */
    get securityCode() {
        return this.json.securityCode;
    }
    /**
     * The service code.
     *
     * @since 7.0.0
     */
    get serviceCode() {
        return this.json.serviceCode;
    }
    /**
     * Indicates whether the card holder is sponsor or dependent.
     *
     * @since 7.0.0
     */
    get sponsorFlag() {
        return this.json.sponsorFlag;
    }
    /**
     * The name of the sponsor.
     *
     * @since 7.0.0
     */
    get sponsorName() {
        return this.json.sponsorName;
    }
    /**
     * The sponsor’s designator identifier (Usually, the cardholder’s SSN).
     *
     * @since 7.0.0
     */
    get sponsorPersonDesignatorIdentifier() {
        return this.json.sponsorPersonDesignatorIdentifier;
    }
    /**
     * The status of the sponsor.
     *
     * @since 7.0.0
     */
    get statusCode() {
        return this.json.statusCode;
    }
    /**
     * The description of the the code of the status of the sponsor.
     *
     * @since 7.0.0
     */
    get statusCodeDescription() {
        return this.json.statusCodeDescription;
    }
    /**
     * The vehicle classification.
     *
     * @since 7.0.0
     */
    get vehicleClass() {
        return this.json.vehicleClass;
    }
    /**
     * The categories of motor vehicles that the holder of this License is permitted to drive.
     *
     * @since 7.0.0
     */
    get vehicleRestrictions() {
        return this.json.vehicleRestrictions.map(json => VehicleRestriction.fromJSON(json));
    }
    /**
     * The version of the barcode.
     *
     * @since 7.0.0
     */
    get version() {
        return this.json.version;
    }
    /**
     * The weight of the card holder in kilograms.
     *
     * @since 7.0.0
     */
    get weightKg() {
        return this.json.weightKg;
    }
    /**
     * Thw weight of the card holder in pounds.
     *
     * @since 7.0.0
     */
    get weightLbs() {
        return this.json.weightLbs;
    }
    /**
     * Returns true if the document is a Real ID.
     *
     * @since 7.0.0
     */
    get isRealId() {
        return this.json.isRealId;
    }
    // Serialized natively as "dictionary"; exposed publicly as barcodeDataElements.
    /**
     * The mappings between all the barcode data element IDs and their values. The keys of this collection are the element IDs as defined in the AAMVA Driver License/Identification specification. For example, the specification defines a data element “Customer First Name” with the ID “DAC”. Therefore if a scanned barcode contains a string “DACMICHAEL”, then this collection will contain a mapping with “DAC” as the key and “MICHAEL” as the value. This collection contains all the data elements of the barcode - including those that are exposed also explicitly as fields of this class.
     *
     * See Barcode Data Elements for all the possible keys and their meaning.
     *
     * @since 7.0.0
     */
    get barcodeDataElements() {
        var _a;
        return (_a = this.json.dictionary) !== null && _a !== void 0 ? _a : {};
    }
    // Common Fields
    /**
     * The first name of the document holder.
     *
     * @since 8.0.0
     */
    get firstName() {
        return this.json.firstName;
    }
    /**
     * The last name of the document holder.
     *
     * @since 8.0.0
     */
    get lastName() {
        return this.json.lastName;
    }
    /**
     * The full name of the document holder.
     *
     * @since 8.0.0
     */
    get fullName() {
        return this.json.fullName;
    }
    /**
     * The sex of the document holder.
     *
     * @since 8.0.0
     */
    get sex() {
        return this.json.sex;
    }
    /**
     * The date of birth of the document holder.
     *
     * @since 8.0.0
     */
    get dateOfBirth() {
        return DateResult.fromJSON(this.json.dateOfBirth);
    }
    /**
     * The nationality of the document holder.
     *
     * @since 8.0.0
     */
    get nationality() {
        return this.json.nationality;
    }
    /**
     * The address of the document holder.
     *
     * @since 8.0.0
     */
    get address() {
        return this.json.address;
    }
    /**
     * The document number of the ID.
     *
     * @since 8.0.0
     */
    get documentNumber() {
        return this.json.documentNumber;
    }
    /**
     * The expiry date of the document.
     *
     * @since 8.0.0
     */
    get dateOfExpiry() {
        return DateResult.fromJSON(this.json.dateOfExpiry);
    }
    /**
     * The issue date of the document.
     *
     * @since 8.0.0
     */
    get dateOfIssue() {
        return DateResult.fromJSON(this.json.dateOfIssue);
    }
}

/**
 * This class represents data extracted from a Machine Readable Zone (MRZ). It consolidates information from MRZs that comply with the Machine Readable Travel Documents ICAO standard, as well as various MRZ-like formats supported by the library. Some properties may not apply to certain document types and will be set to nil if the corresponding data is not encoded in the MRZ. For a complete list of supported MRZ types, refer to supported documents.
 *
 * The ID Capture mode supports all versions of Machine Readable Travel Documents (MRTD) specified by the International Civil Aviation Organization (ICAO).The ICAO specifies four types of MRTDs:[TD1 - ID cards](https://www.icao.int/sites/default/files/publications/DocSeries/9303_p5_cons_en.pdf) (id cards)[TD2 - other official travel documents](https://www.icao.int/sites/default/files/publications/DocSeries/9303_p6_cons_en.pdf) (other official travel documents)[TD3/MRP - passports](https://www.icao.int/sites/default/files/publications/DocSeries/9303_p4_cons_en.pdf) (passports)[MRV (A & B type) - visas](https://www.icao.int/sites/default/files/publications/DocSeries/9303_p7_cons_en.pdf) (visas)In addition, the ID Capture mode supports the following non-ICAO standards:SwissDL - Swiss driving license[TD2/FrenchID - French ID](https://en.wikipedia.org/wiki/National_identity_card_(France)) (French identity card)Use the following regex pattern to filter out MRTD codes:TypeRegexTD1 Regex Pattern([A-Z0-9<]{30}\n?){3}TD2 Regex Pattern([A-Z0-9<]{36}\n?){2}TD2 French Regex PatternSame as TD2 Regex PatternTD3 Regex Pattern([A-Z0-9<]{44}\n?){2}MRV_A Regex PatternSame as TD2 Regex PatternMRV_B Regex PatternSame as TD3 Regex PatternSwiss Driving License Regex Pattern[A-Z0-9<]{9}\n([A-Z0-9<]{30}\n?){2}
 *
 * @since 6.14.0
 */
class MRZResult {
    /**
     * The document type code. One of the following values:
     *
     * P[passport type id] - indicates a passport,ID - indicates an id card,CA - indicates a Canada permanent resident card.CP - indicates a Asia-Pacific Economic Cooperation Business Travel CardCS - indicates an Exit-Entry Permit for Travelling to and from Hong Kong and Macau (往来港澳通行证);CD - indicates an Exit-Entry Permit for Travelling to and from Taiwan (往来台灣通行证).CR - indicates a Mainland Travel Permit for Hong Kong & Macau Residents.CT - indicates a Mainland Travel Permit for Taiwan Residents.
     *
     * @since 6.14.0
     */
    get documentCode() {
        return this.json.documentCode;
    }
    /**
     * Indicates whether first or last name is truncated. For more information please refer to the [official specification](https://www.icao.int/sites/default/files/publications/DocSeries/9303_p5_cons_en.pdf).
     *
     * @since 6.14.0
     */
    get namesAreTruncated() {
        return this.json.namesAreTruncated;
    }
    /**
     * Optional data field from line 1 of the MRZ, for use of the issuing country or the organization.
     *
     * For TD-1 documents (such as ID cards), this contains the optional data from the first line. For other document types, this field may be null if no optional data is present on the first line.
     *
     * If {@link IdCaptureSettings.anonymizationMode} is enabled for the field results, the returned value might be *null* for certain documents.
     *
     * @since 7.6.0
     */
    get optionalDataInLine1() {
        return this.json.optionalDataInLine1;
    }
    /**
     * Optional data field from line 2 of the MRZ, for use of the issuing country or the organization.
     *
     * If {@link IdCaptureSettings.anonymizationMode} is enabled for the field results, the returned value might be *null* for certain documents.
     *
     * @since 7.6.0
     */
    get optionalDataInLine2() {
        return this.json.optionalDataInLine2;
    }
    /**
     * The full MRZ text as it appears on a document.
     *
     * If {@link IdCaptureSettings.anonymizationMode} is enabled for the field results, the returned value might be *null* for certain documents.
     *
     * @since 6.14.0
     */
    get capturedMrz() {
        return this.json.capturedMrz;
    }
    /**
     * The personal ID Number of the document holder.
     *
     * @since 7.0.0
     */
    get personalIdNumber() {
        return this.json.personalIdNumber;
    }
    /**
     * The number of times the document has been renewed.
     *
     * @since 7.0.0
     */
    get renewalTimes() {
        return this.json.renewalTimes;
    }
    /**
     * The holder’s name in Simplified Chinese characters.
     *
     * @since 7.0.0
     */
    get fullNameSimplifiedChinese() {
        return this.json.fullNameSimplifiedChinese;
    }
    /**
     * The number of Chinese characters omitted in in GBK (a character encoding for Simplified Chinese characters used in the People’s Republic of China) name.
     *
     * @since 7.0.0
     */
    get omittedCharacterCountInGbkName() {
        return this.json.omittedCharacterCountInGbkName;
    }
    /**
     * The number of names that couldn’t be displayed in the MRZ.
     *
     * @since 7.0.0
     */
    get omittedNameCount() {
        return this.json.omittedNameCount;
    }
    /**
     * The code of the authority that issued this document.
     *
     * @since 7.0.0
     */
    get issuingAuthorityCode() {
        return this.json.issuingAuthorityCode;
    }
    /**
     * The ISO code of the issuing jurisdiction.
     *
     * @since 7.0.0
     */
    get passportIssuerIso() {
        return this.json.passportIssuerIso;
    }
    /**
     * The passport number of the document holder.
     *
     * @since 7.0.0
     */
    get passportNumber() {
        return this.json.passportNumber;
    }
    /**
     * The visa number, populated when a per-country rule maps it from the MRZ.
     *
     * @since 8.7.0
     */
    get visaNumber() {
        return this.json.visaNumber;
    }
    /**
     * The number of entries the visa permits, parsed on a best-effort basis from optional data in line 2.
     *
     * @since 8.7.0
     */
    get visaNumberOfEntries() {
        return this.json.visaNumberOfEntries;
    }
    /**
     * Whether the visa permits multiple entries, parsed on a best-effort basis from optional data in line 2.
     *
     * @since 8.7.0
     */
    get visaMultipleEntries() {
        return this.json.visaMultipleEntries;
    }
    /**
     * The duration of stay in days the visa permits, parsed on a best-effort basis from optional data in line 2.
     *
     * @since 8.7.0
     */
    get visaDurationInDays() {
        return this.json.visaDurationInDays;
    }
    /**
     * Sub-category of a passport derived from the MRZ document code.
     *
     * @since 8.7.0
     */
    get passportType() {
        return this.json.passportType;
    }
    /**
     * The expiry date of the holder’s passport.
     *
     * @since 7.0.0
     */
    get passportDateOfExpiry() {
        return DateResult.fromJSON(this.json.passportDateOfExpiry);
    }
    // Common Fields
    /**
     * The first name of the document holder. Certain documents do not distinguish between given name and surname. If the name cannot be split reliably, this field may be null.
     *
     * @since 8.0.0
     */
    get firstName() {
        return this.json.firstName;
    }
    /**
     * The last name of the document holder. Certain documents do not distinguish between given name and surname. If the name cannot be split reliably, this field may be null.
     *
     * @since 8.0.0
     */
    get lastName() {
        return this.json.lastName;
    }
    /**
     * The full name of the document holder.
     *
     * @since 8.0.0
     */
    get fullName() {
        return this.json.fullName;
    }
    /**
     * The sex of the document holder.
     *
     * @since 8.0.0
     */
    get sex() {
        return this.json.sex;
    }
    /**
     * The date of birth of the document holder.
     *
     * @since 8.0.0
     */
    get dateOfBirth() {
        return DateResult.fromJSON(this.json.dateOfBirth);
    }
    /**
     * The nationality of the document holder.
     *
     * @since 8.0.0
     */
    get nationality() {
        return this.json.nationality;
    }
    /**
     * The address of the document holder.
     *
     * @since 8.0.0
     */
    get address() {
        return this.json.address;
    }
    /**
     * The document number of the ID.
     *
     * @since 8.0.0
     */
    get documentNumber() {
        return this.json.documentNumber;
    }
    /**
     * The expiry date of the document.
     *
     * @since 8.0.0
     */
    get dateOfExpiry() {
        return DateResult.fromJSON(this.json.dateOfExpiry);
    }
    /**
     * The issue date of the document.
     *
     * @since 8.0.0
     */
    get dateOfIssue() {
        return DateResult.fromJSON(this.json.dateOfIssue);
    }
    static fromJSON(json) {
        const result = new MRZResult();
        result.json = json;
        return result;
    }
}

/**
 * @since 8.0.0
 */
class DrivingLicenseCategory {
    /**
     * Driver’s license code representing type of vehicle.
     *
     * @since 8.0.0
     */
    get code() {
        return this.json.code;
    }
    /**
     * The date of issue for the accompanying driver’s license code.
     *
     * @since 8.0.0
     */
    get dateOfIssue() {
        return DateResult.fromJSON(this.json.dateOfIssue);
    }
    /**
     * The date of expiry for the accompanying driver’s license code.
     *
     * @since 8.0.0
     */
    get dateOfExpiry() {
        return DateResult.fromJSON(this.json.dateOfExpiry);
    }
    static fromJSON(json) {
        if (json === null || json === undefined) {
            return null;
        }
        const result = new DrivingLicenseCategory();
        result.json = json;
        return result;
    }
}

/**
 * @since 8.0.0
 */
class DrivingLicenseDetails {
    constructor() {
        this._drivingLicenseCategories = [];
    }
    static fromJSON(json) {
        if (json === null) {
            return null;
        }
        const result = new DrivingLicenseDetails();
        result.json = json;
        return result;
    }
    /**
     * Additional information from driver licenses such as vehicle categories.
     *
     * @since 8.0.0
     */
    get drivingLicenseCategories() {
        if (this._drivingLicenseCategories.length === 0) {
            this._drivingLicenseCategories = this.json.drivingLicenseCategories
                .map(categoryJson => DrivingLicenseCategory.fromJSON(categoryJson))
                .filter((category) => category !== null);
        }
        return this._drivingLicenseCategories;
    }
    /**
     * The restrictions to driving privileges for the driver license owner.
     *
     * @since 8.0.0
     */
    get restrictions() {
        return this.json.restrictions;
    }
    /**
     * The additional privileges granted to the driver license owner.
     *
     * @since 8.0.0
     */
    get endorsements() {
        return this.json.endorsements;
    }
}

/**
 * This class represents data extracted from a visa document processed in the cloud.
 *
 * @since 8.7.0
 */
class VisaDetails {
    static fromJSON(json) {
        if (json === null || json === undefined) {
            return null;
        }
        const result = new VisaDetails();
        result.json = json;
        return result;
    }
    /**
     * The full name of the person holding the visa or applicant on the document.
     *
     * @since 8.7.0
     */
    get fullName() {
        return this.json.fullName;
    }
    /**
     * The number of the visa.
     *
     * @since 8.7.0
     */
    get visaNumber() {
        return this.json.visaNumber;
    }
    /**
     * The number of the passport referenced by the visa.
     *
     * @since 8.7.0
     */
    get passportNumber() {
        return this.json.passportNumber;
    }
    /**
     * The foil number of the visa, if available. Typically an eight-digit alphanumeric code printed in red ink on a U.S. visa sticker, usually found in the lower right-hand corner.
     *
     * @since 8.7.0
     */
    get foilNumber() {
        return this.json.foilNumber;
    }
    /**
     * The ISO code (Alpha-3 code) of the country issuing the document.
     *
     * @since 8.7.0
     */
    get issuingCountryIso() {
        return this.json.issuingCountryIso;
    }
    /**
     * The authority that issued the document, or the place where it was issued.
     *
     * @since 8.7.0
     */
    get issuingAuthority() {
        return this.json.issuingAuthority;
    }
    /**
     * The geographic validity of the document. For example “Schengen States” or “United States of America”.
     *
     * @since 8.7.0
     */
    get geographicValidity() {
        return this.json.geographicValidity;
    }
    /**
     * The type of the visa. Usually a single character like ‘C’, ‘A’ or ‘D’.
     *
     * @since 8.7.0
     */
    get visaType() {
        return this.json.visaType;
    }
    /**
     * The duration of the visa in days.
     *
     * @since 8.7.0
     */
    get durationInDays() {
        return this.json.durationInDays;
    }
    /**
     * The number of entries allowed on the visa.
     *
     * @since 8.7.0
     */
    get numberOfEntries() {
        return this.json.numberOfEntries;
    }
    /**
     * Whether the visa allows multiple entries.
     *
     * @since 8.7.0
     */
    get multipleEntries() {
        return this.json.multipleEntries;
    }
    /**
     * The status of the application for the document.
     *
     * @since 8.7.0
     */
    get applicationStatus() {
        return this.json.applicationStatus;
    }
    /**
     * The date when the visa was issued.
     *
     * @since 8.7.0
     */
    get dateOfIssue() {
        return DateResult.fromJSON(this.json.dateOfIssue);
    }
    /**
     * The start date of the visa validity.
     *
     * @since 8.7.0
     */
    get validFrom() {
        return DateResult.fromJSON(this.json.validFrom);
    }
    /**
     * The end date of the visa validity. Sometimes also called “expiry date”.
     *
     * @since 8.7.0
     */
    get validUntil() {
        return DateResult.fromJSON(this.json.validUntil);
    }
}

/**
 * Document scan results with information obtained from documents or their parts intended to be read by humans (for example Visual Inspection Zone (VIZ) of a Machine-Readable Travel Document (MRTD)).
 *
 * @since 6.14.0
 */
class VIZResult {
    /**
     * The additional address information of the document holder.
     *
     * @since 6.14.0
     */
    get additionalAddressInformation() {
        return this.json.additionalAddressInformation;
    }
    /**
     * The additional name information of the document holder that might be present on the document.
     *
     * The content of this field varies by document type:**German passports and IDs**: Contains the maiden name or birth name of the document holder**French passports**: Contains the married name of the document holder
     *
     * @since 6.14.0
     */
    get additionalNameInformation() {
        return this.json.additionalNameInformation;
    }
    /**
     * The additional number of the document.
     *
     * If {@link IdCaptureSettings.anonymizationMode} is enabled for the field results, the returned value might be *null* for certain documents.
     *
     * @since 6.14.0
     */
    get documentAdditionalNumber() {
        return this.json.documentAdditionalNumber;
    }
    /**
     * The employer of the document holder.
     *
     * @since 6.14.0
     */
    get employer() {
        return this.json.employer;
    }
    /**
     * The government body issuing this ID, e.g. the Department of Motor Vehicles.
     *
     * @since 6.14.0
     */
    get issuingAuthority() {
        return this.json.issuingAuthority;
    }
    /**
     * A human readable name of the issuing jurisdiction (for example: an issuing state, territory or federal district for USA, or an issuing province or territory for Canada).
     *
     * @since 6.14.0
     */
    get issuingJurisdiction() {
        return this.json.issuingJurisdiction;
    }
    /**
     * The ISO code of the issuing jurisdiction (for example: an issuing state, territory or federal district for the USA, or an issuing province or territory for Canada). *null* if the issuing jurisdiction has no valid ISO code (for example cities in Mexico).
     *
     * The returned value will only contain the jurisdiction specific code: for instance for California the returned value would be “CA” and not “US-CA”.Please note that for the New York City ID, this field is set to “NYC” as ISO-3166-2 does not specify city-level names.
     *
     * @since 6.14.0
     */
    get issuingJurisdictionIso() {
        return this.json.issuingJurisdictionIso;
    }
    /**
     * The marital status of the document holder.
     *
     * @since 6.14.0
     */
    get maritalStatus() {
        return this.json.maritalStatus;
    }
    /**
     * The personal identification number.
     *
     * If {@link IdCaptureSettings.anonymizationMode} is enabled for the field results, the returned value might be *null* for certain documents.
     *
     * @since 6.14.0
     */
    get personalIdNumber() {
        return this.json.personalIdNumber;
    }
    /**
     * The place of birth of the document holder.
     *
     * @since 6.14.0
     */
    get placeOfBirth() {
        return this.json.placeOfBirth;
    }
    /**
     * The profession of the document holder.
     *
     * @since 6.14.0
     */
    get profession() {
        return this.json.profession;
    }
    /**
     * The race of the document holder.
     *
     * @since 6.14.0
     */
    get race() {
        return this.json.race;
    }
    /**
     * The religion of the document holder.
     *
     * If {@link IdCaptureSettings.anonymizationMode} is enabled for the field results, the returned value might be *null* for certain documents.
     *
     * @since 6.14.0
     */
    get religion() {
        return this.json.religion;
    }
    /**
     * The residential status of the document holder.
     *
     * @since 6.14.0
     */
    get residentialStatus() {
        return this.json.residentialStatus;
    }
    get usRealIdStatus() {
        return this.json.usRealIdStatus;
    }
    /**
     * The sides of the document that were scanned to extract this VizResult.
     *
     * @since 6.14.0
     */
    get capturedSides() {
        return this.json.capturedSides;
    }
    /**
     * Indicates whether the document supports scanning of the back side.
     *
     * @since 6.14.0
     */
    get isBackSideCaptureSupported() {
        return this.json.isBackSideCaptureSupported;
    }
    /**
     * The blood type of the document owner.
     *
     * @since 6.25.0
     */
    get bloodType() {
        return this.json.bloodType;
    }
    /**
     * The sponsor of the document owner.
     *
     * @since 6.25.0
     */
    get sponsor() {
        return this.json.sponsor;
    }
    /**
     * The mother’s name of the document owner.
     *
     * @since 6.25.0
     */
    get mothersName() {
        return this.json.mothersName;
    }
    /**
     * The father’s name of the document owner.
     *
     * @since 6.25.0
     */
    get fathersName() {
        return this.json.fathersName;
    }
    /**
     * The passport number of the document holder.
     *
     * @since 7.0.0
     */
    get passportNumber() {
        return this.json.passportNumber;
    }
    /**
     * The visa number of the document holder.
     *
     * @since 7.0.0
     */
    get visaNumber() {
        return this.json.visaNumber;
    }
    /**
     * The owner of the vehicle.
     *
     * @since 8.0.0
     */
    get vehicleOwner() {
        return this.json.vehicleOwner;
    }
    /**
     * Extra information about the scanned driver’s license
     *
     * @since 8.0.0
     */
    get drivingLicenseDetails() {
        return DrivingLicenseDetails.fromJSON(this.json.drivingLicenseDetails);
    }
    /**
     * Extra information about the scanned visa.
     *
     * @since 8.7.0
     */
    get visaDetails() {
        return VisaDetails.fromJSON(this.json.visaDetails);
    }
    // Common Fields
    /**
     * The first name of the document holder. Separated by spaces if more than one name is present. Certain documents do not distinguish between given name and surname. If the name cannot be split reliably, this field may be null.
     *
     * @since 7.0.0
     */
    get firstName() {
        return this.json.firstName;
    }
    /**
     * The last name of the document holder. Separated by spaces if more than one name is present. Certain documents do not distinguish between given name and surname. If the name cannot be split reliably, this field may be null.
     *
     * @since 7.0.0
     */
    get lastName() {
        return this.json.lastName;
    }
    /**
     * The full name of the document holder.
     *
     * @since 7.0.0
     */
    get fullName() {
        return this.json.fullName;
    }
    /**
     * The sex of the document holder.
     *
     * @since 8.0.0
     */
    get sex() {
        return this.json.sex;
    }
    /**
     * The date of birth of the document holder.
     *
     * @since 8.0.0
     */
    get dateOfBirth() {
        return DateResult.fromJSON(this.json.dateOfBirth);
    }
    /**
     * The nationality of the document holder.
     *
     * @since 8.0.0
     */
    get nationality() {
        return this.json.nationality;
    }
    /**
     * The address of the document holder.
     *
     * @since 8.0.0
     */
    get address() {
        return this.json.address;
    }
    /**
     * The document number of the ID.
     *
     * @since 8.0.0
     */
    get documentNumber() {
        return this.json.documentNumber;
    }
    /**
     * The expiry date of the document.
     *
     * @since 8.0.0
     */
    get dateOfExpiry() {
        return DateResult.fromJSON(this.json.dateOfExpiry);
    }
    /**
     * The issue date of the document.
     *
     * @since 8.0.0
     */
    get dateOfIssue() {
        return DateResult.fromJSON(this.json.dateOfIssue);
    }
    static fromJSON(json) {
        const result = new VIZResult();
        result.json = json;
        return result;
    }
}

/**
 * Types associated with the document classes below
 *
 * @since 7.0.0
 */
var IdCaptureDocumentType;
(function (IdCaptureDocumentType) {
    /**
     * ID card identification document. Associated with {@link IdCard}.
     *
     * @since 7.0.0
     */
    IdCaptureDocumentType["IdCard"] = "idCard";
    /**
     * Driver license identification document. Associated with {@link DriverLicense}.
     *
     * @since 7.0.0
     */
    IdCaptureDocumentType["DriverLicense"] = "driverLicense";
    /**
     * Passport identification document. Associated with {@link Passport}.
     *
     * @since 7.0.0
     */
    IdCaptureDocumentType["Passport"] = "passport";
    /**
     * Visa (ICAO) identification document. Associated with {@link VisaIcao}.
     *
     * @since 7.0.0
     */
    IdCaptureDocumentType["VisaIcao"] = "visaIcao";
    /**
     * Region specific identification document. Associated with {@link RegionSpecific}.
     *
     * @since 7.0.0
     */
    IdCaptureDocumentType["RegionSpecific"] = "regionSpecific";
    /**
     * Residence Permit. Associated with {@link ResidencePermit}.
     *
     * @since 7.0.0
     */
    IdCaptureDocumentType["ResidencePermit"] = "residencePermit";
    /**
     * Health insurance card. Associated with {@link HealthInsuranceCard}.
     *
     * @since 7.0.0
     */
    IdCaptureDocumentType["HealthInsuranceCard"] = "healthInsuranceCard";
    /**
     * Visa letter document. Associated with {@link VisaLetter} (experimental document type).
     *
     * @since 8.7.0
     */
    IdCaptureDocumentType["VisaLetter"] = "visaLetter";
})(IdCaptureDocumentType || (IdCaptureDocumentType = {}));

/**
 * A category of documents that confirms the holder’s right to drive or operate vehicles.
 *
 * @since 7.0.0
 */
class DriverLicense extends DefaultSerializeable {
    /**
     * Creates a new {@link DriverLicense} instance.
     *
     * @since 7.0.0
     */
    constructor(region) {
        super();
        this._documentType = IdCaptureDocumentType.DriverLicense;
        this._region = region;
    }
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.2.0
     */
    get documentType() {
        return this._documentType;
    }
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.2.0
     */
    get region() {
        return this._region;
    }
    get isIdCard() {
        return this._documentType === IdCaptureDocumentType.IdCard;
    }
    get isDriverLicense() {
        return this._documentType === IdCaptureDocumentType.DriverLicense;
    }
    get isPassport() {
        return this._documentType === IdCaptureDocumentType.Passport;
    }
    get isVisaIcao() {
        return this._documentType === IdCaptureDocumentType.VisaIcao;
    }
    get isRegionSpecific() {
        return this._documentType === IdCaptureDocumentType.RegionSpecific;
    }
    get isResidencePermit() {
        return this._documentType === IdCaptureDocumentType.ResidencePermit;
    }
    get isHealthInsuranceCard() {
        return this._documentType === IdCaptureDocumentType.HealthInsuranceCard;
    }
    get isVisaLetter() {
        return this._documentType === IdCaptureDocumentType.VisaLetter;
    }
}
__decorate([
    nameForSerialization('region')
], DriverLicense.prototype, "_region", void 0);
__decorate([
    nameForSerialization('documentType')
], DriverLicense.prototype, "_documentType", void 0);

/**
 * A category of documents that provide proof of an individual’s health insurance coverage, typically issued by a health insurer or government agency.
 *
 * @since 7.0.0
 */
class HealthInsuranceCard extends DefaultSerializeable {
    /**
     * Creates a new {@link HealthInsuranceCard} instance.
     *
     * @since 7.0.0
     */
    constructor(region) {
        super();
        this._documentType = IdCaptureDocumentType.HealthInsuranceCard;
        this._region = region;
    }
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.2.0
     */
    get documentType() {
        return this._documentType;
    }
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.2.0
     */
    get region() {
        return this._region;
    }
    get isIdCard() {
        return this._documentType === IdCaptureDocumentType.IdCard;
    }
    get isDriverLicense() {
        return this._documentType === IdCaptureDocumentType.DriverLicense;
    }
    get isPassport() {
        return this._documentType === IdCaptureDocumentType.Passport;
    }
    get isVisaIcao() {
        return this._documentType === IdCaptureDocumentType.VisaIcao;
    }
    get isRegionSpecific() {
        return this._documentType === IdCaptureDocumentType.RegionSpecific;
    }
    get isResidencePermit() {
        return this._documentType === IdCaptureDocumentType.ResidencePermit;
    }
    get isHealthInsuranceCard() {
        return this._documentType === IdCaptureDocumentType.HealthInsuranceCard;
    }
    get isVisaLetter() {
        return this._documentType === IdCaptureDocumentType.VisaLetter;
    }
}
__decorate([
    nameForSerialization('region')
], HealthInsuranceCard.prototype, "_region", void 0);
__decorate([
    nameForSerialization('documentType')
], HealthInsuranceCard.prototype, "_documentType", void 0);

/**
 * A category of state-issued documents primarily designed to confirm a citizen’s identity, voting rights, or age. This category includes documents commonly referred to as ID Cards, Voting IDs, and Proof of Age Cards. It also encompasses Passport Cards issued by certain jurisdictions, which provide limited travel rights.
 *
 * While other documents (e.g., driver’s licenses, passports, residence permits) may serve as identification in certain regions, they are not included in this category.
 *
 * @since 7.0.0
 */
class IdCard extends DefaultSerializeable {
    /**
     * Creates a new {@link IdCard} instance.
     *
     * @since 7.0.0
     */
    constructor(region) {
        super();
        this._documentType = IdCaptureDocumentType.IdCard;
        this._region = region;
    }
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.2.0
     */
    get documentType() {
        return this._documentType;
    }
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.2.0
     */
    get region() {
        return this._region;
    }
    get isIdCard() {
        return this._documentType === IdCaptureDocumentType.IdCard;
    }
    get isDriverLicense() {
        return this._documentType === IdCaptureDocumentType.DriverLicense;
    }
    get isPassport() {
        return this._documentType === IdCaptureDocumentType.Passport;
    }
    get isVisaIcao() {
        return this._documentType === IdCaptureDocumentType.VisaIcao;
    }
    get isRegionSpecific() {
        return this._documentType === IdCaptureDocumentType.RegionSpecific;
    }
    get isResidencePermit() {
        return this._documentType === IdCaptureDocumentType.ResidencePermit;
    }
    get isHealthInsuranceCard() {
        return this._documentType === IdCaptureDocumentType.HealthInsuranceCard;
    }
    get isVisaLetter() {
        return this._documentType === IdCaptureDocumentType.VisaLetter;
    }
}
__decorate([
    nameForSerialization('region')
], IdCard.prototype, "_region", void 0);
__decorate([
    nameForSerialization('documentType')
], IdCard.prototype, "_documentType", void 0);

/**
 * A category of official government-issued documents that verify a person’s identity and nationality, enabling international travel.
 *
 * Passport Cards and other documents used for regional travel are not included in this category.
 *
 * @since 7.0.0
 */
class Passport extends DefaultSerializeable {
    /**
     * Creates a new {@link Passport} instance.
     *
     * @since 7.0.0
     */
    constructor(region) {
        super();
        this._documentType = IdCaptureDocumentType.Passport;
        this._region = region;
    }
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.2.0
     */
    get documentType() {
        return this._documentType;
    }
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.2.0
     */
    get region() {
        return this._region;
    }
    get isIdCard() {
        return this._documentType === IdCaptureDocumentType.IdCard;
    }
    get isDriverLicense() {
        return this._documentType === IdCaptureDocumentType.DriverLicense;
    }
    get isPassport() {
        return this._documentType === IdCaptureDocumentType.Passport;
    }
    get isVisaIcao() {
        return this._documentType === IdCaptureDocumentType.VisaIcao;
    }
    get isRegionSpecific() {
        return this._documentType === IdCaptureDocumentType.RegionSpecific;
    }
    get isResidencePermit() {
        return this._documentType === IdCaptureDocumentType.ResidencePermit;
    }
    get isHealthInsuranceCard() {
        return this._documentType === IdCaptureDocumentType.HealthInsuranceCard;
    }
    get isVisaLetter() {
        return this._documentType === IdCaptureDocumentType.VisaLetter;
    }
}
__decorate([
    nameForSerialization('region')
], Passport.prototype, "_region", void 0);
__decorate([
    nameForSerialization('documentType')
], Passport.prototype, "_documentType", void 0);

/**
 * A category of documents that do not fall into other established categories and lack a recognized international standard. These documents grant privileges or serve specific purposes within a particular region or jurisdiction, often related to local regulations or services.
 *
 * @since 7.0.0
 */
class RegionSpecific extends DefaultSerializeable {
    /**
     * Creates a new {@link RegionSpecific} instance.
     *
     * @since 7.0.0
     */
    constructor(subtype) {
        super();
        this._documentType = IdCaptureDocumentType.RegionSpecific;
        this._region = IdCaptureRegion.Any;
        this._documentSubtype = subtype;
    }
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.2.0
     */
    get documentType() {
        return this._documentType;
    }
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.2.0
     */
    get region() {
        return this._region;
    }
    /**
     * Enum {@link RegionSpecificSubtype} indicating the region-specific subtype associated with this instance.
     *
     * @since 7.0.0
     */
    get subtype() {
        return this._documentSubtype;
    }
    get isIdCard() {
        return this._documentType === IdCaptureDocumentType.IdCard;
    }
    get isDriverLicense() {
        return this._documentType === IdCaptureDocumentType.DriverLicense;
    }
    get isPassport() {
        return this._documentType === IdCaptureDocumentType.Passport;
    }
    get isVisaIcao() {
        return this._documentType === IdCaptureDocumentType.VisaIcao;
    }
    get isRegionSpecific() {
        return this._documentType === IdCaptureDocumentType.RegionSpecific;
    }
    get isResidencePermit() {
        return this._documentType === IdCaptureDocumentType.ResidencePermit;
    }
    get isHealthInsuranceCard() {
        return this._documentType === IdCaptureDocumentType.HealthInsuranceCard;
    }
    get isVisaLetter() {
        return this._documentType === IdCaptureDocumentType.VisaLetter;
    }
}
__decorate([
    nameForSerialization('region')
], RegionSpecific.prototype, "_region", void 0);
__decorate([
    nameForSerialization('documentSubtype')
], RegionSpecific.prototype, "_documentSubtype", void 0);
__decorate([
    nameForSerialization('documentType')
], RegionSpecific.prototype, "_documentType", void 0);

/**
 * A category of documents issued to confirm the identity of non-citizens and their right to reside for an extended period within a given jurisdiction. These are sometimes referred to as Resident IDs or Alien IDs.
 *
 * @since 7.0.0
 */
class ResidencePermit extends DefaultSerializeable {
    /**
     * Creates a new {@link ResidencePermit} instance.
     *
     * @since 7.0.0
     */
    constructor(region) {
        super();
        this._documentType = IdCaptureDocumentType.ResidencePermit;
        this._region = region;
    }
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.2.0
     */
    get documentType() {
        return this._documentType;
    }
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.2.0
     */
    get region() {
        return this._region;
    }
    get isIdCard() {
        return this._documentType === IdCaptureDocumentType.IdCard;
    }
    get isDriverLicense() {
        return this._documentType === IdCaptureDocumentType.DriverLicense;
    }
    get isPassport() {
        return this._documentType === IdCaptureDocumentType.Passport;
    }
    get isVisaIcao() {
        return this._documentType === IdCaptureDocumentType.VisaIcao;
    }
    get isRegionSpecific() {
        return this._documentType === IdCaptureDocumentType.RegionSpecific;
    }
    get isResidencePermit() {
        return this._documentType === IdCaptureDocumentType.ResidencePermit;
    }
    get isHealthInsuranceCard() {
        return this._documentType === IdCaptureDocumentType.HealthInsuranceCard;
    }
    get isVisaLetter() {
        return this._documentType === IdCaptureDocumentType.VisaLetter;
    }
}
__decorate([
    nameForSerialization('region')
], ResidencePermit.prototype, "_region", void 0);
__decorate([
    nameForSerialization('documentType')
], ResidencePermit.prototype, "_documentType", void 0);

/**
 * A category of travel documents that temporarily permit a foreigner to enter, remain in, or leave the issuing jurisdiction. Only documents that comply with the ICAO Machine Readable Travel Document (MRTD) standard are included in this category.
 *
 * This category does not include documents that grant similar privileges but do not adhere to the ICAO MRTD standard, such as the US Border Crossing Card or travel permits for autonomous regions like Hong Kong and Macao issued by China.
 *
 * @since 7.0.0
 */
class VisaIcao extends DefaultSerializeable {
    /**
     * Creates a new {@link VisaIcao} instance.
     *
     * @since 7.0.0
     */
    constructor(region) {
        super();
        this._documentType = IdCaptureDocumentType.VisaIcao;
        this._region = region;
    }
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.2.0
     */
    get documentType() {
        return this._documentType;
    }
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.2.0
     */
    get region() {
        return this._region;
    }
    get isIdCard() {
        return this._documentType === IdCaptureDocumentType.IdCard;
    }
    get isDriverLicense() {
        return this._documentType === IdCaptureDocumentType.DriverLicense;
    }
    get isPassport() {
        return this._documentType === IdCaptureDocumentType.Passport;
    }
    get isVisaIcao() {
        return this._documentType === IdCaptureDocumentType.VisaIcao;
    }
    get isRegionSpecific() {
        return this._documentType === IdCaptureDocumentType.RegionSpecific;
    }
    get isResidencePermit() {
        return this._documentType === IdCaptureDocumentType.ResidencePermit;
    }
    get isHealthInsuranceCard() {
        return this._documentType === IdCaptureDocumentType.HealthInsuranceCard;
    }
    get isVisaLetter() {
        return this._documentType === IdCaptureDocumentType.VisaLetter;
    }
}
__decorate([
    nameForSerialization('region')
], VisaIcao.prototype, "_region", void 0);
__decorate([
    nameForSerialization('documentType')
], VisaIcao.prototype, "_documentType", void 0);

/**
 * Visa document issued by an authority to enter, remain or leave a territory.
 *
 * This document type is experimental and may be subject to change in the future. This document can only be used with a compliant license key. Please contact Scandit Support to enable this feature.
 *
 * @since 8.7.0
 */
class VisaLetter extends DefaultSerializeable {
    /**
     * Creates a new {@link VisaLetter} instance.
     *
     * @since 8.7.0
     */
    constructor(region) {
        super();
        this._documentType = IdCaptureDocumentType.VisaLetter;
        this._region = region;
    }
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.7.0
     */
    get documentType() {
        return this._documentType;
    }
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.7.0
     */
    get region() {
        return this._region;
    }
    get isIdCard() {
        return this._documentType === IdCaptureDocumentType.IdCard;
    }
    get isDriverLicense() {
        return this._documentType === IdCaptureDocumentType.DriverLicense;
    }
    get isPassport() {
        return this._documentType === IdCaptureDocumentType.Passport;
    }
    get isVisaIcao() {
        return this._documentType === IdCaptureDocumentType.VisaIcao;
    }
    get isRegionSpecific() {
        return this._documentType === IdCaptureDocumentType.RegionSpecific;
    }
    get isResidencePermit() {
        return this._documentType === IdCaptureDocumentType.ResidencePermit;
    }
    get isHealthInsuranceCard() {
        return this._documentType === IdCaptureDocumentType.HealthInsuranceCard;
    }
    get isVisaLetter() {
        return this._documentType === IdCaptureDocumentType.VisaLetter;
    }
}
__decorate([
    nameForSerialization('region')
], VisaLetter.prototype, "_region", void 0);
__decorate([
    nameForSerialization('documentType')
], VisaLetter.prototype, "_documentType", void 0);

/**
 * This class represents data extracted from mobile documents using optical character recognition (OCR). It contains information from mobile driver’s licenses captured using OCR-based scanning methods, such as Australian mobile driver licenses. Some properties may not apply to certain document types and will be set to nil if the corresponding data is not available or could not be extracted via OCR.
 *
 * @since 8.0.0
 */
class MobileDocumentOCRResult {
    /**
     * The first name of the document holder extracted via OCR.
     *
     * @since 8.0.0
     */
    get firstName() {
        return this.json.firstName;
    }
    /**
     * The last name of the document holder extracted via OCR.
     *
     * @since 8.0.0
     */
    get lastName() {
        return this.json.lastName;
    }
    /**
     * The full name of the document holder extracted via OCR.
     *
     * @since 8.0.0
     */
    get fullName() {
        return this.json.fullName;
    }
    /**
     * The date of birth of the document holder extracted via OCR.
     *
     * @since 8.0.0
     */
    get dateOfBirth() {
        return DateResult.fromJSON(this.json.dateOfBirth);
    }
    /**
     * The document number extracted via OCR.
     *
     * @since 8.0.0
     */
    get documentNumber() {
        return this.json.documentNumber;
    }
    /**
     * The date of expiry of the document extracted via OCR.
     *
     * @since 8.0.0
     */
    get dateOfExpiry() {
        return DateResult.fromJSON(this.json.dateOfExpiry);
    }
    /**
     * The issuing jurisdiction of the document extracted via OCR.
     *
     * @since 8.0.0
     */
    get issuingJurisdiction() {
        return this.json.issuingJurisdiction;
    }
    /**
     * The ISO code of the issuing jurisdiction extracted via OCR.
     *
     * @since 8.0.0
     */
    get issuingJurisdictionIso() {
        return this.json.issuingJurisdictionIso;
    }
    /**
     * The sex of the document holder extracted via OCR.
     *
     * @since 8.0.0
     */
    get sex() {
        return this.json.sex;
    }
    /**
     * The nationality of the document holder extracted via OCR.
     *
     * @since 8.0.0
     */
    get nationality() {
        return this.json.nationality;
    }
    /**
     * The address of the document holder extracted via OCR.
     *
     * @since 8.0.0
     */
    get address() {
        return this.json.address;
    }
    /**
     * The additional document number extracted via OCR.
     *
     * @since 8.0.0
     */
    get documentAdditionalNumber() {
        return this.json.documentAdditionalNumber;
    }
    /**
     * The date of issue of the document extracted via OCR.
     *
     * @since 8.0.0
     */
    get dateOfIssue() {
        return DateResult.fromJSON(this.json.dateOfIssue);
    }
    static fromJSON(json) {
        if (json == null) {
            return null;
        }
        const result = new MobileDocumentOCRResult();
        result.json = json;
        return result;
    }
}

/**
 * This class represents data extracted from mobile identity documents. It contains information from mobile driver’s licenses and other mobile identity documents that comply with various standards such as ISO 18013-5. Some properties may not apply to certain document types and will be set to nil if the corresponding data is not available in the mobile document.
 *
 * @since 8.0.0
 */
class MobileDocumentResult {
    constructor() {
        this._drivingLicenseCategories = [];
    }
    /**
     * The portrait image of the document holder, as a base64 string.
     *
     * @since 8.0.0
     */
    get portrait() {
        return this.json.portrait;
    }
    // Native writes the key unconditionally as base64_encode(signature_).
    /**
     * The signature image of the document holder, as a base64 string. The type is nullable for symmetry with the portrait property, but a document without a signature yields an empty string rather than *null*, so check for emptiness before using the value as an image source.
     *
     * @since 8.7.0
     */
    get signature() {
        return this.json.signature;
    }
    /**
     * The authority that issued the mobile document.
     *
     * @since 8.0.0
     */
    get issuingAuthority() {
        return this.json.issuingAuthority;
    }
    /**
     * The administrative number associated with the mobile document.
     *
     * @since 8.0.0
     */
    get administrativeNumber() {
        return this.json.administrativeNumber;
    }
    /**
     * The height of the document holder in centimeters.
     *
     * @since 8.0.0
     */
    get height() {
        return this.json.height;
    }
    /**
     * The weight of the document holder in kilograms.
     *
     * @since 8.0.0
     */
    get weight() {
        return this.json.weight;
    }
    /**
     * The eye color of the document holder.
     *
     * @since 8.0.0
     */
    get eyeColor() {
        return this.json.eyeColor;
    }
    /**
     * The hair color of the document holder.
     *
     * @since 8.0.0
     */
    get hairColor() {
        return this.json.hairColor;
    }
    /**
     * The place of birth of the document holder.
     *
     * @since 8.0.0
     */
    get birthPlace() {
        return this.json.birthPlace;
    }
    /**
     * The list of driving license categories associated with the mobile document. Each category contains information about the type of vehicle the holder is authorized to operate and the validity period of the authorization.
     *
     * @since 8.0.0
     */
    get drivingLicenseCategories() {
        if (this._drivingLicenseCategories.length === 0) {
            this._drivingLicenseCategories = this.json.drivingLicenseCategories
                .map(categoryJson => DrivingLicenseCategory.fromJSON(categoryJson))
                .filter((category) => category !== null);
        }
        return this._drivingLicenseCategories;
    }
    /**
     * The city of residence of the document holder.
     *
     * @since 8.0.0
     */
    get residentCity() {
        return this.json.residentCity;
    }
    /**
     * The country of residence of the document holder.
     *
     * @since 8.0.0
     */
    get residentCountry() {
        return this.json.residentCountry;
    }
    /**
     * The first name of the document holder.
     *
     * @since 8.0.0
     */
    get firstName() {
        return this.json.firstName;
    }
    /**
     * The last name of the document holder.
     *
     * @since 8.0.0
     */
    get lastName() {
        return this.json.lastName;
    }
    /**
     * The full name of the document holder.
     *
     * @since 8.0.0
     */
    get fullName() {
        return this.json.fullName;
    }
    /**
     * The sex of the document holder as a string.
     *
     * @since 8.0.0
     */
    get sex() {
        return this.json.sex;
    }
    /**
     * The date of birth of the document holder.
     *
     * @since 8.0.0
     */
    get dateOfBirth() {
        return DateResult.fromJSON(this.json.dateOfBirth);
    }
    /**
     * The age of the document holder.
     *
     * @since 8.0.0
     */
    get age() {
        return this.json.age;
    }
    /**
     * The nationality of the document holder.
     *
     * @since 8.0.0
     */
    get nationality() {
        return this.json.nationality;
    }
    /**
     * The address of the document holder.
     *
     * @since 8.0.0
     */
    get address() {
        return this.json.address;
    }
    /**
     * The ISO code of the issuing country.
     *
     * @since 8.0.0
     */
    get issuingCountryIso() {
        return this.json.issuingCountryIso;
    }
    /**
     * The ISO code of the issuing jurisdiction.
     *
     * @since 8.0.0
     */
    get issuingJurisdictionIso() {
        return this.json.issuingJurisdictionIso;
    }
    /**
     * The document number.
     *
     * @since 8.0.0
     */
    get documentNumber() {
        return this.json.documentNumber;
    }
    /**
     * The date of expiry of the document.
     *
     * @since 8.0.0
     */
    get dateOfExpiry() {
        return DateResult.fromJSON(this.json.dateOfExpiry);
    }
    /**
     * The date of issue of the document.
     *
     * @since 8.0.0
     */
    get dateOfIssue() {
        return DateResult.fromJSON(this.json.dateOfIssue);
    }
    static fromJSON(json) {
        if (json == null) {
            return null;
        }
        const result = new MobileDocumentResult();
        result.json = json;
        return result;
    }
}

/**
 * The verification result of a comparison between the human-readable data of the document with the data encoded in either MRZ or barcode.
 *
 * This result is returned in {@link VerificationResult} when {@link IdCaptureSettings.rejectInconsistentData} is enabled.
 *
 * @since 8.0.0
 */
class DataConsistencyResult {
    /**
     * All checks passed and nothing suspicious about the document was detected.
     *
     * @since 8.0.0
     */
    get allChecksPassed() {
        return this.json.allChecksPassed;
    }
    /**
     * The checks that failed
     *
     * @since 8.0.0
     */
    get failedChecks() {
        return this.json.failedChecks.map(check => check);
    }
    /**
     * The checks that were skipped
     *
     * @since 8.0.0
     */
    get skippedChecks() {
        return this.json.skippedChecks.map(check => check);
    }
    /**
     * The checks that passed
     *
     * @since 8.0.0
     */
    get passedChecks() {
        return this.json.passedChecks.map(check => check);
    }
    /**
     * Image with mismatched fields highlighted. Requires calling {@link IdCaptureSettings.setShouldPassImageTypeToResult} with {@link IdImageType.CroppedDocument} enabled before creating the {@link IdCapture} instance.
     *
     * @since 8.0.0
     */
    get frontReviewImage() {
        return this.json.frontReviewImage;
    }
    static fromJSON(json) {
        if (json === null || json === undefined) {
            return null;
        }
        const result = new DataConsistencyResult();
        result.json = json;
        return result;
    }
}

/**
 * The verification result of identification documents
 *
 * @since 8.0.0
 */
class VerificationResult {
    constructor() {
        this.json = null;
        this._dataConsistency = null;
        this._aamvaBarcodeVerification = null;
    }
    /**
     * The verification result of a comparison between the human-readable data of the document with the data encoded in either MRZ or barcode when {@link IdCaptureSettings.rejectInconsistentData} is enabled
     *
     * @since 8.0.0
     */
    get dataConsistency() {
        var _a;
        if (this._dataConsistency == null && ((_a = this.json) === null || _a === void 0 ? void 0 : _a.dataConsistencyResult) != null) {
            this._dataConsistency = DataConsistencyResult.fromJSON(this.json.dataConsistencyResult);
        }
        return this._dataConsistency;
    }
    /**
     * The verification result of AAMVA-compliant personal identification documents when {@link IdCaptureSettings.rejectForgedAamvaBarcodes} is enabled
     *
     * @since 8.0.0
     */
    get aamvaBarcodeVerification() {
        var _a;
        if (this._aamvaBarcodeVerification == null && ((_a = this.json) === null || _a === void 0 ? void 0 : _a.aamvaBarcodeVerification) != null) {
            this._aamvaBarcodeVerification = AamvaBarcodeVerificationResult.fromJSON(this.json.aamvaBarcodeVerification);
        }
        return this._aamvaBarcodeVerification;
    }
    static fromJSON(json) {
        if (json === null || json === undefined) {
            return new VerificationResult();
        }
        const result = new VerificationResult();
        result.json = json;
        return result;
    }
}

/**
 * This class represents the result of a document scan. It provides commonly present information, such as the holder’s name and date of birth, directly accessible at the top level. Additional document-specific details can be accessed through properties representing different zones of the document, such as the barcode, machine-readable zone (MRZ), and visual inspection zone (VIZ).
 *
 * Note that not all properties are relevant to every document type. If a property is not applicable or the corresponding data could not be read, it will be set to *null*.
 *
 * @since 6.14.0
 */
class CapturedId {
    constructor() {
        this._mobileDocument = null;
        this._mobileDocumentOcr = null;
        this._verificationResult = null;
        this._document = null;
    }
    static fromJSON(json) {
        const result = new CapturedId();
        result.json = json;
        if (result.json.documentType) {
            result._document = this.getDocument(result.issuingCountry, result.json.documentType, result.json.documentSubtype);
        }
        result._images = IdImages.fromJSON(json.imageInfo);
        return result;
    }
    static getDocument(issuingCountry, documentType, documentSubtype) {
        switch (documentType) {
            case IdCaptureDocumentType.DriverLicense:
                return new DriverLicense(issuingCountry);
            case IdCaptureDocumentType.HealthInsuranceCard:
                return new HealthInsuranceCard(issuingCountry);
            case IdCaptureDocumentType.IdCard:
                return new IdCard(issuingCountry);
            case IdCaptureDocumentType.Passport:
                return new Passport(issuingCountry);
            case IdCaptureDocumentType.RegionSpecific:
                if (!documentSubtype) {
                    throw new Error('documentSubtype cannot be null for RegionSpecific documents.');
                }
                return new RegionSpecific(documentSubtype);
            case IdCaptureDocumentType.ResidencePermit:
                return new ResidencePermit(issuingCountry);
            case IdCaptureDocumentType.VisaIcao:
                return new VisaIcao(issuingCountry);
            case IdCaptureDocumentType.VisaLetter:
                return new VisaLetter(issuingCountry);
            default:
                throw new Error(`Unknown document type ${JSON.stringify(documentType)}`);
        }
    }
    /**
     * The age of the document holder. Calculated as the difference in full years between the birth date and the current local date. If *null* is returned it means that the full birth date is not available. The returned value depends on the device date. The same document may result in different values for devices with different dates (e.g. in different time zones, or with a date set manually by the user).
     *
     * @since 6.21.0
     */
    get age() {
        return this.json.age;
    }
    /**
     * Whether this document is expired. Calculated by comparing the document’s expiration date with the current local date. *true* if the document is expired and *false* when either not expired, or never expires. *null* is returned if the value of this property could not be determined - for example if the date of expiry is not present, or if the date of expiry couldn’t be captured. Please note that the system time is used for computation of this field so users of the device are capable of changing the result of the field by changing the system time.
     *
     * @since 6.21.0
     */
    get isExpired() {
        return this.json.isExpired;
    }
    /**
     * Indicates whether the passport was issued to a citizen of the issuing country. Returns *false* for travel documents such as refugee, stateless, or alien passports, and for any passports issued by organizations rather than states.
     *
     * @since 8.0.0
     */
    get isCitizenPassport() {
        return this.json.isCitizenPassport;
    }
    /**
     * The document type.
     *
     * @since 7.0.0
     */
    get document() {
        return this._document;
    }
    /**
     * The ISO (Alpha-3 code) abbreviation of the issuing country of the document.
     *
     * @since 6.14.0
     */
    get issuingCountryIso() {
        return this.json.issuingCountryIso;
    }
    /**
     * Issuing country of the document.
     *
     * @since 7.0.0
     */
    get issuingCountry() {
        return this.json.issuingCountry;
    }
    /**
     * If {@link IdCaptureSettings.anonymizationMode} is enabled for the field results, the returned value might be *null* for certain documents.
     *
     * @since 6.21.0
     */
    get documentAdditionalNumber() {
        return this.json.documentAdditionalNumber;
    }
    /**
     * The visa number, resolved across the captured zones (MRZ preferred over VIZ).
     *
     * @since 8.7.0
     */
    get visaNumber() {
        return this.json.visaNumber;
    }
    /**
     * The passport number, resolved across the captured zones (MRZ preferred over VIZ).
     *
     * @since 8.7.0
     */
    get passportNumber() {
        return this.json.passportNumber;
    }
    /**
     * Whether the document capture is complete. Returns *true* when all sides of a multi-sided document have been captured, or when capturing a single-sided document. Returns *false* when only partial data is available (e.g., front side of a two-sided document).
     *
     * @since 8.7.0
     */
    get isCapturingComplete() {
        return this.json.isCapturingComplete;
    }
    /**
     * The additional information extracted from a barcode on a document.
     *
     * @since 7.0.0
     */
    get barcode() {
        if (this._barcodeResult == null && this.json.barcodeResult != null) {
            this._barcodeResult = BarcodeResult.fromJSON(this.json.barcodeResult);
        }
        return this._barcodeResult;
    }
    /**
     * The additional information extracted from the Machine Readable Zone (MRZ) of a Machine Readable Travel Document (MRTD).
     *
     * @since 6.14.0
     */
    get mrzResult() {
        if (this._mrzResult == null && this.json.mrzResult != null) {
            this._mrzResult = MRZResult.fromJSON(this.json.mrzResult);
        }
        return this._mrzResult;
    }
    /**
     * The additional information extracted from a documents or its part intended to be read by humans (for example Visual Inspection Zone (VIZ) of a Machine-Readable Travel Document (MRTD)).
     *
     * @since 6.14.0
     */
    get vizResult() {
        if (this._vizResult == null && this.json.vizResult != null) {
            this._vizResult = VIZResult.fromJSON(this.json.vizResult);
        }
        return this._vizResult;
    }
    /**
     * Indicates whether the document is of type {@link IdCard}.
     *
     * @since 7.0.0
     */
    isIdCard() {
        var _a;
        return ((_a = this.document) === null || _a === void 0 ? void 0 : _a.isIdCard) === true;
    }
    /**
     * Indicates whether the document is REAL ID compliant.
     *
     * @since 7.5.0
     */
    get usRealIdStatus() {
        const localVizResult = this.vizResult;
        if ((localVizResult === null || localVizResult === void 0 ? void 0 : localVizResult.usRealIdStatus) && localVizResult.usRealIdStatus !== UsRealIdStatus.NotAvailable) {
            return localVizResult.usRealIdStatus;
        }
        if (this.barcode && this.barcode.isRealId !== null) {
            if (this.barcode.isRealId)
                return UsRealIdStatus.RealIdCompliant;
            else
                return UsRealIdStatus.NotRealIdCompliant;
        }
        return UsRealIdStatus.NotAvailable;
    }
    /**
     * Indicates whether the document is of type {@link DriverLicense}.
     *
     * @since 7.0.0
     */
    isDriverLicense() {
        var _a;
        return ((_a = this.document) === null || _a === void 0 ? void 0 : _a.isDriverLicense) === true;
    }
    /**
     * Indicates whether the document is of type {@link Passport}.
     *
     * @since 7.0.0
     */
    isPassport() {
        var _a;
        return ((_a = this.document) === null || _a === void 0 ? void 0 : _a.isPassport) === true;
    }
    /**
     * Indicates whether the document is of type {@link VisaIcao}.
     *
     * @since 7.0.0
     */
    isVisaIcao() {
        var _a;
        return ((_a = this.document) === null || _a === void 0 ? void 0 : _a.isVisaIcao) === true;
    }
    /**
     * Indicates whether the document is of type {@link VisaLetter} (experimental document type).
     *
     * @since 8.7.0
     */
    isVisaLetter() {
        var _a;
        return ((_a = this.document) === null || _a === void 0 ? void 0 : _a.isVisaLetter) === true;
    }
    /**
     * Indicates whether the document is of type {@link RegionSpecificSubtype}.
     *
     * @since 7.0.0
     */
    isRegionSpecific(subtype) {
        var _a;
        return ((_a = this.document) === null || _a === void 0 ? void 0 : _a.isRegionSpecific) === true && this.document.subtype === subtype;
    }
    /**
     * Indicates whether the document is of type {@link ResidencePermit}.
     *
     * @since 7.0.0
     */
    isResidencePermit() {
        var _a;
        return ((_a = this.document) === null || _a === void 0 ? void 0 : _a.isResidencePermit) === true;
    }
    /**
     * Indicates whether the document is of type {@link HealthInsuranceCard}.
     *
     * @since 7.0.0
     */
    isHealthInsuranceCard() {
        var _a;
        return ((_a = this.document) === null || _a === void 0 ? void 0 : _a.isHealthInsuranceCard) === true;
    }
    /**
     * The images extracted from a document.
     *
     * @since 7.0.0
     */
    get images() {
        return this._images;
    }
    /**
     * The first name of the document holder. Separated by spaces if more than one name is present. Characters can be all uppercase for document types which don’t capitalize names (for example names encoded in ICAO Machine Readable Zones). Certain documents do not distinguish between given name and surname. If the name cannot be split reliably, this field may be null.
     *
     * @since 6.14.0
     */
    get firstName() {
        return this.json.firstName;
    }
    /**
     * The last name of the document holder. Separated by spaces if more than one name is present. Characters can be all uppercase for document types which don’t capitalize names (for example names encoded in ICAO Machine Readable Zones). Certain documents do not distinguish between given name and surname. If the name cannot be split reliably, this field may be null.
     *
     * @since 6.14.0
     */
    get lastName() {
        return this.json.lastName;
    }
    /**
     * The full name of the document holder. Characters can be all uppercase for document types which don’t capitalize names (for example names encoded in ICAO Machine Readable Zones).
     *
     * @since 6.14.0
     */
    get fullName() {
        return this.json.fullName;
    }
    /**
     * The description of the document holder’s sex.
     *
     * @since 6.14.0
     */
    get sex() {
        return this.json.sex;
    }
    /**
     * The date of birth of the document holder. If the document doesn’t provide two first digits of the year then the date of birth is always set to be earlier than or equal to the scan date. For example if the year of scanning is 2021 and the document returns that the year of birth is 14 then the returned year is set to 2014. However if the document returns that the year of birth is 24 then the returned year is set to 1924.
     *
     * @since 6.14.0
     */
    get dateOfBirth() {
        return DateResult.fromJSON(this.json.dateOfBirth);
    }
    /**
     * The nationality of the document holder as raw OCR text from the document. The format and language vary by jurisdiction (e.g., “DEUTSCH”, “AMERICAN”, “POLSKA”, “DEU”).
     *
     * For a standardized ISO 3166-1 alpha-3 country code representation, use {@link CapturedId.nationalityISO}.
     *
     * @since 6.14.0
     */
    get nationality() {
        return this.json.nationality;
    }
    /**
     * The holder’s nationality as an ISO 3166-1 alpha-3 country code (e.g., “DEU”, “USA”, “POL”).
     *
     * Returns *null* if the nationality cannot be determined or is ambiguous.
     *
     * @since 8.1.0
     */
    get nationalityISO() {
        return this.json.nationalityISO;
    }
    /**
     * The address of the document holder.
     *
     * @since 6.14.0
     */
    get address() {
        return this.json.address;
    }
    /**
     * The document number.
     *
     * @since 6.14.0
     */
    get documentNumber() {
        return this.json.documentNumber;
    }
    /**
     * The date of expiry of the document. Returning *null* with {@link CapturedId.isExpired} = *false* indicates that the document never expires.
     *
     * @since 6.14.0
     */
    get dateOfExpiry() {
        return DateResult.fromJSON(this.json.dateOfExpiry);
    }
    /**
     * The date of issue of the document. Please note that some documents may specify the exact date of issue, while other the month and the year only.
     *
     * @since 6.14.0
     */
    get dateOfIssue() {
        return DateResult.fromJSON(this.json.dateOfIssue);
    }
    /**
     * The sex of the document holder.
     *
     * @since 8.0.0
     */
    get sexType() {
        if (this.json.sex) {
            return this.json.sex;
        }
        return Sex.Unspecified;
    }
    /**
     * The additional information extracted from a mobile identity document.
     *
     * @since 8.0.0
     */
    get mobileDocument() {
        if (this._mobileDocument === null && this.json.mobileDocumentResult != null) {
            this._mobileDocument = MobileDocumentResult.fromJSON(this.json.mobileDocumentResult);
        }
        return this._mobileDocument;
    }
    /**
     * The additional information extracted from a mobile document using optical character recognition (OCR). This property is populated when scanning mobile driver licenses with OCR-based capture enabled (for example, Australian mobile driver licenses when the mobile scanner is enabled).
     *
     * @since 8.0.0
     */
    get mobileDocumentOcr() {
        if (this._mobileDocumentOcr === null && this.json.mobileDocumentOcrResult != null) {
            this._mobileDocumentOcr = MobileDocumentOCRResult.fromJSON(this.json.mobileDocumentOcrResult);
        }
        return this._mobileDocumentOcr;
    }
    /**
     * Results of verifications automatically performed when {@link IdCaptureSettings.rejectInconsistentData} or {@link IdCaptureSettings.rejectForgedAamvaBarcodes} are enabled.
     *
     * @since 8.0.0
     */
    get verificationResult() {
        if (this._verificationResult === null) {
            this._verificationResult = VerificationResult.fromJSON(this.json.verificationResult);
        }
        return this._verificationResult;
    }
    /**
     * Returns a JSON string containing detailed diagnostic information about the reasons for document rejection.
     *
     * @since 8.3.0
     */
    get rejectionDiagnosticJSON() {
        return this.json.rejectionDiagnosticJSON;
    }
    /**
     * Returns all fields that have been anonymized in this captured document.
     *
     * Only fields that were actually present in the captured document and were subsequently anonymized are included.
     *
     * @since 8.0.0
     */
    get anonymizedFields() {
        return this.json.anonymizedFields.map(field => field);
    }
    /**
     * Checks whether the specified field has been anonymized.
     *
     * Returns *true* if the field was present in the captured document and was anonymized according to the {@link IdCaptureSettings.anonymizationMode} setting, *false* otherwise.
     *
     * A field that is not present in the document always returns *false*, even if anonymization is enabled for that field type.
     *
     * This method is useful for determining which fields have been redacted, particularly when using {@link IdCaptureSettings.anonymizationMode} set to {@link IdAnonymizationMode.FieldsOnly} or {@link IdAnonymizationMode.FieldsAndImages}.
     *
     * Param IdFieldType fieldThe field type to check for anonymization.
     *
     * @since 8.0.0
     */
    isAnonymized(field) {
        return this.json.anonymizedFields.includes(field);
    }
}

/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2025 Scandit AG. All rights reserved.
 */
/**
 * An enumeration of possible ID document field types that can be referenced for anonymization purposes.
 *
 * @since 8.0.0
 */
var IdFieldType;
(function (IdFieldType) {
    /**
     * Additional address information field.
     *
     * @since 8.0.0
     */
    IdFieldType["AdditionalAddressInformation"] = "additionalAddressInformation";
    /**
     * Additional name information field.
     *
     * @since 8.0.0
     */
    IdFieldType["AdditionalNameInformation"] = "additionalNameInformation";
    /**
     * Address field.
     *
     * @since 8.0.0
     */
    IdFieldType["Address"] = "address";
    /**
     * Age field.
     *
     * @since 8.0.0
     */
    IdFieldType["Age"] = "age";
    /**
     * Barcode dictionary field.
     *
     * @since 8.0.0
     */
    IdFieldType["BarcodeDictionary"] = "barcodeDictionary";
    /**
     * Blood type field.
     *
     * @since 8.0.0
     */
    IdFieldType["BloodType"] = "bloodType";
    /**
     * Date of birth field.
     *
     * @since 8.0.0
     */
    IdFieldType["DateOfBirth"] = "dateOfBirth";
    /**
     * Date of expiry field.
     *
     * @since 8.0.0
     */
    IdFieldType["DateOfExpiry"] = "dateOfExpiry";
    /**
     * Date of issue field.
     *
     * @since 8.0.0
     */
    IdFieldType["DateOfIssue"] = "dateOfIssue";
    /**
     * Document additional number field.
     *
     * @since 8.0.0
     */
    IdFieldType["DocumentAdditionalNumber"] = "documentAdditionalNumber";
    /**
     * Document number field.
     *
     * @since 8.0.0
     */
    IdFieldType["DocumentNumber"] = "documentNumber";
    /**
     * Employer field.
     *
     * @since 8.0.0
     */
    IdFieldType["Employer"] = "employer";
    /**
     * Father’s name field.
     *
     * @since 8.0.0
     */
    IdFieldType["FathersName"] = "fathersName";
    /**
     * First name field.
     *
     * @since 8.0.0
     */
    IdFieldType["FirstName"] = "firstName";
    /**
     * Full name field.
     *
     * @since 8.0.0
     */
    IdFieldType["FullName"] = "fullName";
    /**
     * Issuing authority field.
     *
     * @since 8.0.0
     */
    IdFieldType["IssuingAuthority"] = "issuingAuthority";
    /**
     * Last name field.
     *
     * @since 8.0.0
     */
    IdFieldType["LastName"] = "lastName";
    /**
     * Marital status field.
     *
     * @since 8.0.0
     */
    IdFieldType["MaritalStatus"] = "maritalStatus";
    /**
     * Mother’s name field.
     *
     * @since 8.0.0
     */
    IdFieldType["MothersName"] = "mothersName";
    /**
     * MRZ optional data in line 1 field.
     *
     * @since 8.0.0
     */
    IdFieldType["MrzOptionalDataInLine1"] = "mrzOptionalDataInLine1";
    /**
     * MRZ optional data in line 2 field.
     *
     * @since 8.0.0
     */
    IdFieldType["MrzOptionalDataInLine2"] = "mrzOptionalDataInLine2";
    /**
     * Nationality field.
     *
     * @since 8.0.0
     */
    IdFieldType["Nationality"] = "nationality";
    /**
     * Personal ID number field.
     *
     * @since 8.0.0
     */
    IdFieldType["PersonalIdNumber"] = "personalIdNumber";
    /**
     * Place of birth field.
     *
     * @since 8.0.0
     */
    IdFieldType["PlaceOfBirth"] = "placeOfBirth";
    /**
     * Profession field.
     *
     * @since 8.0.0
     */
    IdFieldType["Profession"] = "profession";
    /**
     * Race field.
     *
     * @since 8.0.0
     */
    IdFieldType["Race"] = "race";
    /**
     * Religion field.
     *
     * @since 8.0.0
     */
    IdFieldType["Religion"] = "religion";
    /**
     * Residential status field.
     *
     * @since 8.0.0
     */
    IdFieldType["ResidentialStatus"] = "residentialStatus";
    /**
     * Sex field.
     *
     * @since 8.0.0
     */
    IdFieldType["Sex"] = "sex";
})(IdFieldType || (IdFieldType = {}));

/**
 * Sub-category of a passport.
 *
 * The type is derived from the second letter of the MRZ document code, as defined in ICAO Doc 9303-4. ICAO made these letters mandatory for passports issued from 1 January 2026. Before that, some issuing states used the letters with other meanings. The type is the first match of these rules:
 *
 * - China: the document number decides. A number that starts with `E` is {@link PassportType.National}, and a number that starts with `SE` or `PE` is {@link PassportType.Official}.
 * - Switzerland: `PM` is {@link PassportType.National} when the passport expires before 1 January 2036, `PN` is {@link PassportType.Diplomatic}, and other letters have their ICAO meaning.
 * - These issuing states and document codes are {@link PassportType.National}. For South Korea, only when the passport expires before 1 January 2036. For `PR`, `PS` and `PT`, only when the MRZ nationality is the issuing state.
 *   - `PM`: South Africa, South Korea.
 *   - `PO`: Afghanistan, Burundi, Cameroon, Comoros, Guinea, Laos, Madagascar, Niger, Sierra Leone.
 *   - `PE`: Mongolia, Myanmar, Romania.
 *   - `PR`: Barbados, Maldives, Myanmar, South Korea, Venezuela.
 *   - `PS`: Myanmar, South Korea.
 *   - `PT`: Myanmar.
 * - When the MRZ nationality is the issuing state, `PS` is {@link PassportType.Official}, and `PR` and `PT` are {@link PassportType.National}. A refugee, stateless or alien document is not issued to a citizen of the issuing state.
 * - `P<`, `P` and `PP` are {@link PassportType.National}, `PD` is {@link PassportType.Diplomatic}, `PK` is {@link PassportType.Seafarer}, `PL` is {@link PassportType.LaissezPasser} and `PU` is {@link PassportType.EmergencyTravelDocument}.
 * - A passport that expires on or after 1 January 2036 has the ICAO meaning of the letter.
 * - All other passports are `Unknown`.
 *
 * When the type is {@link PassportType.National} or `Unknown`, an MRZ nationality of `XXA` makes it {@link PassportType.Stateless}, and `XXB` or `XXC` makes it {@link PassportType.Refugee}.
 *
 * Before 8.7, passports were reported with the ICAO meaning of the second letter.
 *
 * @since 8.7.0
 */
var PassportType;
(function (PassportType) {
    /**
     * A regular national passport.
     *
     * @since 8.7.0
     */
    PassportType["National"] = "national";
    /**
     * Emergency passport.
     *
     * @since 8.7.0
     */
    PassportType["Emergency"] = "emergency";
    /**
     * Diplomatic passport.
     *
     * @since 8.7.0
     */
    PassportType["Diplomatic"] = "diplomatic";
    /**
     * Official or service passport.
     *
     * @since 8.7.0
     */
    PassportType["Official"] = "official";
    /**
     * Refugee travel document.
     *
     * @since 8.7.0
     */
    PassportType["Refugee"] = "refugee";
    /**
     * Alien passport.
     *
     * @since 8.7.0
     */
    PassportType["Alien"] = "alien";
    /**
     * Stateless person’s travel document.
     *
     * @since 8.7.0
     */
    PassportType["Stateless"] = "stateless";
    /**
     * Laissez-passer issued by an international organisation.
     *
     * @since 8.7.0
     */
    PassportType["LaissezPasser"] = "laissezPasser";
    /**
     * Military passport.
     *
     * @since 8.7.0
     */
    PassportType["Military"] = "military";
    /**
     * Seafarer passport.
     *
     * @since 8.7.0
     */
    PassportType["Seafarer"] = "seafarer";
    /**
     * Emergency travel document, a single-sheet document as defined in ICAO Doc 9303-8. Distinct from {@link PassportType.Emergency}, which is an emergency passport booklet. Before 8.7 both were reported as {@link PassportType.Emergency}.
     *
     * @since 8.7.0
     */
    PassportType["EmergencyTravelDocument"] = "emergencyTravelDocument";
    /**
     * The passport type cannot be determined reliably from the machine-readable zone. A passport of this type is not rejected unless {@link PassportType.Unknown} is in {@link IdCaptureSettings.rejectPassportTypes}.
     *
     * @since 8.7.0
     */
    PassportType["Unknown"] = "unknown";
})(PassportType || (PassportType = {}));

/**
 * Represents data elements that can be requested from mobile identity documents (mdocs) compliant with ISO 18013-5 and AAMVA standards. These elements are used to specify which data fields the application intends to retain, as required by the IntentToRetain flag in ISO 18013-5 mdoc requests.
 *
 * @since 8.0.0
 */
var MobileDocumentDataElement;
(function (MobileDocumentDataElement) {
    /**
     * The family name of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["FamilyName"] = "familyName";
    /**
     * The given name of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["GivenName"] = "givenName";
    /**
     * The date of birth of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["BirthDate"] = "birthDate";
    /**
     * The date of issue of the document. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["IssueDate"] = "issueDate";
    /**
     * The date of expiry of the document. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["ExpiryDate"] = "expiryDate";
    /**
     * The country that issued the document. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["IssuingCountry"] = "issuingCountry";
    /**
     * The authority that issued the document. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["IssuingAuthority"] = "issuingAuthority";
    /**
     * The unique document number. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["DocumentNumber"] = "documentNumber";
    /**
     * The portrait image of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["Portrait"] = "portrait";
    /**
     * The usual mark or signature image of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.7.0
     */
    MobileDocumentDataElement["SignatureUsualMark"] = "signatureUsualMark";
    /**
     * The driving privileges and categories. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["DrivingPrivileges"] = "drivingPrivileges";
    /**
     * An administrative number associated with the document. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["AdministrativeNumber"] = "administrativeNumber";
    /**
     * The sex of the document holder as defined by ISO standards. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["SexIso"] = "sexIso";
    /**
     * The height of the document holder in centimeters. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["Height"] = "height";
    /**
     * The weight of the document holder in kilograms. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["Weight"] = "weight";
    /**
     * The eye color of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["EyeColour"] = "eyeColour";
    /**
     * The hair color of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["HairColour"] = "hairColour";
    /**
     * The place of birth of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["BirthPlace"] = "birthPlace";
    /**
     * The resident address of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["ResidentAddress"] = "residentAddress";
    /**
     * The jurisdiction that issued the document. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["IssuingJurisdiction"] = "issuingJurisdiction";
    /**
     * The nationality of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["Nationality"] = "nationality";
    /**
     * A suffix for the name. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["NameSuffix"] = "nameSuffix";
    /**
     * Indicates whether the family name was truncated. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["FamilyNameTruncation"] = "familyNameTruncation";
    /**
     * Indicates whether the given name was truncated. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["GivenNameTruncation"] = "givenNameTruncation";
    /**
     * Also known as (AKA) family name. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["AkaFamilyName"] = "akaFamilyName";
    /**
     * Also known as (AKA) given name. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["AkaGivenName"] = "akaGivenName";
    /**
     * Also known as (AKA) name suffix. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["AkaSuffix"] = "akaSuffix";
    /**
     * A range representing the weight of the document holder. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["WeightRange"] = "weightRange";
    /**
     * The race or ethnicity of the document holder. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["RaceEthnicity"] = "raceEthnicity";
    /**
     * The county of residence. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["ResidentCounty"] = "residentCounty";
    /**
     * The sex of the document holder as defined by AAMVA standards. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["SexAamva"] = "sexAamva";
    /**
     * The AAMVA version number. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    MobileDocumentDataElement["AamvaVersion"] = "aamvaVersion";
})(MobileDocumentDataElement || (MobileDocumentDataElement = {}));

/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2025- Scandit AG. All rights reserved.
 */
/**
 * Adapter class for Id operations.
 * Provides typed methods that internally call $executeId.
 * Generated from schema definition to ensure parameter and method name consistency.
 */
class IdProxyAdapter {
    constructor(proxy) {
        this.proxy = proxy;
    }
    /**
     * Resets the ID capture mode
     * @param modeId Unique identifier of the ID capture mode
     */
    resetIdCaptureMode(_a) {
        return __awaiter(this, arguments, void 0, function* ({ modeId }) {
            const result = yield this.proxy.$executeId({
                moduleName: 'IdCaptureModule',
                methodName: 'resetIdCaptureMode',
                isEventRegistration: false,
                modeId,
            });
            return result;
        });
    }
    /**
     * Sets the enabled state of the ID capture mode
     * @param modeId Unique identifier of the ID capture mode
     * @param enabled Whether the mode should be enabled
     */
    setModeEnabledState(_a) {
        return __awaiter(this, arguments, void 0, function* ({ modeId, enabled }) {
            const result = yield this.proxy.$executeId({
                moduleName: 'IdCaptureModule',
                methodName: 'setModeEnabledState',
                isEventRegistration: false,
                modeId,
                enabled,
            });
            return result;
        });
    }
    /**
     * Updates the ID capture mode configuration
     * @param modeJson ID capture mode configuration as JSON string
     * @param modeId Unique identifier of the ID capture mode
     */
    updateIdCaptureMode(_a) {
        return __awaiter(this, arguments, void 0, function* ({ modeJson, modeId }) {
            const result = yield this.proxy.$executeId({
                moduleName: 'IdCaptureModule',
                methodName: 'updateIdCaptureMode',
                isEventRegistration: false,
                modeJson,
                modeId,
            });
            return result;
        });
    }
    /**
     * Applies new settings to the ID capture mode
     * @param settingsJson ID capture mode settings as JSON string
     * @param modeId Unique identifier of the ID capture mode
     */
    applyIdCaptureModeSettings(_a) {
        return __awaiter(this, arguments, void 0, function* ({ settingsJson, modeId, }) {
            const result = yield this.proxy.$executeId({
                moduleName: 'IdCaptureModule',
                methodName: 'applyIdCaptureModeSettings',
                isEventRegistration: false,
                settingsJson,
                modeId,
            });
            return result;
        });
    }
    /**
     * Updates the ID capture feedback configuration
     * @param feedbackJson Feedback configuration as JSON string
     * @param modeId Unique identifier of the ID capture mode
     */
    updateFeedback(_a) {
        return __awaiter(this, arguments, void 0, function* ({ feedbackJson, modeId }) {
            const result = yield this.proxy.$executeId({
                moduleName: 'IdCaptureModule',
                methodName: 'updateFeedback',
                isEventRegistration: false,
                feedbackJson,
                modeId,
            });
            return result;
        });
    }
    /**
     * Updates the ID capture overlay configuration
     * @param overlayJson ID capture overlay configuration as JSON string
     */
    updateIdCaptureOverlay(_a) {
        return __awaiter(this, arguments, void 0, function* ({ overlayJson }) {
            const result = yield this.proxy.$executeId({
                moduleName: 'IdCaptureModule',
                methodName: 'updateIdCaptureOverlay',
                isEventRegistration: false,
                overlayJson,
            });
            return result;
        });
    }
    /**
     * Finish callback for ID capture did capture event
     * @param modeId Unique identifier of the ID capture mode
     * @param enabled Whether the mode is enabled
     */
    finishDidCaptureCallback(_a) {
        return __awaiter(this, arguments, void 0, function* ({ modeId, enabled }) {
            const result = yield this.proxy.$executeId({
                moduleName: 'IdCaptureModule',
                methodName: 'finishDidCaptureCallback',
                isEventRegistration: false,
                modeId,
                enabled,
            });
            return result;
        });
    }
    /**
     * Finish callback for ID capture did reject event
     * @param modeId Unique identifier of the ID capture mode
     * @param enabled Whether the mode is enabled
     */
    finishDidRejectCallback(_a) {
        return __awaiter(this, arguments, void 0, function* ({ modeId, enabled }) {
            const result = yield this.proxy.$executeId({
                moduleName: 'IdCaptureModule',
                methodName: 'finishDidRejectCallback',
                isEventRegistration: false,
                modeId,
                enabled,
            });
            return result;
        });
    }
    /**
     * Register persistent event listener for ID capture events
     * @param modeId Unique identifier of the ID capture mode
     */
    addIdCaptureListener(_a) {
        return __awaiter(this, arguments, void 0, function* ({ modeId }) {
            const result = yield this.proxy.$executeId({
                moduleName: 'IdCaptureModule',
                methodName: 'addIdCaptureListener',
                isEventRegistration: true,
                modeId,
            });
            return result;
        });
    }
    /**
     * Unregister event listener for ID capture events
     * @param modeId Unique identifier of the ID capture mode
     */
    removeIdCaptureListener(_a) {
        return __awaiter(this, arguments, void 0, function* ({ modeId }) {
            const result = yield this.proxy.$executeId({
                moduleName: 'IdCaptureModule',
                methodName: 'removeIdCaptureListener',
                isEventRegistration: false,
                modeId,
            });
            return result;
        });
    }
}

/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */
// THIS FILE IS GENERATED. DO NOT EDIT MANUALLY.
// Generator: scripts/bridge_generator/generate.py
// Schema: scripts/bridge_generator/schemas/id.json
/**
 * Per-method `LogRecord` level and category overrides for the IdProxy
 * bridge surface. Consumed by the centralized `ScanditLogger` interceptor:
 * per-frame / per-scan callbacks log at `Trace` under their category label, so
 * they only show once the level is raised to `Trace`.
 *
 * Auto-registered as a side effect of importing this module via the
 * generated `index.ts` barrel — no customer wiring required.
 */
const ID_PROXY_LOG_METADATA = {
    finishDidCaptureCallback: { level: LogLevel.Trace, category: LogCategory.Events },
    finishDidRejectCallback: { level: LogLevel.Trace, category: LogCategory.Events },
};
ScanditLogger.registerMethodMetadata(ID_PROXY_LOG_METADATA);

class IdCaptureController extends BaseController {
    constructor(idCapture = null) {
        super('IdProxy');
        this.idCapture = null;
        this.adapter = new IdProxyAdapter(this._proxy);
        this.idCapture = idCapture;
    }
    reset() {
        return this.adapter.resetIdCaptureMode({ modeId: this.modeId });
    }
    setModeEnabledState(enabled) {
        return this.adapter.setModeEnabledState({ modeId: this.modeId, enabled: enabled });
    }
    updateIdCaptureMode() {
        if (this.idCapture == null) {
            throw new Error('IdCaptureController is not initialized with an IdCapture instance');
        }
        return this.adapter.updateIdCaptureMode({ modeJson: JSON.stringify(this.idCapture.toJSON()), modeId: this.modeId });
    }
    applyIdCaptureModeSettings(newSettings) {
        return this.adapter.applyIdCaptureModeSettings({
            settingsJson: JSON.stringify(newSettings.toJSON()),
            modeId: this.modeId,
        });
    }
    updateFeedback(feedback) {
        return this.adapter.updateFeedback({ feedbackJson: JSON.stringify(feedback.toJSON()), modeId: this.modeId });
    }
    get modeId() {
        if (this.idCapture == null) {
            throw new Error('IdCaptureController is not initialized with an IdCapture instance');
        }
        return this.idCapture.modeId;
    }
}

// Split out of IdCaptureListenerController.ts: IdCapture.ts needs this enum as a real (value)
// import for ListenerRegistry calls, but must not pull in the controller itself, which
// type-imports IdCaptureListener, which type-imports IdCapture (SDC-34226 cycle).
var IdCaptureListenerEvents;
(function (IdCaptureListenerEvents) {
    IdCaptureListenerEvents["didCapture"] = "IdCaptureListener.didCaptureId";
    IdCaptureListenerEvents["didReject"] = "IdCaptureListener.didRejectId";
})(IdCaptureListenerEvents || (IdCaptureListenerEvents = {}));

/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */
// THIS FILE IS GENERATED. DO NOT EDIT MANUALLY.
// Generator: scripts/bridge_generator/generate.py
// Schema: scripts/bridge_generator/schemas/id.json
//
// Typed interfaces + throwing parse<Type> validators derived from the
// serialization JSON schemas referenced by this module's bridge params.
// No runtime dependency: validation is hand-rolled below, not zod/ajv.
//
// parse<Type> enforces only the JSON Schema keywords expressible without a
// schema engine: required, type, enum, string const, additionalProperties,
// null-ness, and root-level oneOf (dispatched on the discriminator to the
// matching variant's parser).
// NOT enforced — a payload violating one of these still parses:
//   pattern, minimum/maximum, minLength/maxLength, multipleOf, and
//   property-level oneOf of more than one non-null variant (those
//   properties are typed `unknown` and left unvalidated).
const ENUM_VALUES_ID_CAPTURE_LISTENER_DID_CAPTURE_ID_EVENT = ['IdCaptureListener.didCaptureId'];
const ALLOWED_KEYS_ID_CAPTURE_LISTENER_DID_CAPTURE_ID = new Set([
    'id',
    'imageInfo',
    'frontReviewImage',
    'modeId',
    'event',
]);
function parseIdCaptureListenerDidCaptureId(raw) {
    if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
        throw new Error('IdCaptureListenerDidCaptureId: expected an object');
    }
    const obj = raw;
    for (const key of Object.keys(obj)) {
        if (!ALLOWED_KEYS_ID_CAPTURE_LISTENER_DID_CAPTURE_ID.has(key)) {
            throw new Error(`IdCaptureListenerDidCaptureId: unknown property '${key}'`);
        }
    }
    let idValue = obj['id'];
    if (idValue === undefined) {
        throw new Error("IdCaptureListenerDidCaptureId: missing required property 'id'");
    }
    else if (idValue !== null) {
        if (typeof idValue !== 'string') {
            throw new Error('IdCaptureListenerDidCaptureId.id: expected a string');
        }
    }
    else {
        throw new Error('IdCaptureListenerDidCaptureId.id: null is not allowed');
    }
    let imageInfoValue = obj['imageInfo'];
    if (imageInfoValue === undefined) {
        imageInfoValue = undefined;
    }
    else if (imageInfoValue !== null) {
        imageInfoValue = parseImageInfo(imageInfoValue);
    }
    else {
        throw new Error('IdCaptureListenerDidCaptureId.imageInfo: null is not allowed');
    }
    let frontReviewImageValue = obj['frontReviewImage'];
    if (frontReviewImageValue === undefined) {
        frontReviewImageValue = undefined;
    }
    else if (frontReviewImageValue !== null) {
        if (typeof frontReviewImageValue !== 'string') {
            throw new Error('IdCaptureListenerDidCaptureId.frontReviewImage: expected a string');
        }
    }
    let modeIdValue = obj['modeId'];
    if (modeIdValue === undefined) {
        throw new Error("IdCaptureListenerDidCaptureId: missing required property 'modeId'");
    }
    else if (modeIdValue !== null) {
        if (typeof modeIdValue !== 'number') {
            throw new Error('IdCaptureListenerDidCaptureId.modeId: expected a number');
        }
        if (!Number.isInteger(modeIdValue)) {
            throw new Error('IdCaptureListenerDidCaptureId.modeId: expected an integer');
        }
    }
    else {
        throw new Error('IdCaptureListenerDidCaptureId.modeId: null is not allowed');
    }
    let eventValue = obj['event'];
    if (eventValue === undefined) {
        throw new Error("IdCaptureListenerDidCaptureId: missing required property 'event'");
    }
    else if (eventValue !== null) {
        if (!ENUM_VALUES_ID_CAPTURE_LISTENER_DID_CAPTURE_ID_EVENT.includes(eventValue)) {
            throw new Error("IdCaptureListenerDidCaptureId.event: unknown enum value '" + String(eventValue) + "'");
        }
    }
    else {
        throw new Error('IdCaptureListenerDidCaptureId.event: null is not allowed');
    }
    return {
        id: idValue,
        imageInfo: imageInfoValue,
        frontReviewImage: frontReviewImageValue,
        modeId: modeIdValue,
        event: eventValue,
    };
}
const ALLOWED_KEYS_IMAGE_INFO = new Set(['front', 'back']);
function parseImageInfo(raw) {
    if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
        throw new Error('ImageInfo: expected an object');
    }
    const obj = raw;
    for (const key of Object.keys(obj)) {
        if (!ALLOWED_KEYS_IMAGE_INFO.has(key)) {
            throw new Error(`ImageInfo: unknown property '${key}'`);
        }
    }
    let frontValue = obj['front'];
    if (frontValue === undefined) {
        frontValue = undefined;
    }
    else if (frontValue !== null) {
        frontValue = parseSideImages(frontValue);
    }
    else {
        throw new Error('ImageInfo.front: null is not allowed');
    }
    let backValue = obj['back'];
    if (backValue === undefined) {
        backValue = undefined;
    }
    else if (backValue !== null) {
        backValue = parseSideImages(backValue);
    }
    else {
        throw new Error('ImageInfo.back: null is not allowed');
    }
    return {
        front: frontValue,
        back: backValue,
    };
}
const ALLOWED_KEYS_SIDE_IMAGES = new Set(['face', 'croppedDocument', 'frame']);
function parseSideImages(raw) {
    if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
        throw new Error('SideImages: expected an object');
    }
    const obj = raw;
    for (const key of Object.keys(obj)) {
        if (!ALLOWED_KEYS_SIDE_IMAGES.has(key)) {
            throw new Error(`SideImages: unknown property '${key}'`);
        }
    }
    let faceValue = obj['face'];
    if (faceValue === undefined) {
        faceValue = undefined;
    }
    else if (faceValue !== null) {
        if (typeof faceValue !== 'string') {
            throw new Error('SideImages.face: expected a string');
        }
    }
    let croppedDocumentValue = obj['croppedDocument'];
    if (croppedDocumentValue === undefined) {
        croppedDocumentValue = undefined;
    }
    else if (croppedDocumentValue !== null) {
        if (typeof croppedDocumentValue !== 'string') {
            throw new Error('SideImages.croppedDocument: expected a string');
        }
    }
    let frameValue = obj['frame'];
    if (frameValue === undefined) {
        frameValue = undefined;
    }
    else if (frameValue !== null) {
        if (typeof frameValue !== 'string') {
            throw new Error('SideImages.frame: expected a string');
        }
    }
    return {
        face: faceValue,
        croppedDocument: croppedDocumentValue,
        frame: frameValue,
    };
}
const ENUM_VALUES_ID_CAPTURE_LISTENER_DID_REJECT_ID_REJECTION_REASON = [
    'notAcceptedDocumentType',
    'invalidFormat',
    'documentVoided',
    'timeout',
    'singleImageNotRecognized',
    'documentExpired',
    'documentExpiresSoon',
    'notRealIdCompliant',
    'holderUnderage',
    'forgedAamvaBarcode',
    'inconsistentData',
    'bluetoothCommunicationError',
    'bluetoothUnavailable',
    'cloudRequestFailed',
    'manipulatedDocument',
];
const ENUM_VALUES_ID_CAPTURE_LISTENER_DID_REJECT_ID_EVENT = ['IdCaptureListener.didRejectId'];
const ALLOWED_KEYS_ID_CAPTURE_LISTENER_DID_REJECT_ID = new Set([
    'rejectionReason',
    'id',
    'imageInfo',
    'frontReviewImage',
    'modeId',
    'event',
]);
function parseIdCaptureListenerDidRejectId(raw) {
    if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
        throw new Error('IdCaptureListenerDidRejectId: expected an object');
    }
    const obj = raw;
    for (const key of Object.keys(obj)) {
        if (!ALLOWED_KEYS_ID_CAPTURE_LISTENER_DID_REJECT_ID.has(key)) {
            throw new Error(`IdCaptureListenerDidRejectId: unknown property '${key}'`);
        }
    }
    let rejectionReasonValue = obj['rejectionReason'];
    if (rejectionReasonValue === undefined) {
        throw new Error("IdCaptureListenerDidRejectId: missing required property 'rejectionReason'");
    }
    else if (rejectionReasonValue !== null) {
        if (!ENUM_VALUES_ID_CAPTURE_LISTENER_DID_REJECT_ID_REJECTION_REASON.includes(rejectionReasonValue)) {
            throw new Error("IdCaptureListenerDidRejectId.rejectionReason: unknown enum value '" + String(rejectionReasonValue) + "'");
        }
    }
    else {
        throw new Error('IdCaptureListenerDidRejectId.rejectionReason: null is not allowed');
    }
    let idValue = obj['id'];
    if (idValue === undefined) {
        idValue = undefined;
    }
    else if (idValue !== null) {
        if (typeof idValue !== 'string') {
            throw new Error('IdCaptureListenerDidRejectId.id: expected a string');
        }
    }
    let imageInfoValue = obj['imageInfo'];
    if (imageInfoValue === undefined) {
        imageInfoValue = undefined;
    }
    else if (imageInfoValue !== null) {
        imageInfoValue = parseImageInfo(imageInfoValue);
    }
    else {
        throw new Error('IdCaptureListenerDidRejectId.imageInfo: null is not allowed');
    }
    let frontReviewImageValue = obj['frontReviewImage'];
    if (frontReviewImageValue === undefined) {
        frontReviewImageValue = undefined;
    }
    else if (frontReviewImageValue !== null) {
        if (typeof frontReviewImageValue !== 'string') {
            throw new Error('IdCaptureListenerDidRejectId.frontReviewImage: expected a string');
        }
    }
    let modeIdValue = obj['modeId'];
    if (modeIdValue === undefined) {
        throw new Error("IdCaptureListenerDidRejectId: missing required property 'modeId'");
    }
    else if (modeIdValue !== null) {
        if (typeof modeIdValue !== 'number') {
            throw new Error('IdCaptureListenerDidRejectId.modeId: expected a number');
        }
        if (!Number.isInteger(modeIdValue)) {
            throw new Error('IdCaptureListenerDidRejectId.modeId: expected an integer');
        }
    }
    else {
        throw new Error('IdCaptureListenerDidRejectId.modeId: null is not allowed');
    }
    let eventValue = obj['event'];
    if (eventValue === undefined) {
        throw new Error("IdCaptureListenerDidRejectId: missing required property 'event'");
    }
    else if (eventValue !== null) {
        if (!ENUM_VALUES_ID_CAPTURE_LISTENER_DID_REJECT_ID_EVENT.includes(eventValue)) {
            throw new Error("IdCaptureListenerDidRejectId.event: unknown enum value '" + String(eventValue) + "'");
        }
    }
    else {
        throw new Error('IdCaptureListenerDidRejectId.event: null is not allowed');
    }
    return {
        rejectionReason: rejectionReasonValue,
        id: idValue,
        imageInfo: imageInfoValue,
        frontReviewImage: frontReviewImageValue,
        modeId: modeIdValue,
        event: eventValue,
    };
}

const KNOWN_REJECTION_REASONS = new Set(Object.values(RejectionReason));
// Asks the generated parser whether a value is on the wire contract, rather than duplicating the
// schema's enum here where it would drift. Only reached on the tolerant path, so the throw costs
// nothing on the happy path.
function isWireRejectionReason(value) {
    try {
        parseIdCaptureListenerDidRejectId({
            rejectionReason: value,
            modeId: 0,
            event: IdCaptureListenerEvents.didReject,
        });
        return true;
    }
    catch (_a) {
        return false;
    }
}
// Warn-once keys, namespaced by kind (`payload.<event>`, `reason.<name>`) so a per-event
// validation key cannot collide with a non-event key. Module-level, so one repeating payload
// problem costs one log line per process rather than one per frame.
const warnedSchemaValidationEvents = new Set();
// Strict-then-tolerant, mirroring the Flutter controller: these events are ack-owing, so a payload
// the generated parser rejects must not cost the app the whole scan result. Drift is reported once
// per event rather than once per frame.
function parsePayloadTolerantly(raw, strict, fallback, eventName) {
    try {
        return strict(raw);
    }
    catch (error) {
        const warnKey = `payload.${eventName}`;
        if (!warnedSchemaValidationEvents.has(warnKey)) {
            warnedSchemaValidationEvents.add(warnKey);
            console.warn(`IdCaptureListenerController ${eventName}: payload failed schema validation, ` +
                `falling back to tolerant parsing: ${String(error)}`);
        }
        return fallback(raw);
    }
}
// A malformed imageInfo sub-object must not sink the payload: the ack is gated on id/rejectionReason.
function tolerantImageInfo(raw) {
    if (raw === null || typeof raw !== 'object') {
        return undefined;
    }
    try {
        return parseImageInfo(raw);
    }
    catch (_a) {
        return undefined;
    }
}
function toImageJson(side) {
    var _a, _b, _c;
    if (!side) {
        return null;
    }
    // The generated type leaves absent images undefined; ImageJSON declares them as explicit nulls.
    return {
        face: (_a = side.face) !== null && _a !== void 0 ? _a : null,
        frame: (_b = side.frame) !== null && _b !== void 0 ? _b : null,
        croppedDocument: (_c = side.croppedDocument) !== null && _c !== void 0 ? _c : null,
    };
}
class IdCaptureListenerController extends BaseController {
    constructor(idCapture) {
        super('IdProxy');
        this.idCapture = idCapture;
        this.adapter = new IdProxyAdapter(this._proxy);
    }
    // ACK-owing (2s bounded timeout, both platforms): native blocks on finishDidCaptureCallback,
    // so a throwing (or schema-rejected) payload must still ack. Do the work in `try`, ack in
    // `finally`.
    handleDidCapture(onCapture, _ev, data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const event = parsePayloadTolerantly(data, parseIdCaptureListenerDidCaptureId, map => {
                    // `id` is required and cannot be reconstructed from a missing value -- an empty
                    // placeholder would report a bogus document -- so decline.
                    if (typeof map.id !== 'string') {
                        return null;
                    }
                    return {
                        id: map.id,
                        imageInfo: tolerantImageInfo(map.imageInfo),
                        frontReviewImage: typeof map.frontReviewImage === 'string' ? map.frontReviewImage : null,
                        modeId: typeof map.modeId === 'number' ? map.modeId : this.modeId,
                        event: IdCaptureListenerEvents.didCapture,
                    };
                }, 'didCaptureId');
                if (event === null) {
                    return;
                }
                const capturedIdJson = JSON.parse(event.id);
                this.enrichCapturedIdJson(capturedIdJson, event.imageInfo, (_a = event.frontReviewImage) !== null && _a !== void 0 ? _a : null);
                const captureId = CapturedId.fromJSON(capturedIdJson);
                onCapture(captureId);
            }
            catch (error) {
                console.error(`IdCaptureListenerController didCapture failed: ${String(error)}`);
            }
            finally {
                yield this.adapter.finishDidCaptureCallback({ modeId: this.modeId, enabled: this.idCapture.isEnabled });
            }
        });
    }
    handleDidReject(onReject, _ev, data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const event = parsePayloadTolerantly(data, parseIdCaptureListenerDidRejectId, map => {
                    // `rejectionReason` is required and cannot be guessed, so decline -- and decline a value
                    // that is not on the wire contract at all, which would be fabricating a rejection.
                    if (typeof map.rejectionReason !== 'string' || !isWireRejectionReason(map.rejectionReason)) {
                        return null;
                    }
                    return {
                        rejectionReason: map.rejectionReason,
                        id: typeof map.id === 'string' ? map.id : null,
                        imageInfo: tolerantImageInfo(map.imageInfo),
                        frontReviewImage: typeof map.frontReviewImage === 'string' ? map.frontReviewImage : null,
                        modeId: typeof map.modeId === 'number' ? map.modeId : this.modeId,
                        event: IdCaptureListenerEvents.didReject,
                    };
                }, 'didRejectId');
                if (event === null) {
                    return;
                }
                // A schema value missing from common/RejectionReason.ts is passed through, not declined:
                // dropping it would lose a real rejection. Warn once so the enum gap is visible.
                if (!KNOWN_REJECTION_REASONS.has(event.rejectionReason) && !warnedSchemaValidationEvents.has('reason.unknown')) {
                    warnedSchemaValidationEvents.add('reason.unknown');
                    console.warn(`IdCaptureListenerController didRejectId: rejectionReason '${event.rejectionReason}' is ` +
                        `on the wire but absent from this client's RejectionReason enum; passing it through`);
                }
                let rejectedId = null;
                if (event.id != null) {
                    const rejectedIdJson = JSON.parse(event.id);
                    this.enrichCapturedIdJson(rejectedIdJson, event.imageInfo, (_a = event.frontReviewImage) !== null && _a !== void 0 ? _a : null);
                    rejectedId = CapturedId.fromJSON(rejectedIdJson);
                }
                onReject(rejectedId, event.rejectionReason);
            }
            catch (error) {
                console.error(`IdCaptureListenerController didReject failed: ${String(error)}`);
            }
            finally {
                yield this.adapter.finishDidRejectCallback({ modeId: this.modeId, enabled: this.idCapture.isEnabled });
            }
        });
    }
    enrichCapturedIdJson(capturedIdJson, imageInfo, frontReviewImage) {
        var _a;
        if (imageInfo) {
            capturedIdJson.imageInfo = {
                front: toImageJson(imageInfo.front),
                back: toImageJson(imageInfo.back),
            };
        }
        if (frontReviewImage && ((_a = capturedIdJson.verificationResult) === null || _a === void 0 ? void 0 : _a.dataConsistencyResult)) {
            capturedIdJson.verificationResult.dataConsistencyResult.frontReviewImage = frontReviewImage;
        }
    }
    get modeId() {
        return this.idCapture.modeId;
    }
}

class IdCaptureOverlayController extends BaseController {
    constructor(overlay) {
        super('IdProxy');
        this.overlay = overlay;
        this.adapter = new IdProxyAdapter(this._proxy);
    }
    updateIdCaptureOverlay(overlay) {
        return this.adapter.updateIdCaptureOverlay({ overlayJson: JSON.stringify(overlay.toJSON()) });
    }
    dispose() {
        this._proxy.dispose();
    }
}

/**
 * Determines what feedback (vibration, sound) should be emitted during the ID Capture process.
 *
 * The feedback is specified for each {@link IdCapture} instance separately and can be changed through the {@link IdCapture.feedback} property by either modifying an existing instance of this class, or by assigning a new one.
 *
 * @since 6.21.0
 */
class IdCaptureFeedback extends DefaultSerializeable {
    /**
     * Returns an id capture feedback with default configuration:
     *
     * - default beep sound is loaded,
     * - beeping for the id captured event is enabled,
     * - vibration for the id captured event is enabled,
     * - beeping for the id rejected event is disabled,
     * - vibration for the id rejected event is disabled,
     * - beeping for the id capture timeout event is disabled,
     * - vibration for the id capture timeout event is disabled.
     *
     * @since 6.21.0
     */
    static get defaultFeedback() {
        return IdCaptureFeedback.withFeedbacks(IdCaptureFeedback.idDefaults.IdCapture.Feedback.idCaptured, IdCaptureFeedback.idDefaults.IdCapture.Feedback.idRejected);
    }
    /**
     * A {@link Feedback} that is emitted when IdCaptureListener.didCaptureId() event is triggered.
     *
     * @since 6.21.0
     */
    get idCaptured() {
        return this._idCaptured;
    }
    set idCaptured(idCaptured) {
        this._idCaptured = idCaptured;
        void this.updateFeedback();
    }
    /**
     * A {@link Feedback} that is emitted when IdCaptureListener.didRejectId() event is triggered.
     *
     * @since 6.21.0
     */
    get idRejected() {
        return this._idRejected;
    }
    set idRejected(idRejected) {
        this._idRejected = idRejected;
        void this.updateFeedback();
    }
    /**
     * Returns the default success sound
     *
     * @since 8.0.0
     */
    static get defaultSuccessSound() {
        return IdCaptureFeedback.idDefaults.IdCapture.DefaultSuccessSound;
    }
    /**
     * Returns the default failure sound
     *
     * @since 8.0.0
     */
    static get defaultFailureSound() {
        return IdCaptureFeedback.idDefaults.IdCapture.DefaultFailureSound;
    }
    static fromJSON(json) {
        const idCaptured = Feedback.fromJSON(json.idCaptured);
        const idRejected = Feedback.fromJSON(json.idRejected);
        return IdCaptureFeedback.withFeedbacks(idCaptured, idRejected);
    }
    static get idDefaults() {
        return getIdDefaults();
    }
    // Empty constructor: emits neither sound nor vibration, matching the documented
    // contract and Android's own empty constructor (IdCaptureFeedback.kt).
    /**
     * Empty constructor. Constructs a new feedback that will not emit any sound, nor vibration.
     *
     * @since 8.7.0
     */
    constructor() {
        super();
        this.withController = null;
        this._idCaptured = new Feedback(null, null);
        this._idRejected = new Feedback(null, null);
    }
    static withFeedbacks(idCaptured, idRejected) {
        const feedback = new IdCaptureFeedback();
        feedback._idCaptured = idCaptured;
        feedback._idRejected = idRejected;
        return feedback;
    }
    updateFeedback() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.withController) {
                return;
            }
            // Narrow IdCaptureFeedbackUpdater, not IdCaptureController: importing the concrete controller
            // would recreate the IdCapture<->IdCaptureController import cycle (SDC-34226).
            yield this.withController((controller) => controller.updateFeedback(this));
        });
    }
    toJSON() {
        // Fields are decorator-serialized (@nameForSerialization); this override only adds a
        // declared, schema-backed return type - no runtime validation on an outbound payload.
        // The declared shape describes the payload AFTER JSON.stringify: nested values are still
        // model instances (Feedback) here and are expanded by stringify.
        return super.toJSON();
    }
}
__decorate([
    ignoreFromSerialization
], IdCaptureFeedback.prototype, "withController", void 0);
__decorate([
    nameForSerialization('idCaptured')
], IdCaptureFeedback.prototype, "_idCaptured", void 0);
__decorate([
    nameForSerialization('idRejected')
], IdCaptureFeedback.prototype, "_idRejected", void 0);
__decorate([
    ignoreFromSerialization
], IdCaptureFeedback, "idDefaults", null);

/**
 * @since 6.14.0
 */
class IdCapture extends ModeBase {
    /**
     * Instance of {@link IdCaptureFeedback}, determines what feedback (vibration, sound) should be emitted during the ID Capture process.
     *
     * @since 6.21.0
     */
    get feedback() {
        return this._feedback;
    }
    set feedback(feedback) {
        this._feedback = feedback;
        this._feedback['withController'] = this.withController.bind(this);
        void this.withController(controller => controller.updateFeedback(feedback));
    }
    get listeners() {
        return ListenerRegistry.listenersFor(IdCaptureListenerEvents.didCapture, {
            modeId: this.modeId,
        });
    }
    /**
     * Creates the recommended camera settings to use with this mode.
     *
     * @since 7.6.0
     */
    static createRecommendedCameraSettings() {
        return new CameraSettings(IdCapture.idCaptureDefaults.IdCapture.RecommendedCameraSettings);
    }
    /**
     * Implemented from {@link DataCaptureMode}. See {@link DataCaptureMode.context}.
     *
     * @since 6.14.0
     */
    get context() {
        return super.context;
    }
    /**
     * Implemented from {@link DataCaptureMode}. See {@link DataCaptureMode.isEnabled}.
     *
     * @since 6.14.0
     */
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = isEnabled;
        void this.withController(controller => controller.setModeEnabledState(isEnabled));
    }
    /**
     * Sets or retrieves an external transaction ID. This ID is attached to ID scan analytics data, to be linkable to customer transactions. Set to *null* to clear the transaction ID.
     *
     * @since 8.0.0
     */
    get externalTransactionId() {
        return this._externalTransactionId;
    }
    set externalTransactionId(externalTransactionId) {
        this._externalTransactionId = externalTransactionId;
        void this.withController(controller => controller.updateIdCaptureMode());
    }
    static get idCaptureDefaults() {
        return FactoryMaker.getInstance('IdDefaults');
    }
    createController() {
        // Controllers depend on the narrow *Host interfaces, not IdCapture itself, to avoid an
        // import cycle (SDC-34226); modeId is protected, hence the cast.
        return new IdCaptureController(this);
    }
    createListenerController() {
        return new IdCaptureListenerController(this);
    }
    /**
     * Constructs a new {@link IdCapture} with the provided settings.
     *
     * @since 7.6.0
     */
    constructor(settings) {
        super();
        this.parentId = null;
        this.type = 'idCapture';
        this._isEnabled = true;
        this._externalTransactionId = null;
        this._feedback = IdCaptureFeedback.defaultFeedback;
        this.settings = settings;
        this._feedback['withController'] = this.withController.bind(this);
    }
    /**
     * Asynchronously applies the new settings to the ID Capture. If the scanner is currently running, the task will complete when the next frame is processed, and will use the new settings for that frame. If the scanner is currently *not* running, the task will complete as soon as the settings have been stored and won’t wait until the next frame is going to be processed.
     *
     * @since 6.21.0
     */
    applySettings(settings) {
        this.settings = settings;
        return this.withController(controller => controller.applyIdCaptureModeSettings(settings));
    }
    /**
     * Adds the listener to this id capture instance.
     *
     * In case the same listener is already observing this instance, calling this method will not add the listener again.
     *
     * @since 6.14.0
     */
    addListener(listener) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ListenerRegistry.addListener(IdCaptureListenerEvents.didCapture, { modeId: this.modeId }, listener, (listeners, ev, data) => __awaiter(this, void 0, void 0, function* () {
                // The controller never sees IdCaptureListener (which type-imports IdCapture, SDC-34226
                // cycle): it hands back a parsed CapturedId and this mode does the fan-out itself.
                yield this.withListenerController(controller => controller.handleDidCapture(capturedId => listeners.forEach(l => { var _a; return (_a = l.didCaptureId) === null || _a === void 0 ? void 0 : _a.call(l, this, capturedId); }), ev, data));
            }));
            yield ListenerRegistry.addListener(IdCaptureListenerEvents.didReject, { modeId: this.modeId }, listener, (listeners, ev, data) => __awaiter(this, void 0, void 0, function* () {
                yield this.withListenerController(controller => controller.handleDidReject((rejectedId, reason) => listeners.forEach(l => { var _a; return (_a = l.didRejectId) === null || _a === void 0 ? void 0 : _a.call(l, this, rejectedId, reason); }), ev, data));
            }));
        });
    }
    /**
     * Removes listener from this id capture instance.
     *
     * In case the listener is not currently observing this instance, calling this method has no effect.
     *
     * @since 6.14.0
     */
    removeListener(listener) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ListenerRegistry.removeListener(IdCaptureListenerEvents.didCapture, { modeId: this.modeId }, listener);
            yield ListenerRegistry.removeListener(IdCaptureListenerEvents.didReject, { modeId: this.modeId }, listener);
        });
    }
    /**
     * Resets the ongoing scanning process. This method can be used to abandon scanning the back side of a document.
     *
     * @since 6.14.0
     */
    reset() {
        return this.withController(controller => controller.reset());
    }
    toJSON() {
        // Fields are decorator-serialized (@nameForSerialization); this override only adds a
        // declared, schema-backed return type - no runtime validation on an outbound payload.
        // The declared shape describes the payload AFTER JSON.stringify: nested values are still
        // model instances (IdCaptureSettings, IdCaptureFeedback) here and are expanded by stringify.
        return super.toJSON();
    }
}
__decorate([
    nameForSerialization('parentId'),
    ignoreFromSerializationIfNull
], IdCapture.prototype, "parentId", void 0);
__decorate([
    nameForSerialization('enabled')
], IdCapture.prototype, "_isEnabled", void 0);
__decorate([
    nameForSerialization('externalTransactionId')
], IdCapture.prototype, "_externalTransactionId", void 0);
__decorate([
    nameForSerialization('feedback')
], IdCapture.prototype, "_feedback", void 0);
__decorate([
    ignoreFromSerialization
], IdCapture, "idCaptureDefaults", null);

/**
 * The style of the lines drawn as part of the IdLayout.
 *
 * @since 6.14.0
 */
var IdLayoutLineStyle;
(function (IdLayoutLineStyle) {
    /**
     * Draws lines with a width of 3 dips/points.
     *
     * @since 6.14.0
     */
    IdLayoutLineStyle["Light"] = "light";
    /**
     * Draws lines with a width of 5 dips/points.
     *
     * @since 6.14.0
     */
    IdLayoutLineStyle["Bold"] = "bold";
})(IdLayoutLineStyle || (IdLayoutLineStyle = {}));

/**
 * The layout style of the {@link IdCaptureOverlay}.
 *
 * @since 6.14.0
 */
var IdLayoutStyle;
(function (IdLayoutStyle) {
    /**
     * Layout style with rounded corners.
     *
     * @since 6.14.0
     */
    IdLayoutStyle["Rounded"] = "rounded";
    /**
     * Layout style with square corners.
     *
     * @since 6.14.0
     */
    IdLayoutStyle["Square"] = "square";
})(IdLayoutStyle || (IdLayoutStyle = {}));

/**
 * Overlay that guides the user through the {@link IdCapture} process.
 *
 * In order to display this overlay, add it to {@link DataCaptureView|data capture view}.
 *
 * This overlay shows a viewfinder, automatically selected based on IdCaptureSettings.AcceptedDocuments and IdCaptureSettings.Scanner, along with animations and textual hints, that allow the user to capture smoothly and avoid common pitfalls. It is designed to work out-of-the-box for a wide range of use-cases.
 *
 * You can tweak the look of the viewfinder by setting {@link IdCaptureOverlay.idLayoutStyle} and {@link IdCaptureOverlay.idLayoutLineStyle}. Additionally you can configure the brush used to highlight localized, captured, or rejected documents.
 *
 * You can translate the texts used by the viewfinder into various languages by adding adding string resources with the following ids to your app:
 *
 * | Resource id | Comment |
 * | --- | --- |
 * | scandit_id_capture_camera_too_far | Document cannot be captured, because the camera is too far. |
 * | scandit_id_capture_document_partially_visible | Document cannot be captured, because it’s only partially visible - either covered or not fully fitting the frame of the camera. |
 * | scandit_id_capture_tap_shutter_to_scan | Ask the user to tap the shutter button to let {@link IdCapture} start capturing a document |
 * | scandit_id_capture_looking_for_document | Tell the user that {@link IdCapture} is looking for a document to capture |
 * | scandit_id_capture_hold_still | Ask the user to hold still the device so that the document can be captured |
 * | scandit_id_capture_show_document | Ask the user to show a document, front of card capture scenario or multiple document types selected. |
 * | scandit_id_capture_show_passport | Ask the user to show the passport. |
 * | scandit_id_capture_show_front_of_document | Ask the user to show the front side of a document in the front & back capture scenario. |
 * | scandit_id_capture_show_back_of_document | Ask the user to show the back side of a document in the front & back capture scenario. |
 * | scandit_id_capture_show_barcode_on_document | Ask the user to show the barcode on a document, either when a barcode type is selected or the back side of a document in the front & back capture scenario contains only a barcode. |
 * | scandit_id_capture_show_visa | Ask the user to show the visa. |
 *
 * @since 6.14.0
 */
class IdCaptureOverlay extends DefaultSerializeable {
    get view() {
        return this._view;
    }
    set view(newView) {
        var _a, _b;
        if (newView === null) {
            (_a = this.controller) === null || _a === void 0 ? void 0 : _a.dispose();
            this.controller = null;
            this._view = null;
            return;
        }
        this._view = newView;
        (_b = this.controller) !== null && _b !== void 0 ? _b : (this.controller = new IdCaptureOverlayController(this));
    }
    static get idCaptureDefaults() {
        return FactoryMaker.getInstance('IdDefaults');
    }
    /**
     * Returns the default value for the ID layout style of the overlay.
     *
     * @since 8.0.0
     */
    static get defaultIdLayoutStyle() {
        return IdCaptureOverlay.idCaptureDefaults.IdCapture.IdCaptureOverlayDefaults.defaultIdLayoutStyle;
    }
    /**
     * Returns the default value for the ID layout line style of the overlay.
     *
     * @since 8.0.0
     */
    static get defaultIdLayoutLineStyle() {
        return IdCaptureOverlay.idCaptureDefaults.IdCapture.IdCaptureOverlayDefaults.defaultIdLayoutLineStyle;
    }
    static buildBrush(defaults) {
        return new Brush(defaults.fillColor, defaults.strokeColor, defaults.strokeWidth);
    }
    /**
     * The default brush used to draw rectangular highlights around captured personal identification documents or their parts such as barcodes or Machine Readable Zones (MRZs). By default, the stroke of a highlight is 3dp white and the fill is transparent.
     *
     * @since 8.7.0
     */
    static get defaultCapturedBrush() {
        return IdCaptureOverlay.buildBrush(IdCaptureOverlay.idCaptureDefaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush);
    }
    /**
     * The default brush used to draw rectangular highlights around localized personal identification documents or their parts such as barcodes or Machine Readable Zones (MRZs). A document or its part is considered localized when it’s detected in a frame, but its data is not yet extracted. By default, the fill of the highlight is white (alpha 50%) and the border is transparent.
     *
     * @since 8.7.0
     */
    static get defaultLocalizedBrush() {
        return IdCaptureOverlay.buildBrush(IdCaptureOverlay.idCaptureDefaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush);
    }
    /**
     * The default brush used to draw rectangular highlights around personal identification documents or their parts (such as barcodes), which were detected in a frame, but rejected. For example, data encoded in a barcode may have an unsupported format. By default, the fill of the highlight is white (alpha 50%) and the border is transparent.
     *
     * @since 8.7.0
     */
    static get defaultRejectedBrush() {
        return IdCaptureOverlay.buildBrush(IdCaptureOverlay.idCaptureDefaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush);
    }
    /**
     * Constructs a new IdCaptureOverlay. For the overlay to be displayed on screen, it must be added to a {@link DataCaptureView}.
     *
     * @since 7.6.0
     */
    constructor(mode) {
        super();
        this.type = 'idCapture';
        this.controller = null;
        this._view = null;
        this._idLayoutStyle = IdLayoutStyle.Rounded;
        this._idLayoutLineStyle = IdLayoutLineStyle.Light;
        this._textHintPosition = TextHintPosition.AboveViewfinder;
        this._showTextHints = true;
        this._defaultCapturedBrush = IdCaptureOverlay.defaultCapturedBrush;
        this._defaultLocalizedBrush = IdCaptureOverlay.defaultLocalizedBrush;
        this._defaultRejectedBrush = IdCaptureOverlay.defaultRejectedBrush;
        this._capturedBrush = this._defaultCapturedBrush;
        this._localizedBrush = this._defaultLocalizedBrush;
        this._rejectedBrush = this._defaultRejectedBrush;
        this._frontSideTextHint = null;
        this._backSideTextHint = null;
        this.modeId = mode.modeId;
    }
    /**
     * Sets text for textual hint displayed when scanning the front of document.
     *
     * @since 6.22.0
     */
    setFrontSideTextHint(text) {
        var _a;
        this._frontSideTextHint = text;
        void ((_a = this.controller) === null || _a === void 0 ? void 0 : _a.updateIdCaptureOverlay(this));
    }
    /**
     * Sets text for textual hint displayed when scanning the back of document.
     *
     * @since 6.22.0
     */
    setBackSideTextHint(text) {
        var _a;
        this._backSideTextHint = text;
        void ((_a = this.controller) === null || _a === void 0 ? void 0 : _a.updateIdCaptureOverlay(this));
    }
    /**
     * The ID layout style of the overlay. By default this is {@link IdLayoutStyle.Rounded}.
     *
     * @since 6.14.0
     */
    get idLayoutStyle() {
        return this._idLayoutStyle;
    }
    set idLayoutStyle(style) {
        var _a;
        this._idLayoutStyle = style;
        void ((_a = this.controller) === null || _a === void 0 ? void 0 : _a.updateIdCaptureOverlay(this));
    }
    /**
     * The ID layout line style. By default this is {@link IdLayoutLineStyle.Light}.
     *
     * @since 6.14.0
     */
    get idLayoutLineStyle() {
        return this._idLayoutLineStyle;
    }
    set idLayoutLineStyle(lineStyle) {
        var _a;
        this._idLayoutLineStyle = lineStyle;
        void ((_a = this.controller) === null || _a === void 0 ? void 0 : _a.updateIdCaptureOverlay(this));
    }
    /**
     * The brush used to draw rectangular highlights around captured personal identification documents or their parts such as barcodes or Machine Readable Zones (MRZs). By default it equals DefaultCapturedBrush.
     *
     * To disable highlights use {@link Brush.transparent}.
     *
     * @since 6.14.0
     */
    get capturedBrush() {
        return this._capturedBrush;
    }
    set capturedBrush(brush) {
        var _a;
        this._capturedBrush = brush;
        void ((_a = this.controller) === null || _a === void 0 ? void 0 : _a.updateIdCaptureOverlay(this));
    }
    /**
     * The brush used to draw rectangular highlights around localized personal identification documents or their parts such as barcodes or Machine Readable Zones (MRZs). A document or its part is considered localized when it’s detected in a frame, but its data is not yet extracted. By default it equals DefaultLocalizedBrush.
     *
     * To disable highlights use {@link Brush.transparent}.
     *
     * @since 6.14.0
     */
    get localizedBrush() {
        return this._localizedBrush;
    }
    set localizedBrush(brush) {
        var _a;
        this._localizedBrush = brush;
        void ((_a = this.controller) === null || _a === void 0 ? void 0 : _a.updateIdCaptureOverlay(this));
    }
    /**
     * The brush used to draw rectangular highlights around personal identification documents or their parts (such as barcodes), which were detected in a frame but rejected. For example, data encoded in a barcode may have an unsupported format. By default it equals DefaultRejectedBrush.
     *
     * To disable highlights use {@link Brush.transparent}.
     *
     * @since 6.14.0
     */
    get rejectedBrush() {
        return this._rejectedBrush;
    }
    set rejectedBrush(brush) {
        var _a;
        this._rejectedBrush = brush;
        void ((_a = this.controller) === null || _a === void 0 ? void 0 : _a.updateIdCaptureOverlay(this));
    }
    get defaultCapturedBrush() {
        return this._defaultCapturedBrush;
    }
    get defaultLocalizedBrush() {
        return this._defaultLocalizedBrush;
    }
    get defaultRejectedBrush() {
        return this._defaultRejectedBrush;
    }
    /**
     * The text hint position of the overlay. By default this is {@link TextHintPosition.AboveViewfinder}.
     *
     * @since 6.23.0
     */
    get textHintPosition() {
        return this._textHintPosition;
    }
    set textHintPosition(position) {
        var _a;
        this._textHintPosition = position;
        void ((_a = this.controller) === null || _a === void 0 ? void 0 : _a.updateIdCaptureOverlay(this));
    }
    /**
     * Indicates whether text hints are shown or not. True by default.
     *
     * @since 6.23.0
     */
    get showTextHints() {
        return this._showTextHints;
    }
    set showTextHints(enabled) {
        var _a;
        this._showTextHints = enabled;
        void ((_a = this.controller) === null || _a === void 0 ? void 0 : _a.updateIdCaptureOverlay(this));
    }
    toJSON() {
        // Fields are decorator-serialized (@nameForSerialization); this override only adds a
        // declared, schema-backed return type - no runtime validation on an outbound payload.
        // The declared shape describes the payload AFTER JSON.stringify: nested values are still
        // model instances (Brush, Duration, Feedback) here and are expanded by stringify.
        return super.toJSON();
    }
}
__decorate([
    ignoreFromSerialization
], IdCaptureOverlay.prototype, "controller", void 0);
__decorate([
    ignoreFromSerialization
], IdCaptureOverlay.prototype, "_view", void 0);
__decorate([
    nameForSerialization('idLayoutStyle')
], IdCaptureOverlay.prototype, "_idLayoutStyle", void 0);
__decorate([
    nameForSerialization('idLayoutLineStyle')
], IdCaptureOverlay.prototype, "_idLayoutLineStyle", void 0);
__decorate([
    nameForSerialization('textHintPosition')
], IdCaptureOverlay.prototype, "_textHintPosition", void 0);
__decorate([
    nameForSerialization('showTextHints')
], IdCaptureOverlay.prototype, "_showTextHints", void 0);
__decorate([
    ignoreFromSerialization
], IdCaptureOverlay.prototype, "_defaultCapturedBrush", void 0);
__decorate([
    ignoreFromSerialization
], IdCaptureOverlay.prototype, "_defaultLocalizedBrush", void 0);
__decorate([
    ignoreFromSerialization
], IdCaptureOverlay.prototype, "_defaultRejectedBrush", void 0);
__decorate([
    nameForSerialization('capturedBrush')
], IdCaptureOverlay.prototype, "_capturedBrush", void 0);
__decorate([
    nameForSerialization('localizedBrush')
], IdCaptureOverlay.prototype, "_localizedBrush", void 0);
__decorate([
    nameForSerialization('rejectedBrush')
], IdCaptureOverlay.prototype, "_rejectedBrush", void 0);
__decorate([
    nameForSerialization('frontSideTextHint')
], IdCaptureOverlay.prototype, "_frontSideTextHint", void 0);
__decorate([
    nameForSerialization('backSideTextHint')
], IdCaptureOverlay.prototype, "_backSideTextHint", void 0);
__decorate([
    ignoreFromSerialization
], IdCaptureOverlay, "idCaptureDefaults", null);
__decorate([
    ignoreFromSerialization
], IdCaptureOverlay, "defaultIdLayoutStyle", null);
__decorate([
    ignoreFromSerialization
], IdCaptureOverlay, "defaultIdLayoutLineStyle", null);
__decorate([
    ignoreFromSerialization
], IdCaptureOverlay, "defaultCapturedBrush", null);
__decorate([
    ignoreFromSerialization
], IdCaptureOverlay, "defaultLocalizedBrush", null);
__decorate([
    ignoreFromSerialization
], IdCaptureOverlay, "defaultRejectedBrush", null);

/**
 * Configures the scanner for capturing identity documents. This data class allows configuring both physical document scanning (ID cards, passports, driver’s licenses) and mobile document scanning (ISO 18013-5 mDL).
 *
 * @since 8.0.0
 */
class IdCaptureScanner extends DefaultSerializeable {
    /**
     * Creates a new IdCaptureScanner instance.
     *
     * Param PhysicalDocumentScanner? physicalDocumentConfiguration for scanning physical documents. See {@link PhysicalDocumentScanner} for options.Param MobileDocumentScanner? mobileDocumentConfiguration for scanning mobile documents. See {@link MobileDocumentScanner} for options.
     *
     * @since 8.0.0
     */
    constructor(physicalDocumentScanner, mobileDocumentScanner) {
        super();
        this._physicalDocumentScanner = physicalDocumentScanner !== null && physicalDocumentScanner !== void 0 ? physicalDocumentScanner : null;
        this._mobileDocumentScanner = mobileDocumentScanner !== null && mobileDocumentScanner !== void 0 ? mobileDocumentScanner : null;
    }
    /**
     * Configuration for scanning physical documents (cards and booklets). Can be null if only mobile documents are to be scanned.
     *
     * @since 8.0.0
     */
    get physicalDocument() {
        return this._physicalDocumentScanner;
    }
    /**
     * Configuration for scanning mobile documents. Can be null if only physical documents are to be scanned.
     *
     * @since 8.0.0
     */
    get mobileDocument() {
        return this._mobileDocumentScanner;
    }
    /**
     * Sets a property to the provided value. Use this method to set properties that are not yet part of a stable API. Properties set through this method may change in a future release.
     *
     * @since 8.7.0
     */
    setProperty(name, value) {
        this[name] = value;
    }
    /**
     * Retrieves the value of a previously set property. In case the property does not exist, *null* is returned.
     *
     * @since 8.7.0
     */
    getProperty(name) {
        return this[name];
    }
}
__decorate([
    nameForSerialization('physicalDocument'),
    ignoreFromSerializationIfNull
], IdCaptureScanner.prototype, "_physicalDocumentScanner", void 0);
__decorate([
    nameForSerialization('mobileDocument'),
    ignoreFromSerializationIfNull
], IdCaptureScanner.prototype, "_mobileDocumentScanner", void 0);

/**
 * Represents a scanner configuration that focuses on specific parts of a document (referred to as “zones”) rather than the entire document. The scanner can be customized to extract data from one or more of the following zones: barcodes, Machine-Readable Zone (MRZ) and Human-Readable Zone (Visual Inspection Zone, VIZ).This scanner type is useful for tailored use cases, such as extracting specific data points from documents or handling scenarios where different document types encode information in varying zones. When multiple zones are enabled, the scanner intelligently captures data from the zone available on the presented document.
 *
 * @since 8.0.0
 */
class SingleSideScanner extends DefaultSerializeable {
    /**
     * Creates a new SingleSideScanner instance. Note that the freeFormText parameter is experimental and cannot be used without a compliant license key.
     *
     * @since 8.7.0
     */
    constructor(barcode, machineReadableZone, visualInspectionZone, freeFormText) {
        super();
        this._isFull = false;
        this._barcode = barcode;
        this._machineReadableZone = machineReadableZone;
        this._visualInspectionZone = visualInspectionZone;
        this._freeFormText = freeFormText !== null && freeFormText !== void 0 ? freeFormText : false;
        this.options = {
            barcode: this._barcode,
            machineReadableZone: this._machineReadableZone,
            visualInspectionZone: this._visualInspectionZone,
            freeFormText: this._freeFormText,
        };
    }
    /**
     * Extracts data from barcodes on identity documents
     *
     * @since 8.0.0
     */
    get barcode() {
        return this._barcode;
    }
    /**
     * Extracts data from the Machine Readable Zone on identity documents
     *
     * @since 8.0.0
     */
    get machineReadableZone() {
        return this._machineReadableZone;
    }
    /**
     * Extracts all information from the front side of a card format document or equivalent to “Full Document” for booklet documents
     *
     * @since 8.0.0
     */
    get visualInspectionZone() {
        return this._visualInspectionZone;
    }
    /**
     * Extracts free-form text from the document. This parameter is experimental and cannot be used without a compliant license key.
     *
     * @since 8.7.0
     */
    get freeFormText() {
        return this._freeFormText;
    }
}
__decorate([
    ignoreFromSerialization
], SingleSideScanner.prototype, "_barcode", void 0);
__decorate([
    ignoreFromSerialization
], SingleSideScanner.prototype, "_machineReadableZone", void 0);
__decorate([
    ignoreFromSerialization
], SingleSideScanner.prototype, "_visualInspectionZone", void 0);
__decorate([
    ignoreFromSerialization
], SingleSideScanner.prototype, "_freeFormText", void 0);
__decorate([
    nameForSerialization('isFull')
], SingleSideScanner.prototype, "_isFull", void 0);

/**
 * Represents a scanner configuration that captures data from all supported parts of a document. This includes the human-readable zone (visual inspection zone, VIZ), the machine-readable zone (MRZ), and barcodes, provided they are present and supported by the library.For card-format documents (e.g., driver’s licenses or ID cards), both the front and back are scanned. The user is prompted to scan the back after the front, and the combined result is returned.For booklet-format documents (e.g., passports), the identity page is scanned, encompassing both the human-readable and machine-readable parts. This scanner type is ideal for use cases requiring comprehensive data extraction, data consistency checks, or full-document image capture.
 *
 * @since 8.0.0
 */
class FullDocumentScanner extends DefaultSerializeable {
    /**
     * Creates a new FullDocumentScanner instance.
     *
     * @since 8.0.0
     */
    constructor() {
        super();
        this._isFull = true;
        this._barcode = true;
        this._machineReadableZone = true;
        this._visualInspectionZone = true;
        this.options = {
            barcode: this._barcode,
            machineReadableZone: this._machineReadableZone,
            visualInspectionZone: this._visualInspectionZone,
        };
    }
}
__decorate([
    ignoreFromSerialization
], FullDocumentScanner.prototype, "_barcode", void 0);
__decorate([
    ignoreFromSerialization
], FullDocumentScanner.prototype, "_machineReadableZone", void 0);
__decorate([
    ignoreFromSerialization
], FullDocumentScanner.prototype, "_visualInspectionZone", void 0);
__decorate([
    nameForSerialization('isFull')
], FullDocumentScanner.prototype, "_isFull", void 0);

/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */
const ISO_MDL_NAMESPACE = 'org.iso.18013.5.1';
const AAMVA_NAMESPACE = 'org.iso.18013.5.1.aamva';
/**
 * Maps each data element to the namespace/field pair the native deserializer resolves it by.
 *
 * Native keeps this table in `iso_mdoc_request_definition.cc` and turns the pair straight back
 * into the same enum, so one pair per element is enough — the EUDI PID namespace and its field
 * overrides only matter for the reverse (element to every pair) direction, which is not used here.
 * Sending the bare enum value instead makes the native side drop the element without an error.
 */
const elementIdentifiers = {
    [MobileDocumentDataElement.FamilyName]: { namespace: ISO_MDL_NAMESPACE, field: 'family_name' },
    [MobileDocumentDataElement.GivenName]: { namespace: ISO_MDL_NAMESPACE, field: 'given_name' },
    [MobileDocumentDataElement.BirthDate]: { namespace: ISO_MDL_NAMESPACE, field: 'birth_date' },
    [MobileDocumentDataElement.IssueDate]: { namespace: ISO_MDL_NAMESPACE, field: 'issue_date' },
    [MobileDocumentDataElement.ExpiryDate]: { namespace: ISO_MDL_NAMESPACE, field: 'expiry_date' },
    [MobileDocumentDataElement.IssuingCountry]: { namespace: ISO_MDL_NAMESPACE, field: 'issuing_country' },
    [MobileDocumentDataElement.IssuingAuthority]: { namespace: ISO_MDL_NAMESPACE, field: 'issuing_authority' },
    [MobileDocumentDataElement.DocumentNumber]: { namespace: ISO_MDL_NAMESPACE, field: 'document_number' },
    [MobileDocumentDataElement.Portrait]: { namespace: ISO_MDL_NAMESPACE, field: 'portrait' },
    [MobileDocumentDataElement.SignatureUsualMark]: { namespace: ISO_MDL_NAMESPACE, field: 'signature_usual_mark' },
    [MobileDocumentDataElement.DrivingPrivileges]: { namespace: ISO_MDL_NAMESPACE, field: 'driving_privileges' },
    [MobileDocumentDataElement.AdministrativeNumber]: {
        namespace: ISO_MDL_NAMESPACE,
        field: 'administrative_number',
    },
    [MobileDocumentDataElement.SexIso]: { namespace: ISO_MDL_NAMESPACE, field: 'sex' },
    [MobileDocumentDataElement.Height]: { namespace: ISO_MDL_NAMESPACE, field: 'height' },
    [MobileDocumentDataElement.Weight]: { namespace: ISO_MDL_NAMESPACE, field: 'weight' },
    [MobileDocumentDataElement.EyeColour]: { namespace: ISO_MDL_NAMESPACE, field: 'eye_colour' },
    [MobileDocumentDataElement.HairColour]: { namespace: ISO_MDL_NAMESPACE, field: 'hair_colour' },
    [MobileDocumentDataElement.BirthPlace]: { namespace: ISO_MDL_NAMESPACE, field: 'birth_place' },
    [MobileDocumentDataElement.ResidentAddress]: { namespace: ISO_MDL_NAMESPACE, field: 'resident_address' },
    [MobileDocumentDataElement.IssuingJurisdiction]: {
        namespace: ISO_MDL_NAMESPACE,
        field: 'issuing_jurisdiction',
    },
    [MobileDocumentDataElement.Nationality]: { namespace: ISO_MDL_NAMESPACE, field: 'nationality' },
    [MobileDocumentDataElement.NameSuffix]: { namespace: AAMVA_NAMESPACE, field: 'name_suffix' },
    [MobileDocumentDataElement.FamilyNameTruncation]: {
        namespace: AAMVA_NAMESPACE,
        field: 'family_name_truncation',
    },
    [MobileDocumentDataElement.GivenNameTruncation]: {
        namespace: AAMVA_NAMESPACE,
        field: 'given_name_truncation',
    },
    [MobileDocumentDataElement.AkaFamilyName]: { namespace: AAMVA_NAMESPACE, field: 'aka_family_name' },
    [MobileDocumentDataElement.AkaGivenName]: { namespace: AAMVA_NAMESPACE, field: 'aka_given_name' },
    [MobileDocumentDataElement.AkaSuffix]: { namespace: AAMVA_NAMESPACE, field: 'aka_suffix' },
    [MobileDocumentDataElement.WeightRange]: { namespace: AAMVA_NAMESPACE, field: 'weight_range' },
    [MobileDocumentDataElement.RaceEthnicity]: { namespace: AAMVA_NAMESPACE, field: 'race_ethnicity' },
    [MobileDocumentDataElement.ResidentCounty]: { namespace: AAMVA_NAMESPACE, field: 'resident_county' },
    [MobileDocumentDataElement.SexAamva]: { namespace: AAMVA_NAMESPACE, field: 'sex' },
    [MobileDocumentDataElement.AamvaVersion]: { namespace: AAMVA_NAMESPACE, field: 'aamva_version' },
};
function serializeMobileDocumentDataElement(element) {
    return elementIdentifiers[element];
}

/**
 * Configures scanning of mobile identity documents, including ISO 18013-5 compliant mobile driver’s licenses (mDL) and OCR-based mobile documents.
 *
 * @since 8.0.0
 */
class MobileDocumentScanner extends DefaultSerializeable {
    /**
     * Creates a new MobileDocumentScanner instance with specified elements to retain.
     *
     * Each requested data field includes a boolean IntentToRetain in device request according to ISO 18013-5 standards. This parameter allows you to specify which fields your application intends to retain, ensuring compliance with legal requirements. By default, IntentToRetain is set to false for all fields unless they are included in elementsToRetain.
     *
     * @since 8.0.0
     */
    constructor(iso180135, ocr, elementsToRetain) {
        super();
        this._iso180135 = iso180135;
        this._ocr = ocr;
        this._elementsToRetain = Array.from(elementsToRetain !== null && elementsToRetain !== void 0 ? elementsToRetain : []);
        this._elementsToRetainJson = this._elementsToRetain.map(serializeMobileDocumentDataElement);
    }
    /**
     * Indicates whether ISO 18013-5 mDL scanning is enabled. When enabled, the scanner can read mobile driver’s licenses that comply with the ISO 18013-5 standard via Bluetooth Low Energy (BLE) communication.
     *
     * @since 8.0.0
     */
    get iso180135() {
        return this._iso180135;
    }
    /**
     * Indicates whether OCR is enabled to extract data from mobile documents using a proprietary format. Note that this feature requires the ScanditLabelCaptureText library.
     *
     * @since 8.0.0
     */
    get ocr() {
        return this._ocr;
    }
    /**
     * The set of data elements that the application intends to retain from scanned mobile documents. This information is used to set the IntentToRetain flag in ISO 18013-5 mdoc requests, which is required for legal compliance with data protection standards. An empty set indicates no elements will be retained, and IntentToRetain will be set to false for all fields.
     *
     * @since 8.0.0
     */
    get elementsToRetain() {
        return new Set(this._elementsToRetain);
    }
}
__decorate([
    nameForSerialization('iso180135')
], MobileDocumentScanner.prototype, "_iso180135", void 0);
__decorate([
    nameForSerialization('ocr')
], MobileDocumentScanner.prototype, "_ocr", void 0);
__decorate([
    ignoreFromSerialization
], MobileDocumentScanner.prototype, "_elementsToRetain", void 0);
__decorate([
    nameForSerialization('elementsToRetain')
], MobileDocumentScanner.prototype, "_elementsToRetainJson", void 0);

/**
 * Settings to configure an {@link IdCapture} instance.
 *
 * @since 6.14.0
 */
class IdCaptureSettings extends DefaultSerializeable {
    /**
     * Creates a new default settings. By default the scanner is an instance of {@link SingleSideScanner} that does not scan anything, and {@link IdCaptureSettings.acceptedDocuments} is empty.
     *
     * @since 6.14.0
     */
    constructor() {
        super();
        /**
         * When enabled, this setting removes protected data from images and result fields of certain document types. Enabling anonymization helps to remain compliant with local legal requirements which restrict the collection of some data. Examples of affected fields are the document number on German IDs or the personal ID number on Dutch driver’s licenses. By default set to {@link IdAnonymizationMode.FieldsOnly}.
         *
         * @since 6.21.0
         */
        this.anonymizationMode = IdCaptureSettings.idCaptureDefaults.IdCapture.IdCaptureSettings.anonymizationMode;
        /**
         * Controls whether the SDK applies default anonymization rules for specific document types and regions. When enabled, the SDK automatically anonymizes fields that are protected by default for certain document types.
         *
         * When disabled, only fields explicitly added via {@link IdCaptureSettings.addAnonymizedField} will be anonymized.
         *
         * This provides fine-grained control over which data is anonymized, allowing compliance with specific legal requirements. Default is *true*.
         *
         * @since 8.2.0
         */
        this.anonymizeDefaultFields = IdCaptureSettings.idCaptureDefaults.IdCapture.IdCaptureSettings.anonymizeDefaultFields;
        /**
         * This setting enables rejection of voided documents. This feature has been primarily developed for US Driver’s Licenses, the results might not be accurate when scanning other document types.
         *
         * @since 6.25.0
         */
        this.rejectVoidedIds = IdCaptureSettings.idCaptureDefaults.IdCapture.IdCaptureSettings.rejectVoidedIds;
        /**
         * This setting enables the extraction of additional data about vehicle categories from the back of European driver’s licenses, like issue and expiry dates.
         *
         * @since 7.0.0
         */
        this.decodeBackOfEuropeanDrivingLicense = IdCaptureSettings.idCaptureDefaults.IdCapture.IdCaptureSettings.decodeBackOfEuropeanDrivingLicense;
        /**
         * Documents that should be accepted by the ID Capture scanner. You may accept individual document categories (like ID cards or passports) globally or narrow the selection by region or country, offering granular control over the scanning configuration.
         *
         * All documents not specified by this setting are rejected.
         *
         * Refer to the Supported Documents section for the full list of document types and regions.
         *
         * @since 7.0.0
         */
        this.acceptedDocuments = [];
        /**
         * Documents to reject during ID capture, even if they match types defined in “acceptedDocuments”. This property is useful for enforcing restrictions on documents from certain regions or countries.
         *
         * Refer to the Supported Documents section for the full list of document types and regions.
         *
         * @since 7.0.0
         */
        this.rejectedDocuments = [];
        /**
         * Enables rejection of passports whose {@link PassportType} is in the given set. The sub-type is derived from the machine-readable zone, so this applies to documents scanned with an MRZ. Matching documents are routed to IdCaptureListener.didRejectId() with {@link RejectionReason.NotAcceptedDocumentType}. Empty by default, which rejects nothing. A passport whose type cannot be determined reliably is reported as `Unknown`, and is rejected only if that value is in the set. See {@link PassportType} for the rules.
         *
         * @since 8.7.0
         */
        this.rejectPassportTypes = new Set();
        /**
         * Defines the scanner configuration for capturing identity documents, including physical documents and mobile documents.
         *
         * For physical document scanning, assign an {@link IdCaptureScanner} wrapping either a {@link FullDocumentScanner} (comprehensive scanning of all zones and both sides of card-format documents) or a {@link SingleSideScanner} (targeted zone scanning). For mobile documents (mDL, mdoc), use a {@link MobileDocumentScanner} instead. There is no default that captures any document — this property must be explicitly set before creating the {@link IdCapture} instance.
         *
         * @since 7.0.0
         */
        this.scanner = new IdCaptureScanner();
        /**
         * Enables rejection of expired documents. When enabled, expired documents are routed to IdCaptureListener.didRejectId() with {@link RejectionReason.DocumentExpired} instead of being reported as captured.
         *
         * @since 7.6.0
         */
        this.rejectExpiredIds = IdCaptureSettings.idCaptureDefaults.IdCapture.IdCaptureSettings.rejectExpiredIds;
        /**
         * Enables rejection of documents that will expire within the specified duration. The duration components are applied on the date of expiry in the following order: years, months and days. Enabling this setting automatically enables the rejection of expired IDs.
         *
         * @since 7.6.0
         */
        this.rejectIdsExpiringIn = IdCaptureSettings.idCaptureDefaults.IdCapture.IdCaptureSettings.rejectIdsExpiringIn;
        /**
         * Enables rejection of documents that are not REAL ID compliant.
         *
         * @since 7.6.0
         */
        this.rejectNotRealIdCompliant = IdCaptureSettings.idCaptureDefaults.IdCapture.IdCaptureSettings.rejectNotRealIdCompliant;
        /**
         * Enables rejection of documents with a forged AAMVA barcode. When enabled, forged documents are routed to IdCaptureListener.didRejectId() with {@link RejectionReason.ForgedAamvaBarcode}. Verification is performed automatically by the SDK — no separate verifier object is required on iOS.
         *
         * @since 7.6.0
         */
        this.rejectForgedAamvaBarcodes = IdCaptureSettings.idCaptureDefaults.IdCapture.IdCaptureSettings.rejectForgedAamvaBarcodes;
        /**
         * Enables rejection of documents with inconsistent data between zones (e.g., barcode vs. VIZ). When enabled, inconsistent documents are routed to IdCaptureListener.didRejectId() with {@link RejectionReason.InconsistentData}.
         *
         * The detailed result, including a front review image, is accessible via {@link CapturedId.verificationResult}. See also {@link IdCaptureSettings.setShouldPassImageTypeToResult}.
         *
         * @since 7.6.0
         */
        this.rejectInconsistentData = IdCaptureSettings.idCaptureDefaults.IdCapture.IdCaptureSettings.rejectInconsistentData;
        /**
         * Enables rejection of documents whose holder is below the specified age. When set, underage documents are routed to IdCaptureListener.didRejectId() with {@link RejectionReason.HolderUnderage}.
         *
         * @since 7.6.0
         */
        this.rejectHolderBelowAge = IdCaptureSettings.idCaptureDefaults.IdCapture.IdCaptureSettings.rejectHolderBelowAge;
        /**
         * The timeout in seconds for document localization without successful capture. When a document is localized but not captured within this duration, the IdCaptureListener.didRejectId() callback is triggered with {@link RejectionReason.Timeout}. Default is 6 seconds. Values less than or equal to 0 reset to the default value.
         *
         * @since 8.7.0
         */
        this.rejectionTimeoutSeconds = IdCaptureSettings.idCaptureDefaults.IdCapture.IdCaptureSettings.rejectionTimeoutSeconds;
        /**
         * When enabled, callbacks will be fired for both front and back side captures when scanning double-sided documents. This allows applications to receive partial results even if the back side scan fails. When disabled (default), callbacks are only fired when document recognition is complete. Use {@link CapturedId.isCapturingComplete} to determine if the captured result represents a complete or partial recognition.
         *
         * @since 8.6.1
         */
        this.notifyOnSideCapture = IdCaptureSettings.idCaptureDefaults.IdCapture.IdCaptureSettings.notifyOnSideCapture;
        this.properties = {};
        this.imageToResult = {};
        this.anonymizationMap = {};
    }
    static get idCaptureDefaults() {
        return FactoryMaker.getInstance('IdDefaults');
    }
    /**
     * Sets a property to the provided value. Use this method to set properties that are not yet part of a stable API. Properties set through this method may change in a future release.
     *
     * @since 6.14.0
     */
    setProperty(name, value) {
        this.properties[name] = value;
    }
    /**
     * Retrieves the value of a previously set property. In case the property does not exist, *null* is returned. Use this method to get properties that are not yet part of a stable API. These properties may change in a future release.
     *
     * @since 6.14.0
     */
    getProperty(name) {
        return this.properties[name];
    }
    /**
     * Sets whether an {@link IdCapture} created with these settings should extract an image (specified by the given type) from recognized documents and return it as part of {@link CapturedId}. Note that the image may still not be returned, for example, if it’s not present in a document or if it’s not recognized. Default is *false*.
     *
     * @since 6.14.0
     */
    setShouldPassImageTypeToResult(type, shouldPass) {
        this.imageToResult[type] = shouldPass;
    }
    /**
     * Gets whether an {@link IdCapture} created with these settings should extract an image (specified by the given type) from recognized documents and return it as part of {@link CapturedId}. Note that the image may still not be returned, for example, if it’s not present in a document or if it’s not recognized. Default is *false*.
     *
     * @since 6.14.0
     */
    getShouldPassImageTypeToResult(type) {
        return this.imageToResult[type] || false;
    }
    /**
     * Adds a specific field to be anonymized for the specified document type and region. This method allows fine-grained control over which fields are anonymized, complementing the global {@link IdCaptureSettings.anonymizationMode} setting. Fields added through this method will be anonymized in addition to any default anonymization rules for the document type.
     *
     * @since 8.0.0
     */
    addAnonymizedField(document, fieldType) {
        var _a;
        const key = JSON.stringify(document);
        this.anonymizationMap[key] = [...new Set([...((_a = this.anonymizationMap[key]) !== null && _a !== void 0 ? _a : []), fieldType.toString()])];
    }
    /**
     * Removes a previously added anonymized field for the specified document type and region. This method provides fine-grained control over anonymization settings, allowing dynamic adjustment of which fields should be anonymized. If the field was not previously added, this operation has no effect.
     *
     * @since 8.7.0
     */
    removeAnonymizedField(document, fieldType) {
        var _a;
        const key = JSON.stringify(document);
        const remaining = ((_a = this.anonymizationMap[key]) !== null && _a !== void 0 ? _a : []).filter((entry) => entry !== fieldType.toString());
        if (remaining.length > 0) {
            this.anonymizationMap[key] = remaining;
        }
        else {
            delete this.anonymizationMap[key];
        }
    }
    /**
     * Removes all previously added anonymized fields from the settings.
     *
     * @since 8.7.0
     */
    clearAnonymizedFields() {
        this.anonymizationMap = {};
    }
    toJSON() {
        // Fields are decorator-serialized (@nameForSerialization); this override only adds a
        // declared, schema-backed return type - no runtime validation on an outbound payload.
        // The declared shape describes the payload AFTER JSON.stringify: nested values are still
        // model instances (Duration, IdCaptureScanner) here and are expanded by stringify.
        return super.toJSON();
    }
}
__decorate([
    nameForSerialization('scanner')
], IdCaptureSettings.prototype, "scanner", void 0);
__decorate([
    ignoreFromSerialization
], IdCaptureSettings, "idCaptureDefaults", null);

const ID_PROXY_TYPE_NAMES = ['IdProxy'];

function registerIdProxies(provider) {
    registerProxies(ID_PROXY_TYPE_NAMES, provider);
}

// Core ID Types

var IdExports = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AamvaBarcodeVerificationResult: AamvaBarcodeVerificationResult,
    get AamvaBarcodeVerificationStatus () { return AamvaBarcodeVerificationStatus; },
    get ApplicationStatus () { return ApplicationStatus; },
    BarcodeResult: BarcodeResult,
    CapturedId: CapturedId,
    get CapturedSides () { return CapturedSides; },
    get DataConsistencyCheck () { return DataConsistencyCheck; },
    DataConsistencyResult: DataConsistencyResult,
    DateResult: DateResult,
    DriverLicense: DriverLicense,
    DrivingLicenseCategory: DrivingLicenseCategory,
    DrivingLicenseDetails: DrivingLicenseDetails,
    Duration: Duration,
    FullDocumentScanner: FullDocumentScanner,
    HealthInsuranceCard: HealthInsuranceCard,
    get IdAnonymizationMode () { return IdAnonymizationMode; },
    IdCapture: IdCapture,
    get IdCaptureDocumentType () { return IdCaptureDocumentType; },
    IdCaptureFeedback: IdCaptureFeedback,
    IdCaptureOverlay: IdCaptureOverlay,
    get IdCaptureRegion () { return IdCaptureRegion; },
    IdCaptureScanner: IdCaptureScanner,
    IdCaptureSettings: IdCaptureSettings,
    IdCard: IdCard,
    get IdFieldType () { return IdFieldType; },
    get IdImageType () { return IdImageType; },
    IdImages: IdImages,
    get IdLayoutLineStyle () { return IdLayoutLineStyle; },
    get IdLayoutStyle () { return IdLayoutStyle; },
    get IdSide () { return IdSide; },
    MRZResult: MRZResult,
    get MobileDocumentDataElement () { return MobileDocumentDataElement; },
    MobileDocumentOCRResult: MobileDocumentOCRResult,
    MobileDocumentResult: MobileDocumentResult,
    MobileDocumentScanner: MobileDocumentScanner,
    Passport: Passport,
    get PassportType () { return PassportType; },
    ProfessionalDrivingPermit: ProfessionalDrivingPermit,
    RegionSpecific: RegionSpecific,
    get RegionSpecificSubtype () { return RegionSpecificSubtype; },
    get RejectionReason () { return RejectionReason; },
    ResidencePermit: ResidencePermit,
    get Sex () { return Sex; },
    SingleSideScanner: SingleSideScanner,
    get TextHintPosition () { return TextHintPosition; },
    get UsRealIdStatus () { return UsRealIdStatus; },
    VIZResult: VIZResult,
    VehicleRestriction: VehicleRestriction,
    VerificationResult: VerificationResult,
    VisaDetails: VisaDetails,
    VisaIcao: VisaIcao,
    VisaLetter: VisaLetter
});

// A minimal, valid stand-in for the genuinely dynamic (device-probed) RecommendedCameraSettings,
// used only until applyDynamicDefaults() below overwrites it with the real native value.
const recommendedCameraSettingsPlaceholder = {
    preferredResolution: 'fullHd',
    focusGestureStrategy: 'manualUntilCapture',
    focusRange: 'full',
    zoomFactor: 1.0,
    zoomGestureZoomFactor: 2.0,
    shouldPreferSmoothAutoFocus: false,
    torchLevel: 1.0,
    macroMode: 'auto',
    adaptiveExposure: false,
    zoomLevels: [1.0, 2.0],
    properties: {},
};
const pluginName = 'ScanditIdNative';
// tslint:disable-next-line:variable-name
const Capacitor = {
    pluginName,
    defaults: {},
    exec: (success, error, functionName, args) => capacitorExec(success, error, pluginName, functionName, args),
};
// Loaded synchronously at module-import time. RecommendedCameraSettings is genuinely dynamic
// (device-probed), so it is seeded here from the same generated recommended baseline used
// elsewhere, and gets overwritten with the real value by applyDynamicDefaults() below.
const staticPlatform = Capacitor$1.getPlatform() === 'ios' ? 'ios' : 'android';
loadIdDefaults(Object.assign(Object.assign({}, buildStaticIdDefaultsJson(staticPlatform)), { RecommendedCameraSettings: recommendedCameraSettingsPlaceholder }));
Capacitor.defaults = getIdDefaults();
/**
 * Fetches the narrow dynamic residual (RecommendedCameraSettings) and merges it in. Errors
 * propagate — no swallowing.
 */
const applyDynamicDefaults = async () => {
    const dynamicJson = await window.Capacitor.Plugins[pluginName]['getDynamicDefaults']();
    // Merge raw JSON, then re-parse through the real parser, so parseIdDefaults stays the only
    // producer of typed values — same shape as core/barcode/label. (bindInstanceIfNotExists would
    // no-op on this second load, hence dropping the binding first.)
    FactoryMaker.instances.delete('IdDefaults');
    loadIdDefaults(Object.assign(Object.assign({}, buildStaticIdDefaultsJson(staticPlatform)), { RecommendedCameraSettings: dynamicJson.RecommendedCameraSettings }));
    Capacitor.defaults = getIdDefaults();
    return Capacitor.defaults;
};

class CapacitorIdNativeCallerProvider {
    getNativeCaller(_proxyType) {
        return new CapacitorNativeCaller(Capacitor.pluginName);
    }
}

function initIdProxy() {
    registerIdProxies(new CapacitorIdNativeCallerProvider());
}

class ScanditIdPluginImplementation {
    async initialize(coreDefaults) {
        CapacitorCore.defaults = coreDefaults;
        await applyDynamicDefaults();
        initIdProxy();
        const api = Object.assign({}, IdExports);
        return api;
    }
}
registerPlugin('ScanditIdPlugin', {
    android: () => new ScanditIdPluginImplementation(),
    ios: () => new ScanditIdPluginImplementation(),
    web: () => new ScanditIdPluginImplementation(),
});
// tslint:disable-next-line:variable-name
const ScanditIdPlugin = new ScanditIdPluginImplementation();

export { AamvaBarcodeVerificationResult, AamvaBarcodeVerificationStatus, ApplicationStatus, BarcodeResult, CapturedId, CapturedSides, DataConsistencyCheck, DataConsistencyResult, DateResult, DriverLicense, DrivingLicenseCategory, DrivingLicenseDetails, Duration, FullDocumentScanner, HealthInsuranceCard, IdAnonymizationMode, IdCapture, IdCaptureDocumentType, IdCaptureFeedback, IdCaptureOverlay, IdCaptureRegion, IdCaptureScanner, IdCaptureSettings, IdCard, IdFieldType, IdImageType, IdImages, IdLayoutLineStyle, IdLayoutStyle, IdSide, MRZResult, MobileDocumentDataElement, MobileDocumentOCRResult, MobileDocumentResult, MobileDocumentScanner, Passport, PassportType, ProfessionalDrivingPermit, RegionSpecific, RegionSpecificSubtype, RejectionReason, ResidencePermit, ScanditIdPlugin, ScanditIdPluginImplementation, Sex, SingleSideScanner, TextHintPosition, UsRealIdStatus, VIZResult, VehicleRestriction, VerificationResult, VisaDetails, VisaIcao, VisaLetter };
