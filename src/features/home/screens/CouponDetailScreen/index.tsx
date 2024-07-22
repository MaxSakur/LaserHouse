import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {
  CouponStackParamList,
  CouponNavigationRoutes,
} from '../../../../types/navigation';

type CouponDetailScreenRouteProp = RouteProp<
  CouponStackParamList,
  CouponNavigationRoutes.couponDetail
>;

export const CouponDetailScreen: React.FC = () => {
  const route = useRoute<CouponDetailScreenRouteProp>();
  const {couponID} = route.params;

  return (
    <View style={styles.container}>
      <Text>Coupon Detail for ID: {couponID}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
