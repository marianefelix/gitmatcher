import { Fragment } from 'react';
import Landing from './pages/Landing';
import GlobalStyle from './styles/global';

export const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Landing />
    </Fragment>
  );
};
