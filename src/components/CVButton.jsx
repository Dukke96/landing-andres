import React from 'react';

export default function CVButton() {
  return (
    <>
      {/* <!-- Component: Large primary button with trailing icon  --> */}

      <button
        type='button'
        className='inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 text-slate-800 hover:bg-purple-200 dark:hover:bg-purple-400 border-slate-800 dark:text-slate-100 dark:border-slate-100 px-6 text-sm font-medium tracking-wide transition duration-300 hover:scale-110  focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none'
      >
        <a
          href='https://drive.google.com/file/d/1b0W-ULmkKGiplOf1Jtn30fkMzVccE9IR/view?usp=drive_link'
          className='flex'
          target='_blank'
          rel='noreferrer'
        >
          <span className='mr-2'>Descargar CV</span>
          <span className='relative only:-mx-6'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='1.5'
              role='button'
              aria-labelledby='title-32 desc-32'
            >
              <title id='title-32'>Descargar CV</title>
              <desc id='desc-32'>Descargar CV</desc>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
              />
            </svg>
          </span>
        </a>
      </button>
      {/* <!-- End Large primary button with trailing icon  --> */}
    </>
  );
}
