import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LeftArrowIcon} from '../../../../icons/LeftArrowIcon';
import {presets, sizes} from '../../../../theme';

const BackButton: React.FC = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}>
      <LeftArrowIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    ...presets.flexCenter,
    marginLeft: sizes.l,
  },
});

export default BackButton;
