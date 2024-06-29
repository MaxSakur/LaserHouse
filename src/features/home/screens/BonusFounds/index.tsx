import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  ScrollView,
} from 'react-native';
import {styles} from './styles';

import {BonusFoundsInfo} from '../BonusFoundsInfo';

export const BonusFoundsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.bonusFoundsScreen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.container}>
          <BonusFoundsInfo />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
