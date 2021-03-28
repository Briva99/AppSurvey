import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gap, Header, List, Profile, ProfilItem} from '../../component';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Mongky D Ruffi" job="Surveyor" />
      <Gap height={14} />
      <ProfilItem label="ID Pegawai" value="01SRVYR260321" />
      <ProfilItem label="alumnus" value="Universitas Merdeka Raya, 2020" />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
