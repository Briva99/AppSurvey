import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utility';

const PickerSelect = ({label, isJenisKelamin, isStatus}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  if (isJenisKelamin) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker
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
