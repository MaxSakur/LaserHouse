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
import {colors, sizes, textStyles} from '../../../../../theme';

type NavigationProp = StackNavigationProp<CouponStackParamList>;

interface Tab {
  name:
    | CouponNavigationRoutes.laserEpilation
    | CouponNavigationRoutes.cosmetology;
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
      | CouponNavigationRoutes.cosmetology,
  ) => {
    navigation.navigate(name, {activeTab: name});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => handleTabPress(tab.name)}>
            <Text
              style={[
                styles.label,
                activeTab === tab.name && styles.activeLabel,
              ]}>
              {t(tab.label)}
            </Text>
            {activeTab === tab.name && <View style={styles.activeLine} />}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.white,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  label: {
    ...textStyles.sectionLabel,
    paddingBottom: sizes.m,
  },
  activeLabel: {
    color: colors.buttonAccent,
  },
  activeLine: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    backgroundColor: colors.buttonAccent,
    borderRadius: 100,
    width: '100%',
  },
});

export default CouponHeaderTabs;
