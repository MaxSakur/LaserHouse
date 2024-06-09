import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Trans, useTranslation} from 'react-i18next';
import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../../../../types/navigation';
import {VerificationCodeInput} from '../../components/inputs';
import {countyPhoneCode} from '../../../../utils/masks.ts';
import {styles} from './styles';
import useNotification, {
  NotificationType,
} from '../../../../hooks/useNotification';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;

export const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const [code, setCode] = useState('');
  const {t} = useTranslation();
  const route = useRoute<RegisterScreenRouteProp>();
  const {phone, code: verificationCode} = route.params;
  const {showNotification} = useNotification();

  useEffect(() => {
    if (code.length === 4) {
      if (verificationCode === code) {
        showNotification(NotificationType.INFO, 'Code is valid');
        navigation.navigate('Login');
      } else {
        showNotification(NotificationType.ERROR, 'Invalid code =>');
        setCode('');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, navigation]);

  return (
    <View style={styles.registerScreen}>
      <Text style={styles.title}>{t('registerScreen.message')}</Text>

      <View style={styles.registerScreen_content}>
        <Text style={styles.description}>
          <Trans
            i18nKey="registerScreen.details"
            values={{number: countyPhoneCode + phone}}
            components={{bold: <Text />}}
          />
        </Text>

        <VerificationCodeInput
          value={code}
          onChange={setCode}
          countyPhoneCode={countyPhoneCode}
        />
      </View>
    </View>
  );
};
