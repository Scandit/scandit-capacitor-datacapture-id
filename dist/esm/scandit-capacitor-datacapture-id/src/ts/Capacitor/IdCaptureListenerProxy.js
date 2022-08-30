import { IdCaptureSession } from '../IdCapture+Related';
import { Plugins } from '@capacitor/core';
import { Capacitor, CapacitorFunction } from './Capacitor';
var IdCaptureListenerEvent;
(function (IdCaptureListenerEvent) {
    IdCaptureListenerEvent["DidCapture"] = "didCaptureInIdCapture";
    IdCaptureListenerEvent["DidLocalize"] = "didLocalizeInIdCapture";
    IdCaptureListenerEvent["DidReject"] = "didRejectInIdCapture";
    IdCaptureListenerEvent["DidFail"] = "didFailInIdCapture";
})(IdCaptureListenerEvent || (IdCaptureListenerEvent = {}));
export class IdCaptureListenerProxy {
    static forIdCapture(idCapture) {
        const proxy = new IdCaptureListenerProxy();
        proxy.idCapture = idCapture;
        proxy.initialize();
        return proxy;
    }
    initialize() {
        this.subscribeListener();
    }
    subscribeListener() {
        Plugins[Capacitor.pluginName][CapacitorFunction.SubscribeIdCaptureListener]();
        Plugins[Capacitor.pluginName].addListener(IdCaptureListenerEvent.DidCapture, this.notifyListeners.bind(this));
        Plugins[Capacitor.pluginName].addListener(IdCaptureListenerEvent.DidFail, this.notifyListeners.bind(this));
        Plugins[Capacitor.pluginName].addListener(IdCaptureListenerEvent.DidLocalize, this.notifyListeners.bind(this));
        Plugins[Capacitor.pluginName].addListener(IdCaptureListenerEvent.DidReject, this.notifyListeners.bind(this));
    }
    notifyListeners(event) {
        const done = () => {
            this.idCapture.isInListenerCallback = false;
            Plugins[Capacitor.pluginName].finishCallback({
                result: {
                    enabled: this.idCapture.isEnabled,
                    finishCallbackID: event.name,
                },
            });
            return { enabled: this.idCapture.isEnabled };
        };
        this.idCapture.isInListenerCallback = true;
        if (!event) {
            // The event could be undefined/null in case the plugin result did not pass a "message",
            // which could happen e.g. in case of "ok" results, which could signal e.g. successful
            // listener subscriptions.
            return done();
        }
        this.idCapture.listeners.forEach((listener) => {
            switch (event.name) {
                case IdCaptureListenerEvent.DidCapture:
                    if (listener.didCaptureId) {
                        listener.didCaptureId(this.idCapture, IdCaptureSession
                            .fromJSON(JSON.parse(event.argument.session)));
                    }
                    break;
                case IdCaptureListenerEvent.DidLocalize:
                    if (listener.didLocalizeId) {
                        listener.didLocalizeId(this.idCapture, IdCaptureSession
                            .fromJSON(JSON.parse(event.argument.session)));
                    }
                    break;
                case IdCaptureListenerEvent.DidReject:
                    if (listener.didRejectId) {
                        listener.didRejectId(this.idCapture, IdCaptureSession
                            .fromJSON(JSON.parse(event.argument.session)));
                    }
                    break;
                case IdCaptureListenerEvent.DidFail:
                    if (listener.didFailWithError) {
                        const session = IdCaptureSession
                            .fromJSON(JSON.parse(event.argument.session));
                        listener.didFailWithError(this.idCapture, session._error, session);
                    }
            }
        });
        return done();
    }
}
IdCaptureListenerProxy.cordovaExec = Capacitor.exec;
//# sourceMappingURL=IdCaptureListenerProxy.js.map