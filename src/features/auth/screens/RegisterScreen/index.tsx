import React, {useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AuthNavigationRoutes,
  RootStackParamList,
} from '../../../../types/navigation';
import {CalendarDropdown, DefaultInput} from '../../components/inputs';
import {styles} from './styles';
import {PrivacyAgreement} from '../../components/PrivacyAgreement';
import {DefaultButton} from '../../components/buttons/DefaultButton';
import {validateEmail} from '../../../../utils';
import {authService} from '../../services/authService';
import {IRegisterRequest} from '../../../../types/auth';
import {Controller, useForm} from 'react-hook-form';
import {registerScreenInputs} from './screenData';
import useModalContent from '../../../../hooks/useModalContent';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;
type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;

export const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const {t} = useTranslation();
  const route = useRoute<RegisterScreenRouteProp>();
  const {phone} = route.params || {phone: '000 000 00 00'};

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: {errors},
  } = useForm<IRegisterRequest>({
    defaultValues: registerScreenInputs.reduce((acc, input) => {
      if (input.key === 'phone') {
        acc[input.key] = phone;
      } else {
        acc[input.key] = input.value;
      }
      return acc;
    }, {} as Record<string, any>),
  });

  const [isPrivacyAgr, setIsPrivacyAgr] = useState(false);
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);

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

  const handleRegister = async (reqData: IRegisterRequest) => {
    const {data} = await authService.register(reqData);
    if (data?.token) {
      await authService.storeToken(data.token);
      navigation.navigate(AuthNavigationRoutes.login);
    }
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
          {registerScreenInputs.slice(0, 3).map(input => (
            <Controller
              key={input.key}
              control={control}
              name={input.key as keyof IRegisterRequest}
              rules={{
                required: {
                  value: input.isRequired,
                  message: t('registerScreen.errors.isRequired'),
                },
                pattern: {
                  value: /^[A-Za-zА-Яа-яЁё]+$/i,
                  message: t('registerScreen.errors.onlyText'),
                },
                minLength: input.key !== 'parentName' ? 2 : undefined,
                maxLength: 40,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <View>
                  <DefaultInput
                    inputKey={input.key}
                    value={value as string}
                    placeholder={
                      input.isRequired ? `${t(input.label)} *` : t(input.label)
                    }
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onFocus={() =>
                      setValue(
                        input.key as keyof IRegisterRequest,
                        watch(input.key as keyof IRegisterRequest),
                      )
                    }
                    isFocused={false}
                    isRequired={input.isRequired}
                  />
                  {errors[input.key as keyof IRegisterRequest] && (
                    <Text style={localStyles.errorText}>
                      {errors[input.key as keyof IRegisterRequest]?.message ||
                        t('registerScreen.errors.invalidInput')}
                    </Text>
                  )}
                </View>
              )}
            />
          ))}
          <Controller
            control={control}
            name="dob"
            render={({field: {onChange, value}}) => (
              <CalendarDropdown
                value={value || new Date()}
                isModalOpen={isDateDropdownOpen}
                setIsModalOpen={setIsDateDropdownOpen}
                onChange={onChange}
              />
            )}
          />
        </View>
      </View>

      <View style={styles.inputsSection}>
        <Text style={styles.inputsSectionTitle}>
          {t('registerScreen.contactData.label')}
        </Text>
        <View style={styles.personalData}>
          {registerScreenInputs.slice(4, 6).map(input => (
            <Controller
              key={input.key}
              control={control}
              name={input.key as keyof IRegisterRequest}
              rules={{
                required: {
                  value: input.isRequired,
                  message: t('registerScreen.errors.isRequired'),
                },
                validate:
                  input.key === 'email'
                    ? (value: string | Date | undefined) => {
                        if (typeof value !== 'string' || !value) {
                          return t('registerScreen.errors.isRequired');
                        }
                        if (!validateEmail(value)) {
                          return t('registerScreen.errors.invalidEmail');
                        }
                        return true;
                      }
                    : undefined,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <View>
                  <DefaultInput
                    inputKey={input.key}
                    value={value as string}
                    placeholder={t(input.label)}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onFocus={() =>
                      setValue(
                        input.key as keyof IRegisterRequest,
                        watch(input.key as keyof IRegisterRequest),
                      )
                    }
                    isFocused={false}
                    disabled={input.isDisabled}
                    isRequired={input.isRequired}
                  />
                  {input.key === 'email' && errors.email && (
                    <Text style={localStyles.errorText}>
                      {errors.email?.message}
                    </Text>
                  )}
                </View>
              )}
            />
          ))}
        </View>
      </View>

      <PrivacyAgreement
        isApproved={isPrivacyAgr}
        onLinkClick={open}
        onCheckBoxClick={() => setIsPrivacyAgr(!isPrivacyAgr)}
      />
      {ModalComponent}

      <DefaultButton
        buttonText={t('registerScreen.register')}
        disabled={!isPrivacyAgr || Object.keys(errors).length > 0}
        onPress={handleSubmit(handleRegister)}
      />
    </KeyboardAwareScrollView>
  );
};

const localStyles = StyleSheet.create({
  requiredStar: {
    color: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
