import { Capacitor, CapacitorFunction } from './Capacitor';
export class IdCaptureProxy {
    static forIdCapture(idCapture) {
        const proxy = new IdCaptureProxy();
        proxy.idCapture = idCapture;
        return proxy;
    }
    reset() {
        return new Promise((resolve, reject) => {
            IdCaptureProxy.cordovaExec(resolve, reject, CapacitorFunction.ResetIdCapture, null);
        });
    }
    verifyCapturedId(capturedId) {
        // Necessary for not exposing internal API on CapturedId, while only passing the private "json" property
        // to native iOS and Android.
        const capturedIdJsonData = JSON.parse(capturedId).json;
        return window.Capacitor.Plugins[Capacitor.pluginName][CapacitorFunction.VerifyCapturedId]({
            capturedId: JSON.stringify(capturedIdJsonData),
        });
    }
}
IdCaptureProxy.cordovaExec = Capacitor.exec;
//# sourceMappingURL=IdCaptureProxy.js.map