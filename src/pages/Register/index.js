import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../component';
import Fire from '../../config/Fire';
// import {Fire} from '../../config';
import {
  colors,
  showError,
  showSuccess,
  storeData,
  useForm,
} from '../../utility';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    userSurveyor: '',
    profession: '',
    email: '',
    password: '',
  });
  const [profession] = useState([
    {id: 1, label: 'Surveyor', value: 'Surveyor'},
    {id: 2, label: 'SPV Marketing', value: 'SPV Marketing'},
    {id: 3, label: 'Credit Analis', value: 'Credit Analis'},
  ]);
  const [loading, setLoading] = useState(false);
  const onContinue = () => {
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setLoading(false);
        showSuccess('Registrasi Berhasil');
        setForm('reset');
        const data = {
          userSurveyor: form.userSurveyor,
          email: form.email,
          profession: form.profession,
          uid: success.user.uid,
        };
        Fire.database()
          .ref('userSurveyor/' + success.user.uid + '/')
          .set(data);

        storeData('userSurveyor', data);
        navigation.navigate('UploadPhoto', data);
        console.log('register sukses :', success);
      })
      .catch(error => {
        setLoading(false);
        showError(error.message);
      });
  };

  return (
    <>
      <View style={styles.pages}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            {/* Input di ambil dari folder component/atom/input */}
            <Gap height={20} />
            <Input
              label="Full Name"
              value={form.userSurveyor}
              onChangeText={value => setForm('userSurveyor', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onValueChange={value => setForm('profession', value)}
              select
              selectItem={profession}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              secureTextEntry
              value={form.password}
              onChangeText={value => setForm('password', value)}
            />
            <Gap height={40} />

            <Button title="Continue" isButton={true} onPress={onContinue} />
          </View>
        </ScrollView>
      </View>

      {loading && <Loading />}
    </>
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
