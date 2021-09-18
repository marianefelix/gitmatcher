import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;

  margin-bottom: 0.8rem;

  & h1:first-child {
    font-weight: 900;
    padding-right: 0.3rem;
    padding-left: 0.3rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  & h1:last-child {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 300;
  }
`;

export const Title = styled.h1``;

export const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 300;

  text-align: center;

  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4rem;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 5rem;

  border-top: 2px solid ${({ theme }) => theme.colors.gray};
`;
