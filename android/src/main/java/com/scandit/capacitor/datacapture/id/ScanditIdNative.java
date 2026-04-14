/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.capacitor.datacapture.id;

import android.util.Log;
import androidx.annotation.NonNull;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.scandit.capacitor.datacapture.core.ScanditCaptureCoreNative;
import com.scandit.capacitor.datacapture.core.utils.CapacitorMethodCall;
import com.scandit.capacitor.datacapture.core.utils.CapacitorResult;
import com.scandit.datacapture.frameworks.core.CoreModule;
import com.scandit.datacapture.frameworks.core.events.Emitter;
import com.scandit.datacapture.frameworks.core.locator.DefaultServiceLocator;
import com.scandit.datacapture.frameworks.id.IdCaptureModule;
import java.util.Map;
import org.json.JSONException;
import org.json.JSONObject;

@CapacitorPlugin(name = "ScanditIdNative")
public class ScanditIdNative extends Plugin implements Emitter {

  private static final String CORE_PLUGIN_NAME = "ScanditCaptureCoreNative";

  private final IdCaptureModule idCaptureModule;
  private final DefaultServiceLocator serviceLocator;
  private boolean lastIdCaptureEnabledState = false;

  public ScanditIdNative() {
    this.idCaptureModule = IdCaptureModule.create(this);
    this.serviceLocator = DefaultServiceLocator.getInstance();
  }

  @Override
  public void load() {
    super.load();

    // We need to register the plugin with its Core dependency for serializers to load.
    com.getcapacitor.PluginHandle corePlugin = getBridge().getPlugin(CORE_PLUGIN_NAME);
    if (corePlugin != null) {
      ((ScanditCaptureCoreNative) corePlugin.getInstance())
          .registerPluginInstance(getPluginHandle().getInstance());
    } else {
      Log.e("Registering:", "Core not found");
    }

    idCaptureModule.onCreate(getBridge().getContext());
  }

  @Override
  protected void handleOnStart() {
    idCaptureModule.setTopmostModeEnabled(lastIdCaptureEnabledState);
  }

  @Override
  protected void handleOnStop() {
    lastIdCaptureEnabledState = idCaptureModule.isTopmostModeEnabled();
    idCaptureModule.setTopmostModeEnabled(false);
  }

  @Override
  protected void handleOnDestroy() {
    idCaptureModule.onDestroy();
  }

  @PluginMethod
  public void executeId(PluginCall call) {
    CoreModule coreModule = (CoreModule) serviceLocator.resolve(CoreModule.class.getSimpleName());

    if (coreModule == null) {
      call.reject("Unable to retrieve the CoreModule from the locator.");
      return;
    }

    boolean result =
        coreModule.execute(
            new CapacitorMethodCall(call), new CapacitorResult(call), idCaptureModule);

    if (!result) {
      String methodName = call.getData().getString("methodName");
      if (methodName == null) {
        methodName = "unknown";
      }
      call.reject("Unknown method: " + methodName);
    }
  }

  @PluginMethod
  public void getDefaults(PluginCall call) {
    try {
      JSObject defaults = JSObject.fromJSONObject(new JSONObject(idCaptureModule.getDefaults()));
      call.resolve(defaults);
    } catch (JSONException e) {
      call.reject("Failed to get defaults: " + e.getMessage());
    }
  }

  @Override
  public void emit(@NonNull String eventName, @NonNull Map<String, Object> payload) {
    JSObject capacitorPayload = new JSObject();
    capacitorPayload.put("name", eventName);
    capacitorPayload.put("data", new JSONObject(payload).toString());

    notifyListeners(eventName, capacitorPayload);
  }

  @Override
  public boolean hasListenersForEvent(@NonNull String eventName) {
    return this.hasListeners(eventName);
  }

  @Override
  public boolean hasViewSpecificListenersForEvent(int viewId, @NonNull String eventName) {
    return this.hasListenersForEvent(eventName);
  }

  @Override
  public boolean hasModeSpecificListenersForEvent(int modeId, @NonNull String eventName) {
    return this.hasListenersForEvent(eventName);
  }
}
