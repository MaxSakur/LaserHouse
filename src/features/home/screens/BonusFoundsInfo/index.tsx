import React from 'react';
import {useTranslation, Trans} from 'react-i18next';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';

export const BonusFoundsInfo = () => {
  const {t} = useTranslation();

  const data = [
    {
      id: 1,
      title: 'bonusInfoModal.pointCalculationHeader',
      body: 'bonusInfoModal.pointCalculationBody',
    },
    {
      id: 2,
      title: 'bonusInfoModal.wayToUseHeader',
      body: 'bonusInfoModal.wayToUseBody',
      important: 'bonusInfoModal.wayToUseImportant',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{t('bonusInfoModal.title')}</Text>

      <View style={styles.content}>
        {data.map(item => (
          <React.Fragment key={item.id}>
            <Text style={styles.textBlockHeader}>{t(item.title)}</Text>
            <View style={styles.textBlockContent}>
              <View style={styles.dot} />
              <Text>
                <Trans
                  i18nKey={item.body}
                  components={{b: <Text style={styles.boldText} />}}
                />
              </Text>
              {item.important && (
                <Text>
                  <Trans
                    i18nKey={item.important}
                    components={{b: <Text style={styles.boldText} />}}
                  />
                </Text>
              )}
            </View>
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
};
