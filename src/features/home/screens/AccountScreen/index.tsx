import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

import {AccountControls} from './parts/AccountControls';
import {AccountSocials} from './parts/AcoountSocials';
import {AccountLogOut} from './parts/AccountLogout';

export const AccountScreen: React.FC = () => {
  return (
    <View style={styles.accountScreen}>
      <AccountControls />
      <AccountSocials />
      <AccountLogOut />
    </View>
  );
};
