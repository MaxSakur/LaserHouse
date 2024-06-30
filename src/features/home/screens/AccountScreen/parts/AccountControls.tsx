import React from 'react';
import {Text, View} from 'react-native';

const data = [
  {label: 'accountScreen.chooseLanguage', onPress: () => null},
  {label: 'accountScreen.pushMessages', onPress: () => null},
  {label: 'accountScreen.aboutCompany', onPress: () => null},
  {label: 'accountScreen.logOut', onPress: () => null},
];

export const AccountControls = () => {
  return (
    <View>
      {data.map((item, index) => (
        <View key={index}>
          <Text>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};
