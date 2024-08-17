import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, sizes} from '../../../../theme';
import {useTranslation} from 'react-i18next';
import useNotification, {
  NotificationType,
} from '../../../../hooks/useNotification';
import {validateEmail} from '../../../../utils';

interface CustomTextInputProps {
  inputKey: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
  disabled?: boolean;
}

export const DefaultInput: React.FC<CustomTextInputProps> = ({
  inputKey,
  value,
  disabled,
  placeholder,
  onChangeText,
  onFocus,
  onBlur,
  isFocused,
}) => {
  const {showNotification} = useNotification();
  const {t} = useTranslation();
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (inputKey === 'email' && validateEmail(value)) {
      setIsValid(true);
    }
  }, [value, inputKey]);

  const handleBlur = () => {
    if (inputKey === 'email' && !validateEmail(value)) {
      showNotification(NotificationType.ERROR, t('verificationScreen.error'));
      setIsValid(false);
    }
    onBlur();
    setIsValid(true);
  };

  return (
    <View
      style={[
        styles.inputContainer,
        isFocused && styles.focusedInputContainer,
        !isValid && styles.errorInputContainer,
      ]}>
      <TextInput
        key={inputKey}
        style={[
          styles.input,
          isFocused && styles.focusedInput,
          disabled && styles.disabledInput,
        ]}
        placeholder={placeholder}
        editable={!disabled}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.quaternary,
    borderRadius: sizes.radius,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  focusedInputContainer: {
    backgroundColor: colors.uiBackground,
  },
  errorInputContainer: {
    borderColor: colors.buttonAccent,
  },
  input: {
    padding: sizes.l,
  },
  focusedInput: {
    borderBottomWidth: 1,
    borderBottomColor: colors.buttonAccent,
  },
  disabledInput: {
    backgroundColor: colors.uiBackground,
    borderColor: colors.quaternary,
  },
});
