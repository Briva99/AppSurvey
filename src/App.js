import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router/index';
import {LogBox} from 'react-native';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  LogBox.ignoreLogs(['Setting a timer']);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
}
