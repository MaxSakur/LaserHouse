// LoggedInStackNavigator.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {BalanceScreen} from '../features/home/screens';
import {RecordsIcon, BalanceIcon, AccountIcon, CouponsIcon} from '../icons';
import {colors} from '../theme';
import {ScreenHeader} from './ScreenHeader';
import {AccountScreen} from '../features/home/screens/AccountScreen';
import {LoggedInNavigationRoutes} from '../types/navigation';
import {BalanceStackNavigator} from './BalanceNavigator';
import CouponStackNavigator from './CouponStackNavigator';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route: string, focused: boolean, size: number) => {
  const color = focused ? colors.buttonAccent : colors.tertiary;

  switch (route) {
    case LoggedInNavigationRoutes.balance:
      return <BalanceIcon color={color} size={size} />;
    case LoggedInNavigationRoutes.records:
      return <RecordsIcon color={color} size={size} />;
    case LoggedInNavigationRoutes.coupons:
      return <CouponsIcon color={color} size={size} />;
    case LoggedInNavigationRoutes.account:
      return <AccountIcon color={color} size={size} />;
    default:
      return null;
  }
};

const createScreenOptions = (route: string) => {
  return {
    header: () => {
      switch (route) {
        default:
          return <ScreenHeader />;
      }
    },
  };
};

export const LoggedInStackNavigator: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName={LoggedInNavigationRoutes.balance}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) =>
          getTabBarIcon(route.name, focused, size),
        tabBarActiveTintColor: colors.buttonAccent,
        tabBarInactiveTintColor: colors.tertiary,
        ...createScreenOptions(route.name),
      })}>
      <Tab.Screen
        name={LoggedInNavigationRoutes.balance}
        component={BalanceStackNavigator}
        options={{title: t('balanceScreen.title'), headerShown: false}}
      />
      <Tab.Screen
        name={LoggedInNavigationRoutes.records}
        component={BalanceScreen}
        options={{title: t('recordsScreen.title')}}
      />
      <Tab.Screen
        name={LoggedInNavigationRoutes.coupons}
        component={CouponStackNavigator}
        options={{title: t('couponsScreen.title'), headerShown: false}}
      />
      <Tab.Screen
        name={LoggedInNavigationRoutes.account}
        component={AccountScreen}
        options={{title: t('accountScreen.title')}}
      />
    </Tab.Navigator>
  );
};
