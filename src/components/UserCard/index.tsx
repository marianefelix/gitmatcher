import { BsArrowRight } from 'react-icons/bs';
import {
  Circle,
  Container,
  Content,
  Description,
  Header,
  LanguagesBox,
  SeeMoreButton,
  Title,
  UserAvatar,
  UserLoginText,
  UserNameText,
} from './styles';

interface UserCardProps {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
  topLanguages: string[];
  showCardContent?: boolean;
}

const UserCard = ({
  id,
  name,
  login,
  avatar_url,
  html_url,
  topLanguages,
  showCardContent = false,
}: UserCardProps) => {
  const hasTopLanguages = Boolean(topLanguages.length);

  const handleSeeMoreButtonClick = () => {
    window.open(html_url);
  };

  return (
    <Container id={`user-card-${id}`} content={showCardContent}>
      <Header id={`user-card-header-${id}`}>
        <UserAvatar src={avatar_url} alt="Avatar do usuário" />
        <UserNameText>{name}</UserNameText>
        <UserLoginText>@{login}</UserLoginText>
      </Header>
      {showCardContent && (
        <Content>
          <Title>Linguagem mais utilizada: </Title>
          {hasTopLanguages ? (
            <LanguagesBox>
              <Circle />
              <Description>{topLanguages[0]}</Description>
            </LanguagesBox>
          ) : (
            <Description italic>Não encontrada</Description>
          )}
        </Content>
      )}
      <SeeMoreButton
        type="button"
        title="Ver mais"
        onClick={handleSeeMoreButtonClick}
      >
        <BsArrowRight aria-describedby="Ícone de seta para a direita" />
      </SeeMoreButton>
    </Container>
  );
};

export default UserCard;
