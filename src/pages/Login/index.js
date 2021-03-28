import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Input, Link} from '../../component';
import {colors} from '../../utility';

const Login = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Text style={styles.textInput}>Masuk dan mulai berkonsultasi</Text>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.content}>
        <Gap height={30} />
        <Input label="Email Address" />
        <Gap height={20} />
        <Input label="Password" secureTextEntry />
        <Gap height={10} />
        <Link title="Forget My Password" />
        <Gap height={20} />
        <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />

        <Gap height={30} />
        <Link
          title="Create New Account"
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  textInput: {
    paddingLeft: 38,
    marginBottom: 10,
    marginTop: 10,
    width: 320,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
  pages: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
