import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, PickerSelect} from '../../component';
import {colors} from '../../utility';
import firestore from '@react-native-firebase/firestore';

const SurveyBiodata = ({navigation}) => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [no_ktp, setKtp] = useState("");
  const [ttl, setTtl] = useState("");
  const [profesi, setProfesi] = useState("");
  const [namaIbu, setIbu] = useState("");
  

  // const addData = ()=>{
  //   const data ={
  //     nama,
  //     alamat,
  //     no_ktp,
  //     ttl,
  //     profesi,
  //     namaIbu,
  //   }
  //   console.log('Masukkan submit', data)
  // };
  

   const addData = ()=>{
    firestore()
  .collection('biodata')
  .add({
    nama: nama,
    alamat: alamat,
    no_ktp: no_ktp,
    tempat_tanggal_lahir: ttl,
    profesi: profesi,
    nama_ibu: namaIbu
  })
  .then(() => {
    console.log('User added!');
  });
  }



  return (
    <View style={styles.pages}>
      <Header
        type="icon-profile"
        title="Biodata"
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Input di ambil dari folder component/atom/input */}
          <Gap height={20} />
          <Input label="Full Name" value={nama} onChangeText={txtNama => setNama(txtNama)}  />
          <Gap height={24} />
          <Input label="Alamat" isTextArea={true} value={alamat} onChangeText={txtAlamat => setAlamat(txtAlamat)} />
          <Gap height={24} />
          <Input label="No. KTP" keyboardType="number-pad" value={no_ktp} onChangeText={txtKtp => setKtp(txtKtp)} />
          <Gap height={24} />
          <Input label="Tempat, Tgl Lahir" value={ttl} onChangeText={txtTtl =>setTtl(txtTtl)} />
          <Gap height={20} />
          <PickerSelect label="Jenis Kelamin" isJenisKelamin={true} />
          <Gap height={24} />
          <Input label="Profesi" value={profesi} onChangeText={txtProfesi => setProfesi(txtProfesi)} />
          <Gap height={24} />
          <Input label="Nama Ibu Kandung" value={namaIbu} onChangeText={txtIbu => setIbu(txtIbu)} />
          <Gap height={24} />
          <PickerSelect label="Status" isStatus={true} />
          <Gap height={24} />
          <Input label="GPS" />
          <Gap height={40} />

          <Button
            title="Submit"
            onPress={()=>{addData()}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

//() => navigation.navigate('ReportBiodata')

export default SurveyBiodata;

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
