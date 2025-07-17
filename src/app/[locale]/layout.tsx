import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '@/theme';
import Navigation from '@/src/components/Navigation/Navigation';
import Footer from '@/src/components/Footer/Footer';
import Script from 'next/script';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export const metadata = {
  title: 'Amin Yarits Firdaus',
  description: "I am frontend developer focused on building simple, functional interfaces with React and Next.js. I'm also learning SvelteKit.",

};

export default async function RootLayout({ children, params }: { children: any, params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <Script src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <NextIntlClientProvider>
          <MantineProvider theme={theme} defaultColorScheme="dark">
            <Navigation />
            {children}
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html >
  );
}
