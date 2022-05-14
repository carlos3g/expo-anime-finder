import { Container, Label, Wrapper } from './styles';

const SearchButton = ({ onPress }) => (
  <Wrapper onPress={onPress}>
    <Container>
      <Label>Select Photo</Label>
    </Container>
  </Wrapper>
);

export default SearchButton;
