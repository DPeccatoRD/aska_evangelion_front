import React from 'react';

import { Providers } from 'shared/providers';

import type { Metadata, Viewport } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Aska Evangelion',
  description: 'Современное веб-приложение на Next.js',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://your-domain.com',
    siteName: 'Aska Evangelion',
    title: 'Aska Evangelion',
    description: 'Современное веб-приложение на Next.js',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
