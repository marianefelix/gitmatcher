import { ThemeProvider } from 'styled-components';
import { Landing } from './pages/Landing';

import dark from './styles/themes/light';

import GlobalStyle from './styles/global';

export const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Landing />
    </ThemeProvider>
  );
};
