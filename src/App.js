import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ReportBiodata from './pages/Reports/Biodata';
import UbahBiodata from './pages/UbahBiodata';
import Router from './router/index';


export default function App() {
  return (
    <NavigationContainer>
      <Router />
      {/* <ReportBiodata/> */}
      {/* <UbahBiodata/> */}
    </NavigationContainer>
  );
}
