import React, {FC} from 'react';
import {StyleProp, View, ViewStyle, StyleSheet} from 'react-native';
import {sizes} from '../theme';

interface IIconWithinContainer {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ViewStyle>;
}

export const IconWithinContainer: FC<IIconWithinContainer> = ({
  children,
  containerStyle,
  iconStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {React.cloneElement(children as React.ReactElement, {style: iconStyle})}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizes.l,
  },
});
