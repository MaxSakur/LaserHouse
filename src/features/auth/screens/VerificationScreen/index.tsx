import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Trans, useTranslation} from 'react-i18next';
import {
  RootStackParamList,
  LoggedInNavigationRoutes,
  AuthNavigationRoutes,
} from '../../../../types/navigation';
import {VerificationCodeInput} from '../../components/inputs';
import {styles} from './styles';
import useNotification from '../../../../hooks/useNotification';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DefaultButton} from '../../components/buttons/DefaultButton';
import {authService} from '../../services/authService';
import {RouteService} from '../../services/routeService';

type VerificationScreenRouteProp = RouteProp<
  RootStackParamList,
  'Verification'
>;

export const VerificationScreen: React.FC = () => {
  const [code, setCode] = useState('');
  const [isResendAvailable, setIsResendAvailable] = useState(true);
  const [isCodeValid, setIsCodeValid] = useState(true);
  const [resendCounter, setResendCounter] = useState(0);
  const {t} = useTranslation();
  const route = useRoute<VerificationScreenRouteProp>();
  const {phone, data: verificationData} = route.params;
  const [codeToEqual, setCodeToEqual] = useState('');
  const {showNotification} = useNotification();

  useEffect(() => {
    if (verificationData?.code) {
      setCodeToEqual(verificationData.code);
    }
  }, [verificationData]);

  useEffect(() => {
    const verifyCode = async () => {
      console.log('verificationData', verificationData);
      if (code.length === 4) {
        if (codeToEqual === code) {
          if (verificationData?.isRegistered) {
            const {statusCode, data} = await authService.login(phone);
            if (statusCode === 200 && data?.token && data.token !== null) {
              await authService.storeToken(data.token);

              RouteService.navigate(LoggedInNavigationRoutes.loggedStack, {
                screen: LoggedInNavigationRoutes.balance,
              });
            }
          } else {
            setIsCodeValid(false);
          }
        }
        Keyboard.dismiss();
      }
    };

    verifyCode();
  }, [code, codeToEqual, showNotification, t, verificationData, phone]);

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

  const handleResendCode = async () => {
    const {statusCode, data} = await authService.sendVerificationCode(phone);

    if (statusCode === 200 && data && data.code) {
      setIsResendAvailable(false);
      setResendCounter(60);
      setCodeToEqual(data.code);
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

          {verificationData?.isRegistered && (
            <View style={styles.notRegistered}>
              <DefaultButton
                buttonText={t('verificationScreen.create')}
                disabled={verificationData.isRegistered}
                onPress={handleRegister}
              />
            </View>
          )}

          {isCodeValid && (
            <DefaultButton
              buttonText={
                t('verificationScreen.resend') +
                (resendCounter > 0 ? ` (${resendCounter})` : '')
              }
              disabled={!isResendAvailable}
              onPress={handleResendCode}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
