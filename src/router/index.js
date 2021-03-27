import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  AgunanBpkb,
  DaftarSurvey,
  Gaji,
  GetStarted,
  Login,
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
    <Stack.Navigator initialRouteName="Splash">
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
    </Stack.Navigator>
  );
};

export default Router;
