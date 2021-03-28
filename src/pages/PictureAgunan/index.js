import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconPicture} from '../../assets';
import {Header, Gap, Button, FolderFoto} from '../../component';
import {colors} from '../../utility';

const PictureAgunan = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Foto Agunan" onPress={() => navigation.goBack()} />
      <Gap height={30} />
      <FolderFoto />
      <View style={styles.bottom}>
        <Gap height={50} />
        <Button title="Submit" onPress={() => navigation.navigate('Picture')} />
      </View>
    </View>
  );
};

export default PictureAgunan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  bottom: {
    marginHorizontal: 70,
  },
});
