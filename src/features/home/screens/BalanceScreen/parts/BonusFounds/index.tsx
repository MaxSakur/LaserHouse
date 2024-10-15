import React from 'react';
import {Trans, useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {InfoIcon, BonusHystoryIcon} from '../../../../../../icons';
import {styles} from './styles';
import {colors} from '../../../../../../theme';
import {RouteService} from '../../../../../auth/services/routeService';
import {BalanceNavigationRoutes} from '../../../../../../types/navigation';

import {useSelector} from 'react-redux';
import {RootState} from '../../../../../../store';

export const BonusFounds: React.FC = () => {
  const {t} = useTranslation();
  const fullName = useSelector((state: RootState) => state.user.fullName);

  const handleOpenHistory = () => {
    RouteService.navigate(BalanceNavigationRoutes.incomeHistory);
  };

  const handleOpenBonusInfo = () => {
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
        <View style={styles.center}>
          <Text style={styles.bonusValue}>
            <Trans
              i18nKey="balanceScreen.bonusValue"
              values={{
                value: 100,
                currency: '$',
              }}
              components={{small: <Text style={styles.currency} />}}
            />
          </Text>
        </View>

        <TouchableOpacity
          style={styles.infoButton}
          onPress={handleOpenBonusInfo}>
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
