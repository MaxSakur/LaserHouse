import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, FlatList, TouchableOpacity, Linking} from 'react-native';
import {styles} from '../styles';
import FastImage from 'react-native-fast-image';

const data = [
  {
    path: require('./../../../../../../assets/images/social/telegram.png'),
    url: 'https://t.me/lazerhouse_ukraine',
  },
  {
    path: require('./../../../../../../assets/images/social/instagram.png'),
    url: 'https://www.instagram.com/lazerhouseukraine?igsh=ZGE1cG12aDB2ZW05',
  },
  {
    path: require('./../../../../../../assets/images/social/youtube.png'),
    url: 'https://www.youtube.com/@lazerhousemd',
  },
  {
    path: require('./../../../../../../assets/images/social/facebook.png'),
    url: 'https://www.facebook.com/lazerhouseukraine/',
  },
];

export const AccountSocials = () => {
  const {t} = useTranslation();

  const handlePress = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const renderItem = ({item}: {item: (typeof data)[0]}) => (
    <TouchableOpacity onPress={() => handlePress(item.url)}>
      <FastImage
        style={styles.image}
        source={item.path}
        resizeMode={FastImage.resizeMode.contain}
      />
    </TouchableOpacity>
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
