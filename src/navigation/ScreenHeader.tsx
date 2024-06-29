import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {colors, sizes, textStyles} from '../theme';
import {LeftArrowIcon, LetterIcon} from '../icons';
import {useNavigation} from '@react-navigation/native';
// import api from '../api'; // Uncomment this line if you have an API module

interface ScreenHeaderProps {
  title?: string;
  withBackButton?: boolean;
}

const REFRESH_INTERVAL = 60000;

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  withBackButton = false,
}) => {
  const navigation = useNavigation();
  const [isGotNewMessages, setIsGotNewMessages] = useState(false);

  const navigateBack = () => {
    navigation.goBack();
  };

  const handleNavigateTo = () => {
    setIsGotNewMessages(false);
    // Replace with your actual navigation logic
    // navigation.navigate('Messages');
  };

  useEffect(() => {
    let prevMessagesCount = 0;

    const fetchMessages = async () => {
      try {
        // Replace with your actual API call
        // const messages = await api.getMessages();
        const messages = 4;
        const newMessagesLength = messages;

        if (newMessagesLength > 0 && newMessagesLength !== prevMessagesCount) {
          setIsGotNewMessages(true);
        }

        prevMessagesCount = newMessagesLength;
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchMessages();

    const intervalId = setInterval(fetchMessages, REFRESH_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.leftIconContainer}>
          {withBackButton && (
            <TouchableOpacity onPress={navigateBack}>
              <LeftArrowIcon />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.middleSection}>
          {title && <Text style={styles.title}>{title}</Text>}
        </View>

        <View style={styles.rightIconContainer}>
          <TouchableOpacity
            style={[
              styles.iconContainer,
              isGotNewMessages && {
                backgroundColor: colors.notificationBackground,
              },
            ]}
            onPress={handleNavigateTo}>
            <LetterIcon />
            {isGotNewMessages && <View style={styles.dot} />}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.white,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: sizes.headerHeight + sizes.s,
    paddingHorizontal: sizes.l,
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...textStyles.headline1,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.primary,
  },
  leftIconContainer: {
    width: sizes.headerHeight,
    height: sizes.headerHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    borderRadius: sizes.radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    position: 'absolute',
    top: sizes.s,
    right: sizes.s,
    width: sizes.m,
    height: sizes.m,
    borderRadius: 100,
    backgroundColor: colors.buttonAccent,
  },
});
