import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../../../types/navigation';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {CustomTextInput} from '../../components/inputs/CustomTextInput';
import CustomDropdown from '../../components/inputs/CustomDropdown';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;

interface InputData {
  key: string;
  label: string;
  value: string;
}

const inputsData: InputData[] = [
  {label: 'registerScreen.personalData.name', key: 'name', value: ''},
  {label: 'registerScreen.personalData.surname', key: 'surname', value: ''},
  {
    label: 'registerScreen.personalData.parentName',
    key: 'parentName',
    value: '',
  },
  {label: 'registerScreen.personalData.dob', key: 'dob', value: ''},
  {label: 'registerScreen.contactData.phone', key: 'phone', value: ''},
  {label: 'registerScreen.contactData.email', key: 'email', value: ''},
];

export const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const {t} = useTranslation();
  const route = useRoute<RegisterScreenRouteProp>();
  const [userData, setUserData] = useState<InputData[]>(inputsData);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const {phone} = route.params;

  useEffect(() => {
    setUserData(prevUserData =>
      prevUserData.map(input =>
        input.key === 'phone' ? {...input, value: phone} : input,
      ),
    );
  }, [phone]);

  const handleInputChange = (key: string, text: string) => {
    setUserData(prevUserData =>
      prevUserData.map(input =>
        input.key === key ? {...input, value: text} : input,
      ),
    );
  };

  const handleRegister = () => {
    navigation.navigate('Register', {phone});
  };

  return (
    <SafeAreaView style={styles.registerScreen}>
      <View style={styles.inputsSection}>
        <Text style={styles.inputsSectionTitle}>
          {t('registerScreen.personalData.label')}
        </Text>

        <View style={styles.personalData}>
          {userData.slice(0, 3).map((input, index) => (
            <CustomTextInput
              key={input.key + index}
              inputKey={input.key + index}
              value={input.value}
              placeholder={t(input.label)}
              onChangeText={text => handleInputChange(input.key, text)}
              onFocus={() => setFocusedInput(input.key)}
              onBlur={() => setFocusedInput(null)}
              isFocused={focusedInput === input.key}
            />
          ))}
          <CustomDropdown
            value={userData[4].value}
            onChange={text => handleInputChange(userData[4].key, text)}
            items={[
              {label: '1', value: '1'},
              {label: '2', value: '2'},
            ]}
          />
        </View>
      </View>

      <View style={styles.inputsSection}>
        <Text style={styles.inputsSectionTitle}>
          {t('registerScreen.contactData.label')}
        </Text>

        <View style={styles.personalData}>
          {userData.slice(4, 6).map((input, index) => (
            <CustomTextInput
              key={input.key + index}
              inputKey={input.key + index}
              value={input.value}
              placeholder={t(input.label)}
              onChangeText={text => handleInputChange(input.key, text)}
              onFocus={() => setFocusedInput(input.key)}
              onBlur={() => setFocusedInput(null)}
              isFocused={focusedInput === input.key}
            />
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>{t('registerScreen.register')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
