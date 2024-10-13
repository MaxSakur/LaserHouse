import React, {FC, useEffect} from 'react';
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
  'RecordPrevious'
>;

interface RecordPreviousProps {
  navigation: RecordPreviousScreenNavigationProp;
}

export const RecordPrevious: FC<RecordPreviousProps> = ({navigation}) => {
  const {t} = useTranslation();
  const [data, setData] = React.useState<PreviousRecord[]>([]);
  useEffect(() => {
    recordsService.getPrevious().then(response => {
      if (response) {
        console.log('Previous records:', response.data);
        setData(response.data);
      }
    });
  }, []);
  const handleNavigateToOperator = () => {
    navigation.navigate(RecordsNavigationRoutes.RecordSignUp);
  };

  return data.length ? (
    <ScrollView contentContainerStyle={styles.prevCollection}>
      {data.map((item, index) => {
        return (
          <View key={item.id + index} style={styles.prevRecord}>
            <PrevRedIcon />
            <View style={styles.prevCollectionElement}>
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
        {t('recordsScreen.recordPrevious.noRecordsLabel')}
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
