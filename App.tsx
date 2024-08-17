import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import {NotifierWrapper} from 'react-native-notifier';
import './i18n';
import {LogLevel, OneSignal} from 'react-native-onesignal';

const App = () => {
  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize('e8784bc8-9cd9-41ef-8ca7-f60321aea724');

  // requestPermission will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  OneSignal.Notifications.requestPermission(true);

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal: notification clicked:', event);
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NotifierWrapper>
        <AppNavigator />
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
};

export default App;
