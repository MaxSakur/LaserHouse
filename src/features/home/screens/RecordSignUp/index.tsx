import React, {FC, useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {addresses, IAddress, Socials} from './RecordSignUpData';
import {colors, sizes, textStyles} from '../../../../theme';
import {useTranslation} from 'react-i18next';
import {
  LocationIcon,
  BorderedDropDownIcon,
  CheckedIcon,
  UnCheckedIcon,
} from '../../../../icons';
import FastImage from 'react-native-fast-image';
import useModalContent from '../../../../hooks/useModalContent';
import {RecordsSignUpModal} from './parts/RecordsSignUpModal';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  RecordsNavigationRoutes,
  RecordsStackParamList,
} from '../../../../types/navigation';

const BreakLineText: FC<{mainText: string; boldText: string}> = ({
  mainText,
  boldText,
}) => (
  <Text style={styles.consultant}>
    {mainText}
    {'\n'}
    <Text style={styles.boldText}>{boldText}</Text>
  </Text>
);

type RecordSignUpProp = StackNavigationProp<
  RecordsStackParamList,
  'RecordSignUp'
>;

export const RecordSignUp: FC = () => {
  const [adressesData, setAdressesData] = useState<IAddress[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<IAddress | null>(null);
  const [activeSocial, setActiveSocial] = useState<Socials>();
  const {t} = useTranslation();
  const closeRef = useRef<() => void>(() => {});
  const navigation = useNavigation<RecordSignUpProp>();

  const {open, ModalComponent} = useModalContent({
    header: null,
    headerBorder: false,
    content: (
      <RecordsSignUpModal
        close={closeRef.current}
        data={adressesData}
        onChange={setSelectedAddress}
      />
    ),
  });

  useEffect(() => {
    const fetchAddresses = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAdressesData(addresses);
    };

    fetchAddresses();
  }, []);

  const handleSignUp = () => {
    // API CALL
    console.log(
      'activeSocial',
      activeSocial,
      'selectedAddress',
      selectedAddress,
    );

    navigation.navigate(RecordsNavigationRoutes.RecordsMain);
  };
  const handleOpenModal = () => {
    open();
  };

  const handleActiveSocial = (social: Socials) => {
    setActiveSocial(social);
  };

  return (
    <ScrollView contentContainerStyle={styles.containerPositioning}>
      <View style={styles.container}>
        <Text style={styles.screenNote}>
          {t('recordsScreen.recordSignUp.note')}
        </Text>

        <View style={styles.stage}>
          <Text style={styles.pointLabel}>
            1. {t('recordsScreen.recordSignUp.chooseCenterLabel')}
          </Text>
          <TouchableOpacity
            style={styles.highLightContainer}
            onPress={handleOpenModal}>
            <Text style={styles.chooseCenterLabel}>
              {t('recordsScreen.recordSignUp.chooseCenter')}
            </Text>
            <View style={styles.row}>
              <LocationIcon />
              <Text
                style={styles.address}
                numberOfLines={1}
                ellipsizeMode="tail">
                {selectedAddress
                  ? `${selectedAddress?.city}, ${selectedAddress?.street}`
                  : ''}
              </Text>
              <BorderedDropDownIcon />
            </View>
          </TouchableOpacity>
        </View>

        {selectedAddress && (
          <View style={styles.stage}>
            <Text style={styles.pointLabel}>
              2. {t('recordsScreen.recordSignUp.chooseMessengerLabel')}
            </Text>

            <TouchableOpacity
              style={styles.consultantContainer}
              onPress={() => handleActiveSocial(Socials.Viber)}>
              <FastImage
                style={styles.socialImage}
                source={require('./../../../../../assets/images/social/viber.png')}
              />
              <BreakLineText
                mainText={
                  t('recordsScreen.recordSignUp.viberConsultant').split(
                    '<bold>',
                  )[0]
                }
                boldText={
                  t('recordsScreen.recordSignUp.viberConsultant')
                    .split('<bold>')[1]
                    .split('</bold>')[0]
                }
              />
              {activeSocial === Socials.Viber ? (
                <CheckedIcon />
              ) : (
                <UnCheckedIcon />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.consultantContainer}
              onPress={() => handleActiveSocial(Socials.Telegram)}>
              <FastImage
                style={styles.socialImage}
                source={require('./../../../../../assets/images/social/telegram.png')}
              />
              <BreakLineText
                mainText={
                  t('recordsScreen.recordSignUp.telegramConsultant').split(
                    '<bold>',
                  )[0]
                }
                boldText={
                  t('recordsScreen.recordSignUp.telegramConsultant')
                    .split('<bold>')[1]
                    .split('</bold>')[0]
                }
              />
              {activeSocial === Socials.Telegram ? (
                <CheckedIcon />
              ) : (
                <UnCheckedIcon />
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={[
          styles.signUpButton,
          !activeSocial && {backgroundColor: colors.uiRed},
        ]}
        onPress={handleSignUp}
        disabled={!activeSocial}>
        <Text style={styles.signUpButtonText}>
          {t('recordsScreen.recordSignUp.signUp')}
        </Text>
      </TouchableOpacity>
      {ModalComponent}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerPositioning: {
    flexGrow: 1,
    paddingVertical: sizes.l,
    paddingHorizontal: sizes.m,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  screenNote: {
    ...textStyles.body2,
    color: colors.secondary,
    paddingHorizontal: sizes.l,
    paddingBottom: sizes.xl,
  },
  stage: {marginBottom: sizes.xxl},
  pointLabel: {
    ...textStyles.body2,
    color: colors.primary,
    paddingHorizontal: sizes.l,
    paddingBottom: sizes.l,
  },
  highLightContainer: {
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    justifyContent: 'center',
    gap: sizes.m,
    paddingVertical: sizes.md,
  },
  chooseCenterLabel: {
    ...textStyles.body1,
    fontWeight: '500',
    paddingHorizontal: sizes.xl,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.divider,
    padding: sizes.m,
    marginHorizontal: sizes.l,
    borderRadius: sizes.radius,
  },
  address: {textAlign: 'left', flex: 1, paddingLeft: sizes.m},
  socialImage: {
    width: sizes.xxl,
    height: sizes.xxl,
  },
  consultantContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: sizes.m,
    padding: sizes.l,
    marginBottom: sizes.l,
  },
  consultant: {
    color: colors.secondary,
    flex: 1,
    textAlign: 'left',
  },
  boldText: {
    fontWeight: 'bold',
    color: colors.primary,
  },
  signUpButton: {
    backgroundColor: colors.buttonAccent,
    padding: sizes.l,
    borderRadius: sizes.m,
  },
  signUpButtonText: {
    color: colors.white,
    textAlign: 'center',
  },
});
