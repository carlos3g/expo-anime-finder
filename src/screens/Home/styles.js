import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Modalize } from 'react-native-modalize';

import backgroundIMG from '@assets/images/background.png';
import { colors } from '@styles/';

export const Wrapper = styled.ImageBackground.attrs({
  source: backgroundIMG,
  resizeMode: 'cover',
  blurRadius: 3,
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
})``;

export const Modal = styled(Modalize).attrs({
  snapPoint: 350,
  modalHeight: 500,
  handlePosition: 'inside',
  childrenStyle: { padding: 16 },
  handleStyle: { backgroundColor: '#c4c4c4', width: '20%' },
  modalStyle: { backgroundColor: colors.blackBlueBerryShade },
})``;
