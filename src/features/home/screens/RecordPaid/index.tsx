import React, {FC, useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {NoContentIcon, PrevRedIcon} from '../../../../icons';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  RecordsNavigationRoutes,
  RecordsStackParamList,
} from '../../../../types/navigation';
import {PreviousRecord, recordsService} from '../../services/recordsService';
import {styles} from './styles';

type RecordPreviousScreenNavigationProp = StackNavigationProp<
  RecordsStackParamList,
  'RecordPaid'
>;

interface RecordPreviousProps {
  navigation: RecordPreviousScreenNavigationProp;
}

export const RecordPaid: FC<RecordPreviousProps> = ({navigation}) => {
  const {t} = useTranslation();

  const handleNavigateToOperator = () => {
    navigation.navigate(RecordsNavigationRoutes.RecordSignUp);
  };
  const [data, setData] = useState<PreviousRecord[]>([]);

  useEffect(() => {
    recordsService.getPaid().then(response => {
      if (response) {
        console.log('Paid records:', response.data);
        setData(response.data);
      }
    });
  }, []);

  return data.length ? (
    <ScrollView contentContainerStyle={styles.paidCollection}>
      {data.map((item, index) => {
        return (
          <View key={item.id + index} style={styles.paidRecord}>
            <PrevRedIcon />
            <View style={styles.paidCollectionElement}>
              <Text style={styles.location}>{item.location}:</Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.doctor}>{item.doctor}</Text>
              <Text style={styles.dateTime}>{item.dateTime}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  ) : (
    <View style={styles.modal}>
      <NoContentIcon />

      <Text style={styles.label}>
        {t('recordsScreen.recordPaid.noRecordsLabel')}
      </Text>

      <Text style={styles.description}>
        {t('recordsScreen.noRecordsDescription')}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleNavigateToOperator}>
        <Text style={styles.buttonText}>
          {t('recordsScreen.contactWithOperator')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
