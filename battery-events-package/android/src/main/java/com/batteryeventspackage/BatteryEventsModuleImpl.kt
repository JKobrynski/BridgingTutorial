package com.batteryeventspackage

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.BatteryManager
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.modules.core.DeviceEventManagerModule
class PowerConnectionReceiver(reactContext: ReactApplicationContext): BroadcastReceiver() {
    var mBatteryModule: BatteryEventsModuleImpl = BatteryEventsModuleImpl(reactContext)

    override fun onReceive(context: Context?, intent: Intent?) {
        mBatteryModule.notifyBatteryStateChanged(intent)
    }
}

class BatteryEventsModuleImpl(
        private val reactContext: ReactApplicationContext
) {
    private var batteryStateReceiver: PowerConnectionReceiver? = null;
    private var batteryStatus: Intent? = null;

    init {
        Log.d("TEST_LOG", "test log")
    }

    private fun sendEvent(eventName: String, params: Float) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit(eventName, params)
    }

    fun notifyBatteryStateChanged(intent: Intent?) {
        var batteryStatus = intent
        val level: Int = batteryStatus?.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) ?: -1
        val scale: Int = batteryStatus?.getIntExtra(BatteryManager.EXTRA_SCALE, -1) ?: -1
        val batteryPct = level * 100 / scale.toFloat()

        sendEvent(EVENT_NAME, batteryPct)
    }

    private fun maybeRegisterReceiver() {
        if(batteryStateReceiver != null) {
            return
        }
        batteryStateReceiver = PowerConnectionReceiver(reactContext)
        val filter: IntentFilter = IntentFilter(Intent.ACTION_BATTERY_CHANGED)
        batteryStatus = reactContext.applicationContext.registerReceiver(batteryStateReceiver, filter)
    }

    private fun maybeUnregisterReceiver() {
        if(batteryStateReceiver == null) {
            return
        }
        reactContext.applicationContext.unregisterReceiver(batteryStateReceiver)
        batteryStateReceiver = null
        batteryStatus = null
    }

    fun onInitialize() {
        Log.d("onInitialize", "INITIALIZE")
        maybeRegisterReceiver()
    }

    fun onInvalidate() {
        maybeUnregisterReceiver()
    }


    companion object {
        const val EVENT_NAME = "onBatteryLevelModuleChange"
        const val EVENT_KEY = "value"
        const val NAME = "BatteryEventsModule"
    }
}