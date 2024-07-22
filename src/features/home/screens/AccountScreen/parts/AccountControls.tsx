import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, FlatList} from 'react-native';
import {styles} from '../styles';
import {LanguageIcon} from '../../../../../icons/LanguageIcon';
import {InfoIcon, LetterIcon, BellIcon} from '../../../../../icons';

const data = [
  {
    label: 'accountScreen.chooseLanguage',
    icon: <LanguageIcon />,
    onPress: () => null,
  },
  {
    label: 'accountScreen.pushMessages',
    icon: <LetterIcon />,
    onPress: () => null,
  },
  {
    label: 'accountScreen.aboutCompany',
    icon: <InfoIcon color="#000" />,
    onPress: () => null,
  },
  {
    label: 'accountScreen.historyIncomeMessage',
    icon: <BellIcon />,
    onPress: () => null,
  },
];

const Divider = () => <View style={styles.divider} />;

export const AccountControls = () => {
  const {t} = useTranslation();

  const renderItem = ({item}: {item: (typeof data)[0]}) => (
    <View style={styles.accountControllsElement}>
      <View style={styles.iconContainer}>{item.icon}</View>
      <Text>{t(item.label)}</Text>
    </View>
  );

  return (
    <FlatList
      style={styles.accountControllsList}
      data={data}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      ItemSeparatorComponent={Divider}
      contentContainerStyle={styles.accountControlls}
    />
  );
};
