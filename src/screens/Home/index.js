/**
 * TODO: Lets code more clean
 */

import { AnimeCard, GridMenu, SearchButton, Toast } from '@components/';
import { useDrawerStatus } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import axios from '@services/api';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Container,
  Content,
  Description,
  Modal,
  Title,
  Wrapper,
} from './styles';

function HomeScreen() {
  const { toggleDrawer } = useNavigation();
  const isDrawerOpen = useDrawerStatus() === 'open';
  const [image, setImage] = useState(null);
  const [anime, setAnime] = useState(null);
  const modalRef = useRef(null);
  const toastRef = useRef(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const name = result.uri.split('/').pop(); // "file:/[...]/images/image.png" => "image.png"
      setImage({ ...result, name });
    }
  };

  const searchAnime = () =>
    new Promise(async (resolve, reject) => {
      const formData = new FormData();
      formData.append('image', {
        uri: image.uri,
        name: image.name,
        type: 'image/jpg',
      });

      try {
        const { data } = await axios.post('/search?anilistInfo', formData);
        const { result } = data;
        const searchResult = {
          name: result[0].anilist.romaji,
          imgUrl: image.uri,
          id: result[0].anilist.id,
        };

        return resolve(searchResult);
      } catch (e) {
        toastRef.current.show(
          'We had a problem looking for this image. Try again or use another image!'
        );

        return reject(e);
      }
    });

  useEffect(() => {
    async function requestCameraPermission() {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        toastRef.current.show('Sorry, we need media permission to work!');
      }
    }

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
        <GridMenu focus={isDrawerOpen} onPress={toggleDrawer} />

        <Content>
          <Title>Busque por animes</Title>
          <Description>
            Por meio de imagens, descubra o nome de animes usando o Anime
            finder. É recomendado usar mais de uma imagem durante a procura de
            um anime
          </Description>
        </Content>

        <SearchButton onPress={() => pickImage(setImage)} />

        <Toast ref={toastRef} timeout={3200} />
        <ActivityIndicator animating={Boolean(image)} />
        <Modal ref={modalRef}>
          <AnimeCard anime={anime} />
        </Modal>
      </Container>
    </Wrapper>
  );
}

export default HomeScreen;
