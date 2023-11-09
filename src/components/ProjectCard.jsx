import React from 'react';

export default function ProjectCard() {
  return (
    <>
      {/* <!-- Component: Basic blog card --> */}
      <div className='overflow-hidden rounded-xl text-slate-800 dark:text-slate-100'>
        {/*  <!-- Image --> */}
        <figure>
          <img
            src='https://picsum.photos/id/101/800/600'
            alt='Proyecto'
            className='aspect-video w-full'
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className='p-6'>
          <header className='mb-4'>
            <h3 className='text-xl font-bold text-purple-600 dark:text-purple-400'>
              The easy way to go
            </h3>
            <p className='text-sm text-slate-400'> By George, jun 3 2023</p>
          </header>
          <p>
            Experience the simple pleasures of a world with no cars, and only
            gentle walks through palm tree forests, and fallen coconuts. An
            island that’s home to extraordinary cliffs, swelling oceans, and
            mammoth manta rays.
          </p>
        </div>
      </div>
      {/* <!-- End Basic blog card --> */}
    </>
  );
}
