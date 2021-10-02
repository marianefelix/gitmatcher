import { Fragment } from 'react';

import { AiOutlineFire } from 'react-icons/ai';

import {
  Body,
  Box,
  CloseButton,
  Description,
  Footer,
  Modal,
  OverlayContainer,
  Title,
} from './styles';

interface MatchModalProps {
  isMatch: boolean;
  onClose: () => void;
}

const MatchModal = ({ isMatch, onClose }: MatchModalProps) => {
  return (
    <OverlayContainer>
      <Modal>
        <Body>
          <Box>
            {isMatch ? (
              <Fragment>
                <Title>Deu match!</Title>
                <AiOutlineFire
                  title="Ícone de fogo"
                  aria-describedby="Ícone de fogo"
                />
                <Description>
                  Vocês utilizam a mesma linguagem na maioria dos seus projetos
                  🤩
                </Description>
              </Fragment>
            ) : (
              <Fragment>
                <Title>Não deu match...</Title>
                <Description>
                  A linguagem que vocês mais utilizam não é a mesma 😕
                </Description>
              </Fragment>
            )}
          </Box>
        </Body>
        <Footer>
          <CloseButton type="button" onClick={onClose}>
            Fechar
          </CloseButton>
        </Footer>
      </Modal>
    </OverlayContainer>
  );
};

export default MatchModal;
