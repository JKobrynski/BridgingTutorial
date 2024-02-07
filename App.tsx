import * as React from 'react';
import {
  NativeEventEmitter,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {DeviceBatteryModule} from './device-battery-package/src';
import {getBatteryLevel} from 'react-native-device-info';
import {BatteryEventsModule} from 'battery-events-package';

const moduleEventEmitter = new NativeEventEmitter(
  Platform.OS === 'ios' ? BatteryEventsModule : undefined,
);

function App(): JSX.Element {
  const [batteryLevel, setBatteryLevel] = React.useState<number>();
  const [libraryBatteryLevel, setLibraryBatteryLevel] =
    React.useState<number>();
  const [eventBatteryLevel, setEventBatteryLevel] = React.useState<number>();

  React.useEffect(() => {
    setBatteryLevel(DeviceBatteryModule.getBatteryLevel());
    getBatteryLevel().then(level => {
      setLibraryBatteryLevel(level);
    });
  }, []);

  React.useEffect(() => {
    const subscription = moduleEventEmitter.addListener(
      'onBatteryLevelModuleChange',
      event => {
        setEventBatteryLevel(event);
        console.log('** EVENT **', event);
      },
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Battery Level</Text>
        <Text>Module: {batteryLevel}</Text>
        <Text>Library: {libraryBatteryLevel}</Text>
        <Text>Event module: {eventBatteryLevel}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    margin: 40,
  },
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    textTransform: 'capitalize',
  },
  safeArea: {
    alignSelf: 'stretch',
    flex: 1,
  },
  slider: {
    height: 40,
    width: 250,
  },
});

export default App;
