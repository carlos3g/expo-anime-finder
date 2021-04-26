import React, { useRef, useState, useEffect } from 'react';

/**
 * TODO: Lets code more clean
 */

import { useNavigation } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import * as ImagePicker from 'expo-image-picker';
import axios from '@services/api';

import { GridMenu, SearchButton, AnimeCard, Toast } from '@components/';
import { Container, Wrapper, Modal, ActivityIndicator } from './styles';

function HomeScreen() {
  const { toggleDrawer } = useNavigation();
  const [image, setImage] = useState(null);
  const [anime, setAnime] = useState(null);
  const modalRef = useRef(null);
  const toastRef = useRef(null);

  async function requestCameraPermission() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      toastRef.current.show('Sorry, we need media permission to work!');
    }
  }

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const name = result.uri.split('/').pop(); // "file:/[...]/images/image.png" => "image.png"
      setImage({ ...result, name });
    }
  }

  function searchAnime() {
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
        toastRef.current.show(
          'We had a problem looking for this image. Try again or use another image!'
        );
        return reject(error);
      }
    });
  }

  useEffect(() => {
    requestCameraPermission();
  }, []);

  // search for the image, set the api response to anime and open modal every time a image is picked
  useEffect(() => {
    (async () => {
      if (image) {
        const result = await searchAnime(image);
        setAnime(result);
        setImage(null);
        modalRef.current.open();
      }
    })();
  }, [image]);

  return (
    <Wrapper>
      <Container>
        <GridMenu focus={useIsDrawerOpen()} onPress={toggleDrawer} />
        <ActivityIndicator animating={Boolean(image)} />
        <SearchButton onPress={() => pickImage(setImage)} />
        <Modal ref={modalRef}>
          <AnimeCard anime={anime} />
        </Modal>
        <Toast ref={toastRef} timeout={3200} />
      </Container>
    </Wrapper>
  );
}

export default HomeScreen;
