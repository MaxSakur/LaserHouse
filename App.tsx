import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import {NotifierWrapper} from 'react-native-notifier';
import './i18n';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NotifierWrapper>
        <AppNavigator />
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
};

export default App;
