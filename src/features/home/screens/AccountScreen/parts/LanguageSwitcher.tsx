import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {colors, sizes, textStyles} from '../../../../../theme';
import {CheckedIcon, UnCheckedIcon} from '../../../../../icons';

const languages = [
  {code: 'ua', label: 'Українська'},
  {code: 'pl', label: 'Polski'},
];

export const LanguageSwitcher: React.FC = () => {
  const {i18n} = useTranslation();

  const currentLanguage = i18n.language;

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <View style={styles.container}>
      {languages.map(lang => (
        <TouchableOpacity
          key={lang.code}
          onPress={() => handleLanguageChange(lang.code)}
          style={styles.languageOption}>
          {currentLanguage === lang.code ? <CheckedIcon /> : <UnCheckedIcon />}

          <Text
            style={[
              styles.languageLabel,
              currentLanguage === lang.code && styles.selectedLanguage,
            ]}>
            {lang.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
  },
  languageOption: {
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    paddingTop: sizes.m,
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageLabel: {
    ...textStyles.body2,
    paddingBottom: 12,
  },
  selectedLanguage: {
    color: colors.uiGradientBlue,
  },
});
