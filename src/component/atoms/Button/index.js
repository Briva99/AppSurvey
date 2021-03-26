import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utility';
import IconOnly from './IconOnly';

const Button = ({
  type,
  title,
  onPress,
  icon,
  isButton,
  isBtnAgunanFoto,
  isBtnHapusEditSubmit,
}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (isButton) {
    return (
      <TouchableOpacity style={styles.container(type)} onPress={onPress}>
        <Text style={styles.text(type)}>{title}</Text>
      </TouchableOpacity>
    );
  }
  // awal component btn agunan SHM
  if (isBtnAgunanFoto) {
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.btnAgunanFoto} onPress={onPress}>
          <Text style={styles.txtdua}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (isBtnHapusEditSubmit) {
    return (
      <View style={styles.containerDua}>
        <View>
          <TouchableOpacity style={styles.BtnHapus} onPress={onPress}>
            <Text style={styles.txtdua}>Hapus</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.BtnEdit} onPress={onPress}>
            <Text style={styles.txtdua}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.BtnSubmit} onPress={onPress}>
            <Text style={styles.txtdua}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  // akhir component btn agunan SHM
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

  // Awal  component agunan SHM, Button Foto Agunan
  btnAgunanFoto: {
    flex: 1,
    backgroundColor: '#0277bd',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },

  // Awal Button hapus, edit  submit
  containerDua: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  BtnHapus: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: 100,
  },

  BtnEdit: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: 100,
  },

  BtnSubmit: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    width: 100,
  },
  // Akhir  Button hapus, edit  submit

  txtdua: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
