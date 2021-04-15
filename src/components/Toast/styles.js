import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import { colors } from '@styles/';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  position: absolute;
  bottom: ${windowWidth * 0.05}px;
  left: ${windowWidth * 0.05}px;

  align-items: center;
  justify-content: center;

  width: ${windowWidth * 0.9}px;
  height: 55px;

  border-radius: 7px;
  padding: 10px;

  background-color: ${colors.blackPearl};
  opacity: 0.98;
`;

export const Label = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  text-align: center;
`;
