import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Montserrat_400Regular, useFonts } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Routes } from './navigation';

function App() {
  let [fontsLoaded] = useFonts({ Montserrat_400Regular, Lato_400Regular });

  useEffect(() => {
    async function fetchResources() {
      if (!fontsLoaded) {
        return await SplashScreen.preventAutoHideAsync();
      }

      return await SplashScreen.hideAsync();
    }

    fetchResources();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Routes />;
}

export default App;
