import moment from 'moment';

export const formatDate = (dateString: string) => {
  const date = moment(dateString);
  const today = moment().startOf('day');
  const yesterday = moment().subtract(1, 'days').startOf('day');
  const tomorrow = moment().add(1, 'days').startOf('day');

  if (date.isSame(today, 'day')) {
    return 'сьогодні';
  }
  if (date.isSame(yesterday, 'day')) {
    return 'вчора';
  }
  if (date.isSame(tomorrow, 'day')) {
    return 'завтра';
  }

  return date.format('DD.MM.YYYY');
};
