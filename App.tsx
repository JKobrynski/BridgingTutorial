import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SaveFilePickerModule} from 'save-file-picker-package';

const ASSETS_FILE_PATH = 'file.html';

function App(): JSX.Element {
  const saveFileWithCallback = () => {
    SaveFilePickerModule.saveFileWithCallback(ASSETS_FILE_PATH, result => {
      console.log(result);
    });
  };

  const saveFileWithPromise = async () => {
    try {
      const isSuccess = await SaveFilePickerModule.saveFileWithPromise(
        ASSETS_FILE_PATH,
      );

      console.log({isSuccess});
    } catch (error) {
      console.log({error});
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Save file picker</Text>
        <View style={styles.body}>
          <View style={styles.buttonWrapper}>
            <Button
              onPress={saveFileWithCallback}
              title="Save file (Callback)"
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={saveFileWithPromise} title="Save file (Promise)" />
          </View>
        </View>
      </View>
    </SafeAreaView>
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
  buttonWrapper: {
    alignSelf: 'stretch',
    paddingVertical: 30,
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
});

export default App;
