'use client';

import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
// eslint-disable-next-line import/extensions
import Projects from '@/components/Projects';

export default function ProjectsCarouselLG({ perView }) {
  useEffect(() => {
    const slider = new Glide('.glide-mb', {
      hoverpause: true,
      type: 'carousel',
      focusAt: 'center',
      perView,
      autoplay: 0,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: '[&>*]:bg-wuiSlate-700',
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/* <!-- Component: Carousel with controls outside --> */}
      <div className='glide-mb relative w-full h-auto '>
        {/*    <!-- Slides --> */}
        <div className='overflow-hidden flex' data-glide-el='track'>
          <Projects />
        </div>
        {/*    <!-- Controls --> */}
        <div
          className='flex w-full items-center justify-center gap-2 p-4'
          data-glide-el='controls'
        >
          <button
            className='inline-flex h-8 w-8 items-center justify-center hover:scale-110 rounded-full border border-slate-800 dark:border-slate-200 text-slate-800 dark:text-slate-200 transition duration-300 hover:border-slate-900 hover:text-slate-900 dark:hover:border-slate-100 dark:hover:text-slate-100 focus-visible:outline-none lg:h-12 lg:w-12'
            data-glide-dir='<'
            aria-label='prev slide'
            type='button'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-5 w-5'
            >
              <title>prev slide</title>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
              />
            </svg>
          </button>
          <button
            className='inline-flex h-8 w-8 items-center justify-center hover:scale-110 rounded-full border border-slate-800 dark:border-slate-200 text-slate-800 dark:text-slate-200 transition duration-300 hover:border-slate-900 hover:text-slate-900 dark:hover:border-slate-100 dark:hover:text-slate-100 focus-visible:outline-none lg:h-12 lg:w-12'
            data-glide-dir='>'
            aria-label='next slide'
            type='button'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-5 w-5'
            >
              <title>next slide</title>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </button>
        </div>
      </div>
      {/* <!-- End Carousel with controls outside --> */}
    </>
  );
}
