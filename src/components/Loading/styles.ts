import styled, { keyframes } from 'styled-components';

const fireLoading = keyframes`
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
  background: #f0f0f7d3;

  img {
    width: 3.3rem;
    margin: 0.3rem 0.3rem;
    animation: ${fireLoading} 0.7s linear infinite alternate;
  }

  img:nth-child(1) {
    animation-delay: -0.99s;
  }

  img:nth-child(2) {
    animation-delay: -0.79s;
  }

  img:nth-child(3) {
    animation-delay: -0.49s;
  }
`;

export const Icon = styled.img``;
