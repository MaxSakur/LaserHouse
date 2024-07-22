// features/home/screens/CouponScreen.tsx
import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {
  CouponNavigationRoutes,
  CouponStackParamList,
} from '../../../../types/navigation';
import {sizes} from '../../../../theme';
import {
  getCosmetologyCoupons,
  getLaserEpilationCoupons,
  getMyCoupons,
} from './apiStaticData';
import {Coupon} from '../../../../types/coupons';

type CouponScreenNavigationProp = StackNavigationProp<
  CouponStackParamList,
  | CouponNavigationRoutes.laserEpilation
  | CouponNavigationRoutes.cosmetology
  | CouponNavigationRoutes.myCoupons
>;

type CouponScreenRouteProp = RouteProp<
  CouponStackParamList,
  | CouponNavigationRoutes.laserEpilation
  | CouponNavigationRoutes.cosmetology
  | CouponNavigationRoutes.myCoupons
>;

type Props = {
  navigation: CouponScreenNavigationProp;
  route: CouponScreenRouteProp;
};

const renderItem = ({
  item,
  navigation,
  activeTab,
}: {
  item: Coupon;
  navigation: CouponScreenNavigationProp;
  activeTab: CouponNavigationRoutes;
}) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate(CouponNavigationRoutes.couponDetail, {
        coupon: item,
        activeTab,
      })
    }>
    <FastImage
      style={styles.image}
      source={item.path}
      resizeMode={FastImage.resizeMode.contain}
    />
  </TouchableOpacity>
);

export const CouponScreen: React.FC<Props> = ({navigation, route}) => {
  const {activeTab} = route.params;

  const renderContentData = () => {
    switch (activeTab) {
      case CouponNavigationRoutes.laserEpilation:
        return getLaserEpilationCoupons();
      case CouponNavigationRoutes.cosmetology:
        return getCosmetologyCoupons();
      case CouponNavigationRoutes.myCoupons:
        return getMyCoupons();
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={renderContentData()}
        renderItem={({item}) => renderItem({item, navigation, activeTab})}
        keyExtractor={(_, index) => index.toString()}
        style={styles.collection}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: sizes.couponHeight,
  },
  collection: {
    paddingHorizontal: sizes.md,
  },
});
