import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button, Gap, Header, Input} from '../../component';
import {colors} from '../../utility';

const Pengeluaran = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Header title="Pengeluaran" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Gap height={20} />
          <Input label="Jumlah Anak" keyboardType="number-pad" />
          <Gap height={20} />
          <Input label="Pendidikan Anak" keyboardType="number-pad" />
          <Gap height={20} />
          <Input label="Biaya Sekolah Anak" keyboardType="number-pad" />
          <Gap height={20} />
          <Input label="Biaya PLN dan PDAM" keyboardType="number-pad" />
          <Gap height={20} />
          <Input
            label="Biaya Transportasi dan Komunikasi"
            keyboardType="number-pad"
          />
          <Gap height={20} />
          <Input label="Biaya Makan" keyboardType="number-pad" />
          <Gap height={20} />
          <Input
            label="Kewajiban Bank dan Non Bank"
            keyboardType="number-pad"
          />
          <Gap height={20} />
          <Input label="Biaya Lain-lain" keyboardType="number-pad" />
          <Gap height={40} />
          <Button
            title="Submit"
            onPress={() => navigation.navigate('Survey')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Pengeluaran;

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
