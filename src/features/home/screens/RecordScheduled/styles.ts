import {StyleSheet} from 'react-native';
import {colors, presets, sizes, textStyles} from '../../../../theme';

export const styles = StyleSheet.create({
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
  dayTime: {
    gap: sizes.s,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizes.s,
  },
  calendar: {
    margin: sizes.m,
    padding: sizes.l,
    paddingTop: 0,
    marginBottom: 0,
    borderRadius: sizes.radius,
  },
  dayContainer: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markedDay: {
    borderColor: colors.buttonAccent,
    backgroundColor: colors.buttonAccent,
  },
  dayText: {
    fontFamily: textStyles.body2.fontFamily,
    fontSize: textStyles.body2.fontSize,
    color: colors.primary,
  },
  headerText: {
    ...textStyles.headline2,
    textAlign: 'center',
    color: colors.primary,
    fontWeight: 'bold',
    lineHeight: 52,
  },
  records: {
    padding: sizes.m,
    gap: sizes.l,
  },
  scheduledRecord: {
    ...presets.shadow,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    padding: sizes.l,
    gap: sizes.l,
    borderRadius: sizes.radius,
  },
  location: {
    ...textStyles.body1,
    paddingBottom: sizes.s,
  },
  link: {
    ...textStyles.body1,
    textDecorationColor: colors.uiGradientBlue,
    textDecorationLine: 'underline',
    color: colors.uiGradientBlue,
    paddingBottom: sizes.s,
  },
  name: {
    ...textStyles.body2,
    fontWeight: 'bold',
  },
  doctor: {
    ...textStyles.body2,
    color: colors.tertiary,
  },
  dateTime: {
    ...textStyles.body2,
    color: colors.tertiary,
  },
});
