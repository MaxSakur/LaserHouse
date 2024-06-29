import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {RootStackParamList} from '../../../../types/navigation';
import {styles} from './styles';
import {MaskedPhoneInput} from '../../components/inputs';
import {countyPhoneCode, phoneMask} from '../../../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {authService} from '../../services/authService';
import {DefaultButton} from '../../components/buttons/DefaultButton';
import FastImage from 'react-native-fast-image';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [phone, setPhone] = useState('');
  const {t} = useTranslation();

  const handleLogin = async () => {
    const {statusCode, data} = await authService.sendVerificationCode(phone);
    if (statusCode === 200 && data !== null) {
      navigation.navigate('Verification', {phone, data});
      setPhone('');
    }
  };

  const conditionsToLogin =
    countyPhoneCode.length + phone.length !== phoneMask.length;

  return (
    <SafeAreaView style={styles.loginScreen}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.loginScreenContent}>
            <FastImage
              style={styles.image}
              source={require('../../../../../assets/images/logo.png')}
              resizeMode={FastImage.resizeMode.contain}
            />

            <Text style={styles.title}>{t('loginScreen.welcome')}</Text>
            <Text style={styles.description}>
              {t('loginScreen.enterPhone')}
            </Text>

            <MaskedPhoneInput
              value={phone}
              onChange={setPhone}
              isMajor={true}
              mask={phoneMask}
              countyPhoneCode={countyPhoneCode}
            />

            <Text style={styles.privacyText}>
              {t('loginScreen.privacyPolicy')} {'\n'}
              <Text style={styles.privacyLink}>
                {t('loginScreen.privacyPolicyLink')}
              </Text>
            </Text>
          </View>
          <DefaultButton
            buttonText={t('loginScreen.enter')}
            disabled={conditionsToLogin}
            onPress={handleLogin}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
