import React, {FC} from 'react';
import {Trans, useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {InfoIcon, BonusHystoryIcon} from '../../../../../../icons';
import {styles} from './styles';
import {colors} from '../../../../../../theme';
import {RouteService} from '../../../../../auth/services/routeService';
import {BalanceNavigationRoutes} from '../../../../../../types/navigation';

const testData = {
  value: 300,
  currency: '₴',
};

const fullName = 'Давиденко Іван Іванович';

export const BonusFounds: FC = () => {
  const {t} = useTranslation();

  const handleOpenHistory = () => {
    RouteService.navigate(BalanceNavigationRoutes.incomeHistory);
  };

  const handleOpenBunusInfo = () => {
    RouteService.navigate(BalanceNavigationRoutes.bonusFounds);
  };

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
              value: testData.value,
              currency: testData.currency,
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
    </View>
  );
};
