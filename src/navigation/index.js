import React from 'react';

import DrawerNavigator from './DrawerNavigator';

import { NavigationContainer } from '@react-navigation/native';

function Routes() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export { Routes };
