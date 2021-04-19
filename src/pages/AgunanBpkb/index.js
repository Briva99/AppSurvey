import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Gap, Header, Input, Button, PickerSelect} from '../../component';
// import {Fire} from '../../config';
import {colors} from '../../utility';
// import {DummyFire} from '../../config';

const AgunanBpkb = ({navigation}) => {
  const jnsAgunan = ['BPKBMobil', 'BPKBMotor'];
  const [jenisAgunan, setJenisAgunan] = useState(jnsAgunan);
  const [nopol, setNopol] = useState('');
  const [thnPerakitan, setThnPerakitan] = useState('');
  const [jenis, setJenis] = useState('');
  const [merek, setMerek] = useState('');
  const [noRangka, setNoRangka] = useState('');
  const [noMesin, setNoMesin] = useState('');
  const [isiSilinder, setIsiSilinder] = useState('');
  const [bahanBakar, setBahanBakar] = useState('');
  const [warna, setWarna] = useState('');
  const [noRegBpkb, setNoRegBpkb] = useState('');
  const [noBpkb, setNoBpkb] = useState('');
  const [namaBpkb, setNamaBpkb] = useState('');
  const [alamat, setAlamat] = useState('');
  const [gps, setGps] = useState('');

  onSubmit = () => {
    const data = {
      jenisAgunan,
      nopol,
      thnPerakitan,
      jenis,
      merek,
      noRangka,
      noMesin,
      isiSilinder,
      bahanBakar,
      warna,
      noRegBpkb,
      noBpkb,
      namaBpkb,
      alamat,
      gps,
    };
    console.log('Masukan Submit', data);
  };

  return (
    <View style={styles.pages}>
      <Header onPress={() => navigation.goBack()} title="Agunan BPKB" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <PickerSelect
            label="Jenis Agunan"
            isAgunan={true}
            // selectedValue={selectedLanguage}
            selectedValue={jenisAgunan}
            onValueChange={itemValue => setJenisAgunan(itemValue)}
          />
          <Gap height={20} />
          <Input
            label="Nopol"
            value={nopol}
            onChangeText={text => setNopol(text)}
          />
          <Gap height={20} />
          <Input
            label="Th. Perakitan"
            keyboardType="number-pad"
            value={thnPerakitan}
            onChangeText={value => setThnPerakitan(value)}
          />
          <Gap height={20} />
          <Input
            label="Jenis/Model"
            value={jenis}
            onChangeText={value => setJenis(value)}
          />
          <Gap height={20} />
          <Input
            label="Type/Merek"
            value={merek}
            onChangeText={value => setMerek(value)}
          />
          <Gap height={20} />
          <Input
            label="No. Rangka"
            value={noRangka}
            onChangeText={value => setNoRangka(value)}
          />
          <Gap height={20} />
          <Input
            label="No. Mesin"
            value={noMesin}
            onChangeText={value => setNoMesin(value)}
          />
          <Gap height={20} />
          <Input
            label="Isi Silinder"
            value={isiSilinder}
            onChangeText={value => setIsiSilinder(value)}
          />
          <Gap height={20} />
          <Input
            label="Bahan Bakar"
            value={bahanBakar}
            onChangeText={value => setBahanBakar(value)}
          />
          <Gap height={20} />
          <Input
            label="Warna"
            value={warna}
            onChangeText={value => setWarna(value)}
          />
          <Gap height={20} />
          <Input
            label="No. Reg BPKB"
            value={noRegBpkb}
            onChangeText={value => setNoRegBpkb(value)}
          />
          <Gap height={20} />
          <Input
            label="No. BPKB"
            value={noBpkb}
            onChangeText={value => setNoBpkb(value)}
          />
          <Gap height={20} />
          <Input
            label="Nama di BPKB"
            value={namaBpkb}
            onChangeText={value => setNamaBpkb(value)}
          />
          <Gap height={20} />
          <Input
            label="Alamat"
            isTextArea={true}
            value={alamat}
            onChangeText={value => setAlamat(value)}
          />
          <Gap height={20} />
          <Input
            label="GPS"
            value={gps}
            onChangeText={value => setGps(value)}
          />
          <Gap height={40} />
          <Button
            title="Submit"
            // onPress={() => navigation.navigate('onSubmit')}
            onPress={onSubmit}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AgunanBpkb;

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
