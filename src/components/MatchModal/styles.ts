import styled from 'styled-components';

interface TitleType {
  color: string;
}

export const Modal = styled.div`
  height: 50vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 0.8rem;
  background-color: #fefefe;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  padding: 2rem;
  text-align: center;

  font-family: 'Roboto';
`;

export const Title = styled.p<TitleType>`
  font-weight: 300;
  font-size: 4rem;
  color: ${(props) => props.color};
  justify-self: flex-end;
`;

export const Icon = styled.img`
  width: 18%;
`;

export const Description = styled.p`
  margin-top: 1rem;
  font-weight: 300;
  font-size: 1.8rem;
`;

export const Box = styled.div`
  ${Title}, ${Description} {
    text-align: center;
  }

  ${Title}, ${Icon} {
    display: inline-flex;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  border-top: 2px solid var(--color-input-background);
`;

export const CloseButton = styled.button`
  color: var(--primary);
  font: 400 1.6rem Roboto;

  padding: 0 1.4rem 0 0;
  background: none;
  border: none;
  cursor: pointer;
  transition: font 0.3s;
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

    ${Icon} {
      width: 15%;
    }
  }

  @media (min-width: 1000px) {
    ${Modal} {
      max-width: 50rem;
    }
  }
`;
