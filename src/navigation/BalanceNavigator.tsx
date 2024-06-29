// BalanceStackNavigator.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BalanceScreen,
  HistoryIncomeScreen,
  BonusFoundsScreen,
} from '../features/home/screens';
import {useTranslation} from 'react-i18next';
import {
  BalanceNavigationRoutes,
  BalanceStackParamList,
} from '../types/navigation';
import {ScreenHeader} from './ScreenHeader';

const Stack = createStackNavigator<BalanceStackParamList>();

const createScreenOptions = (route: string, t: (key: string) => string) => {
  return {
    header: () => {
      switch (route) {
        case BalanceNavigationRoutes.incomeHistory:
          return (
            <ScreenHeader
              withBackButton
              title={t('balanceScreen.bonusHistoryLabel')}
            />
          );
        case BalanceNavigationRoutes.bonusFounds:
          return (
            <ScreenHeader
              withBackButton
              title={t('historyIncomeScreen.title')}
            />
          );
        default:
          return <ScreenHeader />;
      }
    },
  };
};

export const BalanceStackNavigator: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        ...createScreenOptions(route.name, t),
      })}>
      <Stack.Screen
        name={BalanceNavigationRoutes.balance}
        component={BalanceScreen}
        options={{headerTitle: t('balanceScreen.title')}}
      />
      <Stack.Screen
        name={BalanceNavigationRoutes.incomeHistory}
        component={HistoryIncomeScreen}
        options={{headerTitle: t('historyIncomeScreen.title')}}
      />
      <Stack.Screen
        name={BalanceNavigationRoutes.bonusFounds}
        component={BonusFoundsScreen}
        options={{headerTitle: t('historyIncomeScreen.title')}}
      />
    </Stack.Navigator>
  );
};
