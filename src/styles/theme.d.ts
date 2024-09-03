import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      fontPrimary: string;
      fontSecondary: string;
      primary: string;
    };
    fontSizes: {
      xl: string;
      l: string;
      m: string;
      s: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: {
      s: string;
      m: string;
    };
    boxShadow: {
      s: string;
    };
  }
}
