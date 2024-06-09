import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {colors, presets, sizes, textStyles} from '../../../../theme';

interface MaskedTextInputProps {
  value: string;
  placeholder?: string;
  onChange: (text: string) => void;
  isMajor?: boolean;
  mask: string;
  countyPhoneCode: string;
}

export const MaskedTextInput: React.FC<MaskedTextInputProps> = ({
  value,
  placeholder,
  onChange,
  isMajor = false,
  mask,
  countyPhoneCode,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [maskedValue, setMaskedValue] = useState(countyPhoneCode);

  useEffect(() => {
    setMaskedValue(countyPhoneCode + value);
  }, [value, countyPhoneCode]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChangeText = (text: string) => {
    const newValue = text.replace(countyPhoneCode, '');
    setMaskedValue(text);
    onChange(newValue);
  };

  return (
    <TextInputMask
      type={'custom'}
      options={{
        mask: mask,
      }}
      style={[
        styles.input,
        isFocused && styles.focusedInput,
        value.length > 0 && styles.withContentInput,
        isMajor && styles.majorInput,
      ]}
      value={maskedValue}
      placeholder={placeholder}
      onChangeText={handleChangeText}
      onFocus={handleFocus}
      onBlur={() => setIsFocused(false)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.quaternary,
    backgroundColor: colors.uiBackground,
    padding: sizes.l,
    borderRadius: sizes.radius,
  },
  withContentInput: {
    borderColor: 'transparent',
    backgroundColor: colors.uiBackground,
  },
  majorInput: {
    ...textStyles.headline2,
    padding: sizes.l,
  },
  focusedInput: {
    borderColor: 'transparent',
    ...presets.shadow,
  },
});
