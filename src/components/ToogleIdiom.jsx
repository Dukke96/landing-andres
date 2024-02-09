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
    router.push(newPath);
  };

  return (
    <div className='flex flex-wrap items-center'>
      <label className='cursor-pointer pr-2 text-slate-500' htmlFor='id-c01'>
        ES
      </label>
      <input
        className='peer relative h-4 w-8 cursor-pointer appearance-none rounded-lg bg-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-emerald-200 checked:after:left-4 checked:after:bg-emerald-500 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-emerald-300 checked:after:hover:bg-emerald-600 focus:outline-none checked:focus:bg-emerald-400 checked:after:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300'
        type='checkbox'
        checked={isEnglish}
        onChange={toggleLanguage}
        id='id-c01'
      />
      <label className='cursor-pointer pl-2 text-slate-500' htmlFor='id-c01'>
        EN
      </label>
    </div>
  );
}
