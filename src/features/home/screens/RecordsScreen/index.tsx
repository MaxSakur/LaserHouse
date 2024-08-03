import React, {FC} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  ArrowRightIcon,
  RecordHomeIcon,
  RecordPaidIcon,
  RecordPreviousIcon,
  RecordScheduledIcon,
  RecordSignUpIcon,
} from '../../../../icons';
import {useTranslation} from 'react-i18next';
import {colors, presets, sizes, textStyles} from '../../../../theme';
import {
  RecordsNavigationRoutes,
  RecordsStackParamList,
} from '../../../../types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';

interface RecordScreenProps {
  navigation: StackNavigationProp<RecordsStackParamList>;
}

const RecordOptions = [
  {
    route: RecordsNavigationRoutes.RecordSignUp,
    icon: <RecordSignUpIcon />,
    iconGradient: ['#FF5F77', '#FF1744'],
    title: 'recordsScreen.recordSignUp.title',
    description: 'recordsScreen.recordSignUp.description',
  },
  {
    route: RecordsNavigationRoutes.RecordScheduled,
    icon: <RecordScheduledIcon />,
    iconGradient: ['#6EAFFF', '#007AFF'],
    title: 'recordsScreen.recordScheduled.title',
    description: 'recordsScreen.recordScheduled.description',
  },
  {
    route: RecordsNavigationRoutes.RecordPrevious,
    icon: <RecordPreviousIcon />,
    iconGradient: ['#FF5F77', '#FF1744'],
    title: 'recordsScreen.recordPrevious.title',
    description: 'recordsScreen.recordPrevious.description',
  },
  {
    route: RecordsNavigationRoutes.RecordPaid,
    icon: <RecordPaidIcon />,
    iconGradient: ['#D36BF8', '#862DCD'],
    title: 'recordsScreen.recordPaid.title',
    description: 'recordsScreen.recordPaid.description',
  },
  {
    route: RecordsNavigationRoutes.RecordHome,
    icon: <RecordHomeIcon />,
    iconGradient: ['#FF4882', '#FF4882'],
    title: 'recordsScreen.recordHome.title',
    description: 'recordsScreen.recordHome.description',
  },
];

export const RecordScreen: FC<RecordScreenProps> = ({navigation}) => {
  const {t} = useTranslation();

  const handleNavigate = (route: keyof RecordsStackParamList) => {
    navigation.navigate(route);
  };

  return (
    <ScrollView style={styles.container}>
      {RecordOptions.map((option, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => handleNavigate(option.route)}
            style={styles.optionContainer}>
            <LinearGradient
              colors={option.iconGradient}
              style={styles.iconContainer}>
              {option.icon}
            </LinearGradient>
            <View style={styles.info}>
              <Text style={styles.title}>{t(option.title)}</Text>
              <Text style={styles.description}>{t(option.description)}</Text>
            </View>
            <View style={styles.rightIconContainer}>
              <ArrowRightIcon color={colors.tertiary} />
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.l,
  },
  optionContainer: {
    marginBottom: sizes.l,
    alignItems: 'center',
    flexDirection: 'row',
    gap: sizes.m,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.m,
    paddingVertical: sizes.l,
    borderRadius: sizes.radius,
  },
  iconContainer: {
    ...presets.shadow,
    ...presets.flexCenter,
    borderRadius: sizes.radius,
    padding: sizes.md,
    backgroundColor: colors.white,
  },
  info: {
    flex: 1,
    gap: sizes.s,
    justifyContent: 'space-between',
  },
  title: {
    ...textStyles.sectionLabel,
  },
  description: {
    ...textStyles.body2,
    color: colors.tertiary,
  },
  rightIconContainer: {
    ...presets.flexCenter,
    backgroundColor: colors.divider,
    padding: sizes.s,
    borderRadius: 100,
    width: sizes.xl,
    height: sizes.xl,
  },
});
