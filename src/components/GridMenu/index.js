import { useEffect } from 'react';
import { Animated } from 'react-native';
import { ActiveIcon, Container, InactiveIcon } from './styles';

function GridMenu({ focus, onPress }) {
  const fadeAnim = new Animated.Value(1);
  const Icon = focus ? ActiveIcon : InactiveIcon;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.7,
        duration: 50,
        useNativeDriver: true,
      }),

      Animated.timing(fadeAnim, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, [focus]);

  return (
    <Container onPress={onPress} style={{ opacity: fadeAnim }}>
      <Icon />
    </Container>
  );
}

export default GridMenu;
