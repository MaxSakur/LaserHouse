// https://api.lh.ua/balance/transactions-history

import api from '../../../api';

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

export interface BalanceResponse {
  value: number;
  currency: string;
}

export const balanceService = {
  getBalance: async (): Promise<BalanceResponse | null> => {
    try {
      const response = await api.get('balance');
      const {data} = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching balance data:', error);
      return null;
    }
  },
  getTransactions: async (): Promise<any | null> => {
    try {
      const response = await api.get('balance/transactions-history');
      console.log('response', response);
      const {data} = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  },
};
