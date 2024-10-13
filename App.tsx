import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
// import {NotifierWrapper} from 'react-native-notifier';
import './i18n';
import {LogLevel, OneSignal} from 'react-native-onesignal';
import preloadVideo from './assets/video/waitscreen.mp4';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store';

const App = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  //  OneSignal initialization
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  OneSignal.initialize('e8784bc8-9cd9-41ef-8ca7-f60321aea724');
  OneSignal.Notifications.requestPermission(true);
  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal: notification clicked:', event);
  });

  const STOP_TIME = 3000;

  useEffect(() => {
    const stopTimer = setTimeout(() => {
      setVideoEnded(true);
    }, STOP_TIME);

    return () => {
      clearTimeout(stopTimer);
    };
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* <NotifierWrapper> */}
      {videoEnded ? (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppNavigator />
          </PersistGate>
        </Provider>
      ) : (
        <Video
          source={{uri: preloadVideo}}
          style={styles.video}
          resizeMode="cover"
          onEnd={() => setVideoEnded(true)}
          muted={false}
          repeat={false}
        />
      )}
      {/* </NotifierWrapper> */}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default App;
