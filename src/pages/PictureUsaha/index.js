import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, FolderFoto, Gap, Header} from '../../component';

const PictureUsaha = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Foto Usaha" onPress={() => navigation.goBack()} />
      <Gap height={30} />
      <FolderFoto />
      <View style={styles.bottom}>
        <Gap height={50} />
        <Button title="Submit" onPress={() => navigation.navigate('Picture')} />
      </View>
    </View>
  );
};

export default PictureUsaha;

const styles = StyleSheet.create({
  bottom: {
    marginHorizontal: 70,
  },
  page: {
    flex: 1,
  },
});
