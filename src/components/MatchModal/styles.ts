import styled from 'styled-components';

export const Modal = styled.div`
  height: 30vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const Body = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 2rem;
  text-align: center;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.text.primary};
  justify-self: flex-end;
`;

export const Description = styled.p`
  margin-top: 1rem;
  font-weight: 300;
  font-size: 1.8rem;

  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Box = styled.div`
  ${Title}, ${Description} {
    text-align: center;
  }

  ${Title}, & > svg {
    display: inline-flex;
  }

  & > svg {
    font-size: 3.8rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  border-top: 2px solid ${({ theme }) => theme.colors.gray};
`;

export const CloseButton = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;

  padding: 0 1.4rem 0 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 1;

  left: 0;
  top: 0;

  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  @media (max-width: 600px) {
    ${Modal} {
      width: 90vw;
    }

    ${Title} {
      font-size: 4rem;
    }

    ${Description} {
      font-size: 2rem;
      width: 100%;
    }
  }

  @media (min-width: 1000px) {
    ${Modal} {
      max-width: 50rem;
    }
  }
`;
