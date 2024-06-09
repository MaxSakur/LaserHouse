import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {RootStackParamList} from '../../../../types/navigation';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import {MaskedTextInput} from '../../components/inputs';
import {countyPhoneCode, phoneMask} from '../../../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {authService} from '../../services/authService';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [phone, setPhone] = useState('');
  const {t} = useTranslation();

  const handleLogin = async () => {
    const {code, success} = await authService.login(phone);

    if (success) {
      navigation.navigate('Verification', {phone, code});
      setPhone('');
      return;
    } else {
      console.log('Error');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register', {phone});
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
            <Text style={styles.title}>{t('loginScreen.welcome')}</Text>
            <Text style={styles.description}>
              {t('loginScreen.enterPhone')}
            </Text>

            <MaskedTextInput
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

          <TouchableOpacity
            style={[styles.button, conditionsToLogin && styles.disabledButton]}
            disabled={conditionsToLogin}
            onPress={handleLogin}>
            <Text style={styles.buttonText}>{t('loginScreen.enter')}</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>{t('loginScreen.create')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
