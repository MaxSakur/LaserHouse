import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {styles} from '../styles';
import {LanguageIcon} from '../../../../../icons/LanguageIcon';
import {BellIcon, InfoIcon} from '../../../../../icons';
import useModalContent from '../../../../../hooks/useModalContent';

const Divider = () => <View style={styles.divider} />;

export const AccountControls = () => {
  const {t} = useTranslation();

  const {open, ModalComponent} = useModalContent({
    header: null,
    headerBorder: false,
    isFullHeight: false,
    content: <View style={{height: 200}} />,
  });

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
      onPress: () => null,
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
