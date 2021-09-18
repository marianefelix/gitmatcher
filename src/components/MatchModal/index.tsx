import React, { Fragment } from 'react';

import fireIcon from '../../assets/icons/loading-icon.png';

import {
  Body,
  Box,
  CloseButton,
  Description,
  Footer,
  Icon,
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
                <Title color="var(--primary)">Deu match!</Title>
                <Icon src={fireIcon} alt="Ícone de fogo" />
                <Description>
                  Vocês utilizam a mesma linguagem na maioria dos seus projetos
                  🤩
                </Description>
              </Fragment>
            ) : (
              <Fragment>
                <Title color="black">Não deu match...</Title>
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
