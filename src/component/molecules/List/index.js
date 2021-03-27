import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {
  IconAgunan,
  IconBiodata,
  IconBuy,
  IconCampuran,
  IconCars,
  IconGaji,
  IconHome,
  IconMan,
  IconNext,
  IconPhoto,
  IconSertifikat,
  IconSumberPenghasilan,
  IconUsaha,
  IconWoman,
} from '../../../assets';
import {colors, fonts} from '../../../utility';

const List = ({Profile, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'home') {
      return <IconHome style={styles.avatar} />;
    }
    if (icon === 'biodata') {
      return <IconBiodata style={styles.avatar} />;
    }
    if (icon === 'agunan') {
      return <IconAgunan style={styles.avatar} />;
    }
    if (icon === 'bpkb') {
      return <IconCars style={styles.avatar} />;
    }
    if (icon === 'shm') {
      return <IconSertifikat style={styles.avatar} />;
    }
    if (icon === 'sumber penghasilan') {
      return <IconSumberPenghasilan style={styles.avatar} />;
    }
    if (icon === 'Suami') {
      return <IconMan style={styles.avatar} />;
    }
    if (icon === 'Istri') {
      return <IconWoman style={styles.avatar} />;
    }
    if (icon === 'gaji') {
      return <IconGaji style={styles.avatar} />;
    }
    if (icon === 'usaha') {
      return <IconUsaha style={styles.avatar} />;
    }
    if (icon === 'campuran') {
      return <IconCampuran style={styles.avatar} />;
    }
    if (icon === 'pengeluaran') {
      return <IconBuy style={styles.avatar} />;
    }
    if (icon === 'foto') {
      return <IconPhoto style={styles.avatar} />;
    }
    return <IconBiodata style={styles.avatar} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={Profile} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 15,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
