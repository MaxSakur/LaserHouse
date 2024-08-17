// RecordsStackNavigator.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {
  RecordsNavigationRoutes,
  RecordsStackParamList,
} from '../types/navigation';
import {ScreenHeader} from './ScreenHeader';
import {RecordScreen} from '../features/home/screens/RecordsScreen';
import {RecordSignUp} from '../features/home/screens/RecordSignUp';
import {RecordScheduled} from '../features/home/screens/RecordScheduled';
import {RecordPrevious} from '../features/home/screens/RecordPrevious';
import {RecordPaid} from '../features/home/screens/RecordPaid';
import {RecordHome} from '../features/home/screens/RecordHome';

const Stack = createStackNavigator<RecordsStackParamList>();

const createScreenOptions = (route: string, t: (key: string) => string) => {
  return {
    header: () => {
      switch (route) {
        case RecordsNavigationRoutes.RecordsMain:
          return <ScreenHeader title={t('recordsScreen.title')} />;
        case RecordsNavigationRoutes.RecordSignUp:
          return (
            <ScreenHeader
              withBackButton
              title={t('recordsScreen.recordSignUp.title')}
            />
          );
        case RecordsNavigationRoutes.RecordScheduled:
          return (
            <ScreenHeader
              withBackButton
              title={t('recordsScreen.recordScheduled.title')}
            />
          );
        case RecordsNavigationRoutes.RecordPrevious:
          return (
            <ScreenHeader
              withBackButton
              title={t('recordsScreen.recordPrevious.title')}
            />
          );
        case RecordsNavigationRoutes.RecordPaid:
          return (
            <ScreenHeader
              withBackButton
              title={t('recordsScreen.recordPaid.title')}
            />
          );
        case RecordsNavigationRoutes.RecordHome:
          return (
            <ScreenHeader
              withBackButton
              title={t('recordsScreen.recordHome.title')}
            />
          );
        default:
          return null;
      }
    },
  };
};

export const RecordsStackNavigator: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        ...createScreenOptions(route.name, t),
      })}>
      <Stack.Screen
        name={RecordsNavigationRoutes.RecordsMain}
        component={RecordScreen}
        options={{headerTitle: t('recordsScreen.title')}}
      />
      <Stack.Screen
        name={RecordsNavigationRoutes.RecordSignUp}
        component={RecordSignUp}
        options={{headerTitle: t('balanceScreen.title')}}
      />
      <Stack.Screen
        name={RecordsNavigationRoutes.RecordScheduled}
        component={RecordScheduled}
        options={{headerTitle: t('balanceScreen.title')}}
      />
      <Stack.Screen
        name={RecordsNavigationRoutes.RecordPrevious}
        component={RecordPrevious}
        options={{headerTitle: t('balanceScreen.title')}}
      />
      <Stack.Screen
        name={RecordsNavigationRoutes.RecordPaid}
        component={RecordPaid}
        options={{headerTitle: t('balanceScreen.title')}}
      />
      <Stack.Screen
        name={RecordsNavigationRoutes.RecordHome}
        component={RecordHome}
        options={{headerTitle: t('balanceScreen.title')}}
      />
    </Stack.Navigator>
  );
};
