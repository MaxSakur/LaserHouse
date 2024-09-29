import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {NotificationsButton} from '../../components/buttons/NotificationButton';
import {colors, sizes, textStyles} from '../../../../theme';
import {INotification, RootStackParamList} from '../../../../types/navigation';
import {formatDate} from '../../../../utils/dayTime';
import {NavigationProp, RouteProp} from '@react-navigation/native';

interface INotificationsScreenProps {
  route: RouteProp<RootStackParamList, 'Notifications'>;
  navigation: NavigationProp<RootStackParamList, 'Notifications'>;
}

export const NotificationsScreen: React.FC<INotificationsScreenProps> = ({
  route,
}) => {
  const data = route.params.data as INotification[];

  const handleNotificationPress = (notification: INotification) => {
    // Реализуйте необходимую логику при нажатии на уведомление
    // Например, навигация на подробности уведомления
    // navigation.navigate('NotificationDetail', { notificationId: notification.id });
  };

  const renderItem = ({item}: {item: INotification}) => (
    <TouchableOpacity
      onPress={() => handleNotificationPress(item)}
      style={styles.notification}>
      <NotificationsButton withActiveDot={!item.isReaded} />
      <Text style={styles.notificationText}>{item.title}</Text>
      <Text style={styles.notificationTime}>{formatDate(item.date)}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.white,
    margin: sizes.l,
    padding: sizes.m,
    borderRadius: sizes.radius,
    minHeight: Dimensions.get('window').height - sizes.headerHeight * 4,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: sizes.s,
    gap: sizes.l,
    paddingVertical: sizes.md,
    borderBottomColor: colors.divider,
    borderBottomWidth: 1,
  },
  notificationText: {
    ...textStyles.body2,
    flex: 1,
  },
  notificationTime: {
    ...textStyles.body2,
    color: colors.tertiary,
  },
});
