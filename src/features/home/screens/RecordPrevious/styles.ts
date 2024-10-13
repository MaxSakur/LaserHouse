import {colors, sizes, textStyles} from '../../../../theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    marginTop: sizes.l,
    padding: sizes.l,
    paddingVertical: sizes.xxl,
    alignItems: 'center',
    marginHorizontal: sizes.m,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    gap: sizes.m,
  },
  label: {
    ...textStyles.title2,
    textAlign: 'center',
    marginBottom: sizes.m,
  },
  description: {
    ...textStyles.body2,
    textAlign: 'center',
    color: colors.secondary,
    marginBottom: sizes.xxl,
  },
  button: {
    backgroundColor: colors.buttonAccent,
    padding: sizes.l,
    width: '100%',
    borderRadius: sizes.m,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
  },
  prevCollection: {
    gap: sizes.m,
    paddingHorizontal: sizes.m,
    marginTop: sizes.l,
  },
  prevRecord: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    padding: sizes.l,
    gap: sizes.m,
    borderRadius: sizes.radius,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  prevCollectionElement: {},
  location: {
    ...textStyles.body1,
    paddingBottom: sizes.s,
  },
  name: {
    ...textStyles.body2,
    fontWeight: 'bold',
  },
  doctor: {
    ...textStyles.body2,
    color: colors.tertiary,
  },
  dateTime: {
    ...textStyles.body2,
    color: colors.tertiary,
  },
});
