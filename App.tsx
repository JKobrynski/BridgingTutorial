import {RangeSliderView} from 'range-slider-package';
import * as React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  const sliderRef = React.useRef<RangeSliderView>(null);
  const [leftKnobValue, setLeftKnobValue] = React.useState(2);
  const [rightKnobValue, setRightKnobValue] = React.useState(8);

  function resetLeftKnobValue() {
    sliderRef.current?.setLeftKnobValueProgrammatically(2);
  }

  function resetRightKnobValue() {
    sliderRef.current?.setRightKnobValueProgrammatically(8);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Range Slider</Text>
        <RangeSliderView
          ref={sliderRef}
          activeColor="pink"
          inactiveColor="gray"
          leftKnobValue={leftKnobValue}
          minValue={0}
          maxValue={10}
          onRangeSliderViewBeginDrag={() => {
            console.log('BEGIN_DRAG');
          }}
          onRangeSliderViewEndDrag={e => {
            console.log('END_DRAG', e.nativeEvent);
            setLeftKnobValue(e.nativeEvent.leftKnobValue ?? 2);
            setRightKnobValue(e.nativeEvent.rightKnobValue ?? 8);
          }}
          onRangeSliderViewValueChange={e => {
            console.log('CHANGE', e.nativeEvent);
          }}
          rightKnobValue={rightKnobValue}
          style={styles.slider}
        />
        <View style={styles.buttonsContainer}>
          <Button onPress={resetLeftKnobValue} title="Reset left knob" />
          <Button onPress={resetRightKnobValue} title="Reset right knob" />
        </View>
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
