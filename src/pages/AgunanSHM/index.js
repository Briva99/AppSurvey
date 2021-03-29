import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  Button,
  Gap,
  Header,
  Input,
  PickerSelect,
  PickerMultiSelect,
} from '../../component';
import {colors} from '../../utility';

const AgunanSHM = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Header onPress={() => navigation.goBack()} title="Agunan SHM/HGB" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        <View style={styles.content}>
          {/* Input di ambil dari folder component/atom/input */}
          <Gap height={20} />
          <PickerSelect label="Jenis Agunan" isAgunanSHM={true} />
          <Gap height={24} />
          <Input label="Nomor SHM/HGB" keyboardType="number-pad" />
          <Gap height={24} />
          <Input label="Atas Nama" />
          <Gap height={24} />
          <Input label="Tanggal Dikeluarkan" />
          <Gap height={24} />
          <Input label="Tanggal Berakhir" />
          <Gap height={24} />
          <Input label="Luas" />
          <Gap height={24} />
          {/* <PickerSelect label="Batas Tanah" isBatasTanah={true} /> */}
          <Gap height={24} />
          <PickerSelect label="Peruntukan Tanah" isPeruntukanTanah={true} />
          <Gap height={24} />
          <PickerSelect label="Kependudukan" isKependudukan={true} />
          {/* <Gap height={24} />
          <PickerMultiSelect label="Fasilitas Penduduk" isFasum={true} /> */}
          <Gap height={24} />
          <PickerSelect label="Jenis Bangunan" isJenisBangunan={true} />
          <Gap height={24} />
          <PickerSelect label="Kontruksi Bangunan" isKontruksiBangunan={true} />
          {/* <Gap height={24} />
          <PickerMultiSelect
            label="Tata Ruang Bangunan"
            isTataRuangBangunan={true}
          /> */}
          <Gap height={24} />
          <Input label="Alamat" isTextArea={true} />
          <Gap height={24} />
          <Input label="Agunan" />
          <Gap height={24} />
          <Input label="Gps" />

          <Gap height={20} />
          <Button
            title="Submit"
            onPress={() => navigation.navigate('ReportShm')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AgunanSHM;

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
