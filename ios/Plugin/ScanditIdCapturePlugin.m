#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(ScanditIdNative, "ScanditIdNative",
           CAP_PLUGIN_METHOD(getDefaults, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(verifyCapturedId, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(subscribeIdCaptureListener, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(resetIdCapture, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(finishCallback, CAPPluginReturnPromise);)
