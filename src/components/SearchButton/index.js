import React from 'react';

import { Container, Wrapper, Label } from './styles';

function SearchButton({ onPress }) {
  return (
    <Wrapper onPress={onPress}>
      <Container>
        <Label>Select Photo</Label>
      </Container>
    </Wrapper>
  );
}

export default SearchButton;
