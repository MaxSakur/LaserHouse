import React, {useEffect} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  ScrollView,
} from 'react-native';
import {styles} from './styles';

import DeviceInfo from 'react-native-device-info';
import {BonusFounds, BonusQRCode} from './parts';

export const BalanceScreen: React.FC = () => {
  const fullName = 'Давиденко Іван Іванович';

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
    <SafeAreaView style={styles.balanceScreen}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <BonusFounds fullName={fullName} />
          <BonusQRCode />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
