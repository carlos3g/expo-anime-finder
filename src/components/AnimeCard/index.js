import React, { useState, useEffect } from 'react';

/**
 * TODO: show a toast onError
 */

import {
  Container,
  Image,
  Divider,
  Footer,
  Title,
  IconWrapper,
  Icon,
} from './styles';
import { getData, storeData } from '~/utils';

async function useIsAnimeSaved(anime) {
  const savedAnimes = await getData('@saveAnimes');
  const animeIndex = savedAnimes.findIndex((e) => e.id === anime.id);

  return [animeIndex != -1, animeIndex, savedAnimes];
}

function AnimeCard({ anime }) {
  const [iconName, setIconName] = useState('heart-outline');

  useEffect(() => {
    (async () => {
      const [isAnimeSaved] = await useIsAnimeSaved(anime);
      setIconName(isAnimeSaved ? 'heart' : 'heart-outline');
    })();
  }, []);

  async function handleSaveAnime() {
    const [isAnimeSaved, animeIndex, savedAnimes] = await useIsAnimeSaved(
      anime
    );

    if (!isAnimeSaved) {
      savedAnimes.unshift(anime);
      setIconName('heart');
    } else {
      savedAnimes.splice(animeIndex, 1);
      setIconName('heart-outline');
    }

    await storeData('@saveAnimes', savedAnimes);
  }

  return (
    <Container>
      <Image
        source={{
          uri: anime.imgUrl,
        }}
      />
      <Divider />
      <Footer>
        <Title>{anime.name}</Title>
        <IconWrapper onPress={handleSaveAnime}>
          <Icon name={iconName} />
        </IconWrapper>
      </Footer>
    </Container>
  );
}

export default AnimeCard;
