import React, {useEffect, useState, useMemo} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Text,
  View,
  SectionList,
  ActivityIndicator,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {format, parseISO} from 'date-fns';

import {DebitIcon} from '../../../../icons/DebitIcon';
import {CreditIcon} from '../../../../icons/CreditIcon';
import {colors} from '../../../../theme';
import {IconWithinContainer} from '../../../../components/IconWithinContainer';
import {styles} from './styles';
import {groupTransactionsByMonth, formatMonth} from './utils';
import {
  Transaction,
  balanceService,
  TransactionType,
} from '../../services/balanceService';

interface Section {
  title: string;
  data: Transaction[];
}

export const HistoryIncomeScreen: React.FC = () => {
  const {i18n} = useTranslation();
  const language = i18n.language;

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await balanceService.getTransactions();
      if (data) {
        setTransactions(data);
        setError(null);
      } else {
        setError('Не удалось загрузить историю транзакций.');
      }
      setIsLoading(false);
    };

    fetchTransactions();
  }, []);

  const groupedTransactions = useMemo(
    () => groupTransactionsByMonth(transactions),
    [transactions],
  );

  const sections: Section[] = useMemo(
    () =>
      Object.keys(groupedTransactions)
        .sort((a, b) => (a > b ? -1 : 1))
        .map(month => ({
          title: formatMonth(month, language),
          data: groupedTransactions[month],
        })),
    [groupedTransactions, language],
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.centeredContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.centeredContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.historyIncomeScreen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}>
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => index + item.date}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.monthSection}>
              <Text style={styles.monthText}>{title}</Text>
            </View>
          )}
          renderItem={({item}) => (
            <View style={styles.dateItemContainer}>
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
                  <CreditIcon color={colors.white} />
                ) : (
                  <DebitIcon color={colors.white} />
                )}
              </IconWithinContainer>
              <TransactionItem transaction={item} />
            </View>
          )}
          contentContainerStyle={styles.scrolledContent}
          ListEmptyComponent={
            <View style={styles.centeredContainer}>
              <Text>Нет транзакций для отображения.</Text>
            </View>
          }
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const TransactionItem: React.FC<{
  transaction: Transaction;
}> = ({transaction}) => {
  const date = parseISO(transaction.date);

  return (
    <View style={styles.transactionItem}>
      <View style={styles.transactionItemBody}>
        <Text
          style={styles.transactionItemDescription}
          numberOfLines={1}
          ellipsizeMode="tail">
          {transaction.description}
        </Text>
        <Text style={styles.dateTime}>
          {format(date, 'dd.MM')} - {transaction.time}
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
