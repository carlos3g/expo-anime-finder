import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import backgroundIMG from '@assets/images/background.png';

export const Wrapper = styled.ImageBackground.attrs({
  source: backgroundIMG,
  resizeMode: 'cover',
  blurRadius: 1,
})`
  flex: 1;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 16px 16px 0 16px;
`;

export const CardsContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 50px;
`;
