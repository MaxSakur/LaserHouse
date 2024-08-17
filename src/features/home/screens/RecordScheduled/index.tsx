import React, {FC, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NoContentIcon, PrevRedIcon} from '../../../../icons';
import {colors, presets, sizes, textStyles} from '../../../../theme';
import {useTranslation} from 'react-i18next';
import {Calendar, DateData, LocaleConfig} from 'react-native-calendars';
import 'dayjs/locale/uk';
import {dates} from './RecordScheduledData';
import dayjs from 'dayjs';
import {DayState} from 'react-native-calendars/src/types';
import {calendarLocalePl, calendarLocaleUa} from './CalendarLocale';

LocaleConfig.locales.uk = calendarLocaleUa;
LocaleConfig.locales.pl = calendarLocalePl;
LocaleConfig.defaultLocale = 'uk';

export const RecordScheduled: FC = () => {
  const {t} = useTranslation();
  const [selected, setSelected] = useState<string | null>(null);
  const [markedDates, setMarkedDates] = useState<{
    [key: string]: {
      marked: boolean;
      dotColor: string;
      selected?: boolean;
      selectedColor?: string;
    };
  }>({});
  const [currentMonth, setCurrentMonth] = useState<string>(
    dayjs().format('YYYY-MM'),
  );

  useEffect(() => {
    const fetchFakeData = async () => {
      const result = dates.reduce(
        (
          acc: {
            [key: string]: {
              marked: boolean;
              dotColor: string;
              selected?: boolean;
              selectedColor?: string;
            };
          },
          curr,
        ) => {
          const date = dayjs(curr.dateTime).format('YYYY-MM-DD');
          acc[date] = {
            marked: true,
            dotColor: colors.primary,
          };
          return acc;
        },
        {},
      );
      setMarkedDates(result);
    };

    fetchFakeData();
  }, []);

  const renderDay = ({date, state}: {date: DateData; state: string}) => {
    const dayString = date.dateString;
    const isMarked = markedDates[dayString];

    return (
      <View style={[styles.dayContainer, isMarked && styles.markedDay]}>
        <Text
          style={[
            styles.dayText,
            state === 'disabled' && {color: colors.secondary},
            isMarked && {color: colors.white},
          ]}>
          {date.day}
        </Text>
      </View>
    );
  };

  return Object.keys(markedDates).length === 0 ? (
    <View style={styles.modal}>
      <NoContentIcon />

      <Text style={styles.label}>
        {t('recordsScreen.recordScheduled.noRecordsLabel')}
      </Text>

      <Text style={styles.description}>
        {t('recordsScreen.noRecordsDescription')}
      </Text>
    </View>
  ) : (
    <View>
      <Calendar
        style={styles.calendar}
        onDayPress={(day: DateData) => {
          setSelected(day.dateString);
        }}
        onMonthChange={(month: DateData) => {
          setCurrentMonth(dayjs(month.dateString).format('YYYY-MM'));
        }}
        markedDates={{
          ...markedDates,
          [selected || '']: {
            selected: true,
            selectedColor: colors.primary,
          },
        }}
        dayComponent={({date, state}: {date: DateData; state: DayState}) =>
          renderDay({date, state})
        }
        theme={{
          selectedDayBackgroundColor: colors.primary,
          selectedDayTextColor: colors.white,
          todayTextColor: colors.primary,
          arrowColor: colors.primary,
          monthTextColor: colors.primary,
          indicatorColor: colors.primary,
          textDayFontFamily: textStyles.body2.fontFamily,
          textMonthFontFamily: textStyles.body2.fontFamily,
          textDayHeaderFontFamily: textStyles.body2.fontFamily,
          textDayFontSize: textStyles.body2.fontSize,
          textMonthFontSize: textStyles.headline2.fontSize,
          textDayHeaderFontSize: textStyles.body2.fontSize,
        }}
        hideExtraDays={true}
        hideDayNames={true}
        firstDay={1}
        renderHeader={(date: Date) => {
          const formattedDate = dayjs(date).locale('uk').format('MMMM YYYY');
          const capitalizedDate =
            formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
          return <Text style={styles.headerText}>{capitalizedDate}</Text>;
        }}
      />

      <ScrollView contentContainerStyle={styles.records}>
        {dates
          .filter(
            date => dayjs(date.dateTime).format('YYYY-MM') === currentMonth,
          )
          .map((date, index) => (
            <View key={date.id + index} style={styles.scheduledRecord}>
              <PrevRedIcon />
              <View>
                <Text style={styles.location}>{date.location}:</Text>
                <Text style={styles.link}>{date.addressLink}</Text>
                <Text style={styles.name}>{date.name}</Text>
                <Text style={styles.doctor}>{date.doctor}</Text>
                <Text style={styles.dateTime}>
                  {dayjs(date.dateTime).locale('uk').format('HH:mm')} -{' '}
                  {dayjs(date.dateTime)
                    .add(date.duration, 'minute')
                    .locale('uk')
                    .format('HH:mm')}
                </Text>
              </View>
            </View>
          ))}
      </ScrollView>
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
  calendar: {
    margin: sizes.l,
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
    padding: sizes.l,
    gap: sizes.l,
  },
  scheduledRecord: {
    ...presets.shadow,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    padding: sizes.l,
    gap: sizes.m,
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
