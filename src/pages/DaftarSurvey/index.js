import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {DummyIce, DummyShank, DummyShirohige} from '../../assets';
import {Gap, HomeProfile, ListSurvey} from '../../component';
import Fire from '../../config/Fire';
import {colors, fonts, showError} from '../../utility';

const DaftarSurvey = ({navigation}) => {
  const [listSurvey, setListSurvey] = useState([]);

  useEffect(() => {
    getSurvey();
  }, []);

  const getSurvey = () => {
    Fire.database()
      .ref('Register_Pengajuan/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setListSurvey(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

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
            {listSurvey.map(Register_Pengajuan => {
              return (
                <ListSurvey
                  key={Register_Pengajuan.id}
                  name={Register_Pengajuan.data.fullName}
                  address={Register_Pengajuan.data.address}
                  pengajuan={Register_Pengajuan.data.credit}
                  pic={{uri: Register_Pengajuan.data.photoSelfi}}
                  Status="Selesai"
                  onPress={() => navigation.navigate('Survey')}
                />
              );
            })}
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
