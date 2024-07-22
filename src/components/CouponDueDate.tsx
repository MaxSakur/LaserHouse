import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import {ClockIcon} from '../icons';
import {colors, sizes, textStyles} from '../theme';

type Props = {
  date: string;
};

const CouponDueDate: React.FC<Props> = ({date}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.timer}>
      <ClockIcon />
      <Text style={styles.dueDate}>
        {t('couponsScreen.couponDueDate', {date})}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizes.s,
    borderWidth: 1,
    borderColor: colors.primary,
    alignSelf: 'flex-start',
    padding: sizes.s / 2,
    borderRadius: 100,
  },
  dueDate: {
    ...textStyles.dueDate,
  },
});

export default CouponDueDate;
