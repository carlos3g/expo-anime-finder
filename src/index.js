import React from 'react';

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

import { Routes } from './navigation';

function App() {
  let [fontsLoaded] = useFonts({ Montserrat_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar translucent />
      <Routes />
    </>
  );
}

export default App;
