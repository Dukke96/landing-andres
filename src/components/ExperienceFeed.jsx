/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTranslations } from 'next-intl';

export default function ExperienceFeed() {
  const t = useTranslations('experiencia');
  return (
    <>
      {/* <!-- Component: Changelog feed --> */}
      <ul
        aria-label='Education'
        role='feed'
        className='relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 '
      >
        <h2 className='pl-6 text-3xl font-black text-purple-600 dark:text-purple-400'>
          {t('titulo')}
        </h2>
        <li
          role='feed'
          className='relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-purple-600 dark:before:bg-purple-400 before:ring-2 before:ring-white'
        >
          <div className='flex flex-col flex-1 gap-4'>
            <h4 className='text-lg font-bold text-purple-600 dark:text-purple-400'>
              PrevalentWare{' '}
              <span className='text-lg pr-5 font-bold text-purple-600 dark:text-purple-400'>
                {' '}
                - 2023-09 - 2022-11
              </span>{' '}
            </h4>
            <p className='text-slate-800 dark:text-slate-100 pr-5'>
              {t('prevalentware')}
            </p>
            <ul className='pl-5 pr-5 list-disc text-slate-800 dark:text-slate-100 marker:purple-600 marker:text-purple-600 dark:marker:text-purple-400 '>
              <li>{t('prevalent-1')}</li>
              <li>{t('prevalent-2')}</li>
              <li>{t('prevalent-3')}</li>
              <li>{t('prevalent-4')}</li>
            </ul>
          </div>
        </li>
        <li
          role='feed'
          className='relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-purple-600 dark:before:bg-purple-400 before:ring-2 before:ring-white'
        >
          <div className='flex flex-col flex-1 gap-4'>
            <h4 className='text-lg font-bold text-purple-600 dark:text-purple-400'>
              Nevato{' '}
              <span className='text-lg pr-5 font-bold text-purple-600 dark:text-purple-400'>
                {' '}
                - 2022-09 - 2021-10
              </span>{' '}
            </h4>
            <p className='text-slate-800 pr-5 dark:text-slate-100'>
              {t('nevato')}
            </p>
            <ul className='pl-5 pr-5 list-disc text-slate-800 dark:text-slate-100 marker:text-purple-600 dark:marker:text-purple-400'>
              <li>{t('nevato-1')}</li>
              <li>{t('nevato-2')}</li>
              <li>{t('nevato-3')}</li>
            </ul>
          </div>
        </li>
        <li
          role='feed'
          className='relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-purple-600 dark:before:bg-purple-400 before:ring-2 before:ring-white'
        >
          <div className='flex flex-col flex-1 gap-4'>
            <h4 className='text-lg pr-5 font-bold text-purple-600 dark:text-purple-400'>
              Freelance{' '}
              <span className='text-lg pr-5 font-bold text-purple-600 dark:text-purple-400'>
                {' '}
                - 2021-05
              </span>{' '}
            </h4>
            <p className='text-slate-800 pr-5 dark:text-slate-100'>
              {t('freelance')}
            </p>
            <ul className='pr-5 pl-5 list-disc text-slate-800 dark:text-slate-100 marker:text-purple-600 dark:marker:text-purple-400'>
              <li>{t('freelance-1')}</li>
              <li>{t('freelance-2')}</li>
              <li>{t('freelance-3')}</li>
              <li>{t('freelance-4')}</li>
            </ul>
          </div>
        </li>
      </ul>
      {/* <!-- End Changelog feed --> */}
    </>
  );
}
