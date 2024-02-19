package com.devicebatterypackage

import android.content.Context.BATTERY_SERVICE
import android.content.Intent
import android.content.pm.PackageInfo
import android.content.pm.PackageManager
import android.os.BatteryManager
import android.os.BatteryManager.BATTERY_PROPERTY_CAPACITY
import android.os.Build
import android.util.Log

import com.facebook.react.bridge.ReactApplicationContext

/**
 * Native module's shared implementation
 */
class DeviceBatteryModuleImpl(
        private val reactContext: ReactApplicationContext
) {
    fun getBatteryLevel(): Double {
        val batteryManager = reactContext.getSystemService(BATTERY_SERVICE) as BatteryManager
        return batteryManager.getIntProperty(BATTERY_PROPERTY_CAPACITY).toDouble() / 100
    }

    private fun getPackageInfo(): PackageInfo {
        return if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            reactContext
                    .packageManager
                    .getPackageInfo(
                            reactContext.packageName,
                            PackageManager.PackageInfoFlags.of(0L)
                    )
        } else {
            @Suppress("DEPRECATION")
            reactContext
                    .packageManager
                    .getPackageInfo(reactContext.packageName, 0)
        }
    }

    companion object {
        const val NAME = "DeviceBatteryModule"
    }
}