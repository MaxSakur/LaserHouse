import React, {useEffect, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AuthNavigationRoutes,
  RootStackParamList,
} from '../../../../types/navigation';
import {CalendarDropdown, DefaultInput} from '../../components/inputs';
import {styles} from './styles';
import {PrivacyAgreement} from '../../components/PrivacyAgreement';
import {InputData, inputsData} from './screenData';
import {DefaultButton} from '../../components/buttons/DefaultButton';
import {validateEmail} from '../../../../utils';
import useModalContent from '../../../../hooks/useModalContent';
import {authService} from '../../services/authService';
import {IRegisterRequest} from '../../../../types/auth';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;
type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;

export const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const {t} = useTranslation();
  const route = useRoute<RegisterScreenRouteProp>();
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [userData, setUserData] = useState<InputData[]>(inputsData);
  const [isPrivacyAgr, setIsPrivacyAgr] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const {open, ModalComponent} = useModalContent({
    header: (
      <Text style={styles.modalContentHeader}>
        {t('registerScreen.privacyAgreementHeader')}
      </Text>
    ),
    content: (
      <Text style={styles.modalContentText}>
        {t('registerScreen.privacyAgreementText')}
      </Text>
    ),
  });

  const {phone} = route.params;

  useEffect(() => {
    setUserData(prevUserData =>
      prevUserData.map(input =>
        input.key === 'phone' ? {...input, value: phone} : input,
      ),
    );
  }, [phone]);

  useEffect(() => {
    setIsFormValid(validateForm());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const handleInputChange = (key: string, text: string | Date) => {
    setUserData(prevUserData =>
      prevUserData.map(input =>
        input.key === key ? {...input, value: text} : input,
      ),
    );
  };

  const validateForm = () => {
    return userData.every(input => {
      if (input.isRequired) {
        return input.value !== '';
      }
      return true;
    });
  };

  const handleRegister = async () => {
    const pretifiedUserData: IRegisterRequest = userData.reduce(
      (acc, input) => {
        return {...acc, [input.key]: input.value};
      },
      {} as IRegisterRequest,
    );

    const {statusCode} = await authService.register(pretifiedUserData);
    if (statusCode === 200) {
      navigation.navigate(AuthNavigationRoutes.login);
    }
  };

  const handleEmailValid = () => {
    const emailInput = userData.find(input => input.key === 'email');
    if (emailInput) {
      return !validateEmail(emailInput.value as string);
    }
    return false;
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.registerScreen}
      enableOnAndroid={true}
      extraHeight={200}>
      <View style={styles.inputsSection}>
        <Text style={styles.inputsSectionTitle}>
          {t('registerScreen.personalData.label')}
        </Text>

        <View style={styles.personalData}>
          {userData.slice(0, 3).map((input, index) => (
            <DefaultInput
              inputKey={input.key}
              key={input.key + index}
              value={input.value as string}
              placeholder={t(input.label)}
              onChangeText={text => handleInputChange(input.key, text)}
              onFocus={() => setFocusedInput(input.key)}
              onBlur={() => setFocusedInput(null)}
              isFocused={focusedInput === input.key}
            />
          ))}
          <CalendarDropdown
            value={userData[3].value as Date}
            isModalOpen={isDateDropdownOpen}
            setIsModalOpen={setIsDateDropdownOpen}
            onChange={value => handleInputChange(userData[3].key, value)}
          />
        </View>
      </View>

      <View style={styles.inputsSection}>
        <Text style={styles.inputsSectionTitle}>
          {t('registerScreen.contactData.label')}
        </Text>

        <View style={styles.personalData}>
          {userData.slice(4, 6).map((input, index) => (
            <DefaultInput
              key={input.key + index}
              inputKey={input.key}
              disabled={input.isDisabled}
              value={input.value as string}
              placeholder={t(input.label)}
              onChangeText={text => handleInputChange(input.key, text)}
              onFocus={() => setFocusedInput(input.key)}
              onBlur={() => setFocusedInput(null)}
              isFocused={focusedInput === input.key}
            />
          ))}
        </View>

        <PrivacyAgreement
          isApproved={isPrivacyAgr}
          onCheckBoxClick={() => setIsPrivacyAgr(!isPrivacyAgr)}
          onLinkClick={open}
        />
        {ModalComponent}
      </View>

      <View style={styles.buttonContainer}>
        <DefaultButton
          buttonText={t('registerScreen.register')}
          disabled={!isFormValid || !isPrivacyAgr || handleEmailValid()}
          onPress={handleRegister}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
