import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {colors, sizes, textStyles} from '../../../../theme';

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  items: {label: string; value: string}[];
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  value,
  onChange,
  items,
}) => {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        value={value}
        onValueChange={onChange}
        items={items}
        style={{
          ...pickerSelectStyles,
          iconContainer: {
            top: 10,
            right: 12,
          },
        }}
        useNativeAndroidPickerStyle={false}
        placeholder={{}}
        Icon={() => {
          return <Text style={styles.icon}>▼</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.quaternary,
    borderRadius: sizes.radius,
    backgroundColor: colors.uiBackground,
  },
  icon: {
    fontSize: 20,
    color: colors.quaternary,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 50,
    paddingHorizontal: sizes.l,
    paddingVertical: sizes.s,
    borderWidth: 1,
    borderColor: colors.quaternary,
    borderRadius: sizes.radius,
    color: 'black',
    ...textStyles.body1,
  },
  inputAndroid: {
    height: 50,
    paddingHorizontal: sizes.l,
    paddingVertical: sizes.s,
    borderWidth: 1,
    borderColor: colors.quaternary,
    borderRadius: sizes.radius,
    color: 'black',
    ...textStyles.body1,
  },
  placeholder: {
    color: colors.quaternary,
  },
});

export default CustomDropdown;
