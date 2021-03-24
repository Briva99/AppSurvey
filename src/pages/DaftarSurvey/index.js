import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {fonts, colors} from '../../utility';
import {ListSurvey,Header} from '../../component';
import {DummyPic1, DummyPic2} from '../../assets';

const DaftarSurvey = ()=> {
  return (
    <View style={styles.page}>
    <Header onPress={() => navigation.goBack()} title="Daftar Survey" />
      <View style={styles.content}>
        <ListSurvey
          
          name="Untung Surapati"
          address="Jln. Gang Senggol"
          pic={DummyPic1}
        />
        <ListSurvey
          
          name="H.R Muhammad"
          address="Jln. Surya Sejahtera 20"
          pic={DummyPic2}
        />
        
      </View>
    </View>
  );
};

export default DaftarSurvey;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  background: {height: 240, paddingTop: 30},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
});
