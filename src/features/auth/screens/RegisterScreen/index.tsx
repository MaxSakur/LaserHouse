import React, {useEffect, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../types/navigation';
import {CustomCalendarDropdown, CustomTextInput} from '../../components/inputs';
import {styles} from './styles';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;

interface InputData {
  key: string;
  label: string;
  value: string | Date;
}

const inputsData: InputData[] = [
  {label: 'registerScreen.personalData.name', key: 'name', value: ''},
  {label: 'registerScreen.personalData.surname', key: 'surname', value: ''},
  {
    label: 'registerScreen.personalData.parentName',
    key: 'parentName',
    value: '',
  },
  {label: 'registerScreen.personalData.dob', key: 'dob', value: new Date()},
  {label: 'registerScreen.contactData.phone', key: 'phone', value: ''},
  {label: 'registerScreen.contactData.email', key: 'email', value: ''},
];

export const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const {t} = useTranslation();
  const route = useRoute<RegisterScreenRouteProp>();
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
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

  const handleInputChange = (key: string, text: string | Date) => {
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
              value={input.value as string}
              placeholder={t(input.label)}
              onChangeText={text => handleInputChange(input.key, text)}
              onFocus={() => setFocusedInput(input.key)}
              onBlur={() => setFocusedInput(null)}
              isFocused={focusedInput === input.key}
            />
          ))}
          <CustomCalendarDropdown
            value={userData[3].value as Date}
            isModalOpen={isDateDropdownOpen}
            setIsModalOpen={setIsDateDropdownOpen}
            onChange={value => handleInputChange(userData[3].key, value)}
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
              value={input.value as string}
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
