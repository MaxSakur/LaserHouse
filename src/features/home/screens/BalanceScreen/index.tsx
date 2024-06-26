import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {RootStackParamList} from '../../../../types/navigation';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import DeviceInfo from 'react-native-device-info';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export const BalanceScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const {t} = useTranslation();

  useEffect(() => {
    const fetchDeviceId = async () => {
      try {
        const id = await DeviceInfo.getDeviceId();
        console.log(id);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDeviceId();
  }, []);

  return (
    <SafeAreaView style={styles.loginScreen}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text>123</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
