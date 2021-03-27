import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

import { colors } from '@styles/';

export const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  height: 65px;

  border-radius: 8px;
  overflow: hidden;
`;

export const Container = styled(LinearGradient).attrs({
  colors: [colors.turquoise, colors.turquoiseShade],
  start: [0, 0.5],
  end: [1, 0.5],
})`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${colors.white};
  font-family: Montserrat_400Regular;
  font-size: 22px;
`;
