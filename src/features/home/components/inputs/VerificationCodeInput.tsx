import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, TextStyle} from 'react-native';
import {sizes, textStyles} from '../../../../theme';

interface VerificationCodeInputProps {
  value: string;
  onChange: (text: string) => void;
  countyPhoneCode: string;
}

export const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
  value,
  onChange,
  countyPhoneCode,
}) => {
  const [maskedValue, setMaskedValue] = useState(countyPhoneCode);

  useEffect(() => {
    setMaskedValue(value);
  }, [value]);

  const handleChangeText = (text: string) => {
    const newValue = text.replace(/\s/g, '');
    setMaskedValue(text);
    onChange(newValue);
  };

  return (
    <TextInput
      style={styles.input as TextStyle}
      value={maskedValue}
      placeholder="0000"
      onChangeText={handleChangeText}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      maxLength={4}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    ...textStyles.verificationCode,
    letterSpacing: sizes.xl,
    backgroundColor: 'transparent',
    padding: sizes.l,
    borderRadius: sizes.radius,
    textAlign: 'center',
  },
});
