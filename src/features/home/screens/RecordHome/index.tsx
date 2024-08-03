import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NoContentIcon} from '../../../../icons';
import {colors, sizes, textStyles} from '../../../../theme';
import {useTranslation} from 'react-i18next';

export const RecordHome: FC = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.modal}>
      <NoContentIcon />

      <Text style={styles.label}>
        {t('recordsScreen.recordHome.noRecordsLabel')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    marginTop: sizes.l,
    padding: sizes.l,
    alignItems: 'center',
    marginHorizontal: sizes.m,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },
  label: {
    ...textStyles.title2,
    textAlign: 'center',
  },
});
