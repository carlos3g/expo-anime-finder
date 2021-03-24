import React, { useRef, useState, useEffect } from 'react';

/**
 * TODO: Change activity indicator condition
 * TODO: Change alert on status not granted
 * TODO: Lets code more clean
 */

import { useNavigation } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import * as ImagePicker from 'expo-image-picker';
import axios from '@services/api';

import { GridMenu, SearchButton, AnimeCard } from '@components/';
import { Container, Wrapper, Modal, ActivityIndicator } from './styles';

async function requestCameraPermission() {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    alert('Desculpa, nós precisamos de acesso as imagens para funcionar!');
  }
}

async function pickImage(setter) {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    quality: 1,
  });

  if (!result.cancelled) {
    const name = result.uri.split('/').pop(); // "file:/[...]/images/image.png" => "image.png"
    setter({ ...result, name });
  }
}

function searchAnime(image) {
  return new Promise(async (resolve, reject) => {
    const formData = new FormData();

    formData.append('image', {
      uri: image.uri,
      name: image.name,
      type: 'image/jpg',
    });

    try {
      const { data } = await axios.post('/search', formData);
      const imageResult = {
        name: data.docs[0].title_romaji,
        imgUrl: image.uri,
        id: data.docs[0].tokenthumb,
      };
      return resolve(imageResult);
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
}

function HomeScreen() {
  const { toggleDrawer } = useNavigation();
  const [image, setImage] = useState(null);
  const [anime, setAnime] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    requestCameraPermission;
  }, []);

  // search for the image, set the api response to anime and open modal every time a image is picked
  useEffect(() => {
    async function fetchData() {
      if (image) {
        const result = await searchAnime(image);
        setAnime(result);
        modalRef.current.open();
      }
    }
    fetchData();
  }, [image]);

  return (
    <Wrapper>
      <Container>
        <GridMenu focus={useIsDrawerOpen()} onPress={toggleDrawer} />
        <ActivityIndicator animating={image && !anime} />
        <SearchButton onPress={() => pickImage(setImage)} />
        <Modal ref={modalRef}>
          <AnimeCard data={anime} />
        </Modal>
      </Container>
    </Wrapper>
  );
}

export default HomeScreen;
