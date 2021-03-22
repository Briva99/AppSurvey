import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utility';
import {Button, Gap} from '../../component';

const GetStarted = () => {
  return (
    <View style={styles.pages}>
      <Text style={styles.textInput}>
        Pengajuan Kredit Cukup dengan Ibu Jari Anda
      </Text>
      <View style={styles.content}>
        <Button title="Get Started" />
        <Gap height={20} />
        <Button title="Sign In" />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.button.disable.text,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textInput: {
    paddingLeft: 38,
    marginBottom: 150,
    // marginTop:0,
    width: 320,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
  },
  content: {
    padding: 50,
    paddingTop: 0,
  },
});
