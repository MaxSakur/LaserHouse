// LoggedInStackNavigator.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BalanceScreen} from '../features/home/screens';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

export const LoggedInStackNavigator: React.FC = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={t('balanceScreen.title')}
        component={BalanceScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={t('recordsScreen.title')}
        component={BalanceScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={t('сouponsScreen.title')}
        component={BalanceScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={t('accountScreen.title')}
        component={BalanceScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
