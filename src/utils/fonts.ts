import { Inter, JetBrains_Mono, Poppins, Bayon, IM_Fell_DW_Pica } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '700'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const bayon = Bayon({
  subsets: ['latin'],
  weight: '400',
});

export const IM = IM_Fell_DW_Pica({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
});
