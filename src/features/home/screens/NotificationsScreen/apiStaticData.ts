import {INotification} from '../../../../types/navigation';

// Оповещения будут делаться каждую минуту , но мы может это обсудить.
// Можно попробовать через WebSocket

export type INotification = {
  id: string;
  title: string;
  date: string;
  isReaded: boolean;
  onClick: () => void;
};

export const notificationsData: INotification[] = [
  {
    id: '1',
    title:
      'Маєте запис на завтра!\nПідтвердити/змінити запис:\nc.lh.ua/wdqdzccda',
    date: '2024-09-01T14:35:00',
    isReaded: false,
    onClick: () => {
      console.log('Notification 1 clicked');
    },
  },
  {
    id: '2',
    title: 'Тільки для вас!\nЗнижка -25 на Ендосферу',
    date: '2024-05-12T00:00:00',
    isReaded: true,
    onClick: () => {
      console.log('Notification 2 clicked');
    },
  },
  {
    id: '3',
    title:
      'Маєте запис на завтра!\nПідтвердити/змінити запис:\nc.lh.ua/wdqdzccda',
    date: '2024-04-22T00:00:00',
    isReaded: false,
    onClick: () => {
      console.log('Notification 3 clicked');
    },
  },
];
