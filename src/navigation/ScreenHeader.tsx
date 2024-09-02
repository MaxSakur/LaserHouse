import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {colors, sizes, textStyles} from '../theme';
import {LeftArrowIcon} from '../icons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  LoggedInNavigationRoutes,
  RootStackParamList,
} from '../types/navigation';
import {NotificationsButton} from '../features/home/components/buttons/NotificationButton';
import {notificationsData} from '../features/home/screens/NotificationsScreen/apiStaticData';
import FastImage from 'react-native-fast-image';

interface ScreenHeaderProps {
  title?: string;
  withBackButton?: boolean;
  withMessagesIndicator?: boolean;
}

type NavigationProps = NavigationProp<RootStackParamList>;
export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  withBackButton = false,
  withMessagesIndicator = true,
}) => {
  const navigation = useNavigation<NavigationProps>();

  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateToNotification = () => {
    navigation.navigate(LoggedInNavigationRoutes.notifications, {
      data: notificationsData,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.leftIconContainer}>
          {withBackButton ? (
            <TouchableOpacity onPress={navigateBack}>
              <LeftArrowIcon />
            </TouchableOpacity>
          ) : (
            <FastImage
              style={styles.logo}
              source={require('../../assets/images/logo.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          )}
        </View>

        <View style={styles.middleSection}>
          {title && <Text style={styles.title}>{title}</Text>}
        </View>

        {withMessagesIndicator && (
          <NotificationsButton
            onPress={navigateToNotification}
            withActiveDot={true}
          />
        )}
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
    paddingHorizontal: sizes.m,
    marginVertical: sizes.s,
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
  logo: {
    height: sizes.headerHeight,
    width: sizes.headerHeight,
  },
  leftIconContainer: {
    width: sizes.headerHeight,
    height: sizes.headerHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
