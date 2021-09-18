import { SearchBox } from './components/SearchBox';
import {
  Container,
  Description,
  Footer,
  Header,
  LogoContainer,
  Title,
} from './styles';

export const Landing = () => {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <Title>GitHub</Title>
          <Title>Matcher</Title>
        </LogoContainer>
        <Description>Encontre seu parceiro de programação</Description>
        <SearchBox />
      </Header>
      <Footer />
    </Container>
  );
};
