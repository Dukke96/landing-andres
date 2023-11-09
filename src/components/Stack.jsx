import React from 'react';
// eslint-disable-next-line import/extensions
import { logos } from '@/assets/Logos';

export default function Stack() {
  return (
    <>
      <h2 className='flex w-full justify-center mx-auto text-3xl font-bold text-purple-600 dark:text-purple-400 mb-5 mt-5'>
        Stack
      </h2>
      <div className='flex flex-wrap w-auto mx-auto justify-around text-slate-800 dark:text-slate-100'>
        {logos.map((logo) => (
          <div
            key={logo.title}
            className='flex flex-col items-center justify-center px-5 pb-5 min-w-[124px]'
          >
            {logo.icon}
            <span className='mt-2 text-sm'>{logo.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}
