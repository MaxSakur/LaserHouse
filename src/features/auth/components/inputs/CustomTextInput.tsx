import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {colors, sizes} from '../../../../theme';

interface CustomTextInputProps {
  inputKey: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  inputKey,
  value,
  placeholder,
  onChangeText,
  onFocus,
  onBlur,
  isFocused,
}) => {
  return (
    <TextInput
      key={inputKey}
      style={[styles.input, isFocused && styles.focusedInput]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.quaternary,
    padding: sizes.l,
    borderRadius: sizes.radius,
  },
  focusedInput: {
    backgroundColor: colors.uiBackground,
    borderColor: colors.white,
  },
});
