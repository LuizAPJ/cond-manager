import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    text: string;
    grayText: string;
    drawerText: string;
    buttonText: string;

    background: string;
    lighterBackground: string;

    border: string;
    lighterBorder: string;

    disabledDatesText: string;

    purple: string;
    red: string;
    ice: string;
    black: string;
  }
}
