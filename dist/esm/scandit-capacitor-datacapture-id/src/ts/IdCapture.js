var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CameraSettings } from '../../../scandit-capacitor-datacapture-core/src/ts/Camera+Related';
import { DefaultSerializeable, ignoreFromSerialization, nameForSerialization } from '../../../scandit-capacitor-datacapture-core/src/ts/Serializeable';
import { Capacitor } from './Capacitor/Capacitor';
import { IdCaptureListenerProxy } from './Capacitor/IdCaptureListenerProxy';
import { IdCaptureProxy } from './Capacitor/IdCaptureProxy';
export class IdCapture extends DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = 'idCapture';
        this._isEnabled = true;
        this._context = null;
        this.listeners = [];
        this.listenerProxy = null;
        this.isInListenerCallback = false;
    }
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = isEnabled;
        if (!this.isInListenerCallback) {
            // If we're "in" a listener callback, we don't want to deserialize the context to update the enabled state,
            // but rather pass that back to be applied in the native callback.
            this.didChange();
        }
    }
    get context() {
        return this._context;
    }
    static get recommendedCameraSettings() {
        return new CameraSettings(Capacitor.defaults.IdCapture.RecommendedCameraSettings);
    }
    static forContext(context, settings) {
        const mode = new IdCapture();
        mode.settings = settings;
        if (context) {
            context.addMode(mode);
        }
        mode.listenerProxy = IdCaptureListenerProxy.forIdCapture(mode);
        mode.proxy = IdCaptureProxy.forIdCapture(mode);
        return mode;
    }
    addListener(listener) {
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    }
    removeListener(listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
    reset() {
        return this.proxy.reset();
    }
    didChange() {
        if (this.context) {
            return this.context.update();
        }
        else {
            return Promise.resolve();
        }
    }
}
__decorate([
    nameForSerialization('enabled')
], IdCapture.prototype, "_isEnabled", void 0);
__decorate([
    ignoreFromSerialization
], IdCapture.prototype, "_context", void 0);
__decorate([
    ignoreFromSerialization
], IdCapture.prototype, "listeners", void 0);
__decorate([
    ignoreFromSerialization
], IdCapture.prototype, "listenerProxy", void 0);
__decorate([
    ignoreFromSerialization
], IdCapture.prototype, "proxy", void 0);
__decorate([
    ignoreFromSerialization
], IdCapture.prototype, "isInListenerCallback", void 0);
//# sourceMappingURL=IdCapture.js.map