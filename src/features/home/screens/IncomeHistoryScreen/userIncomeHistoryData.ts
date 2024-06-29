// Коллекция должна быть иметь пагинацию и
// передавать массив транзакций одним списком сортированным по дате - cначала самые новые

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
    type: TransactionType.BONUS,
    amount: 150,
    currency: 'грн',
    time: '10:41',
    description: 'Нарахування бонусу',
    icon: 'bonus_icon_url',
    date: '2024-05-02',
  },
  {
    type: TransactionType.BONUS,
    amount: 20,
    currency: 'грн',
    time: '11:30',
    description: 'Нарахування бонусу',
    icon: 'bonus_icon_url',
    date: '2024-05-03',
  },
  {
    type: TransactionType.BONUS,
    amount: -120,
    currency: 'грн',
    time: '17:22',
    description: 'Нарахування бонусу',
    icon: 'bonus_icon_url',
    date: '2024-06-01',
  },
  {
    type: TransactionType.BONUS,
    amount: -120,
    currency: 'грн',
    time: '17:22',
    description: 'Нарахування бонусу',
    icon: 'bonus_icon_url',
    date: '2024-07-07',
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
];
