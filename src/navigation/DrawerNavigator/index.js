import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { FavoritesScreen, HomeScreen } from '@screens/';
import {
  drawerStyle,
  drawerContentOptions,
  screenOptions,
  sceneContainerStyle,
} from './configs';

const { Navigator, Screen } = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Navigator
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={drawerStyle}
      drawerContentOptions={drawerContentOptions}
      screenOptions={screenOptions}
      sceneContainerStyle={sceneContainerStyle}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Favorites" component={FavoritesScreen} />
    </Navigator>
  );
}

export default DrawerNavigator;
