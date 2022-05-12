import { AnimeCard, GridMenu } from '@components/';
import { useDrawerStatus } from '@react-navigation/drawer';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { getData } from '~/utils';
import { CardsContainer, Container, Wrapper } from './styles';

function FavoritesScreen() {
  const { toggleDrawer } = useNavigation();
  const isDrawerOpen = useDrawerStatus() === 'open';
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
        <GridMenu focus={isDrawerOpen} onPress={toggleDrawer} />
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
