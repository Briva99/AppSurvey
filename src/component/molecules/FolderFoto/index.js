import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconPicture} from '../../../assets';
import {colors} from '../../../utility';
import {Button, Gap} from '../../atoms';

const FolderFoto = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.borderAvatar}>
          <Image source={IconPicture} style={styles.avatar} />
        </View>
      </View>
      <View style={styles.bottonContainer}>
        <Gap height={10} />
        <Button title="Ambil Foto" style={styles.bottom} />
      </View>
    </View>
  );
};

export default FolderFoto;

const styles = StyleSheet.create({
  avatar: {width: 110, height: 110},
  borderAvatar: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.border,
    borderWidth: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  bottonContainer: {
    marginHorizontal: 70,
  },
});
