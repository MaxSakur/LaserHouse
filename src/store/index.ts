// ./src/store/index.ts

import {configureStore} from '@reduxjs/toolkit';
import notificationReducer from './notificationSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const notificationPersistConfig = {
  key: 'notification',
  storage: AsyncStorage,
};

const persistedNotificationReducer = persistReducer(
  notificationPersistConfig,
  notificationReducer,
);

export const store = configureStore({
  reducer: {
    notification: persistedNotificationReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
