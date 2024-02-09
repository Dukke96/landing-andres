import React from 'react';
import { useTranslations } from 'next-intl';

export default function EducationFeed() {
  const t = useTranslations('educacion');
  return (
    <>
      {/* <!-- Component: Changelog feed --> */}
      <ul
        aria-label='Education'
        role='feed'
        className='relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 '
      >
        <h2 className='flex pl-6 text-3xl font-black text-purple-600 dark:text-purple-400 overflow-visible'>
          {t('titulo')}
        </h2>
        <li
          role='feed'
          className='relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-purple-600 dark:before:bg-purple-400 before:ring-2 before:ring-white'
        >
          <div className='flex flex-col flex-1 gap-4'>
            <h4 className='text-lg font-bold text-purple-600 dark:text-purple-400'>
              {t('andes')}{' '}
              <span className='text-lg pr-5 font-bold text-purple-600 dark:text-purple-400'>
                {' '}
                {t('andes-fecha')}
              </span>{' '}
            </h4>
            <p className='pr-5 text-slate-800 dark:text-slate-100'>
              {t('andes-descripcion')}{' '}
            </p>
          </div>
        </li>
        <li
          role='feed'
          className='relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-purple-600 dark:before:bg-purple-400 before:ring-2 before:ring-white'
        >
          <div className='flex flex-col flex-1 gap-4'>
            <h4 className='text-lg font-bold text-purple-600 dark:text-purple-400'>
              {t('pereira')}{' '}
              <span className='text-lg pr-5 font-bold text-purple-600 dark:text-purple-400'>
                {' '}
                - 2022
              </span>{' '}
            </h4>
            <p className='pr-5 text-slate-800 dark:text-slate-100'>
              {t('pereira-descripcion')}{' '}
            </p>
            <ul className='pl-5 pr-5 list-disc text-slate-800 dark:text-slate-100 marker:text-purple-600 dark:marker:text-purple-400'>
              <li>{t('pereira-1')}</li>
              <li>{t('pereira-2')}</li>
              <li>{t('pereira-3')}</li>
              <li>{t('pereira-4')}</li>
              <li>{t('pereira-5')}</li>
            </ul>
          </div>
        </li>
        <li
          role='feed'
          className='relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-purple-600 dark:before:bg-purple-400 before:ring-2 before:ring-white'
        >
          <div className='flex flex-col flex-1 gap-4'>
            <h4 className='text-lg font-bold text-purple-600 dark:text-purple-400'>
              {t('unal')}{' '}
              <span className='text-lg pr-5 font-bold text-purple-600 dark:text-purple-400'>
                {' '}
                - 2022
              </span>{' '}
            </h4>
            <p className='pr-5 text-slate-800 dark:text-slate-100'>
              {t('unal-descripcion')}{' '}
            </p>
            <ul className='pl-5 pr-5 list-disc text-slate-800 dark:text-slate-100 marker:text-purple-600 dark:marker:text-purple-400'>
              <li>{t('unal-1')}</li>
              <li>{t('unal-2')}</li>
              <li>{t('unal-3')}</li>
              <li>{t('unal-4')}</li>
            </ul>
          </div>
        </li>
      </ul>
      {/* <!-- End Changelog feed --> */}
    </>
  );
}
