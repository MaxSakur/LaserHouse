import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {RootStackParamList} from '../types/navigation';
import {LoginScreen, RegisterScreen} from '../features/auth/screens';
import BackButton from '../features/auth/components/buttons/BackButton';

const Stack = createStackNavigator<RootStackParamList>();

const RegisterScreenOptions = {
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
          name="Register"
          component={RegisterScreen}
          options={RegisterScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
