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
import UserCard from '../../components/UserCard';

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
      <UserCard
        name="Mariane Felix"
        login="marianefelix"
        avatar_url="https://avatars.githubusercontent.com/u/19508177?v=4"
        html_url="https://github.com/marianefelix"
        topLanguages={[]}
        showCardContent
      />
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
