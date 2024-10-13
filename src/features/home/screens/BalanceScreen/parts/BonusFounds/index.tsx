import React, {FC, useEffect, useState} from 'react';
import {Trans, useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import {InfoIcon, BonusHystoryIcon} from '../../../../../../icons';
import {styles} from './styles';
import {colors} from '../../../../../../theme';
import {RouteService} from '../../../../../auth/services/routeService';
import {BalanceNavigationRoutes} from '../../../../../../types/navigation';
import {userService} from '../../../../services/userService'; // Импорт типов
import {
  BalanceResponse,
  balanceService,
} from '../../../../services/balanceService';

export const BonusFounds: FC = () => {
  const {t} = useTranslation();
  const [userData, setUserData] = useState<string>('');
  const [balance, setBalance] = useState<BalanceResponse>({
    value: 0,
    currency: '',
  });

  const handleOpenHistory = () => {
    RouteService.navigate(BalanceNavigationRoutes.incomeHistory);
  };

  const handleOpenBonusInfo = () => {
    RouteService.navigate(BalanceNavigationRoutes.bonusFounds);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, balanceResponse] = await Promise.all([
          userService.getUser(),
          balanceService.getBalance(),
        ]);

        setUserData(userResponse?.fullName || '');

        setTimeout(
          () =>
            setBalance({
              value: balanceResponse?.value || 0,
              currency: balanceResponse?.currency || '',
            }),
          500,
        );
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        <Trans
          i18nKey="balanceScreen.welcome"
          values={{name: userData}}
          components={{bold: <Text style={styles.boldText} />}}
        />
      </Text>

      <View style={styles.bonusInfo}>
        <Text style={styles.bonusLabel}>
          {t('balanceScreen.bonusInfoLabel')}
        </Text>
        <View style={styles.center}>
          {!balance.value ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.bonusValue}>
              <Trans
                i18nKey="balanceScreen.bonusValue"
                values={{
                  value: balance.value,
                  currency: balance.currency,
                }}
                components={{small: <Text style={styles.currency} />}}
              />
            </Text>
          )}
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
