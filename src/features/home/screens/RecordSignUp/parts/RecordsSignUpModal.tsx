import React, {FC, useState, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {IAddress} from '../RecordSignUpData';
import {BuildingIcon, GlassIcon} from '../../../../../icons';
import {useTranslation} from 'react-i18next';
import {colors, sizes} from '../../../../../theme';

interface IRecordsSignUpModal {
  data: IAddress[];
  onChange: (address: IAddress) => void;
  close: () => void;
}

export const RecordsSignUpModal: FC<IRecordsSignUpModal> = ({
  data,
  onChange,
  close,
}) => {
  const {t} = useTranslation();
  const [searchValue, setSearchValue] = useState<string>('');

  const handleUpdateInput = (text: string) => {
    setSearchValue(text);
  };

  const groupedData = useMemo(() => {
    const filteredData = data.filter(
      address =>
        address.city.toLowerCase().includes(searchValue.toLowerCase()) ||
        address.street.toLowerCase().includes(searchValue.toLowerCase()),
    );

    return filteredData.reduce((acc, address) => {
      if (!acc[address.city]) {
        acc[address.city] = [];
      }
      acc[address.city].push(address);
      return acc;
    }, {} as Record<string, IAddress[]>);
  }, [data, searchValue]);

  const handleSetAddress = (address: IAddress) => {
    onChange(address);
    close();
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <GlassIcon />
        <TextInput
          value={searchValue}
          onChangeText={handleUpdateInput}
          placeholder={t('searchAddress')}
          style={styles.input}
        />
      </View>
      <ScrollView style={styles.container}>
        {Object.keys(groupedData).map(city => (
          <View key={city}>
            <Text style={styles.cityHeader}>{city}</Text>
            {groupedData[city].map((address, index) => (
              <TouchableOpacity
                key={address.street + index}
                style={styles.addressContainer}
                onPress={() => handleSetAddress(address)}>
                <View style={styles.iconContainer}>
                  <BuildingIcon />
                </View>
                <View>
                  <Text>{address.street}</Text>
                  <Text style={styles.hours}>{address.hours}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: sizes.m,
    padding: sizes.m,
    borderRadius: sizes.radius,
    backgroundColor: '#F2F3F4',
  },
  input: {
    flex: 1,
  },
  cityHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: sizes.l,
    paddingLeft: sizes.m,
  },
  addressContainer: {
    padding: sizes.m,
    borderBottomWidth: 1,
    borderBottomColor: colors.uiBackground,
    flexDirection: 'row',
    gap: sizes.l,
    alignItems: 'center',
  },
  hours: {
    color: colors.tertiary,
  },
  iconContainer: {
    padding: sizes.md,
    backgroundColor: colors.notificationBackground,
    borderRadius: sizes.radius,
  },
});
