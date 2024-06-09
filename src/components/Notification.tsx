import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {colors, sizes} from '../theme';
import {ErrorIcon} from '../icons/ErrorIcon';
import {NotificationType} from '../hooks/useNotification';

interface WarningNotificationProps {
  type: NotificationType;
  message: string;
}

const WarningNotification: React.FC<WarningNotificationProps> = ({
  type,
  message,
}) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      {type === NotificationType.ERROR && <ErrorIcon />}
      <View style={styles.container}>
        <Text style={styles.description}>{message}</Text>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    marginHorizontal: sizes.xl,
  },
  container: {
    backgroundColor: colors.uiRedSecondary,
    borderRadius: sizes.s,
  },
  title: {color: 'white', fontWeight: 'bold'},
  description: {color: 'white'},
});

export default WarningNotification;
