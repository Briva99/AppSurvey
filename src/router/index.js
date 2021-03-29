import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  Agunan,
  AgunanBpkb,
  AgunanSHM,
  DaftarSurvey,
  Gaji,
  GetStarted,
  JenisPenghasilan,
  Login,
  Pasangan,
  PasanganU,
  Pengeluaran,
  Picture,
  PictureAgunan,
  PictureRumah,
  PictureUsaha,
  Register,
  Report,
  Splash,
  Survey,
  SurveyBiodata,
  Usaha,
  UserProfile,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../component';
import ReportBpkb from '../pages/Reports/BPKB';
import ReportBiodata from '../pages/Reports/Biodata';
import ReportShm from '../pages/Reports/SHM';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Daftar Survey" component={DaftarSurvey} />
      <Tab.Screen name="User Profile" component={UserProfile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="DaftarSurvey"
        component={DaftarSurvey}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Gaji"
        component={Gaji}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Report"
        component={Report}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SurveyBiodata"
        component={SurveyBiodata}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Usaha"
        component={Usaha}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AgunanBpkb"
        component={AgunanBpkb}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Survey"
        component={Survey}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Agunan"
        component={Agunan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="JenisPenghasilan"
        component={JenisPenghasilan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pasangan"
        component={Pasangan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PasanganU"
        component={PasanganU}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pengeluaran"
        component={Pengeluaran}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Picture"
        component={Picture}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PictureUsaha"
        component={PictureUsaha}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PictureAgunan"
        component={PictureAgunan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PictureRumah"
        component={PictureRumah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AgunanSHM"
        component={AgunanSHM}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReportBpkb"
        component={ReportBpkb}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReportShm"
        component={ReportShm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReportBiodata"
        component={ReportBiodata}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
