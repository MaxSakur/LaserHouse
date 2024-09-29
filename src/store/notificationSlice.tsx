// notificationSlice.ts

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface Notification {
  id: string;
  title: string;
  body: string;
}

interface NotificationState {
  notifications: Notification[];
}

const initialState: NotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification(state, action: PayloadAction<Notification>) {
      state.notifications.push(action.payload);
    },
    removeNotification(state, action: PayloadAction<string>) {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload,
      );
    },
    clearNotifications(state) {
      state.notifications = [];
    },
  },
});

export const {addNotification, removeNotification, clearNotifications} =
  notificationSlice.actions;

export const selectAllNotifications = (state: RootState) =>
  state.notification.notifications;

export default notificationSlice.reducer;
