import { CgSearch } from 'react-icons/cg';
import { AiOutlineFire } from 'react-icons/ai';

import { CustomButton } from '../../components/Button';
import { SearchBox } from './components/SearchBox';
import {
  AuthorText,
  Container,
  Content,
  Description,
  Footer,
  Header,
  Link,
  LogoContainer,
  Title,
  UsersContainer,
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
      <Content>
        <UsersContainer>
          <UserCard
            id="1"
            name="Mariane Felix"
            login="marianefelix"
            avatar_url="https://avatars.githubusercontent.com/u/19508177?v=4"
            html_url="https://github.com/marianefelix"
            topLanguages={[]}
            showCardContent
          />
          <UserCard
            id="2"
            name="Mariane Felix"
            login="marianefelix"
            avatar_url="https://avatars.githubusercontent.com/u/19508177?v=4"
            html_url="https://github.com/marianefelix"
            topLanguages={[]}
            showCardContent
          />
        </UsersContainer>
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
      </Content>
      <Footer>
        <AuthorText>
          Feito por
          <Link
            href="https://www.linkedin.com/in/mariane-felix/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mariane Felix
          </Link>
        </AuthorText>
      </Footer>
    </Container>
  );
};
