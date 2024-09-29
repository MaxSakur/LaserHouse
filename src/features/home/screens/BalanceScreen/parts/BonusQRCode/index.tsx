import React, {FC} from 'react';
import {Trans, useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';

export const BonusQRCode: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {i18n} = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        <Trans
          i18nKey="balanceScreen.bonusQRCode"
          components={{bold: <Text style={styles.boldText} />}}
        />
      </Text>

      <FastImage
        style={styles.image}
        source={require('../../../../../../../assets/images/code.jpg')}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};
