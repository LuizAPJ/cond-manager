import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    text: string;
    lighterText: string;
    drawerText: string;
    buttonText: string;

    background: string;
    lighterBackground: string;

    border: string;
    lighterBorder: string;

    purple: string;
    red: string;
    ice: string;
  }
}
