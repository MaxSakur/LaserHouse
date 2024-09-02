import {INotification} from '../../../../types/navigation';

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
