import React, {FC} from 'react';
import {Trans} from 'react-i18next';
import {Text, View} from 'react-native';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';

export const BonusQRCode: FC = () => {
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
        source={require('../../../../../../../assets/images/qr.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};
