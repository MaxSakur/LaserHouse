import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles';
import {authService} from '../../../../auth/services/authService';
import {RouteService} from '../../../../auth/services/routeService';
import {AuthNavigationRoutes} from '../../../../../types/navigation';

export const AccountLogOut = () => {
  const {t} = useTranslation();

  const handleClearUser = () => {
    authService.removeToken();
    RouteService.reset(AuthNavigationRoutes.login);
  };
  return (
    <TouchableOpacity style={styles.logOut} onPress={handleClearUser}>
      <Text style={styles.logOutText}>{t('accountScreen.logout')}</Text>
    </TouchableOpacity>
  );
};
