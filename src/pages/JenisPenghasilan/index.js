import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Header, List} from '../../component';

const JenisPenghasilan = ({navigation}) => {
  return (
    <View>
      <Header title="Jenis Penghasilan" onPress={() => navigation.goBack()} />
      <Gap height={30} />
      <List
        type="next"
        desc="Gaji"
        icon="gaji"
        onPress={() => navigation.navigate('Pasangan')}
      />
      <List
        type="next"
        desc="Usaha"
        icon="usaha"
        onPress={() => navigation.navigate('PasanganU')}
      />
      {/* <List type="next" desc="Usaha dan Gaji" icon="campuran"/> */}
    </View>
  );
};

export default JenisPenghasilan;

const styles = StyleSheet.create({});
