import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {colors, presets, sizes} from '../theme';
import {ErrorIcon} from '../icons/ErrorIcon';
import {NotificationType} from '../hooks/useNotification';

interface WarningNotificationProps {
  type: NotificationType;
  message: string;
}

// const getContainerStyle = (type: NotificationType) => {
//   switch (type) {
//     case NotificationType.ERROR:
//       // return styles.errorContainer;

// const getContainerIcon = (type: NotificationType) => {
//   switch (type) {
//     case NotificationType.ERROR:
//       return <ErrorIcon />;
//     case NotificationType.INFO:
//       // return <InfoIcon />;
//     case NotificationType.WARNING:
//       // return <WarningIcon />;
//     default:
//       return null;
//   }

// }

const WarningNotification: React.FC<WarningNotificationProps> = ({
  type,
  message,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[
          styles.container,
          type === NotificationType.INFO && styles.success,
        ]}>
        <View style={styles.iconContainer}>
          {type === NotificationType.ERROR && <ErrorIcon />}
        </View>
        <Text
          style={[
            styles.description,
            type === NotificationType.INFO && styles.successDescription,
          ]}>
          {message}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    marginHorizontal: sizes.xl,
  },
  container: {
    backgroundColor: colors.uiRedSecondary,
    borderRadius: sizes.l,
    flexDirection: 'row',
    gap: sizes.l,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizes.l,
  },
  iconContainer: {
    ...presets.flexCenter,
  },
  success: {
    backgroundColor: colors.success,
  },
  description: {color: colors.buttonAccent},
  successDescription: {color: colors.white},
});

export default WarningNotification;
