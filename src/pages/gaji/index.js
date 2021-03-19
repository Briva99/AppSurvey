import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Gaji = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Header onPress={() => navigation.goBack()} title="Pendapatan Gaji" />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Kewajiban kepada pihak lain" />
        <Gap height={24} />
        <Input label="Jumlah Anak" />
        <Gap height={24} />
        <Input label="pendidikan Anak" />
        <Gap height={24} />
        <Input label="GPS" />
        <Gap height={40} />

        <Button
          title="Continue"
          onPress={() => navigation.navigate('Report')}
        />
      </View>
    </View>
  );
};

export default Gaji;

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
