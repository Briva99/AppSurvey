import React from 'react';
import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import {Button, Gap, Header} from '../../component';
import {colors} from '../../utility';
import Pdf from 'react-native-pdf';
const source = {
  uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
  cache: true,
};

const Report = () => {
  return (
    <View style={styles.pages}>
      <Header onPress={() => navigation.goBack()} title="Hasil" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.container}>
          <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Pdf
              source={source}
              onLoadComplete={(numberOfPages, filePath) => {
                console.log(`number of pages: ${numberOfPages}`);
              }}
              onPageChanged={(page, numberOfPages) => {
                console.log(`current page: ${page}`);
              }}
              onError={error => {
                console.log(error);
              }}
              onPressLink={uri => {
                console.log(`Link presse: ${uri}`);
              }}
              style={styles.pdf}
            />
              </ScrollView>
          </View>
          <Gap height={20} />

          <Gap height={40} />

          <Button title="Submit" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
},
  pages: {
    backgroundColor: colors.white,
    flex: 1,
  },
  pdf: {
    flex: 1,
    width:Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
