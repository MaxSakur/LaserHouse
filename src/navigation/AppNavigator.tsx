import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {
  AuthNavigationRoutes,
  LoggedInNavigationRoutes,
  RootStackParamList,
} from '../types/navigation';
import {LoginScreen, VerificationScreen} from '../features/auth/screens';
import BackButton from '../features/auth/components/buttons/BackButton';
import {RegisterScreen} from '../features/auth/screens/RegisterScreen';
import {LoggedInStackNavigator} from './LoggedInStackNavigator';
import {AuthProvider, useAuth} from '../hooks/useAuth';
import {RouteService} from '../features/auth/services/routeService';

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

const RegistrationScreenOptions = {
  headerLeft: () => <BackButton />,
};

const AppNavigator: React.FC = () => {
  const {t} = useTranslation();
  const {isLoggedIn, checkAuthStatus} = useAuth();

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  return (
    <NavigationContainer ref={RouteService.navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={
          isLoggedIn
            ? LoggedInNavigationRoutes.balance
            : AuthNavigationRoutes.login
        }>
        <Stack.Screen
          name={AuthNavigationRoutes.login}
          component={LoginScreen}
          options={{headerShown: false, title: t('loginScreen.title')}}
        />
        <Stack.Screen
          name={AuthNavigationRoutes.verification}
          component={VerificationScreen}
          options={{
            ...VerificationScreenOptions,
            title: t('verificationScreen.title'),
          }}
        />
        <Stack.Screen
          name={AuthNavigationRoutes.register}
          component={RegisterScreen}
          options={{
            ...RegistrationScreenOptions,
            title: t('registerScreen.title'),
          }}
        />

        <Stack.Screen name="LoggedIn" component={LoggedInStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
