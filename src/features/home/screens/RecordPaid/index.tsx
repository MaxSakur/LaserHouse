import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NoContentIcon} from '../../../../icons';
import {colors, sizes, textStyles} from '../../../../theme';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  RecordsNavigationRoutes,
  RecordsStackParamList,
} from '../../../../types/navigation';

type RecordPreviousScreenNavigationProp = StackNavigationProp<
  RecordsStackParamList,
  'RecordPaid'
>;

interface RecordPreviousProps {
  navigation: RecordPreviousScreenNavigationProp;
}

export const RecordPaid: FC<RecordPreviousProps> = ({navigation}) => {
  const {t} = useTranslation();

  const handleNavigateToOperator = () => {
    navigation.navigate(RecordsNavigationRoutes.RecordSignUp);
  };

  return (
    <View style={styles.modal}>
      <NoContentIcon />

      <Text style={styles.label}>
        {t('recordsScreen.recordPaid.noRecordsLabel')}
      </Text>

      <Text style={styles.description}>
        {t('recordsScreen.noRecordsDescription')}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleNavigateToOperator}>
        <Text style={styles.buttonText}>
          {t('recordsScreen.contactWithOperator')}
        </Text>
      </TouchableOpacity>
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
    marginBottom: sizes.xxl,
  },
  button: {
    backgroundColor: colors.buttonAccent,
    padding: sizes.l,
    width: '100%',
    borderRadius: sizes.m,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
  },
});
