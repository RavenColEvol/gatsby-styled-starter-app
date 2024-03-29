// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {},
    fonts: {
      primary: string;
    },
    fontSizes: {},
    mediaQueries: {}
  }
}