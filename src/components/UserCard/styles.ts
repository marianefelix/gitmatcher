import styled, { keyframes, css } from 'styled-components';

interface ContainerType {
  content?: boolean;
}

interface DescriptionType {
  italic?: boolean;
}

export const UserAvatar = styled.img`
  width: 10rem;
  height: 10rem;

  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.secondary};

  padding: 0.3rem;
`;

export const UserNameText = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text.primary};

  margin-top: 0.8rem;
`;

export const UserLoginText = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.header`
  width: 14rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & p {
    text-align: center;
  }

  @media (max-width: 600px) {
    ${UserNameText} {
      font-size: 1.6rem;
    }
    ${UserLoginText} {
      font-size: 1.4rem;
    }
  }
`;

export const Content = styled.main`
  width: 16rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-left: 1px solid ${({ theme }) => theme.colors.text.primary};
  padding: 0 2rem;

  & p {
    text-align: center;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const goForward = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(30px);
  }
`;

export const SeeMoreButton = styled.button`
  opacity: 0;
  width: 5rem;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 290px;

  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};

  & svg {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const Container = styled.div<ContainerType>`
  height: 100%;
  position: relative;

  display: flex;
  align-items: center;

  padding: 1.5rem 1rem;

  border-radius: 0.8rem;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};

  background-color: ${({ theme }) => theme.colors.background.secondary};

  // effects
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-1rem);
  }

  ${({ content }) =>
    content &&
    css`
      &:hover ${SeeMoreButton} {
        opacity: 1;
        animation: ${goForward} 0.7s linear 2 alternate;
      }
    `}

  @media (max-width: 600px) {
    & {
      flex-direction: column;
      justify-content: center;
    }

    ${Header} {
      padding-bottom: 1.3rem;
    }

    ${Content} {
      border-top: 2px solid ${({ theme }) => theme.colors.text.primary};
      border-left: none;

      padding: 1.3rem 0;
    }
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 450;
`;

export const Description = styled.p<DescriptionType>`
  font-size: 1.4rem;
  font-weight: 300;
  font-style: ${({ italic }) => italic && 'italic'};
`;

export const LanguagesBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
`;

export const Circle = styled.div`
  width: 1rem;
  height: 1rem;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.secondary};

  margin-right: 10px;
`;
