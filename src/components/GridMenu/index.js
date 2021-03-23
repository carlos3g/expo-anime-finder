import React from 'react';

import { Container, ActiveIcon, InactiveIcon } from './styles';

function GridMenu({ focus, onPress }) {
  const Icon = focus ? ActiveIcon : InactiveIcon;
  return (
    <Container onPress={onPress}>
      <Icon />
    </Container>
  );
}

export default GridMenu;
