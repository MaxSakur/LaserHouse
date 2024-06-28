import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BalanceScreen} from '../features/home/screens';
import {useTranslation} from 'react-i18next';
import {RecordsIcon, BalanceIcon, AccountIcon, CouponsIcon} from '../icons';
import {colors} from '../theme';
import {ScreenHeader} from './ScreenHeader';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (
  route: string,
  focused: boolean,
  size: number,
  t: any,
) => {
  const color = focused ? colors.buttonAccent : colors.tertiary;

  switch (route) {
    case t('balanceScreen.title'):
      return <BalanceIcon color={color} size={size} />;
    case t('recordsScreen.title'):
      return <RecordsIcon color={color} size={size} />;
    case t('couponsScreen.title'):
      return <CouponsIcon color={color} size={size} />;
    case t('accountScreen.title'):
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
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) =>
          getTabBarIcon(route.name, focused, size, t),
        tabBarActiveTintColor: colors.buttonAccent,
        tabBarInactiveTintColor: colors.tertiary,
        ...createScreenOptions(route.name),
      })}>
      <Tab.Screen name={t('balanceScreen.title')} component={BalanceScreen} />
      <Tab.Screen name={t('recordsScreen.title')} component={BalanceScreen} />
      <Tab.Screen name={t('couponsScreen.title')} component={BalanceScreen} />
      <Tab.Screen name={t('accountScreen.title')} component={BalanceScreen} />
    </Tab.Navigator>
  );
};
