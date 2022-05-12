import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';

const Routes = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);

export { Routes };
