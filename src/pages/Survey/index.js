import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Gap, Header, List, ProfileNasabah} from '../../component';

const Survey = ({navigation}) => {
  return (
    <View>
      <Header title="Survey" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={15} />
        <ProfileNasabah />
        <List
          type="next"
          desc="Biodata"
          icon="biodata"
          onPress={() => navigation.navigate('SurveyBiodata')}
        />
        <List
          type="next"
          desc="Agunan"
          icon="agunan"
          onPress={() => navigation.navigate('Agunan')}
        />
        <List
          type="next"
          desc="Sumber Penghasilan"
          icon="sumber penghasilan"
          onPress={() => navigation.navigate('JenisPenghasilan')}
        />
        <List
          type="next"
          desc="Pengeluaran"
          icon="pengeluaran"
          onPress={() => navigation.navigate('Pengeluaran')}
        />
        <List
          type="next"
          desc="Foto"
          icon="foto"
          onPress={() => navigation.navigate('Picture')}
        />

        <Gap height={140} />
      </ScrollView>
    </View>
  );
};

export default Survey;

const styles = StyleSheet.create({});
