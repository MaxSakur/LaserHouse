import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
import {colors, sizes} from '../../../../theme';

interface CustomCalendarDropdownProps {
  value: Date;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  onChange: (value: Date) => void;
}

export const CustomCalendarDropdown: React.FC<CustomCalendarDropdownProps> = ({
  value,
  isModalOpen,
  setIsModalOpen,
  onChange,
}) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.input, isModalOpen && styles.focusedInput]}
        onPress={() => setIsModalOpen(true)}>
        <Text>{format(value, 'dd-MM HH:MM:SS')}</Text>
      </TouchableOpacity>

      <DatePicker
        modal
        open={isModalOpen}
        date={value}
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
  focusedInput: {
    backgroundColor: colors.uiBackground,
    borderColor: colors.white,
  },
});
