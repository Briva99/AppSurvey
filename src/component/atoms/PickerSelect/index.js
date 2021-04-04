import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utility';

const PickerSelect = ({
  label,
  isJenisKelamin,
  isStatus,
  isAgunan,
  isAgunanSHM,
  isPeruntukanTanah,
  isKependudukan,
  isJenisBangunan,
  isKontruksiBangunan,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  if (isJenisKelamin) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Pilih Jenis Kelamin" />
            <Picker.Item label="Laki-laki" value="Laki-laki" />
            <Picker.Item label="Perempuan" value="Perempuan" />
          </Picker>
        </View>
      </View>
    );
  }

  if (isStatus) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Status" />
            <Picker.Item label="Lajang" value="Lajang" />
            <Picker.Item label="Menikah" value="Menikah" />
          </Picker>
        </View>
      </View>
    );
  }

  if (isAgunan) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Pilih Jenis Agunan" />
            <Picker.Item label="BPKB Mobil" value="BPKB Mobil" />
            <Picker.Item label="BPKB Motor" value="BPKB Motor" />
          </Picker>
        </View>
      </View>
    );
  }
  if (isAgunanSHM) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Pilih Jenis Agunan" />
            <Picker.Item label="SHM" value="SHM" />
            <Picker.Item label="SHGB" value="SHGB" />
          </Picker>
        </View>
      </View>
    );
  }
  if (isPeruntukanTanah) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="--- Peruntukan Tanah ---" />
            <Picker.Item label="Perumahan" value="Perumahan" />
            <Picker.Item label="Perdagangan" value="Perdagangan" />
            <Picker.Item label="Perkantoran" value="Perkantoran" />
            <Picker.Item label="Industri" value="Industri" />
            <Picker.Item label="Pertanian" value="Pertanian" />
          </Picker>
        </View>
      </View>
    );
  }
  if (isKependudukan) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="--- Kependudukan ---" />
            <Picker.Item label="Padat" value="Padat" />
            <Picker.Item label="Sedang" value="Sedang" />
            <Picker.Item label="Jarang" value="Jarang" />
            <Picker.Item label="Kosong" value="Kosong" />
          </Picker>
        </View>
      </View>
    );
  }
  if (isJenisBangunan) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="--- Jenis Bangunan ---" />
            <Picker.Item label="Rumah Tinggal" value="RumahTinggal" />
            <Picker.Item label="Rumah Petak" value="RumahPetak" />
            <Picker.Item label="Ruko" value="Ruko" />
            <Picker.Item label="Pabrik" value="Pabrik" />
            <Picker.Item label="Gudang" value="Gudang" />
            <Picker.Item label="Kantor" value="Kantor" />
            <Picker.Item label="Villa" value="Villa" />
            <Picker.Item label="Lain-lain" value="lain-lain" />
          </Picker>
        </View>
      </View>
    );
  }
  if (isKontruksiBangunan) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="--- Kontruksi Bangunan ---" />
            <Picker.Item label="Beton" value="Beton" />
            <Picker.Item label="Besi" value="Besi" />
            <Picker.Item label="Batu Bata" value="Batu Bata" />
            <Picker.Item label="Kayu" value="Kayu" />
          </Picker>
        </View>
      </View>
    );
  }
};
export default PickerSelect;

const styles = StyleSheet.create({
  picker: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
  },

  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
});
