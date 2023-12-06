/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.capacitor.datacapture.id.data.defaults

import com.scandit.capacitor.datacapture.core.data.SerializableData
import com.scandit.capacitor.datacapture.core.data.defaults.SerializableBrushDefaults
import com.scandit.datacapture.core.ui.style.Brush
import org.json.JSONObject

data class SerializableIdCaptureOverlayDefaults(
    private val defaultCapturedBrush: Brush,
    private val defaultLocalizedBrush: Brush,
    private val defaultRejectedBrush: Brush
) : SerializableData {

    override fun toJson(): JSONObject = JSONObject(
        mapOf(
            FIELD_DEFAULT_CAPTURED_BRUSH to SerializableBrushDefaults(
                defaultCapturedBrush
            ).toJson(),
            FIELD_DEFAULT_LOCALIZED_BRUSH to SerializableBrushDefaults(
                defaultLocalizedBrush
            ).toJson(),
            FIELD_DEFAULT_REJECTED_BRUSH to SerializableBrushDefaults(
                defaultRejectedBrush
            ).toJson()
        )
    )

    companion object {
        private const val FIELD_DEFAULT_CAPTURED_BRUSH = "defaultCapturedBrush"
        private const val FIELD_DEFAULT_LOCALIZED_BRUSH = "defaultLocalizedBrush"
        private const val FIELD_DEFAULT_REJECTED_BRUSH = "defaultRejectedBrush"
    }
}
