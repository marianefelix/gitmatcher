import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      gray: string;
      background: {
        primary: string;
        secondary: string;
      };
      text: {
        primary: string;
      };
      boxShadow: string;
    };
  }
}
