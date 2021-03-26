import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {fonts, colors} from '../../utility';
import {ListSurvey, Header, HomeProfile, Gap} from '../../component';
import {DummyNasabah1, DummyNasabah2} from '../../assets';

const DaftarSurvey = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Gap height={5} />
      <HomeProfile name="Spongebob" job="Surveyor" />

      <Text style={styles.welcome}>List Survey</Text>

      <View style={styles.content}>
        <ListSurvey
          name="Untung Surapati"
          address="Jln. Gang Senggol"
          pic={DummyNasabah1}
        />
        <ListSurvey
          name="H.R Muhammad"
          address="Jln. Surya Sejahtera 20"
          pic={DummyNasabah2}
        />
      </View>
    </View>
  );
};

export default DaftarSurvey;

const styles = StyleSheet.create({
  page: {
    padding: 15,
  },
  text: {
    fontSize: 60,
    fontFamily: fonts.primary[700],
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
});
