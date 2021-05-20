import AsyncStorage from '@react-native-async-storage/async-storage';

async function storeData(key, value) {
  try {
    value = JSON.stringify(value);
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
}

export default storeData;
