import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const ReportBiodata = () => {

  getDataCollection = async ()=>{
    const user = await firestore()
    .collection('biodata')
    .get();

    const allData = user.docs.map((doc)=> doc.data())

    console.log(allData)
  }

  useEffect(() => {
    getDataCollection()
  }, [])



  return (
    <View>
      <Text>Halaman Report Biodata</Text>
    </View>
  );
};

export default ReportBiodata;

const styles = StyleSheet.create({});
