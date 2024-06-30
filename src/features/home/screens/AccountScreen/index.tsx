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
import {AccountControls} from './parts/AccountControls';

export const AccountScreen: React.FC = () => {
  const handleClearUser = () => {
    authService.removeToken();
    RouteService.reset(AuthNavigationRoutes.login);
  };

  return (
    <SafeAreaView style={styles.accountScreen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <AccountControls />

          <TouchableOpacity onPress={handleClearUser}>
            <Text>CLEAR</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
