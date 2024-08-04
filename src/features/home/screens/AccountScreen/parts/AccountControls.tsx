import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, FlatList, TouchableOpacity, Linking} from 'react-native';
import {styles} from '../styles';
import {LanguageIcon} from '../../../../../icons/LanguageIcon';
import {BellIcon, InfoIcon} from '../../../../../icons';
import useModalContent from '../../../../../hooks/useModalContent';
import {LanguageSwitcher} from './LanguageSwitcher';

const Divider = () => <View style={styles.divider} />;

export const AccountControls = () => {
  const {t} = useTranslation();

  const {open, ModalComponent} = useModalContent({
    header: null,
    headerBorder: false,
    isFullHeight: false,
    content: <LanguageSwitcher />,
  });

  const openExternalLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  const data = [
    {
      label: 'accountScreen.chooseLanguage',
      icon: <LanguageIcon />,
      onPress: open,
    },
    {
      label: 'accountScreen.pushMessages',
      icon: <BellIcon />,
      onPress: () => null,
    },
    {
      label: 'accountScreen.aboutCompany',
      icon: <InfoIcon color="#000" />,
      onPress: () =>
        openExternalLink('https://www.laserhouse.com.ua/ua/philosophy'),
    },
  ];

  const renderItem = ({item}: {item: (typeof data)[0]}) => (
    <TouchableOpacity
      style={styles.accountControllsElement}
      onPress={item.onPress}>
      <View style={styles.iconContainer}>{item.icon}</View>
      <Text>{t(item.label)}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        style={styles.accountControllsList}
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={Divider}
        contentContainerStyle={styles.accountControlls}
      />
      {ModalComponent}
    </View>
  );
};
