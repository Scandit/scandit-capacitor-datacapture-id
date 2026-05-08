/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2023- Scandit AG. All rights reserved.
 */

#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(ScanditIdNative, "ScanditIdNative",
           CAP_PLUGIN_METHOD(getDefaults, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(verifyCapturedId, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(verifyVizMrz, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(resetIdCapture, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(finishCallback, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(verifyCapturedIdAsync, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(createContextForBarcodeVerification, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setModeEnabledState, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(updateIdCaptureOverlay, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(updateIdCaptureMode, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(applyIdCaptureModeSettings, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(updateIdCaptureFeedback, CAPPluginReturnPromise);)
