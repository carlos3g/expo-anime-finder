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

function AnimeCard({ data }) {
  return (
    <Container>
      <Image
        source={{
          uri: data.imgUrl,
        }}
      />
      <Divider />
      <Footer>
        <Title>{data.name}</Title>
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </Footer>
    </Container>
  );
}

export default AnimeCard;
