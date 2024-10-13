import {StyleSheet} from 'react-native';
import {colors, sizes, textStyles} from '../../../../../../theme';

export const styles = StyleSheet.create({
  container: {
    padding: sizes.l,
    backgroundColor: colors.buttonAccent,
  },
  welcomeText: {
    ...textStyles.headline1,
    color: colors.white,
  },
  boldText: {
    ...textStyles.verificationCode,
  },
  image: {
    height: 100,
  },
  bonusInfo: {
    marginVertical: sizes.l,
    backgroundColor: colors.white,
    borderRadius: sizes.m,
    padding: sizes.l,
    gap: sizes.xxl,
  },
  bonusLabel: {
    ...textStyles.headline1,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginHorizontal: sizes.xxl,
  },
  bonusValue: {
    ...textStyles.mainValue,
    color: colors.buttonAccent,
    fontWeight: '700',
    textAlign: 'center',
  },
  currency: {
    ...textStyles.currency,
    color: colors.buttonAccent,
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bonusHistory: {
    flexDirection: 'row',
    gap: sizes.l,
    justifyContent: 'center',
  },

  bonusHistoryLabel: {
    ...textStyles.headline2,
    color: colors.white,
  },

  infoButton: {
    position: 'absolute',
    top: sizes.l,
    right: sizes.l,
  },
});
