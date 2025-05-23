import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';



export const metadata = {
  title: 'Amin Yarits Firdaus',
  description: 'Always hese ngarti gancang poho in software engineering. So i made this personal website to share my thoughts.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Navigation />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
