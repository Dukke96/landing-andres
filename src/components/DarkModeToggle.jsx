'use client';

/* eslint-disable import/prefer-default-export */

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import ToggleTheme from './ToggleTheme';
import ToggleIdiom from './ToggleIdiom';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='fixed w-fit h-fit bottom-0 left-0 right-0 flex mx-auto xl:mx-0 justify-center p-5 z-50 xl:fixed xl:top-1/2 xl:left-0 xl:-translate-y-1/2 xl:flex-col xl:items-start'>
      <div className='w-fit flex my-auto xl:my-0 min-h-[50px] p-2 rounded-xl hover:scale-110 active:scale-100 duration-200 border border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 dark:text-slate-200 text-slate-800'>
        <ToggleTheme theme={theme} setTheme={setTheme} />
      </div>
      <div className='w-fit flex ml-4 xl:ml-0 xl:mt-4 p-2 rounded-xl hover:scale-110 active:scale-100 duration-200 border border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 dark:text-slate-200 text-slate-800'>
        <ToggleIdiom />
      </div>
    </div>
  );
}
