import Foundation

@objc(DeviceBatteryModuleImpl)
public class DeviceBatteryModuleImpl : NSObject {
    public override init() {
        UIDevice.current.isBatteryMonitoringEnabled = true
    }
    
    @objc public func getBatteryLevel() -> Float {
//        UIDevice.current.isBatteryMonitoringEnabled = true
        let level = UIDevice.current.batteryLevel
        
        return level
    }
}
