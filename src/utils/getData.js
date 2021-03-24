import AsyncStorage from '@react-native-async-storage/async-storage';

async function getData(key) {
  try {
    const result = await AsyncStorage.getItem(key);
    return result != null ? JSON.parse(result) : [];
  } catch (error) {
    console.log(error);
  }
}

export default getData;
