'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

// eslint-disable-next-line import/prefer-default-export
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
    <button
      type='button'
      className='w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933] dark:text-slate-100 text-[#212933]'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}
