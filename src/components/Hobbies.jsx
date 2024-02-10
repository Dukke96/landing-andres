'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { SiYoutubegaming } from 'react-icons/si';
import { PiCookingPotFill, PiTelevisionFill } from 'react-icons/pi';
import { FaPaintBrush } from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';

export default function Component() {
  const t = useTranslations('hobbies');

  return (
    <section className='w-full py-10 md:py-10 lg:py-14'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold text-purple-600 dark:text-purple-400'>
          Hobbies
        </h1>
        <p className='mt-1 text-slate-800 dark:text-slate-200'>
          {t('subtitulo')}
        </p>
      </div>
      <div className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 px-4 md:px-6 mt-12'>
        <div className='flex flex-col h-full items-center justify-center space-y-4  p-6 rounded-lg '>
          <MusicIcon className='h-10 w-10 text-slate-800 dark:text-slate-200' />
          <h3 className='text-lg font-semibold'>{t('musica')}</h3>
          <p className='text-sm text-center text-slate-800 dark:text-slate-200'>
            {t('musica-d')}
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-4  p-6 rounded-lg '>
          <SiYoutubegaming className='h-10 w-10 text-slate-800 dark:text-slate-200' />
          <h3 className='text-lg font-semibold'>{t('gaming')}</h3>
          <p className='text-sm text-center text-slate-800 dark:text-slate-200'>
            {t('gaming-d')}
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-4  p-6 rounded-lg '>
          <PiCookingPotFill className='h-10 w-10 text-slate-800 dark:text-slate-200' />
          <h3 className='text-lg font-semibold'>{t('cocina')}</h3>
          <p className='text-sm text-center text-slate-800 dark:text-slate-200'>
            {t('cocina-d')}
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-4  p-6 rounded-lg '>
          <FaPaintBrush className='h-10 w-10 text-slate-800 dark:text-slate-200' />
          <h3 className='text-lg font-semibold'>{t('pintura')}</h3>
          <p className='text-sm text-center text-slate-800 dark:text-slate-200'>
            {t('pintura-d')}
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-4  p-6 rounded-lg '>
          <CgGym className='h-10 w-10 text-slate-800 dark:text-slate-200' />
          <h3 className='text-lg font-semibold'>{t('gym')}</h3>
          <p className='text-sm text-center text-slate-800 dark:text-slate-200'>
            {t('gym-d')}
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-4  p-6 rounded-lg '>
          <PiTelevisionFill className='h-10 w-10 text-slate-800 dark:text-slate-200' />
          <h3 className='text-lg font-semibold'>{t('anime')}</h3>
          <p className='text-sm text-center text-slate-800 dark:text-slate-200'>
            {t('anime-d')}
          </p>
        </div>
      </div>
    </section>
  );
}

function MusicIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M9 18V5l12-2v13' />
      <circle cx='6' cy='18' r='3' />
      <circle cx='18' cy='16' r='3' />
    </svg>
  );
}
