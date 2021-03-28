import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Gap, Header, List} from '../../component';
import {colors} from '../../utility';

const Picture = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Header
        title="Foto Agunan dan Usaha"
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Gap height={20} />

          <List
            type="next"
            desc="Rumah Tempat Tinggal"
            icon="home"
            onPress={() => navigation.navigate('PictureRumah')}
          />
          <List
            type="next"
            desc="Agunan"
            icon="agunan"
            onPress={() => navigation.navigate('PictureAgunan')}
          />
          <List
            type="next"
            desc="Usaha"
            icon="usaha"
            onPress={() => navigation.navigate('PictureUsaha')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Picture;

const styles = StyleSheet.create({
  content: {
    padding: 10,
    paddingTop: 0,
  },

  pages: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
