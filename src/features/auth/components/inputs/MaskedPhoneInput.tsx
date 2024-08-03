import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {colors, presets, sizes, textStyles} from '../../../../theme';
import FastImage from 'react-native-fast-image';
import {DropDownIcon} from '../../../../icons';
import {useTranslation} from 'react-i18next';

interface MaskedPhoneInputProps {
  value: string;
  onChange: (text: string) => void;
  isMajor?: boolean;
}

export const MaskedPhoneInput: React.FC<MaskedPhoneInputProps> = ({
  value,
  onChange,
  isMajor = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [maskedValue, setMaskedValue] = useState<string>();
  const [isLocationModalVisible, setIsLocationModalVisible] = useState(false);
  const [location, setLocation] = useState<'ua' | 'pl'>('ua');
  const {t} = useTranslation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChangeText = (text: string) => {
    setMaskedValue(text);
    onChange(text);
  };

  useEffect(() => {
    setLocation('ua');
    setMaskedValue('+380 ');
  }, []);

  const uaFlagPath = require('../../../../../assets/images/flags/flag-ua.png');
  const plFlagPath = require('../../../../../assets/images/flags/flag-pl.png');

  const toggleLocationModal = () => {
    setIsLocationModalVisible(!isLocationModalVisible);
    Animated.timing(fadeAnim, {
      toValue: isLocationModalVisible ? 0 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const handleLocationChange = (code: 'ua' | 'pl') => {
    if (code === 'ua') {
      setLocation('ua');
      setMaskedValue('+380 ');
    } else {
      setLocation('pl');
      setMaskedValue('+48 ');
    }
    setIsLocationModalVisible(false);
    fadeAnim.setValue(0);
  };

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity
        style={styles.languageSwitcher}
        onPress={toggleLocationModal}>
        <FastImage
          style={styles.image}
          source={location === 'ua' ? uaFlagPath : plFlagPath}
          resizeMode={FastImage.resizeMode.contain}
        />
        <DropDownIcon size={32} />
      </TouchableOpacity>
      <TextInputMask
        type={'custom'}
        options={{
          mask: location === 'ua' ? '+380 (99) *** ** **' : '+48 (99) *** ****',
        }}
        style={[
          styles.input,
          isFocused && styles.focusedInput,
          value.length > 0 && styles.withContentInput,
          isMajor && styles.majorInput,
        ]}
        value={maskedValue}
        onChangeText={handleChangeText}
        onFocus={handleFocus}
        onBlur={() => setIsFocused(false)}
      />
      {isLocationModalVisible ? (
        <Animated.View style={[styles.locationModal, {opacity: fadeAnim}]}>
          <TouchableOpacity
            style={styles.locationModalElement}
            onPress={() => handleLocationChange('ua')}>
            <FastImage
              style={styles.image}
              source={uaFlagPath}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.locationModalElementLocation}>{t('ua')}</Text>
            <Text style={styles.locationModalElementCode}>+380</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.locationModalElement}
            onPress={() => handleLocationChange('pl')}>
            <FastImage
              style={styles.image}
              source={plFlagPath}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.locationModalElementLocation}>{t('pl')}</Text>
            <Text style={styles.locationModalElementCode}>+48</Text>
          </TouchableOpacity>
        </Animated.View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    gap: sizes.l,
  },
  locationModal: {
    ...presets.shadow,
    position: 'absolute',
    backgroundColor: colors.white,
    paddingVertical: sizes.m,
    marginHorizontal: sizes.s,
    left: 0,
    right: 0,
    alignSelf: 'center',
    gap: sizes.m,
    top: 60,
    borderRadius: sizes.radius,
  },
  locationModalElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.l,
    alignItems: 'center',
    gap: sizes.l,
  },
  locationModalElementLocation: {
    ...textStyles.body2,
    textAlign: 'left',
    flex: 1,
  },
  locationModalElementCode: {
    ...textStyles.body2,
    color: colors.secondary,
  },
  languageSwitcher: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizes.l,
    justifyContent: 'center',
    paddingLeft: sizes.l,
    borderRadius: sizes.radius,
    backgroundColor: colors.uiBackground,
  },
  image: {
    height: sizes.xl,
    width: sizes.xl,
  },
  input: {
    backgroundColor: colors.uiBackground,
    padding: sizes.l,
    borderRadius: sizes.radius,
    flex: 1,
  },
  withContentInput: {
    borderColor: 'transparent',
    backgroundColor: colors.uiBackground,
  },
  majorInput: {
    ...textStyles.headline2,
    padding: sizes.l,
  },
  focusedInput: {
    borderColor: 'transparent',
    ...presets.shadow,
  },
});
