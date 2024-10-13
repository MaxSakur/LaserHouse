import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
import {colors, sizes} from '../../../../theme';
import {useTranslation} from 'react-i18next';

interface CustomCalendarDropdownProps {
  value: Date;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  onChange: (value: Date) => void;
}

export const CalendarDropdown: React.FC<CustomCalendarDropdownProps> = ({
  value,
  isModalOpen,
  setIsModalOpen,
  onChange,
}) => {
  const {t} = useTranslation();

  return (
    <>
      <TouchableOpacity
        style={[styles.input, isModalOpen && styles.focusedInput]}
        onPress={() => setIsModalOpen(true)}>
        <Text style={!value && styles.placeholder}>
          {!value
            ? t('registerScreen.personalData.dob')
            : format(value, 'dd.MM.yyyy')}
        </Text>
      </TouchableOpacity>

      <DatePicker
        modal
        open={isModalOpen}
        date={value || new Date()}
        mode="date"
        locale="uk"
        title={t('selectDate')}
        confirmText={t('approve')}
        maximumDate={new Date()}
        cancelText={t('cancel')}
        onConfirm={date => {
          setIsModalOpen(false);
          onChange(date);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.quaternary,
    padding: sizes.l,
    borderRadius: sizes.radius,
  },
  placeholder: {
    color: '#c5c5c7',
  },
  focusedInput: {
    backgroundColor: colors.uiBackground,
    borderColor: colors.white,
  },
});
