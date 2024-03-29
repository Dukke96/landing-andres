/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import '../../../styles/globals.css';
import { Victor_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
// eslint-disable-next-line import/extensions
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ThemeSwitcher } from '@/components/DarkModeToggle';
import { DarkThemeProvider } from '../DarkThemeProvider';

const victor_mono = Victor_Mono({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata = {
  title: 'Andres David Duque Cadena',
  description: 'Portfolio Andres Duque',
  keywords: [
    'Andres',
    'Andrés',
    'David',
    'Duque',
    'Cadena',
    'Andres David',
    'Andres David Duque',
    'Andres David Duque Cadena',
    'Andrés David',
    'Andrés David Duque',
    'Andrés David Duque Cadena',
    'Dukke',
    'Dukke Dev',
    'Dev',
    'Next',
    'Next.JS',
    'React',
    'React.JS',
    'JavaScript',
    'TypeScript',
    'JS',
    'TS',
    'CSS',
    'Tailwind',
    'Front-end',
    'Developer',
  ],
  authors: [{ name: 'Andres David Duque Cadena' }],
  creator: 'Andres David Duque Cadena',
  publisher: 'Andres David Duque Cadena',
  canonical: '/',
  openGraph: {
    // images:
    //   'https://www.andres-duque.com/_next/image?url=%2FPerfil-Landing.png&w=640&q=75',
    title: 'Andres David Duque Cadena',
    description:
      'Bienvenido a mi website personal, aquí encontrarás mi portafolio y blog personal.',
    url: 'https://res.cloudinary.com/dxt8ig0vt/image/upload/v1699660313/Perfil-Landing_xkqwow.png',
    siteName: 'Andres David Duque Cadena',
    images: [
      {
        url: 'https://res.cloudinary.com/dxt8ig0vt/image/upload/v1699660313/Perfil-Landing_xkqwow.png',
        width: 640,
        height: 640,
      },
    ],
    type: 'website',
  },
};

export const viewport = {
  width: 1,
  themeColor: ['dark', 'light'],
};

export const googleSiteVerification = {
  content: 'I7DLsPqhnyG9P3PIB5YL1c98mYDFQVPYAWsCJie3qB4',
};

export default function LocaleLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${victor_mono.className} antialiased flex justify-center`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <DarkThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            <ThemeSwitcher />
            <div className='pt-10 w-11/12 md:pt-20 md:w-11/12 lg:pt-40 lg:w-[90%] xl:w-[85%] 2xl:w-[70%] 3xl:w-[50%]'>
              {children}
            </div>
            <meta
              name='google-site-verification'
              content='I7DLsPqhnyG9P3PIB5YL1c98mYDFQVPYAWsCJie3qB4'
            />
          </DarkThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
