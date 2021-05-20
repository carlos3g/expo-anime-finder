import React, { useState, useCallback } from 'react';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';

import { GridMenu, AnimeCard } from '@components/';
import { CardsContainer, Container, Wrapper } from './styles';
import { getData } from '~/utils';

function FavoritesScreen() {
  const { toggleDrawer } = useNavigation();
  const [animes, setAnimes] = useState([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const result = await getData('@saveAnimes');
        setAnimes(result);
      })();
      return () => setAnimes([]);
    }, [])
  );

  return (
    <Wrapper>
      <Container>
        <GridMenu focus={useIsDrawerOpen()} onPress={toggleDrawer} />
        <CardsContainer>
          {animes.map((anime, index) => (
            <AnimeCard anime={anime} key={index} />
          ))}
        </CardsContainer>
      </Container>
    </Wrapper>
  );
}

export default FavoritesScreen;
