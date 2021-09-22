import { CgSearch } from 'react-icons/cg';
import { AiOutlineFire } from 'react-icons/ai';

import { CustomButton } from '../../components/Button';
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
      <CustomButton
        title="Verificar"
        variant="contained"
        icon={
          <AiOutlineFire
            title="Ícone de fogo"
            aria-describedby="Ícone de fogo"
          />
        }
        show
        onClick={() => {}}
      >
        Verificar
      </CustomButton>
      <CustomButton
        title="Nova busca"
        variant="outlined"
        icon={
          <CgSearch title="Ícone de lupa" aria-describedby="Ícone de lupa" />
        }
        show
        onClick={() => {}}
      >
        Nova busca
      </CustomButton>
      <Footer />
    </Container>
  );
};
