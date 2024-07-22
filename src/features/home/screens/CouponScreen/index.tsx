import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import {
  CouponNavigationRoutes,
  CouponStackParamList,
} from '../../../../types/navigation';
import {RouteProp} from '@react-navigation/native';

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

const data = [
  {
    path: require('./../../../../../assets/images/coupons/coupon5.png'),
    couponID: 0,
  },
  {
    path: require('./../../../../../assets/images/coupons/coupon4.png'),
    couponID: 1,
  },
  {
    path: require('./../../../../../assets/images/coupons/coupon5.png'),
    couponID: 2,
  },
  {
    path: require('./../../../../../assets/images/coupons/coupon4.png'),
    couponID: 3,
  },
  {
    path: require('./../../../../../assets/images/coupons/coupon5.png'),
    couponID: 4,
  },
];

const renderItem = ({
  item,
  navigation,
  activeTab,
}: {
  item: {path: Source; couponID: number};
  navigation: CouponScreenNavigationProp;
  activeTab: CouponNavigationRoutes;
}) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate(CouponNavigationRoutes.couponDetail, {
        couponID: item.couponID,
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
        return data.slice(0, 2);
      case CouponNavigationRoutes.cosmetology:
        return data.slice(1, 4);
      case CouponNavigationRoutes.myCoupons:
        return data.slice(4, 5);
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
        style={{paddingHorizontal: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 260,
  },
});
