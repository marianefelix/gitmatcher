import searchIcon from '../../../../assets/icons/search-icon.png';

import {
  Box,
  Button,
  Container,
  Form,
  ButtonIcon,
  Input,
  ButtonText,
} from './styles';

export const SearchBox = () => {
  return (
    <Container>
      <Form
        hide={false}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Box>
          <Input
            type="text"
            value=""
            placeholder="Digite o nome de um usuário do GitHub"
            onChange={() => {}}
            onClick={() => {}}
          />
          <Button type="submit">
            <ButtonText>Buscar</ButtonText>
            <ButtonIcon src={searchIcon} alt="Ícone de fogo" />
          </Button>
        </Box>
      </Form>
    </Container>
  );
};
