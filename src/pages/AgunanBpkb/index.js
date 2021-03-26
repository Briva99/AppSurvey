import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Gap, Header, Input, Button, PickerSelect} from '../../component';
import {colors} from '../../utility';

const AgunanBpkb = () => {
  return (
    <View style={styles.pages}>
      <Header onPress={() => navigation.goBack()} title="Agunan BPKB" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <PickerSelect label="Jenis Agunan" isAgunan={true} />
          <Gap height={20} />
          <Input label="Nopol" />
          <Gap height={20} />
          <Input label="Th. Perakitan" />
          <Gap height={20} />
          <Input label="Jenis/Model" />
          <Gap height={20} />
          <Input label="Type/Merek" />
          <Gap height={20} />
          <Input label="No. Rangka" />
          <Gap height={20} />
          <Input label="No. Mesin" />
          <Gap height={20} />
          <Input label="Isi Silinder" />
          <Gap height={20} />
          <Input label="Bahan Bakar" />
          <Gap height={20} />
          <Input label="Warna" />
          <Gap height={20} />
          <Input label="No. Reg BPKB" />
          <Gap height={20} />
          <Input label="No. BPKB" />
          <Gap height={20} />
          <Input label="Nama. di BPKB" />
          <Gap height={20} />
          <Input label="Alamat" />
          <Gap height={20} />
          <Input label="GPS" />
        </View>
        <View style={styles.button}>
          <Button title="Foto STNK" />
          <Button title="Foto BPKB" />
        </View>
        <View style={styles.button1}>
          <Button title="Tambah" />
          <Button title="Hapus" />
          <Button title="Keluar" />
        </View>
      </ScrollView>
    </View>
  );
};

export default AgunanBpkb;

const styles = StyleSheet.create({
  content: {
    padding: 20,
    paddingTop: 0,
  },

  pages: {
    backgroundColor: colors.white,
    flex: 1,
  },
  button: {
    padding: 30,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  button1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
});
