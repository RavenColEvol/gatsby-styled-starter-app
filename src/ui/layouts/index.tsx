import React from 'react';
import { GlobalStyle } from "../style/GlobalStyles";
import Theme from '../style/Theme';

type LayoutProps = {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Theme>
      <GlobalStyle />
      <main>
        {children}
      </main>
    </Theme>
  )
}