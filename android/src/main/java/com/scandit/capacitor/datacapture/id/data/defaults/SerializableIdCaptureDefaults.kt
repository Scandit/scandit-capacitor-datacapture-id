/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.capacitor.datacapture.id.data.defaults

import com.scandit.capacitor.datacapture.core.data.SerializableData
import com.scandit.capacitor.datacapture.core.data.defaults.SerializableCameraSettingsDefault
import org.json.JSONObject

class SerializableIdCaptureDefaults(
    private val recommendedCameraSettings: SerializableCameraSettingsDefault,
    private val idCaptureOverlay: SerializableIdCaptureOverlayDefaults
) : SerializableData {
    override fun toJson() = JSONObject(
        mapOf(
            FIELD_RECOMMENDED_CAMERA_SETTINGS to recommendedCameraSettings.toJson(),
            FIELD_ID_CAPTURE_OVERLAY to idCaptureOverlay.toJson()
        )
    )

    private companion object {
        const val FIELD_RECOMMENDED_CAMERA_SETTINGS = "RecommendedCameraSettings"
        const val FIELD_ID_CAPTURE_OVERLAY = "IdCaptureOverlayDefaults"
    }
}
