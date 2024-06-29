import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors, textStyles, presets, sizes} from '../../../../theme';

interface Styles {
  historyIncomeScreen: ViewStyle;
  scrolledContent: ViewStyle;
  monthSection: ViewStyle;
  monthText: TextStyle;
  iconContainer: ViewStyle;
  dateItemContainer: ViewStyle;
  dateItemBorder: ViewStyle;
  transactionItem: ViewStyle;
  transactionItemBody: ViewStyle;
  transactionItemDescription: TextStyle;
  dateTime: TextStyle;
  transactionItemValue: TextStyle;
  borderedTransactionItem: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  historyIncomeScreen: {
    flex: 1,
  },
  scrolledContent: {
    minHeight: '100%',
    backgroundColor: colors.white,
  },
  monthSection: {
    paddingHorizontal: sizes.xl,
    backgroundColor: colors.white,
  },
  monthText: {
    ...textStyles.sectionLabel,
    paddingVertical: sizes.l,
    textTransform: 'capitalize',
  },
  iconContainer: {
    ...presets.flexCenter,
    width: sizes.headerHeight,
    height: sizes.headerHeight,
    borderRadius: sizes.radius,
  },
  dateItemContainer: {
    flexDirection: 'row',
    paddingHorizontal: sizes.xl,
    backgroundColor: colors.white,
    gap: sizes.l,
    paddingTop: sizes.m,
  },
  dateItemBorder: {
    paddingBottom: sizes.m,
  },
  transactionItem: {
    flex: 1,
    flexDirection: 'row',
  },
  transactionItemBody: {
    flex: 1,
    gap: sizes.s,
    height: '100%',
  },
  dateTime: {
    ...textStyles.body2,
    color: colors.tertiary,
  },
  transactionItemDescription: {
    ...textStyles.headline2,
    color: colors.primary,
  },
  transactionItemValue: {
    ...textStyles.title2,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  borderedTransactionItem: {
    borderColor: colors.quaternary,
    borderBottomWidth: 1,
  },
});
