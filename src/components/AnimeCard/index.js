import React from 'react';

import {
  Container,
  Image,
  Divider,
  Footer,
  Title,
  IconWrapper,
  Icon,
} from './styles';

function AnimeCard({ anime }) {
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
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </Footer>
    </Container>
  );
}

export default AnimeCard;
