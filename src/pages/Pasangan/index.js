import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Gap, List} from '../../component';

const Pasangan = ({navigation}) => {
  return (
    <View>
      <Header title="Suami / Istri" onPress={() => navigation.goBack()} />
      <Gap height={30} />
      <List
        type="next"
        desc="Suami"
        icon="Suami"
        onPress={() => navigation.navigate('Gaji')}
      />
      <List
        type="next"
        desc="Istri"
        icon="Istri"
        onPress={() => navigation.navigate('Gaji')}
      />
    </View>
  );
};

export default Pasangan;

const styles = StyleSheet.create({});
