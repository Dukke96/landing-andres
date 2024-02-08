import React from 'react';

export default function EducationFeed() {
  return (
    <>
      {/* <!-- Component: Changelog feed --> */}
      <ul
        aria-label='Education'
        role='feed'
        className='relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 '
      >
        <h2 className='flex pl-6 text-3xl font-black text-purple-600 dark:text-purple-400 overflow-visible'>
          Educación
        </h2>
        <li
          role='feed'
          className='relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-purple-600 dark:before:bg-purple-400 before:ring-2 before:ring-white'
        >
          <div className='flex flex-col flex-1 gap-4'>
            <h4 className='text-lg font-bold text-purple-600 dark:text-purple-400'>
              Maestría en Ingeniería de Software - Universidad de los Andes{' '}
              <span className='text-lg pr-5 font-bold text-purple-600 dark:text-purple-400'>
                {' '}
                - En Curso
              </span>{' '}
            </h4>
            <p className='pr-5 text-slate-800 dark:text-slate-100'>
              Maestría en curso 🚧{' '}
            </p>
          </div>
        </li>
        <li
          role='feed'
          className='relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-purple-600 dark:before:bg-purple-400 before:ring-2 before:ring-white'
        >
          <div className='flex flex-col flex-1 gap-4'>
            <h4 className='text-lg font-bold text-purple-600 dark:text-purple-400'>
              Diplomado en Desarrollo Web - Universidad Tecnológica de Pereira{' '}
              <span className='text-lg pr-5 font-bold text-purple-600 dark:text-purple-400'>
                {' '}
                - 2022
              </span>{' '}
            </h4>
            <p className='pr-5 text-slate-800 dark:text-slate-100'>
              Este diplomado lo cursé gracias a que quedé seleccionado para el
              programa &quot;Misión TIC&quot; y en este aprendí sobre:
            </p>
            <ul className='pl-5 pr-5 list-disc text-slate-800 dark:text-slate-100 marker:text-purple-600 dark:marker:text-purple-400'>
              <li>Fundamentos de programación en Python</li>
              <li>Fundamentos de programación en Java</li>
              <li>Fundamentos de programación en HTML, CSS y JavaScript</li>
              <li>
                Programación con énfasis en desarrollo web con frameworks como
                React y Vue
              </li>
              <li>Consumo de datos a través de API REST</li>
            </ul>
          </div>
        </li>
        <li
          role='feed'
          className='relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-purple-600 dark:before:bg-purple-400 before:ring-2 before:ring-white'
        >
          <div className='flex flex-col flex-1 gap-4'>
            <h4 className='text-lg font-bold text-purple-600 dark:text-purple-400'>
              Grado en Ingeniería Civil - Universidad Nacional de Colombia{' '}
              <span className='text-lg pr-5 font-bold text-purple-600 dark:text-purple-400'>
                {' '}
                - 2022
              </span>{' '}
            </h4>
            <p className='pr-5 text-slate-800 dark:text-slate-100'>
              En mi carrera además de aprender cosas que amo relacionada a esta,
              aprendí muchas cosas que poco a poco me trajeron al mundo del
              desarrollo, tales como:
            </p>
            <ul className='pl-5 pr-5 list-disc text-slate-800 dark:text-slate-100 marker:text-purple-600 dark:marker:text-purple-400'>
              <li>
                Programación en Python para solucionar diferentes problemas de
                la carrera
              </li>
              <li>Programación básica en C++</li>
              <li>Programación en R para análisis estadísticos</li>
              <li>
                Automatización de actividades en ArcGIS haciendo uso de VPL
              </li>
            </ul>
          </div>
        </li>
      </ul>
      {/* <!-- End Changelog feed --> */}
    </>
  );
}
