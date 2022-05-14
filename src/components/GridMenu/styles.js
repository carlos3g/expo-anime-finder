import { Ionicons } from '@expo/vector-icons';
import { colors } from '@styles/';
import { Animated, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableHighlight);

export const Container = styled(AnimatedTouchable).attrs({
  hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
})`
  width: 40px;
`;

export const ActiveIcon = styled(Ionicons).attrs({
  size: 40,
  color: colors.white,
  name: 'grid',
})``;

export const InactiveIcon = styled(Ionicons).attrs({
  size: 40,
  color: colors.white,
  name: 'grid-outline',
})``;
