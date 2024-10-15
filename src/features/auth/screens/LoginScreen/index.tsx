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
  TouchableOpacity,
} from 'react-native';
import {
  AuthNavigationRoutes,
  RootStackParamList,
} from '../../../../types/navigation';
import {styles} from './styles';
import {MaskedPhoneInput} from '../../components/inputs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {authService} from '../../services/authService';
import {DefaultButton} from '../../components/buttons/DefaultButton';
import FastImage from 'react-native-fast-image';
import useModalContent from '../../../../hooks/useModalContent';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [phone, setPhone] = useState('');
  const {t} = useTranslation();

  const handleLogin = async () => {
    const {statusCode} = await authService.sendVerificationCode(phone);
    if (statusCode === 200) {
      navigation.navigate(AuthNavigationRoutes.verification, {phone});
      setPhone('');
    }
  };

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

  return (
    <SafeAreaView style={styles.loginScreen}>
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 12 : 0}
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
            />

            <View>
              <Text style={styles.privacyText}>
                {t('loginScreen.privacyPolicy')}
              </Text>
              <TouchableOpacity onPress={open}>
                <Text style={styles.privacyLink}>
                  {t('loginScreen.privacyPolicyLink')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <DefaultButton
            buttonText={t('loginScreen.enter')}
            disabled={phone.length === 0}
            onPress={handleLogin}
          />
        </ScrollView>
        {ModalComponent}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
