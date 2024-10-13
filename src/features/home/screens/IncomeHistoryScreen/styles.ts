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
  centeredContainer: ViewStyle;
  errorText: TextStyle;
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
    borderRadius: sizes.radius,
  },
  dateItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizes.xl,
    backgroundColor: colors.white,
    gap: sizes.l,
    paddingTop: sizes.s,
  },
  dateItemBorder: {
    paddingBottom: sizes.m,
  },
  transactionItem: {
    flex: 1,
    flexDirection: 'row',
  },
  transactionItemBody: {
    gap: sizes.s,
    justifyContent: 'space-around',
    marginRight: sizes.l,
    flex: 1,
  },
  dateTime: {
    ...textStyles.body2,
    color: colors.tertiary,
    justifyContent: 'flex-end',
  },
  transactionItemDescription: {
    ...textStyles.headline2,
    color: colors.primary,
  },
  transactionItemValue: {
    ...textStyles.title2,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    alignSelf: 'flex-start',
  },
  borderedTransactionItem: {
    borderColor: colors.quaternary,
    borderBottomWidth: 1,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: colors.uiRedSecondary,
    fontSize: 16,
  },
});
