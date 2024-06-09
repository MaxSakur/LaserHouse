import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {RootStackParamList} from '../types/navigation';
import {LoginScreen, VerificationScreen} from '../features/auth/screens';
import BackButton from '../features/auth/components/buttons/BackButton';
import {RegisterScreen} from '../features/auth/screens/RegisterScreen';

const Stack = createStackNavigator<RootStackParamList>();

const VerificationScreenOptions = {
  headerLeft: () => <BackButton />,
  headerTitle: '',
  headerTransparent: true,
  headerStyle: {
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={VerificationScreen}
          options={VerificationScreenOptions}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
