/* eslint-disable camelcase */
import '../../styles/globals.css';
import { Victor_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
// eslint-disable-next-line import/extensions
import { ThemeSwitcher } from '@/components/DarkModeToggle';
import { DarkThemeProvider } from './DarkThemeProvider';

const victor_mono = Victor_Mono({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata = {
  title: 'Dukke Dev',
  description: 'Portafolio Andres Duque',
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
  authors: [{ name: 'Andres Duque' }],
  creator: 'Andres Duque',
  publisher: 'Andres Duque',
  canonical: '/',
  openGraph: {
    // images:
    //   'https://www.andres-duque.com/_next/image?url=%2FPerfil-Landing.png&w=640&q=75',
    title: 'Dukke Dev',
    description: 'Bienvenido a Dukke Dev',
    url: 'https://res.cloudinary.com/dxt8ig0vt/image/upload/v1699660313/Perfil-Landing_xkqwow.png',
    siteName: 'Dukke Dev',
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

export default function RootLayout({ children }) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className={`${victor_mono.className} antialiased flex justify-center`}
      >
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
        <Analytics />
      </body>
    </html>
  );
}
