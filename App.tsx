import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {DeviceBatteryModule} from './device-battery-package/src';
import {getBatteryLevel} from 'react-native-device-info';

function App(): JSX.Element {
  const [batteryLevel, setBatteryLevel] = React.useState<number>();
  const [libraryBatteryLevel, setLibraryBatteryLevel] =
    React.useState<number>();

  React.useEffect(() => {
    setBatteryLevel(DeviceBatteryModule.getBatteryLevel());
    getBatteryLevel().then(level => {
      setLibraryBatteryLevel(level);
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Battery Level</Text>
        <Text>{batteryLevel}</Text>
        <Text>{libraryBatteryLevel}</Text>
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
