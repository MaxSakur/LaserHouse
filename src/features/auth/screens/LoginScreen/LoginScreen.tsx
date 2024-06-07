import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../../../../types/navigation';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import CustomTextInput from '../../components/inputs/TextInput';
import {countyPhoneCode, phoneMask} from '../../../../utils';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [phone, setPhone] = useState('');
  const {t} = useTranslation();

  const handleLogin = () => {
    navigation.navigate('Register', {phone});
  };

  return (
    <View style={styles.loginScreen}>
      <Text style={styles.title}>{t('loginScreen.welcome')}</Text>

      <View style={styles.loginScreen_content}>
        <Text style={styles.description}>{t('loginScreen.enterPhone')}</Text>

        <CustomTextInput
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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>{t('loginScreen.enter')}</Text>
      </TouchableOpacity>
    </View>
  );
};
