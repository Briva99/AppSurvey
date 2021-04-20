import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const ReportBiodata = ({navigation}) => {
  const [data, setData] = useState([]);

  // read Data
  getDataCollection = async () => {
    const user = await firestore().collection('biodata').get();

    // mengambil key dan field pada database
    const allData = user.docs.map(doc =>
      Object.assign({id: doc.id}, doc.data()),
    );
    // console.log(allData)

    setData(allData);
  };

  // hapus data
  removeData = async id => {
    Alert.alert('Info', 'Anda Yakin Ingin Menghapus ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          firestore()
            .collection('biodata')
            .doc(id)
            .delete()
            .then(() => {
              Alert.alert('Hapus', 'Sukses Hapus Data.');
            });
          getDataCollection();

      },
    ]);
  };

  // ubah data
  const updateData = async (id)=>{
    firestore()
      .collection('biodata')
      .doc(id)
      .update({
        nama: 'Abed',
        alamat: 'alamat',
        // no_ktp: no_ktp,
        // tempat_tanggal_lahir: ttl,
        // jenisKelamin: jenisKelamin,
        // profesi: profesi,
        // nama_ibu: namaIbu,
        // status: status,
        // gps: gps

      .then(() => {
        Alert.alert('Info', 'Sukses Ubah Data');
        getDataCollection();
        // navigation.navigate('ReportBiodata')
      });
  };

  useEffect(() => {
    getDataCollection();
  }, []);



  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Halaman Report Biodata</Text>
          <View style={styles.garis} />
        </View>

        <View style={styles.listKontak}>
          {data.map((data, i) => {
            return (

            <TouchableOpacity key={data.id} style={styles.container}>
                <View>
                  {/* <Text>{data.id}</Text> */}
                  <Text style={styles.nama}>No.KTP = {data.no_ktp}</Text>
                  <Text style={styles.nama}>Nama = {data.nama}</Text>
                  <Text style={styles.nama}>Alamat = {data.alamat}</Text>
                  <Text style={styles.nama}>
                    Tempat, Tanggal Lahir = {data.tempat_tanggal_lahir}
                  </Text>
                  <Text style={styles.nama}>
                    Jenis Kelamin = {data.jenisKelamin}
                  </Text>
                  <Text style={styles.nama}>Pekerjaan = {data.profesi}</Text>
                  <Text style={styles.nama}>Nama Ibu = {data.nama_ibu}</Text>
                  <Text style={styles.nama}>Status = {data.status}</Text>
                  {/* <Text>{data.gps}</Text> */}
                  <View style={styles.icon}>
                    <IconAntDesign
                      name="edit"
                      color={'green'}
                      size={30}
                      onPress={() => navigation.navigate('UbahBiodata')}
                    />
                    <IconAntDesign
                      name="delete"
                      color={'red'}
                      size={30}
                      onPress={() => removeData(data.id)}
                    />

                </View>
                </View>
            </TouchableOpacity>

          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default ReportBiodata;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  garis: {
    borderWidth: 1,
    marginTop: 10,
  },
  listKontak: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  icon: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 5,
  },
});
