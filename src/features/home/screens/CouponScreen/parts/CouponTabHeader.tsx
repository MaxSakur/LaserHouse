// components/CouponHeaderTabs.tsx
import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

interface Tab {
  name: string;
  label: string;
}

const tabs: Tab[] = [
  {name: 'LaserEpilation', label: 'Лазерна епіляція'},
  {name: 'Cosmetology', label: 'Косметологія'},
  {name: 'MyCoupons', label: 'Мої купони'},
];

const CouponHeaderTabs: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [activeTab, setActiveTab] = useState(route.name);

  useEffect(() => {
    setActiveTab(route.name);
  }, [route.name]);

  const handleTabPress = (name: string) => {
    navigation.navigate({name});
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
              {tab.label}
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
