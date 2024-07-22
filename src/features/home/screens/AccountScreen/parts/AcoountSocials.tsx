import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, FlatList} from 'react-native';
import {styles} from '../styles';
import FastImage from 'react-native-fast-image';

const data = [
  {
    path: require('./../../../../../../assets/images/social/viber.png'),
    onPress: () => null,
  },
  {
    path: require('./../../../../../../assets/images/social/telegram.png'),
    onPress: () => null,
  },
  {
    path: require('./../../../../../../assets/images/social/instagram.png'),
    onPress: () => null,
  },
  {
    path: require('./../../../../../../assets/images/social/youtube.png'),
    onPress: () => null,
  },
  {
    path: require('./../../../../../../assets/images/social/facebook.png'),
    onPress: () => null,
  },
];

export const AccountSocials = () => {
  const {t} = useTranslation();

  const renderItem = ({item}: {item: (typeof data)[0]}) => (
    <FastImage
      style={styles.image}
      source={item.path}
      resizeMode={FastImage.resizeMode.contain}
    />
  );

  return (
    <View style={styles.socials}>
      <Text style={styles.socialsTitle}>{t('accountScreen.socialMedias')}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.socialsList}
      />
    </View>
  );
};
