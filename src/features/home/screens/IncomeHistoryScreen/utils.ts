import {uk, pl} from 'date-fns/locale';
import {format, parseISO} from 'date-fns';
import {Transaction} from '../../services/balanceService';

export const groupTransactionsByMonth = (transactions: Transaction[]) => {
  return transactions.reduce((acc, transaction) => {
    const month = transaction.date.slice(0, 7);
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(transaction);
    return acc;
  }, {} as {[key: string]: Transaction[]});
};

export const formatMonth = (month: string, language: string) => {
  const date = parseISO(`${month}-01`);
  const locale = language === 'uk' ? uk : language === 'pl' ? pl : uk;
  return format(date, 'LLLL yyyy', {locale});
};
