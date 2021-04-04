import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utility';

// dibuat props label, yang menerima inputan dari gaji
const Input = ({
  label,
  keyboardType,
  secureTextEntry,
  isTextArea,
  onChangeText,
  value,
}) => {
  if (isTextArea) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.input}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          style={styles.txtInputArea}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    color: 'black',
  },
  txtInputArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    color: 'black',
  },
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
});
