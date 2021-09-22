import styled from 'styled-components';

interface ButtonType {
  show: boolean;
  variant: 'contained' | 'outlined';
}

export const Button = styled.button<ButtonType>`
  box-sizing: border-box;
  width: 16rem;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;

  background: ${({ theme, variant }) =>
    variant === 'contained'
      ? theme.colors.primary
      : theme.colors.background.primary};

  border-radius: 6px;
  border: ${({ theme, variant }) =>
    variant === 'outlined' ? `2px solid ${theme.colors.text.primary}` : 'none'};

  & > div {
    border-radius: ${({ variant }) =>
      variant === 'outlined' ? '8px 3px 3px 0' : '8px 6px 6px 0'};
  }
`;

export const ButtonText = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.5rem;
  text-align: center;

  padding: 1rem;
  width: 80%;
`;

export const IconContainer = styled.div`
  width: 5rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.text.primary};

  & svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.8rem;
  }
`;
