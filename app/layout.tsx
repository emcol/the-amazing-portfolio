import type { Metadata } from 'next';
import { Bebas_Neue, Geist, Geist_Mono } from 'next/font/google';
import CursorLoader from '@/components/CursorLoader';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas-neue',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Emanuele Colabello — Front-end Developer',
  description:
    'Front-end Developer specializing in React, crafting fast, expressive digital experiences. Based in Italy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable}`}
      >
        {children}
        <CursorLoader />
      </body>
    </html>
  );
}
