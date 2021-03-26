import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../component';
import {colors} from '../../utility';

const Register = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Input di ambil dari folder component/atom/input */}
          <Gap height={20} />
          <Input label="Full Name" placeholder="Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" secureTextEntry />
          <Gap height={40} />

          <Button
            title="Continue"
            isButton={true}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

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
