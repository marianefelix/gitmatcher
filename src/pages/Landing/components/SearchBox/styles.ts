import styled, { css } from 'styled-components';

interface FormType {
  hide: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form<FormType>`
  ${(props) =>
    props.hide &&
    css`
      visibility: hidden;
      opacity: 0;
      transition-property: all;
      transition-duration: 0.49s;
      transition-timing-function: linear;
      transition-delay: 1s;
    `}
`;

export const Box = styled.div`
  width: 70rem;

  display: flex;
  justify-content: center;

  border-radius: 8px;
  transition: box-shadow 0.5s;

  &:hover,
  &:focus-within {
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 5.5rem;

  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.secondary};

  text-align: center;

  border-radius: 8px 0 0 8px;
  border: 0;
  outline: none;
`;

export const ButtonText = styled.p`
  display: none;
`;

export const ButtonIcon = styled.img``;

export const Button = styled.button`
  width: 9rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.6rem;
  text-align: center;

  border-radius: 0 8px 8px 0;
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};

  background: #14161a;
  transition: display 0.4s;

  &:hover ${ButtonText} {
    display: block;
  }

  &:hover ${ButtonIcon} {
    display: none;
  }
`;
