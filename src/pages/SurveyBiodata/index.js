import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, PickerSelect} from '../../component';
import {colors} from '../../utility';

const Register = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Header onPress={() => navigation.goBack()} title="Survey Biodata" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Input di ambil dari folder component/atom/input */}
          <Gap height={20} />
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Alamat" isTextArea={true} />
          <Gap height={24} />
          <Input label="No. KTP" keyboardType="number-pad" />
          <Gap height={24} />
          <Input label="Tempat, Tgl Lahir" />
          <Gap height={20} />
          <PickerSelect label="Jenis Kelamin" isJenisKelamin={true} />
          <Gap height={24} />
          <Input label="Profesi" />
          <Gap height={24} />
          <Input label="Nama Ibu Kandung" />
          <Gap height={24} />
          <PickerSelect label="Status" isStatus={true} />
          <Gap height={24} />
          <Input label="GPS" />
          <Gap height={40} />

          <Button title="Submit" onPress={() => navigation.navigate('Login')} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

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
