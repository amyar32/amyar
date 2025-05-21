'use client';

import { createTheme } from '@mantine/core';
import { Manrope } from 'next/font/google';

const fontManrope = Manrope({
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '700'],
});

export const theme = createTheme({
  fontFamily: fontManrope.style.fontFamily
});
