// VerificationScreen.tsx
import React, {useEffect, useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Trans, useTranslation} from 'react-i18next';
import {
  RootStackParamList,
  LoggedInNavigationRoutes,
  AuthNavigationRoutes,
} from '../../../../types/navigation';
import {VerificationCodeInput} from '../../components/inputs';
import {countyPhoneCode} from '../../../../utils/masks';
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
  const [isCreateAvailable, setIsCreateAvailable] = useState(false);
  const [isCodeValid, setIsCodeValid] = useState(true);
  const [resendCounter, setResendCounter] = useState(0);
  const {t} = useTranslation();
  const route = useRoute<VerificationScreenRouteProp>();
  const {phone, data: verificationData} = route.params;
  const {showNotification} = useNotification();

  useEffect(() => {
    const verifyCode = async () => {
      if (code.length === 4) {
        if (verificationData?.code === code) {
          if (verificationData?.isRegistered) {
            const {statusCode, data} = await authService.login(phone);
            if (statusCode === 200 && data?.token && data.token !== null) {
              await authService.storeToken(data.token);

              RouteService.navigate(LoggedInNavigationRoutes.balance);
            }
          } else {
            setIsCodeValid(false);
            setIsCreateAvailable(true);
          }
        }
        Keyboard.dismiss();
      }
    };

    verifyCode();
  }, [code, showNotification, t, verificationData, phone]);

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
    if (statusCode === 200 && data !== null) {
      setIsResendAvailable(false);
      setResendCounter(60);
    }
  };

  const handleRegister = () => {
    RouteService.navigate(AuthNavigationRoutes.register, {
      phone: `${countyPhoneCode}${phone}`,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.contentBody}>
          <Text style={styles.title}>{t('verificationScreen.message')}</Text>
          <Text style={styles.description}>
            <Trans
              i18nKey="verificationScreen.details"
              values={{number: countyPhoneCode + phone}}
              components={{bold: <Text style={styles.boldText} />}}
            />
          </Text>

          <VerificationCodeInput
            value={code}
            onChange={setCode}
            countyPhoneCode={countyPhoneCode}
          />
        </View>

        {!verificationData?.isRegistered && (
          <View style={styles.notRegistered}>
            <Text style={styles.notRegisteredText}>
              <Trans
                i18nKey="verificationScreen.notRegistered"
                components={{
                  bold: <Text style={styles.notRegisteredHighlight} />,
                }}
              />
            </Text>
            <DefaultButton
              buttonText={t('verificationScreen.create')}
              disabled={!isCreateAvailable}
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
    </SafeAreaView>
  );
};
