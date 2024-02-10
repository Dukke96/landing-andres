'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function ToggleIdiom() {
  const router = useRouter();
  const locale = useLocale(); // Obtiene el locale actual

  // Determinar si el idioma actual es inglés
  const isEnglish = locale === 'en';

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    // Definir el nuevo idioma basado en el idioma actual
    const newLocale = isEnglish ? 'es' : 'en';

    // Construir la URL objetivo para el cambio de idioma, manteniendo el pathname y el query actual
    // Asume que no necesitas mantener parámetros de consulta adicionales. Si es necesario, deben ser añadidos manualmente.
    const newPath = `${newLocale}`;

    // Cambiar el idioma redirigiendo a la misma ruta con el nuevo idioma, utilizando literales de plantilla
    router.push(newPath, { scroll: false });
  };

  return (
    <div className='flex flex-wrap xl:flex-col items-center'>
      <label className='cursor-pointer pr-2 xl:pr-0 xl:pb-4' htmlFor='id-c01'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/197/197593.png'
          width='30'
          height='30'
          alt='ES'
          title='Español'
        />
      </label>
      <input
        className='xl:rotate-90  peer my-auto relative h-4 w-8 cursor-pointer appearance-none rounded-lg bg-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-purple-200 checked:after:left-4 checked:after:bg-purple-600 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-purple-300 checked:after:hover:bg-purple-700 focus:outline-none checked:focus:bg-purple-400 checked:after:focus:bg-purple-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300'
        type='checkbox'
        checked={isEnglish}
        onChange={toggleLanguage}
        id='id-c01'
      />
      <label className='cursor-pointer pl-2 xl:pl-0 xl:pt-4' htmlFor='id-c01'>
        <img
          src='   https://cdn-icons-png.flaticon.com/512/197/197374.png '
          width='30'
          height='30'
          alt='EN'
          title='English'
        />
      </label>
    </div>
  );
}
