import React, {useEffect, useState} from 'react';
import {View, Text, KeyboardAvoidingView, Platform} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Trans, useTranslation} from 'react-i18next';
import {
  RootStackParamList,
  AuthNavigationRoutes,
  LoggedInNavigationRoutes,
} from '../../../../types/navigation';
import {VerificationCodeInput} from '../../components/inputs';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DefaultButton} from '../../components/buttons/DefaultButton';
import {authService} from '../../services/authService';
import {RouteService} from '../../services/routeService';
import {useDispatch} from 'react-redux';

type VerificationScreenRouteProp = RouteProp<
  RootStackParamList,
  'Verification'
>;

export const VerificationScreen: React.FC = () => {
  const [code, setCode] = useState('');
  const [isResendAvailable, setIsResendAvailable] = useState(true);
  const [resendCounter, setResendCounter] = useState(0);
  const {t} = useTranslation();
  const route = useRoute<VerificationScreenRouteProp>();
  const [showRegistrationButton, setShowRegistrationButton] = useState(false);
  const {phone} = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCounter > 0) {
      timer = setInterval(() => {
        setResendCounter(prevCounter => prevCounter - 1);
      }, 1000);
    } else {
      setIsResendAvailable(true);
    }
    return () => clearInterval(timer);
  }, [resendCounter]);

  useEffect(() => {
    const checkCode = async () => {
      console.log('phone:', phone, code);

      if (code.length === 4) {
        const result = await authService.checkEquilCode(phone, code, dispatch);
        if (result === 'proceed_to_main') {
          RouteService.navigate(LoggedInNavigationRoutes.loggedStack, {
            screen: LoggedInNavigationRoutes.balance,
          });
        } else if (result === 'show_registration') {
          setShowRegistrationButton(true);
        } else {
          setCode('');
        }
      }
    };

    // Запускаем асинхронную функцию
    if (code.length === 4) {
      checkCode();
    }
  }, [code, phone, dispatch]);

  const handleResendCode = async () => {
    const {statusCode} = await authService.sendVerificationCode(phone);

    if (statusCode === 200) {
      setIsResendAvailable(false);
      setResendCounter(60);
    }
  };

  const handleRegister = () => {
    RouteService.navigate(AuthNavigationRoutes.register, {
      phone,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 12 : 0}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.content}>
          <View style={styles.contentBody}>
            <Text style={styles.title}>{t('verificationScreen.message')}</Text>
            <Text style={styles.description}>
              <Trans
                i18nKey="verificationScreen.details"
                values={{number: phone}}
                components={{bold: <Text style={styles.boldText} />}}
              />
            </Text>

            <VerificationCodeInput value={code} onChange={setCode} />
          </View>

          {showRegistrationButton && (
            <View style={styles.notRegistered}>
              <DefaultButton
                buttonText={t('verificationScreen.create')}
                disabled={false}
                onPress={handleRegister}
              />
            </View>
          )}

          <DefaultButton
            buttonText={
              t('verificationScreen.resend') +
              (resendCounter > 0 ? ` (${resendCounter})` : '')
            }
            disabled={!isResendAvailable}
            onPress={handleResendCode}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
