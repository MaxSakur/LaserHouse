import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles';
import {authService} from '../../../../auth/services/authService';
import {RouteService} from '../../../../auth/services/routeService';
import {AuthNavigationRoutes} from '../../../../../types/navigation';
import {colors, sizes} from '../../../../../theme';

export const AccountLogOut = () => {
  const {t} = useTranslation();

  const handleClearUser = () => {
    authService.removeToken();
    RouteService.reset(AuthNavigationRoutes.login);
  };
  return (
    <View style={{gap: sizes.l}}>
      <TouchableOpacity style={styles.logOut} onPress={handleClearUser}>
        <Text style={styles.logOutText}>{t('accountScreen.logout')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.logOut, {backgroundColor: 'transparent'}]}
        onPress={() => null}
        disabled={true}>
        <Text style={[styles.logOutText, {color: colors.tertiary}]}>
          {t('accountScreen.deleteAccount')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
