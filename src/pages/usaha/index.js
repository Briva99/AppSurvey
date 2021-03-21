import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap, Header, Input} from '../../component';
import {colors} from '../../utility';

const Usaha = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Header onPress={() => navigation.goBack()} title="Hasil Usaha" />
      <ScrollView>
        <View style={styles.content}>
          <Gap height={20} />
          <Input label="Lokasi Usaha" />
          <Gap height={24} />
          <Input label="Omset" />
          <Gap height={24} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Usaha;

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
  },

  pages: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
