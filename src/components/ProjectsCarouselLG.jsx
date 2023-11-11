/* eslint-disable import/extensions */

'use client';

import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import { projects } from '@/assets/Projects';

export default function ProjectsCarouselLG({ perView }) {
  useEffect(() => {
    const slider = new Glide('.glide-lg', {
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
      <div className='glide-lg relative w-full h-auto '>
        {/*    <!-- Slides --> */}
        <div className='overflow-hidden flex flex-grow' data-glide-el='track'>
          <ul className='whitespace-no-wrap flex-no-wrap flex-grow [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full mb-5'>
            {projects.map((project) => (
              <li key={project.titulo} className='flex h-full'>
                <div className='rounded-xl flex-col justify-between bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500  transition-all text-slate-800 dark:text-slate-100'>
                  {/*  <!-- Image --> */}
                  <figure>
                    <img
                      src={project.imagen}
                      alt={project.titulo}
                      className='aspect-video w-full rounded-t-xl'
                    />
                  </figure>
                  {/*  <!-- Body--> */}
                  <div className='p-6'>
                    <header className='mb-4'>
                      <h3 className='text-xl font-bold text-purple-600 dark:text-purple-400'>
                        {project.titulo}
                      </h3>
                      <p className='text-sm text-slate-400'>
                        {project.subtitulo}
                      </p>
                    </header>
                    <div className='flex-col'>
                      <p>{project.descripción}</p>
                      <div className='flex items-center justify-between flex-wrap pt-5 pb-2'>
                        {project.stack.map((stackItem) => (
                          <div key={stackItem.key} className='mr-3 mb-3'>
                            {stackItem}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Aquí puedes agregar la lógica para mostrar el stack si es necesario */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
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
