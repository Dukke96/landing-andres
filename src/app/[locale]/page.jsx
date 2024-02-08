/* eslint-disable import/extensions */

'use client';

import React, { useEffect, Suspense } from 'react';
import Lottie from 'lottie-react';
import { useTheme } from 'next-themes';
import loadingRocket from '@/assets/loadingRocket';

const BentoColumns = React.lazy(() => import('@/components/BentoColumns'));
const ParticlesBackground = React.lazy(() =>
  import('@/components/ParticlesBackground')
);
const ParticlesBackgroundLight = React.lazy(() =>
  import('@/components/ParticlesBackgroundLight')
);

export default function Home() {
  const { theme, setTheme, resolvedTheme } = useTheme(null);

  useEffect(() => {
    if (theme === 'system') {
      setTheme(resolvedTheme);
    }
  }, [theme, resolvedTheme]);

  return (
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
      <BentoColumns />
    </Suspense>
  );
}
