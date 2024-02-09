'use client';

/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import ToogleTheme from './ToogleTheme';
import ToogleIdiom from './ToogleIdiom';

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
    <div className='flex'>
      <div className='w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933] dark:text-slate-100 text-[#212933]'>
        <ToogleTheme theme={theme} setTheme={setTheme} />
      </div>
      <div className='w-fit absolute right-48 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933] dark:text-slate-100 text-[#212933]'>
        <ToogleIdiom />
      </div>
    </div>
  );
}
