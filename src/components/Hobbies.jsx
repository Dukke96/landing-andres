/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WJ11OOxTAdK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <section className='w-full py-10 md:py-10 lg:py-14'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold text-purple-600 dark:text-purple-400'>
          Hobbies
        </h1>
        <p className='mt-1 text-slate-900 dark:text-slate-200'>
          Conóceme un poco más como persona.
        </p>
      </div>
      <div className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 px-4 md:px-6 mt-12'>
        <div className='flex flex-col h-full items-center justify-center space-y-4 bg-gray-100 p-6 rounded-lg dark:bg-gray-800'>
          <MusicIcon className='h-10 w-10 text-gray-900 dark:text-gray-50' />
          <h3 className='text-lg font-semibold'>Music</h3>
          <p className='text-sm text-center text-gray-500 dark:text-gray-400'>
            I love playing the guitar and exploring different genres of music.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-4 bg-gray-100 p-6 rounded-lg dark:bg-gray-800'>
          <BookOpenIcon className='h-10 w-10 text-gray-900 dark:text-gray-50' />
          <h3 className='text-lg font-semibold'>Reading</h3>
          <p className='text-sm text-center text-gray-500 dark:text-gray-400'>
            I enjoy reading a variety of books, from fantasy novels to
            biographies.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-4 bg-gray-100 p-6 rounded-lg dark:bg-gray-800'>
          <CameraIcon className='h-10 w-10 text-gray-900 dark:text-gray-50' />
          <h3 className='text-lg font-semibold'>Photography</h3>
          <p className='text-sm text-center text-gray-500 dark:text-gray-400'>
            I have a passion for capturing moments through the lens of my
            camera.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-4 bg-gray-100 p-6 rounded-lg dark:bg-gray-800'>
          <GlobeIcon className='h-10 w-10 text-gray-900 dark:text-gray-50' />
          <h3 className='text-lg font-semibold'>Traveling</h3>
          <p className='text-sm text-center text-gray-500 dark:text-gray-400'>
            I love exploring new places and experiencing different cultures.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-4 bg-gray-100 p-6 rounded-lg dark:bg-gray-800'>
          <PaintbrushIcon className='h-10 w-10 text-gray-900 dark:text-gray-50' />
          <h3 className='text-lg font-semibold'>Art</h3>
          <p className='text-sm text-center text-gray-500 dark:text-gray-400'>
            I enjoy creating and appreciating art in all its forms.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-4 bg-gray-100 p-6 rounded-lg dark:bg-gray-800'>
          <CoffeeIcon className='h-10 w-10 text-gray-900 dark:text-gray-50' />
          <h3 className='text-lg font-semibold'>Coffee</h3>
          <p className='text-sm text-center text-gray-500 dark:text-gray-400'>
            I love the taste and aroma of a freshly brewed cup of coffee.
          </p>
        </div>
      </div>
    </section>
  );
}

function BookOpenIcon(props) {
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
      <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' />
      <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' />
    </svg>
  );
}

function CameraIcon(props) {
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
      <path d='M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z' />
      <circle cx='12' cy='13' r='3' />
    </svg>
  );
}

function CoffeeIcon(props) {
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
      <path d='M17 8h1a4 4 0 1 1 0 8h-1' />
      <path d='M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z' />
      <line x1='6' x2='6' y1='2' y2='4' />
      <line x1='10' x2='10' y1='2' y2='4' />
      <line x1='14' x2='14' y1='2' y2='4' />
    </svg>
  );
}

function GlobeIcon(props) {
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
      <circle cx='12' cy='12' r='10' />
      <line x1='2' x2='22' y1='12' y2='12' />
      <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
    </svg>
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

function PaintbrushIcon(props) {
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
      <path d='M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z' />
      <path d='M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7' />
      <path d='M14.5 17.5 4.5 15' />
    </svg>
  );
}
