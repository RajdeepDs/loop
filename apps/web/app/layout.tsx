import { legal } from '@loop/cms';
import { Feed } from '@loop/cms/components/feed';
import { Toolbar as CMSToolbar } from '@loop/cms/components/toolbar';
import { DesignSystemProvider } from '@loop/design-system';
import { fonts } from '@loop/design-system/lib/fonts';
import { cn } from '@loop/design-system/lib/utils';
import '@loop/design-system/styles/globals.css';
import { Toolbar } from '@loop/feature-flags/components/toolbar';
import type { ReactNode } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';
import './styles/web.css';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html
    lang="en"
    className={cn(fonts, 'scroll-smooth')}
    suppressHydrationWarning
  >
    <body>
      <DesignSystemProvider>
        <Header />
        {children}
        <Feed queries={[legal.postsQuery]}>
          {/* biome-ignore lint/suspicious/useAwait: "Server Actions must be async" */}
          {async ([data]) => {
            'use server';
            return <Footer legalPostsMeta={data.legalPages.items} />;
          }}
        </Feed>
      </DesignSystemProvider>
      <Toolbar />
      <CMSToolbar />
    </body>
  </html>
);

export default RootLayout;
