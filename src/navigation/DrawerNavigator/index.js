import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavoritesScreen, HomeScreen } from '@screens/';
import { drawerStyle, sceneContainerStyle, screenOptions } from './configs';

const { Navigator, Screen } = createDrawerNavigator();

const DrawerNavigator = () => (
  <Navigator
    drawerType="slide"
    overlayColor="transparent"
    drawerStyle={drawerStyle}
    screenOptions={screenOptions}
    sceneContainerStyle={sceneContainerStyle}
  >
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Favorites" component={FavoritesScreen} />
  </Navigator>
);

export default DrawerNavigator;
