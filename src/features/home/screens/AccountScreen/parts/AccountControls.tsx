import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, FlatList, TouchableOpacity, Linking} from 'react-native';
import {styles} from '../styles';
import {LanguageIcon} from '../../../../../icons/LanguageIcon';
import {ArrowRightIcon, BellIcon, InfoIcon} from '../../../../../icons';
import useModalContent from '../../../../../hooks/useModalContent';
import {LanguageSwitcher} from './LanguageSwitcher';
import NotificationToggle from '../../../components/toggles/NotificationToggle';
import {colors} from '../../../../../theme';

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
      rightContent: <NotificationToggle />,
      onPress: () => null,
    },
    {
      label: 'accountScreen.aboutCompany',
      icon: <InfoIcon color="#000" />,

      onPress: () =>
        openExternalLink('https://www.laserhouse.com.ua/ua/laserhouse-is'),
    },
  ];

  const renderItem = ({item}: {item: (typeof data)[0]}) => (
    <TouchableOpacity
      style={styles.accountControllsElement}
      onPress={item.onPress}>
      <View style={styles.iconContainer}>{item.icon}</View>
      <Text style={styles.label}>{t(item.label)}</Text>
      {!item.rightContent ? (
        <View style={[styles.iconContainer, styles.rightIcon]}>
          <ArrowRightIcon size={5} color={colors.tertiary} />
        </View>
      ) : (
        item.rightContent
      )}
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
