import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { Routes } from './navigation';

function App() {
  return (
    <>
      <StatusBar translucent />
      <Routes />
    </>
  );
}

export default App;
