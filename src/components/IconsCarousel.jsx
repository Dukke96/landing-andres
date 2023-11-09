'use client';

import React from 'react';
// eslint-disable-next-line import/extensions
import { logos } from '@/assets/Logos';

function IconsCarousel() {
  return (
    <div className='flex items-center justify-center gap-4 text-center mb-5'>
      {logos.map((logo) => (
        <div
          key={logo.title}
          className='w-1/5 flex flex-col mx-20 items-center justify-center p-2 min-w-[120px]'
        >
          {logo.icon}
          <span className='mt-2 text-sm'>{logo.title}</span>
        </div>
      ))}
    </div>
  );
}

export default IconsCarousel;
