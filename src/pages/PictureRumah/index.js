import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconPicture} from '../../assets';
import {Button, FolderFoto, Gap, Header} from '../../component';
import {colors} from '../../utility';

const PictureRumah = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Foto Rumah Tempat Tinggal"
        onPress={() => navigation.goBack()}
      />
      <Gap height={30} />
      <FolderFoto />
      <View style={styles.bottom}>
        <Gap height={50} />
        <Button title="Submit" onPress={() => navigation.navigate('Picture')} />
      </View>
    </View>
  );
};

export default PictureRumah;

const styles = StyleSheet.create({
  bottom: {
    marginHorizontal: 70,
  },
  page: {
    flex: 1,
  },
});
