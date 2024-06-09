import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Trans, useTranslation} from 'react-i18next';
import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../../../../types/navigation';
import {VerificationCodeInput} from '../../components/inputs';
import {countyPhoneCode} from '../../../../utils/masks';
import {styles} from './styles';
import useNotification, {
  NotificationType,
} from '../../../../hooks/useNotification';

type VerificationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Verification'
>;

type VerificationScreenRouteProp = RouteProp<
  RootStackParamList,
  'Verification'
>;

export const VerificationScreen: React.FC = () => {
  const navigation = useNavigation<VerificationScreenNavigationProp>();
  const [code, setCode] = useState('');
  const {t} = useTranslation();
  const route = useRoute<VerificationScreenRouteProp>();
  const {phone, code: verificationCode} = route.params;
  const {showNotification} = useNotification();

  useEffect(() => {
    if (code.length === 4) {
      if (verificationCode === code) {
        navigation.navigate('Login');
      } else {
        showNotification(NotificationType.ERROR, 'Invalid code =>');
        setCode('');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, navigation]);

  return (
    <View style={styles.VerificationScreen}>
      <Text style={styles.title}>{t('verificationScreen.message')}</Text>

      <View style={styles.VerificationScreen_content}>
        <Text style={styles.description}>
          <Trans
            i18nKey="verificationScreen.details"
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
