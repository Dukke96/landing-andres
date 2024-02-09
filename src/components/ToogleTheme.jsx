'use client';

import React from 'react';

export default function ToogleTheme({ theme, setTheme }) {
  // Añade theme y setTheme como props
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className='flex flex-wrap items-center'>
      <label className='cursor-pointer pr-2 text-slate-500' htmlFor='id-c01'>
        Light
      </label>
      <input
        id='id-c01'
        type='checkbox'
        className='peer relative h-4 w-8 cursor-pointer appearance-none rounded-lg bg-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-emerald-200 checked:after:left-4 checked:after:bg-emerald-500 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-emerald-300 checked:after:hover:bg-emerald-600 focus:outline-none checked:focus:bg-emerald-400 checked:after:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300'
        checked={isDark}
        onChange={toggleTheme}
      />
      <label className='cursor-pointer pl-2 text-slate-500' htmlFor='id-c01'>
        Dark
      </label>
    </div>
  );
}
