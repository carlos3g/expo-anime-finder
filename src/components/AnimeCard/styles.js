import styled from 'styled-components/native';

import { Ionicons } from '@expo/vector-icons';

import { colors } from '@styles/';

export const Container = styled.View`
  background-color: ${colors.blackPearl};
  width: 100%;
  margin: 10px 0;

  border: 0.5px solid #2e2e43;
  border-radius: 12px;

  elevation: 8;
  overflow: hidden;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 200px;
`;

export const Divider = styled.View`
  background-color: ${colors.white};
  opacity: 0.1;

  margin: 10px 16px;
  height: 1px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  padding-top: 0;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 18px;
`;

export const IconWrapper = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
})``;

export const Icon = styled(Ionicons).attrs({
  name: 'heart-outline',
  color: colors.white,
  size: 30,
})``;
