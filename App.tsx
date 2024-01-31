import React, {useEffect, useState} from 'react';
import {
  NativeEventEmitter,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScreenOrientationModule} from 'screen-orientation-package';

const moduleEventEmitter = new NativeEventEmitter(
  Platform.OS === 'ios' ? ScreenOrientationModule : undefined,
);

function App(): JSX.Element {
  const [screenOrientation, setScreenOrientation] = useState<
    'portrait' | 'landscape' | 'unknown'
  >('unknown');

  useEffect(() => {
    const subscription = moduleEventEmitter.addListener(
      'onScreenOrientationModuleChange',
      ({orientation}: {orientation: 'portrait' | 'landscape' | 'unknown'}) => {
        console.log({orientation});
        setScreenOrientation(orientation);
      },
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Simple event module</Text>
        <View style={styles.body}>
          <Text style={styles.content}>
            Constants: {JSON.stringify(ScreenOrientationModule.getConstants())}
          </Text>
          <Text style={styles.content}>
            Screen orientation: {screenOrientation}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 20,
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
});

export default App;
