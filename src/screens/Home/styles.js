import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Modalize } from 'react-native-modalize';

import backgroundIMG from '@assets/images/background.png';
import { colors } from '@styles/';

export const Wrapper = styled.ImageBackground.attrs({
  source: backgroundIMG,
  resizeMode: 'cover',
  blurRadius: 1,
})`
  flex: 1;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;

  padding: 16px;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  color: colors.turquoise,
  size: 50,
})`
  position: absolute;
  left: 50%;
  top: 50%;
`;

export const Modal = styled(Modalize).attrs({
  snapPoint: 350,
  modalHeight: 500,
  handlePosition: 'inside',
  childrenStyle: { padding: 16 },
  handleStyle: { backgroundColor: '#c4c4c4', width: '20%' },
  modalStyle: { backgroundColor: colors.blackBlueBerryShade },
})``;

export const Content = styled.View`
  justify-content: flex-end;
  padding-bottom: 70px;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: Lato_400Regular;
  color: ${colors.white};
  font-size: 30px;
`;

export const Description = styled.Text`
  font-family: Lato_400Regular;
  line-height: 24px;
  color: ${colors.white};
  font-size: 16px;

  margin-top: 10px;
`;
