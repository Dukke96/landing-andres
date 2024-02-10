'use client';

import React from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function ToggleTheme({ theme, setTheme }) {
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className='flex flex-wrap xl:flex-col items-center'>
      {' '}
      {/* Cambiado a flex-col para apilamiento vertical */}
      <button
        aria-label='Switch to light mode'
        type='button'
        className='cursor-pointer mr-2 xl:mr-0 xl:pb-4' // Ajustado para agregar margen entre botones
        onClick={toggleTheme}
      >
        <MdLightMode className='w-7 h-7' />
      </button>
      <input
        id='id-c01'
        type='checkbox'
        className='xl:rotate-90  peer my-auto relative h-4 w-8 cursor-pointer appearance-none rounded-lg bg-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-purple-200 checked:after:left-4 checked:after:bg-purple-600 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-purple-300 checked:after:hover:bg-purple-700 focus:outline-none checked:focus:bg-purple-400 checked:after:focus:bg-purple-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300'
        checked={isDark}
        onChange={toggleTheme}
      />
      <button
        aria-label='Switch to dark mode'
        type='button'
        className='cursor-pointer ml-2 xl:ml-0 xl:pt-4' // Ajustado para agregar margen entre botones
        onClick={toggleTheme}
      >
        <MdDarkMode className='w-7 h-7' />
      </button>
    </div>
  );
}
