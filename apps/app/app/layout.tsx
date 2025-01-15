import { DesignSystemProvider } from '@loop/design-system';
import { fonts } from '@loop/design-system/lib/fonts';
import '@loop/design-system/styles/globals.css';
import { Toolbar } from '@loop/feature-flags/components/toolbar';
import type { ReactNode } from 'react';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en" className={fonts} suppressHydrationWarning>
    <body>
      <DesignSystemProvider>{children}</DesignSystemProvider>
      <Toolbar />
    </body>
  </html>
);

export default RootLayout;
