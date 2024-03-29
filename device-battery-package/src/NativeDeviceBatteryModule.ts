import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  getBatteryLevel(): number;
}

export default TurboModuleRegistry.getEnforcing<Spec>('DeviceBatteryModule');
