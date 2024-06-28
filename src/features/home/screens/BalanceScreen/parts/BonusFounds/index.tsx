import React, {FC} from 'react';
import {Trans, useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {InfoIcon, BonusHystoryIcon} from '../../../../../../icons';
import {styles} from './styles';
import {colors} from '../../../../../../theme';
import useModalContent from '../../../../../../hooks/useModalContent';
import BonusInfoModal from '../BonusInfoModal';

interface IBonusFounds {
  fullName: string;
  bonusFounds: {
    value: number;
    currency: string;
  };
}

// API
const testData = {
  value: 300,
  currency: '₴',
};

export const BonusFounds: FC<IBonusFounds> = ({
  fullName,
  bonusFounds = testData,
}) => {
  const {t} = useTranslation();

  const {open, ModalComponent} = useModalContent({
    headerText: t('bonusInfoModal.modalTitle'),
    content: <BonusInfoModal />,
  });

  const handleOpenHistory = () => {
    // navigation.navigate('BonusHistory');
  };

  const handleOpenBunusInfo = () => open();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        <Trans
          i18nKey="balanceScreen.welcome"
          values={{name: fullName}}
          components={{bold: <Text style={styles.boldText} />}}
        />
      </Text>

      <View style={styles.bonusInfo}>
        <Text style={styles.bonusLabel}>
          {t('balanceScreen.bonusInfoLabel')}
        </Text>

        <Text style={styles.bonusValue}>
          <Trans
            i18nKey="balanceScreen.bonusValue"
            values={{
              value: bonusFounds.value,
              currency: bonusFounds.currency,
            }}
            components={{small: <Text style={styles.currency} />}}
          />
        </Text>

        <TouchableOpacity
          style={styles.infoButton}
          onPress={handleOpenBunusInfo}>
          <InfoIcon />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.bonusHistory} onPress={handleOpenHistory}>
        <BonusHystoryIcon color={colors.white} />
        <Text style={styles.bonusHistoryLabel}>
          {t('balanceScreen.bonusHistoryLabel')}
        </Text>
      </TouchableOpacity>
      {ModalComponent}
    </View>
  );
};
