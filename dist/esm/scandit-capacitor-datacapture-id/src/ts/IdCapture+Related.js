var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DefaultSerializeable, ignoreFromSerialization, nameForSerialization } from '../../../scandit-capacitor-datacapture-core/src/ts/Serializeable';
import { Brush } from '../../../scandit-capacitor-datacapture-core/src/ts/Viewfinder';
import { Capacitor } from './Capacitor/Capacitor';
import { CapturedId, LocalizedOnlyId, } from './CapturedId';
import { IdLayout, IdLayoutLineStyle, IdLayoutStyle } from './Enums';
export class IdCaptureError {
    get type() {
        return this._type;
    }
    get message() {
        return this._message;
    }
    static fromJSON(json) {
        const error = new IdCaptureError();
        error._type = json.type;
        error._message = json.message;
        return error;
    }
}
export class IdCaptureSession {
    get newlyCapturedId() {
        return this._newlyCapturedId;
    }
    get frameSequenceId() {
        return this._frameSequenceId;
    }
    get localizedOnlyId() {
        return this._localizedOnlyId;
    }
    get newlyRejectedId() {
        return this._newlyRejectedId;
    }
    static fromJSON(json) {
        const session = new IdCaptureSession();
        if (json.newlyCapturedId) {
            session._newlyCapturedId = CapturedId.fromJSON(json.newlyCapturedId);
        }
        if (json.localizedOnlyId) {
            session._localizedOnlyId = LocalizedOnlyId.fromJSON(json.localizedOnlyId);
        }
        if (json.newlyRejectedId) {
            session._newlyRejectedId = LocalizedOnlyId.fromJSON(json.newlyRejectedId);
        }
        session._frameSequenceId = json.frameSequenceId;
        session._error = json.error ? IdCaptureError.fromJSON(json.error) : null;
        return session;
    }
}
export class IdCaptureOverlay extends DefaultSerializeable {
    constructor() {
        super();
        this.type = 'idCapture';
        this._idLayout = IdLayout.Auto;
        this._idLayoutStyle = IdLayoutStyle.Rounded;
        this._defaultCapturedBrush = new Brush(Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.fillColor, Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeColor, Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeWidth);
        this._defaultLocalizedBrush = new Brush(Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.fillColor, Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeColor, Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeWidth);
        this._defaultRejectedBrush = new Brush(Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.fillColor, Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeColor, Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeWidth);
        this._capturedBrush = this._defaultCapturedBrush;
        this._localizedBrush = this._defaultLocalizedBrush;
        this._rejectedBrush = this._defaultRejectedBrush;
        this._idLayoutLineStyle = IdLayoutLineStyle.Light;
    }
    static withIdCapture(idCapture) {
        return IdCaptureOverlay.withIdCaptureForView(idCapture, null);
    }
    static withIdCaptureForView(idCapture, view) {
        const overlay = new IdCaptureOverlay();
        overlay.idCapture = idCapture;
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    }
    setIdLayout(idLayout) {
        this._idLayout = idLayout;
        this.idCapture.didChange();
    }
    get idLayoutStyle() {
        return this._idLayoutStyle;
    }
    set idLayoutStyle(style) {
        this._idLayoutStyle = style;
        this.idCapture.didChange();
    }
    get idLayoutLineStyle() {
        return this._idLayoutLineStyle;
    }
    set idLayoutLineStyle(lineStyle) {
        this._idLayoutLineStyle = lineStyle;
        this.idCapture.didChange();
    }
    get capturedBrush() {
        return this._capturedBrush;
    }
    set capturedBrush(brush) {
        this._capturedBrush = brush;
        this.idCapture.didChange();
    }
    get localizedBrush() {
        return this._localizedBrush;
    }
    set localizedBrush(brush) {
        this._localizedBrush = brush;
        this.idCapture.didChange();
    }
    get rejectedBrush() {
        return this._rejectedBrush;
    }
    set rejectedBrush(brush) {
        this._rejectedBrush = brush;
        this.idCapture.didChange();
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
}
__decorate([
    ignoreFromSerialization
], IdCaptureOverlay.prototype, "idCapture", void 0);
__decorate([
    nameForSerialization('idLayout')
], IdCaptureOverlay.prototype, "_idLayout", void 0);
__decorate([
    nameForSerialization('idLayoutStyle')
], IdCaptureOverlay.prototype, "_idLayoutStyle", void 0);
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
    nameForSerialization('idLayoutLineStyle')
], IdCaptureOverlay.prototype, "_idLayoutLineStyle", void 0);
//# sourceMappingURL=IdCapture+Related.js.map