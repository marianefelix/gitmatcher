import styled from 'styled-components';

interface ButtonType {
  show: boolean;
}

export const Button = styled.button<ButtonType>`
  display: ${(props) => (props.show ? 'block' : 'none')};
`;
