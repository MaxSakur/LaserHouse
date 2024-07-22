// components/CouponHeaderTabs.tsx
import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {
  CouponNavigationRoutes,
  CouponStackParamList,
} from '../../../../../types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<CouponStackParamList>;

interface Tab {
  name:
    | CouponNavigationRoutes.laserEpilation
    | CouponNavigationRoutes.cosmetology
    | CouponNavigationRoutes.myCoupons;
  label: string;
}

const tabs: Tab[] = [
  {
    name: CouponNavigationRoutes.laserEpilation,
    label: 'couponsScreen.couponTabs.laserEpilation',
  },
  {
    name: CouponNavigationRoutes.cosmetology,
    label: 'couponsScreen.couponTabs.cosmetology',
  },
  {
    name: CouponNavigationRoutes.myCoupons,
    label: 'couponsScreen.couponTabs.myCoupons',
  },
];

const CouponHeaderTabs: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp<CouponStackParamList>>();
  const {t} = useTranslation();

  const [activeTab, setActiveTab] = useState(
    route.name as CouponNavigationRoutes,
  );

  useEffect(() => {
    setActiveTab(route.name as CouponNavigationRoutes);
  }, [route.name]);

  const handleTabPress = (
    name:
      | CouponNavigationRoutes.laserEpilation
      | CouponNavigationRoutes.cosmetology
      | CouponNavigationRoutes.myCoupons,
  ) => {
    navigation.navigate(name, {activeTab: name});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.name}
            style={[styles.tab, activeTab === tab.name && styles.activeTab]}
            onPress={() => handleTabPress(tab.name)}>
            <Text
              style={[
                styles.label,
                activeTab === tab.name && styles.activeLabel,
              ]}>
              {t(tab.label)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  activeLabel: {
    color: 'red',
  },
});

export default CouponHeaderTabs;
