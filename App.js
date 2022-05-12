import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import App from './src';

const Main = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <App />
  </GestureHandlerRootView>
);

export default Main;
