import React, { useState } from 'react';
import { Container, Label } from './styles';

function Toast({ timeout }, ref) {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState(null);

  React.useImperativeHandle(ref, () => ({
    show,
    hide,
  }));

  const hide = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, timeout);
  };

  const show = (message) => {
    setIsVisible(true);
    setMessage(message);
    hide();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Container>
      <Label>{message}</Label>
    </Container>
  );
}

export default React.forwardRef(Toast);
