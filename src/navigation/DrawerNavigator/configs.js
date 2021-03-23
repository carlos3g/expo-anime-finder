import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { colors } from '@styles/';

const icons = {
  Home: {
    lib: Ionicons,
    inactiveName: 'home-outline',
    activeName: 'home',
  },
  Favorites: {
    lib: Ionicons,
    inactiveName: 'heart-outline',
    activeName: 'heart',
  },
};

export const drawerStyle = {
  width: '18%',
  backgroundColor: colors.blackPearl,
  elevation: 8,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
};

export const drawerContentOptions = {
  activeTintColor: colors.turquoise,
  activeBackgroundColor: 'transparent',
  inactiveTintColor: colors.white,
};

export const screenOptions = ({ route }) => ({
  title: '',
  drawerIcon: ({ focused, color, size }) => {
    const { lib: Icon, activeName, inactiveName } = icons[route.name];
    const name = focused ? activeName : inactiveName;
    return <Icon name={name} color={color} size={size} />;
  },
});

export const sceneContainerStyle = {
  backgroundColor: colors.blackPearl, // this prevent white background from appear between drawer and screen content
};
