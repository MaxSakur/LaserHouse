import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors, sizes, textStyles} from '../../../../theme';

interface LoginButtonProps {
  disabled: boolean;
  onPress: () => void;
  buttonText: string;
}

export const DefaultButton: React.FC<LoginButtonProps> = ({
  disabled,
  onPress,
  buttonText,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: sizes.l,
    backgroundColor: colors.buttonAccent,
    borderRadius: sizes.radius,
    alignItems: 'center',
  },
  buttonText: {
    ...textStyles.button,
    color: colors.white,
  },

  disabledButton: {
    backgroundColor: colors.quaternary,
  },
});
