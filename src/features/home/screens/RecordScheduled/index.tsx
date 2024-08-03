import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NoContentIcon} from '../../../../icons';
import {colors, sizes, textStyles} from '../../../../theme';
import {useTranslation} from 'react-i18next';

export const RecordScheduled: FC = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.modal}>
      <NoContentIcon />

      <Text style={styles.label}>
        {t('recordsScreen.recordScheduled.noRecordsLabel')}
      </Text>

      <Text style={styles.description}>
        {t('recordsScreen.noRecordsDescription')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    marginTop: sizes.l,
    padding: sizes.l,
    paddingVertical: sizes.xxl,
    alignItems: 'center',
    marginHorizontal: sizes.m,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    gap: sizes.m,
  },
  label: {
    ...textStyles.title2,
    textAlign: 'center',
    marginBottom: sizes.m,
  },
  description: {
    ...textStyles.body2,
    textAlign: 'center',
    color: colors.secondary,
  },
});
