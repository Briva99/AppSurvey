import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  DaftarSurvey,
  Gaji,
  GetStarted,
  Login,
  Register,
  Report,
  SurveyBiodata,
  Usaha,
} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="GetStarted">
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
        name="DaftarSurvey"
        component={DaftarSurvey}
        options={{headerShown: false}}
      />
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
    </Stack.Navigator>
  );
};

export default Router;
