import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {styles} from './styles';
import {authService} from '../../../auth/services/authService';
import {RouteService} from '../../../auth/services/routeService';
import {AuthNavigationRoutes} from '../../../../types/navigation';

export const BonusFoundsScreen: React.FC = () => {
  const handleClearUser = () => {
    authService.removeToken();
    RouteService.reset(AuthNavigationRoutes.login);
  };

  return (
    <SafeAreaView style={styles.accountScreen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <TouchableOpacity onPress={handleClearUser}>
            <Text>CLEAR</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
