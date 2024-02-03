import React from 'react';
import { DefaultTheme, ThemeProvider } from "styled-components";
import useUserColorScheme from './useUserColorScheme';

const themeCommon = {
  fonts: {
    primary: 'Inter, sans-serif'
  },
  fontSizes: {},
  mediaQueries: {}
};

export const theme = {
  light: {
    ...themeCommon,
    colors: {}
  },
  dark: {
    ...themeCommon,
    colors: {}
  }
} as Record<string, DefaultTheme>;

type ThemeProps = {
  children: React.ReactNode;
}

function Theme({ children }: ThemeProps) {
  const mode = useUserColorScheme();
  return (
    <ThemeProvider theme={theme[mode]}>
      {children}
    </ThemeProvider>
  )
}

export default Theme;