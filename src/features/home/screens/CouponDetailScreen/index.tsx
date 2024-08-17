// features/home/screens/CouponDetailScreen.tsx
import React from 'react';
import {View, Text} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {
  CouponStackParamList,
  CouponNavigationRoutes,
} from '../../../../types/navigation';
import CouponDueDate from '../../../../components/CouponDueDate';
import {styles} from './styles';

type CouponDetailScreenRouteProp = RouteProp<
  CouponStackParamList,
  CouponNavigationRoutes.couponDetail
>;

export const CouponDetailScreen: React.FC = () => {
  const route = useRoute<CouponDetailScreenRouteProp>();
  const {coupon} = route.params;

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={coupon.path}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.label}>{coupon.label}</Text>

      <CouponDueDate date={coupon.dueDate} />

      <Text style={styles.description}>{coupon.description}</Text>
      <Text style={styles.warningText}>{coupon.warningText}</Text>
    </View>
  );
};

export default CouponDetailScreen;
