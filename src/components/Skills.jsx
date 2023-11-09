import React from 'react';
// eslint-disable-next-line import/extensions
import { skillsLogos } from '@/assets/SkillsLogos';

export default function Skills2() {
  return (
    <>
      <h2 className='flex w-full justify-center mx-auto text-3xl font-bold text-purple-600 dark:text-purple-400 mb-5 mt-5'>
        Soft Skills
      </h2>
      <div className='flex flex-wrap w-auto mx-auto justify-around text-slate-800 dark:text-slate-100'>
        {skillsLogos.map((logo) => (
          <div
            key={logo.title}
            className='flex flex-col items-center justify-center px-5 pb-5 min-w-[124px]'
          >
            {logo.icon}
            <span className='flex flex-wrap mt-2 text-sm min-w-[100px] max-w-[100px] justify-center text-center'>
              {logo.title}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
