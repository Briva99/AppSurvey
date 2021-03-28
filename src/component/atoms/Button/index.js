import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utility';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress, icon}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'kedua'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 16,
    // fontWeight: '600',
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color:
      type === 'kedua'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
});
