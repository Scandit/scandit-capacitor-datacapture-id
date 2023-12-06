/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.capacitor.datacapture.id.callbacks

import com.getcapacitor.JSObject
import com.scandit.capacitor.datacapture.core.data.SerializableFinishModeCallbackData
import com.scandit.capacitor.datacapture.core.utils.Callback
import com.scandit.capacitor.datacapture.id.CapacitorPlugin
import com.scandit.capacitor.datacapture.id.factories.IdCaptureActions.ACTION_ERROR_CAPTURING
import com.scandit.capacitor.datacapture.id.factories.IdCaptureActions.ACTION_ID_CAPTURED
import com.scandit.capacitor.datacapture.id.factories.IdCaptureActions.ACTION_ID_LOCALIZED
import com.scandit.capacitor.datacapture.id.factories.IdCaptureActions.ACTION_ID_REJECTED
import com.scandit.datacapture.core.data.FrameData
import com.scandit.datacapture.id.capture.IdCapture
import com.scandit.datacapture.id.capture.IdCaptureListener
import com.scandit.datacapture.id.capture.IdCaptureSession
import org.json.JSONObject
import java.util.concurrent.atomic.AtomicReference
import java.util.concurrent.locks.ReentrantLock
import kotlin.concurrent.withLock

class IdCaptureCallback(
    private val plugin: CapacitorPlugin
) : Callback(), IdCaptureListener {
    private val lock = ReentrantLock(true)
    private val condition = lock.newCondition()

    private val latestStateData = AtomicReference<SerializableFinishModeCallbackData?>(null)

    override fun onIdCaptured(mode: IdCapture, session: IdCaptureSession, data: FrameData) {
        if (disposed.get()) return

        lock.withLock {
            addActionOnCaptureEvent(ACTION_ID_CAPTURED, session)
            lockAndWait()
            onUnlock(mode)
        }
    }

    override fun onIdLocalized(mode: IdCapture, session: IdCaptureSession, data: FrameData) {
        if (disposed.get()) return

        lock.withLock {
            addActionOnCaptureEvent(ACTION_ID_LOCALIZED, session)
            lockAndWait()
            onUnlock(mode)
        }
    }

    override fun onIdRejected(mode: IdCapture, session: IdCaptureSession, data: FrameData) {
        if (disposed.get()) return

        lock.withLock {
            addActionOnCaptureEvent(ACTION_ID_REJECTED, session)
            lockAndWait()
            onUnlock(mode)
        }
    }

    override fun onErrorEncountered(
        mode: IdCapture,
        error: Throwable,
        session: IdCaptureSession,
        data: FrameData
    ) {
        addActionOnCaptureEvent(ACTION_ERROR_CAPTURING, session)
    }

    private fun addActionOnCaptureEvent(actionName: String, session: IdCaptureSession) {
        plugin.notify(
            actionName,
            JSObject.fromJSONObject(
                JSONObject(
                    mapOf(
                        NAME to actionName,
                        FIELD_ARGUMENT to mapOf(
                            FIELD_SESSION to session.toJson()
                        )
                    )
                )
            )
        )
    }

    private fun onUnlock(mode: IdCapture) {
        latestStateData.get()?.let { latestData ->
            mode.isEnabled = latestData.enabled
            latestStateData.set(null)
        }
        // If we don't have the latestData, it means no listener is set from js, so we do nothing.
    }

    private fun lockAndWait() {
        condition.await()
    }

    fun onFinishCallback(finishModeCallbackData: SerializableFinishModeCallbackData?) {
        latestStateData.set(finishModeCallbackData)
        unlock()
    }

    fun forceRelease() {
        lock.withLock {
            condition.signalAll()
        }
    }

    private fun unlock() {
        lock.withLock {
            condition.signal()
        }
    }

    override fun dispose() {
        super.dispose()
        forceRelease()
    }

    companion object {
        private const val NAME = "name"
        private const val FIELD_SESSION = "session"
        private const val FIELD_ARGUMENT = "argument"
    }
}
