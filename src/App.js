import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router/index';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
