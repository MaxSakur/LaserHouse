import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors, presets, sizes} from '../../../../theme';
import {ImageStyle} from 'react-native-fast-image';

interface Styles {
  accountScreen: ViewStyle;
  iconContainer: ViewStyle;
  accountControlls: ViewStyle;
  accountControllsList: ViewStyle;
  accountControllsElement: ViewStyle;
  divider: ViewStyle;
  image: ImageStyle;
  socials: ViewStyle;
  socialsList: ViewStyle;
  socialsTitle: TextStyle;
  logOut: ViewStyle;
  logOutText: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  accountScreen: {
    width: '100%',
    padding: sizes.l,
    justifyContent: 'space-between',
    height: '100%',
    gap: sizes.m,
  },
  accountControlls: {
    width: '100%',
    padding: sizes.m,
    paddingHorizontal: sizes.l,
    backgroundColor: colors.white,
    alignSelf: 'flex-start',
    borderRadius: sizes.l,
  },
  accountControllsList: {
    flexGrow: 0,
  },
  iconContainer: {
    padding: sizes.m,
    borderRadius: sizes.m,
    backgroundColor: colors.notificationBackground,
  },
  accountControllsElement: {
    flexDirection: 'row',
    gap: sizes.l,
    alignItems: 'center',
    paddingVertical: sizes.m,
    width: '100%',
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: sizes.s,
  },
  image: {
    height: sizes.xxxl,
    width: sizes.xxxl,
  },
  socials: {
    ...presets.flexCenter,
    gap: sizes.l,
  },
  socialsList: {
    gap: sizes.l,
  },
  socialsTitle: {
    color: colors.secondary,
  },
  logOut: {
    backgroundColor: colors.buttonAccent,
    padding: sizes.l,
    borderRadius: sizes.m,
  },
  logOutText: {
    color: colors.white,
    textAlign: 'center',
  },
});
