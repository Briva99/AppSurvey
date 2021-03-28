import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {DummyIce, DummyShank, DummyShirohige} from '../../assets';
import {Gap, HomeProfile, ListSurvey} from '../../component';
import {colors, fonts} from '../../utility';

const DaftarSurvey = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wripper}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>List Survey</Text>
          </View>

          <View style={styles.content}>
            <ListSurvey
              name="Portgas D Ace"
              address="Jln. Gang Senggol"
              pengajuan="Rp. 20.000.000"
              pic={DummyIce}
              onPress={() => navigation.navigate('Survey')}
            />
            <ListSurvey
              name="Shank"
              address="Jln. Surya Sejahtera 20"
              pengajuan="Rp. 50.000.000"
              pic={DummyShank}
              onPress={() => navigation.navigate('Survey')}
            />
            <ListSurvey
              name="Edward Newgate (Shirohige)"
              address="Jln. Samping Sana"
              pengajuan="Rp. 40.000.000"
              pic={DummyShirohige}
              onPress={() => navigation.navigate('Survey')}
            />
            <ListSurvey
              name="Shank"
              address="Jln. Surya Sejahtera 20"
              pengajuan="Rp. 150.000.000"
              pic={DummyShank}
              onPress={() => navigation.navigate('Survey')}
            />
            <ListSurvey
              name="Portgas D Ace"
              address="Jln. Gang Senggol"
              pengajuan="Rp. 120.000.000"
              pic={DummyIce}
              onPress={() => navigation.navigate('Survey')}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DaftarSurvey;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
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
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wripper: {
    paddingHorizontal: 16,
  },
});
