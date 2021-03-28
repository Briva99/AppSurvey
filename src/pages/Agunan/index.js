import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Header, List} from '../../component';

const Agunan = ({navigation}) => {
  return (
    <View>
      <Header title="Jenis Agunan" onPress={() => navigation.goBack()} />
      <Gap height={30} />
      <List
        type="next"
        desc="BPKB Motor/Mobil"
        icon="bpkb"
        onPress={() => navigation.navigate('AgunanBpkb')}
      />
      <List
        type="next"
        desc="Sertifikat SHM / HGB"
        icon="shm"
        onPress={() => navigation.navigate('AgunanSHM')}
      />
    </View>
  );
};

export default Agunan;

const styles = StyleSheet.create({});
