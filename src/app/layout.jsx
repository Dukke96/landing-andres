/* eslint-disable camelcase */
import { Victor_Mono } from 'next/font/google';

const victor_mono = Victor_Mono({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className={`${victor_mono.className} antialiased flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
