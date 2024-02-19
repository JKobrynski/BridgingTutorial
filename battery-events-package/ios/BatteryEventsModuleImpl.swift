
import Foundation

@objc(BatteryEventsModuleDelegate)
public protocol BatteryEventsModuleDelegate {
    func sendEvent(name: String, payload: Float)
}

@objc(BatteryEventsModuleImpl)
public class BatteryEventsModuleImpl : NSObject {
    @objc public weak var delegate: BatteryEventsModuleDelegate? = nil
    
    private func sendEvent(name: String, payload: Float) {
        self.delegate?.sendEvent(name: name, payload: payload)
    }
    
    public override init() {
         super.init()
         UIDevice.current.isBatteryMonitoringEnabled = true
        NotificationCenter.default.addObserver(self, selector: #selector(handleBatteryLevelChange), name: UIDevice.batteryLevelDidChangeNotification, object: UIDevice.current)
     }
     
     deinit {
         NotificationCenter.default.removeObserver(self)
     }
    
    @objc func handleBatteryLevelChange(notification: NSNotification) {
        let batteryLevel = UIDevice.current.batteryLevel
        self.sendEvent(name: Event.onBatteryLevelModuleChange.rawValue, payload: batteryLevel)
    }
}

extension BatteryEventsModuleImpl {
    enum Event: String, CaseIterable {
        case onBatteryLevelModuleChange
    }

    @objc(supportedEvents)
    public static var supportedEvents: [String] {
        return Event.allCases.map(\.rawValue);
    }
}
