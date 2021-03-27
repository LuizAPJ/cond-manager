import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    text: string;
    lighterText: string;
    drawerText: string;

    background: string;
    darkerBackground: string;

    border: string;
    lighterBorder: string;

    purple: string;
    red: string;
    ice: string;
  }
}
