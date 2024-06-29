import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Text,
  View,
  SectionList,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {format, parseISO} from 'date-fns';
import {uk, pl} from 'date-fns/locale';
import {
  Transaction,
  TransactionType,
  transactionsData,
} from './userIncomeHistoryData';
import {DebitIcon} from '../../../../icons/DebitIcon';
import {colors} from '../../../../theme';
import {IconWithinContainer} from '../../../../components/IconWithinContainer';
import {styles} from './styles';
import {CreditIcon} from '../../../../icons/CreditIcon';

const TransactionItem: React.FC<{
  transaction: Transaction;
  isLastItem: boolean;
}> = ({transaction, isLastItem}) => {
  return (
    <View
      style={[
        styles.transactionItem,
        !isLastItem && styles.borderedTransactionItem,
      ]}>
      <View style={styles.transactionItemBody}>
        <Text
          style={styles.transactionItemDescription}
          numberOfLines={1}
          ellipsizeMode="tail">
          {transaction.description}
        </Text>
        <Text style={styles.dateTime}>
          {format(transaction.date, 'dd.MM - ')}
          {transaction.time}
        </Text>
      </View>

      <Text
        style={[
          styles.transactionItemValue,
          {
            color:
              transaction.type === TransactionType.BONUS
                ? colors.uiGradientGreen
                : colors.uiRedSecondary,
          },
        ]}>
        {transaction.amount} {transaction.currency}
      </Text>
    </View>
  );
};

const groupTransactionsByMonth = (transactions: Transaction[]) => {
  return transactions.reduce((acc, transaction) => {
    const month = transaction.date.slice(0, 7);
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(transaction);
    return acc;
  }, {} as {[key: string]: Transaction[]});
};

const formatMonth = (month: string, language: string) => {
  const date = parseISO(`${month}-01`);
  const locale = language === 'uk' ? uk : language === 'pl' ? pl : uk;
  return format(date, 'LLLL yyyy', {locale});
};

export const HistoryIncomeScreen: React.FC = () => {
  const {i18n} = useTranslation();
  const language = i18n.language;
  const groupedTransactions = groupTransactionsByMonth(transactionsData);

  const sections = Object.keys(groupedTransactions)
    .sort((a, b) => (a > b ? -1 : 1))
    .map(month => ({
      title: formatMonth(month, language),
      data: groupedTransactions[month],
    }));

  return (
    <SafeAreaView style={styles.historyIncomeScreen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SectionList
          sections={sections}
          keyExtractor={(_, index) => index.toString()}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.monthSection}>
              <Text style={styles.monthText}>{title}</Text>
            </View>
          )}
          renderItem={({item, index, section}) => {
            const isLastItem = index === section.data.length - 1;
            return (
              <View
                style={[
                  styles.dateItemContainer,
                  isLastItem && styles.dateItemBorder,
                ]}>
                <IconWithinContainer
                  containerStyle={[
                    styles.iconContainer,
                    {
                      backgroundColor:
                        item.type === TransactionType.BONUS
                          ? colors.uiGradientGreen
                          : colors.uiRedSecondary,
                    },
                  ]}>
                  {item.type === TransactionType.BONUS ? (
                    <CreditIcon />
                  ) : (
                    <DebitIcon />
                  )}
                </IconWithinContainer>
                <TransactionItem transaction={item} isLastItem={isLastItem} />
              </View>
            );
          }}
          contentContainerStyle={styles.scrolledContent}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
