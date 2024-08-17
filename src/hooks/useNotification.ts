import {Notifier} from 'react-native-notifier';
import Notification from '../components/Notification';

export enum NotificationType {
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

const useNotification = () => {
  const showNotification = (type: NotificationType, message: string) => {
    Notifier.showNotification({
      duration: 10000,
      Component: Notification,
      componentProps: {
        type,
        message,
      },
    });
  };

  return {showNotification};
};

export default useNotification;
