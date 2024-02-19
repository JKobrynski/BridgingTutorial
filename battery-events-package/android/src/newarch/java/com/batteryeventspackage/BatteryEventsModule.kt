package com.batteryeventspackage

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

/**
 * Declare Kotlin class for new arch native module implementation
 *
 * Each turbo module extends codegenerated spec class
 *
 * Class should be annotated with @ReactModule decorator
 */
@ReactModule(name = BatteryEventsModule.NAME)
class BatteryEventsModule(
        // Each native module class consumes react application context
        reactContext: ReactApplicationContext
) : NativeBatteryEventsModuleSpec(reactContext) {
    // Use shared module implementation and forward react application context
    private val moduleImpl = BatteryEventsModuleImpl(reactContext)

    // Return the name of the module - it should match the name provided in JS specification
    override fun getName() = BatteryEventsModuleImpl.NAME

    override fun initialize() {
        Log.d("TEST_LOG", "INITIALIZE")
        super.initialize()
        moduleImpl.onInitialize()
    }

    override fun invalidate() {
        moduleImpl.onInvalidate()
        super.invalidate()
    }

    override fun addListener(eventName: String?) = Unit

    override fun removeListeners(count: Double) = Unit

    companion object {
        const val NAME = BatteryEventsModuleImpl.NAME
    }
}