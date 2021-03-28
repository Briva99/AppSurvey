import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../component';
import {colors} from '../../utility';

const Usaha = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Header onPress={() => navigation.goBack()} title="Hasil Usaha" />
      <ScrollView>
        <View style={styles.content}>
          <Gap height={20} />
          <Input label="Lokasi Usaha" isTextArea={true} />
          <Gap height={24} />
          <Input label="Omset" keyboardType="number-pad" />
          <Gap height={24} />
          <Input label="HPP" keyboardType="number-pad" />
          <Gap height={24} />
          <Input label="Biaya Lain-lain" keyboardType="number-pad" />
          <Gap height={24} />
          <Input label="GPS" />
          <Gap height={24} />

          <Button
            title="Submit"
            onPress={() => navigation.navigate('Survey')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Usaha;

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
  },

  pages: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
