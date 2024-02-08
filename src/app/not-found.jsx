/* eslint-disable import/extensions */

'use client';

import React, { useEffect, Suspense } from 'react';
import Lottie from 'lottie-react';
import { useTheme } from 'next-themes';
import loadingRocket from '@/assets/loadingRocket';
import animation404 from '@/assets/404Animation';

const ParticlesBackground = React.lazy(() =>
  import('@/components/ParticlesBackground')
);
const ParticlesBackgroundLight = React.lazy(() =>
  import('@/components/ParticlesBackgroundLight')
);

export default function NotFound() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (theme === 'system') {
      setTheme(resolvedTheme);
    }
  }, [theme, resolvedTheme]);

  return (
    <html lang='en'>
      <body>
        <Suspense
          fallback={
            <div className='flex justify-center align-middle mx-auto my-auto'>
              <Lottie
                animationData={loadingRocket}
                style={{ width: 500, height: 500 }}
              />
            </div>
          }
        >
          {theme === 'dark' ? (
            <ParticlesBackground />
          ) : (
            <ParticlesBackgroundLight />
          )}
          <Lottie
            animationData={animation404}
            // style={{ width: 1000, height: 1000 }}
            className='w-auto h-auto mx-auto md:mt-[-10rem] xl:mt-[-25rem]'
          />
        </Suspense>
      </body>
    </html>
  );
}
