import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../component';
import {colors} from '../../utility';

const Gaji = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Header onPress={() => navigation.goBack()} title="Pendapatan Gaji" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Input di ambil dari folder component/atom/input */}
          <Gap height={20} />
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Nama Perusahaan Tempat Bekerja" />
          <Gap height={24} />
          <Input label="Alamat Tempat Bekerja" />
          <Gap height={24} />
          <Input label="Jabatan" />
          <Gap height={24} />
          <Input label="Take Home Pay" keyboardType="number-pad" />
          <Gap height={24} />
          <Input label="GPS" />
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
