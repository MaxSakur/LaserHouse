import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  ScrollView,
} from 'react-native';
import {BonusFounds, BonusQRCode} from './parts';
import {styles} from './styles';

export const BalanceScreen: React.FC = () => {
  const fullName = 'Давиденко Іван Іванович';

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
