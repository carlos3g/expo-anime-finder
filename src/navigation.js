import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { FavoritesScreen, HomeScreen } from '@screens/';

const { Navigator, Screen } = createDrawerNavigator();

function Routes() {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Favorites" component={FavoritesScreen} />
    </Navigator>
  );
}

export default Routes;
