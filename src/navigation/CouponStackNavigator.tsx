// navigation/CouponStackNavigator.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {
  CouponNavigationRoutes,
  CouponStackParamList,
} from '../types/navigation';
import {CouponScreen} from '../features/home/screens/CouponScreen';
import {CouponDetailScreen} from '../features/home/screens/CouponDetailScreen';
import CouponHeaderTabs from '../features/home/screens/CouponScreen/parts/CouponTabHeader';
import {ScreenHeader} from './ScreenHeader';

const Stack = createStackNavigator<CouponStackParamList>();

const getHeaderTitle = (
  route: string,
  t: (key: string) => string,
  activeTab?: CouponNavigationRoutes,
) => {
  if (route === CouponNavigationRoutes.couponDetail && activeTab) {
    switch (activeTab) {
      case CouponNavigationRoutes.laserEpilation:
        return t('couponsScreen.couponTabs.laserEpilation');
      case CouponNavigationRoutes.cosmetology:
        return t('couponsScreen.couponTabs.cosmetology');
      default:
        return t('couponsScreen.couponDetail');
    }
  }
  return t('couponsScreen.couponDetail');
};

const createScreenOptions = (
  route: string,
  t: (key: string) => string,
  activeTab?: CouponNavigationRoutes,
) => {
  return {
    header: (props: any) => {
      switch (route) {
        case CouponNavigationRoutes.couponDetail:
          return (
            <ScreenHeader
              {...props}
              withBackButton
              withMessagesIndicator={false}
              title={getHeaderTitle(route, t, activeTab)}
            />
          );
        default:
          return <CouponHeaderTabs />;
      }
    },
    animationEnabled: false,
  };
};

const CouponStackNavigator: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={CouponNavigationRoutes.laserEpilation}
        component={CouponScreen}
        initialParams={{activeTab: CouponNavigationRoutes.laserEpilation}}
        options={({route}) => createScreenOptions(route.name, t)}
      />
      <Stack.Screen
        name={CouponNavigationRoutes.cosmetology}
        component={CouponScreen}
        initialParams={{activeTab: CouponNavigationRoutes.cosmetology}}
        options={({route}) => createScreenOptions(route.name, t)}
      />
      <Stack.Screen
        name={CouponNavigationRoutes.couponDetail}
        component={CouponDetailScreen}
        options={({route}) => {
          const {activeTab} = route.params;
          return createScreenOptions(route.name, t, activeTab);
        }}
      />
    </Stack.Navigator>
  );
};

export default CouponStackNavigator;
