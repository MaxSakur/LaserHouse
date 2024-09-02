import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, sizes} from '../../../../theme';
import {LetterIcon} from '../../../../icons';

interface ScreenHeaderProps {
  onPress?: () => void;
  withActiveDot: boolean;
}

export const NotificationsButton: React.FC<ScreenHeaderProps> = ({
  onPress,
  withActiveDot = true,
}) => {
  return (
    <View style={styles.rightIconContainer}>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        <LetterIcon size={20} />
        {withActiveDot && (
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rightIconContainer: {
    width: sizes.headerHeight,
    height: sizes.headerHeight,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconContainer: {
    width: sizes.headerHeight,
    height: sizes.headerHeight,
    backgroundColor: colors.notificationBackground,
    borderRadius: sizes.radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotContainer: {
    padding: sizes.s,
    width: sizes.md,
    height: sizes.md,
    position: 'absolute',
    top: (50 % -sizes.l) / 2,
    right: (50 % -sizes.md) / 2,
    backgroundColor: colors.notificationBackground,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: sizes.sm,
    height: sizes.sm,
    borderRadius: 100,
    backgroundColor: colors.buttonAccent,
  },
});
