import React, {useState, useRef, useEffect} from 'react';
import {Animated, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, sizes} from '../../../../theme';

const NotificationToggle = () => {
  const [isOn, setIsOn] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOn ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOn, animation]);

  const toggleSwitch = () => setIsOn(!isOn);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, sizes.xxxl - sizes.xl],
  });

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#f0f0f0', colors.buttonAccent],
  });

  return (
    <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.8}>
      <Animated.View style={[styles.switchContainer, {backgroundColor}]}>
        <Animated.View style={[styles.knob, {transform: [{translateX}]}]} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: sizes.xxxl,
    height: sizes.xl,
    borderRadius: sizes.xl / 2,
    justifyContent: 'center',
    padding: 2,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 3,
  },
  knob: {
    width: sizes.xl,
    height: sizes.xl,
    borderRadius: sizes.xl / 2,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
  },
});

export default NotificationToggle;
