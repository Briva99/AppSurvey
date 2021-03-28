import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, LogBox} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import {colors, fonts} from '../../../utility';

// note issue => icon picker multi select tidak muncul
// note issue => saat di klik multi picker otomatis scroll ke atas.

const PickerMultiSelect = ({
  label,
  isFasum,
  isKontruksiBangunan,
  isTataRuangBangunan,
}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const [selectedItems, onSelectedItemsChange] = useState();
  //  awal component  Agunan SHM
  if (isFasum) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.label}>{label}</Text>
          <MultiSelect
            items={[
              {
                id: '1',
                name: 'Transportasi',
              },
              {
                id: '2',
                name: 'Pasar / Toko-toko',
              },
              {
                id: '3',
                name: 'RSU / Puskesmas',
              },
              {
                id: '4',
                name: 'Transportasi',
              },
              {
                id: '5',
                name: 'Pasar / Toko-toko',
              },
              {
                id: '6',
                name: 'Perkantoran',
              },
              {
                id: '7',
                name: 'Sekolah',
              },
              {
                id: '8',
                name: 'Tempat Ibadah',
              },
              {
                id: '9',
                name: 'Lain-lain',
              },
            ]}
            uniqueKey="id"
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Multiple Select"
            searchInputPlaceholderText="Search Items..."
            onChangeInput={text => console.warn(text)}
            tagRemoveIconColor="red"
            tagBorderColor="#CCC"
            tagTextColor="black"
            selectedItemTextColor="black"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{color: '#CCC'}}
            submitButtonColor="#0288d1"
            submitButtonText="Submit"
            removeSelected
          />
        </View>
      </SafeAreaView>
    );
  }

  if (isKontruksiBangunan) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.label}>{label}</Text>
          <MultiSelect
            items={[
              {
                id: '1',
                name: 'Beton',
              },
              {
                id: '2',
                name: 'Besi',
              },
              {
                id: '3',
                name: 'Batu Bata',
              },
              {
                id: '4',
                name: 'Kayu',
              },
            ]}
            uniqueKey="id"
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Multiple Select"
            searchInputPlaceholderText="Search Items..."
            onChangeInput={text => console.warn(text)}
            tagRemoveIconColor="red"
            tagBorderColor="#CCC"
            tagTextColor="black"
            selectedItemTextColor="black"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{color: '#CCC'}}
            submitButtonColor="#0288d1"
            submitButtonText="Submit"
            removeSelected
          />
        </View>
      </SafeAreaView>
    );
  }

  if (isTataRuangBangunan) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.label}>{label}</Text>
          <MultiSelect
            items={[
              {
                id: '1',
                name: 'Ruang Kamar Tamu',
              },
              {
                id: '2',
                name: 'Kamar Tidur',
              },
              {
                id: '3',
                name: 'Ruang Keluarga',
              },
              {
                id: '4',
                name: 'Ruang Makan',
              },
              {
                id: '5',
                name: 'Ruang Mandi',
              },
              {
                id: '6',
                name: 'Gudang',
              },
              {
                id: '7',
                name: 'Garasi',
              },
              {
                id: '8',
                name: 'Lain-lain',
              },
            ]}
            uniqueKey="id"
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Multiple Select"
            searchInputPlaceholderText="Search Items..."
            onChangeInput={text => console.warn(text)}
            tagRemoveIconColor="red"
            tagBorderColor="#CCC"
            tagTextColor="black"
            selectedItemTextColor="black"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{color: '#CCC'}}
            submitButtonColor="#0288d1"
            submitButtonText="Submit"
            removeSelected
          />
        </View>
      </SafeAreaView>
    );
  }
};
//  akhir component  Agunan SHM

export default PickerMultiSelect;

const styles = StyleSheet.create({
  multiSelectContainer: {
    height: 100,
    width: '80%',
  },

  Container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },

  headingText: {
    padding: 15,
  },

  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
});
