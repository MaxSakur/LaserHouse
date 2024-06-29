export enum TransactionType {
  BONUS = 'bonus',
  WITHDRAWAL = 'withdrawal',
}

export interface Transaction {
  type: TransactionType;
  amount: number;
  currency: string;
  time: string;
  description: string;
  icon: string;
  date: string;
}

export const transactionsData: Transaction[] = [
  {
    type: TransactionType.WITHDRAWAL,
    amount: -60,
    currency: 'грн',
    time: '20:30',
    description: 'Списання коштів',
    icon: 'withdrawal_icon_url',
    date: '2024-08-20',
  },
  {
    type: TransactionType.WITHDRAWAL,
    amount: -50,
    currency: 'грн',
    time: '19:01',
    description: 'Списання коштів',
    icon: 'withdrawal_icon_url',
    date: '2024-08-15',
  },
  {
    type: TransactionType.BONUS,
    amount: 110,
    currency: 'грн',
    time: '16:45',
    description: 'Нарахування бонусу',
    icon: 'bonus_icon_url',
    date: '2024-07-10',
  },
  {
    type: TransactionType.BONUS,
    amount: 120,
    currency: 'грн',
    time: '17:22',
    description: 'Нарахування бонусу',
    icon: 'bonus_icon_url',
    date: '2024-07-07',
  },
  {
    type: TransactionType.BONUS,
    amount: 130,
    currency: 'грн',
    time: '18:15',
    description: 'Нарахування бонусу',
    icon: 'bonus_icon_url',
    date: '2024-06-10',
  },
  {
    type: TransactionType.BONUS,
    amount: 120,
    currency: 'грн',
    time: '17:22',
    description: 'Нарахування бонусу',
    icon: 'bonus_icon_url',
    date: '2024-06-01',
  },
  {
    type: TransactionType.BONUS,
    amount: 50,
    currency: 'грн',
    time: '14:20',
    description: 'Нарахування бонусу',
    icon: 'bonus_icon_url',
    date: '2024-05-05',
  },
  {
    type: TransactionType.BONUS,
    amount: 100,
    currency: 'грн',
    time: '09:30',
    description: 'Нарахування бонусу',
    icon: 'bonus_icon_url',
    date: '2024-05-04',
  },
  {
    type: TransactionType.WITHDRAWAL,
    amount: -50,
    currency: 'грн',
    time: '19:01',
    description: 'Списання коштів',
    icon: 'withdrawal_icon_url',
    date: '2024-05-03',
  },
  {
    type: TransactionType.BONUS,
    amount: 150,
    currency: 'грн',
    time: '10:41',
    description: 'Нарахування бонусу',
    icon: 'bonus_icon_url',
    date: '2024-05-02',
  },
];
