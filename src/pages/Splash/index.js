import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utility';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.wrepper}>
      <Text style={styles.Text}>APP SURVEY</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
  wrepper: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
