import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {colors, presets, sizes, textStyles} from '../../../theme';
import {CheckedIcon, UnCheckedIcon} from '../../../icons';

interface PrivacyAgreementProps {
  isApproved: boolean;
  onCheckBoxClick: () => void;
  onLinkClick: () => void;
}

export const PrivacyAgreement: React.FC<PrivacyAgreementProps> = ({
  isApproved,
  onCheckBoxClick,
  onLinkClick,
}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onCheckBoxClick}
        style={styles.checkboxContainer}>
        {isApproved ? <CheckedIcon /> : <UnCheckedIcon />}
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>{t('registerScreen.privacyAgreement')}</Text>
        <TouchableOpacity onPress={onLinkClick}>
          <Text style={[styles.text, styles.accentText]}>
            {t('registerScreen.privacyAgreementNext')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  checkboxContainer: {
    ...presets.flexCenter,
    marginRight: sizes.s,
  },
  text: {
    ...textStyles.body1,
    color: colors.quaternary,
  },
  accentText: {
    color: colors.buttonAccent,
  },
});
