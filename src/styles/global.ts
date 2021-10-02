import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  input, button, body {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.background.primary}
  }

  :root {
    font-size: 60%;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`;
