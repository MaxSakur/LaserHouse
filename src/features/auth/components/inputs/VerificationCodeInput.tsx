import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, TextStyle} from 'react-native';
import {colors, sizes, textStyles} from '../../../../theme';

interface VerificationCodeInputProps {
  value: string;
  onChange: (text: string) => void;
}

export const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
  value,
  onChange,
}) => {
  const [maskedValue, setMaskedValue] = useState<string>();

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
      placeholderTextColor={colors.quaternary}
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
