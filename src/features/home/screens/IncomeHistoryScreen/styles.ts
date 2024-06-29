import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors, textStyles, presets, sizes} from '../../../../theme';

interface Styles {
  historyIncomeScreen: ViewStyle;
  scrolledContent: ViewStyle;
  monthSection: ViewStyle;
  monthText: TextStyle;
  iconContainer: ViewStyle;
  icon: ViewStyle;
  dateItemContainer: ViewStyle;
  transactionItem: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  historyIncomeScreen: {
    flex: 1,
  },
  scrolledContent: {
    minHeight: '100%',
  },
  monthSection: {
    paddingHorizontal: sizes.xl,
    backgroundColor: colors.white,
  },
  monthText: {
    ...textStyles.sectionLabel,
    paddingVertical: sizes.m,
    textTransform: 'capitalize',
  },
  dateItem: {
    flexDirection: 'row',
    ...presets.shadow,
  },
  iconContainer: {
    ...presets.flexCenter,
    borderRadius: sizes.radius,
  },
  icon: {
    height: 55,
    width: 55,
    padding: sizes.s,
  },
  dateItemContainer: {
    flexDirection: 'row',
    paddingHorizontal: sizes.xl,
    backgroundColor: colors.white,
    gap: sizes.l,
  },
  transactionItem: {
    flex: 1,
    padding: sizes.s,
  },
});
