/**
 * TODO: show a toast onError
 */

import { useEffect, useState } from 'react';
import { useIsAnimeSaved } from '@hooks/';
import { storeData } from '~/utils';
import {
  Container,
  Divider,
  Footer,
  Icon,
  IconWrapper,
  Image,
  Title,
} from './styles';

const AnimeCard = ({ animeData }) => {
  const [iconName, setIconName] = useState('heart-outline');

  useEffect(() => {
    (async () => {
      const [isAnimeSaved] = await useIsAnimeSaved(animeData);
      setIconName(isAnimeSaved ? 'heart' : 'heart-outline');
    })();
  }, []);

  const handleSaveAnime = async () => {
    const [isAnimeSaved, animeIndex, savedAnimes] = await useIsAnimeSaved(
      animeData
    );

    if (!isAnimeSaved) {
      savedAnimes.unshift(animeData);
      setIconName('heart');
    } else {
      savedAnimes.splice(animeIndex, 1);
      setIconName('heart-outline');
    }

    await storeData('@saveAnimes', savedAnimes);
  };

  return (
    <Container>
      <Image
        source={{
          uri: animeData.imgUrl,
        }}
      />

      <Divider />

      <Footer>
        <Title>{animeData.name}</Title>
        <IconWrapper onPress={handleSaveAnime}>
          <Icon name={iconName} />
        </IconWrapper>
      </Footer>
    </Container>
  );
};

export default AnimeCard;
