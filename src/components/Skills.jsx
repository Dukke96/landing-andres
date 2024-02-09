import React from 'react';
// eslint-disable-next-line import/extensions
// import { skillsLogos } from '@/assets/SkillsLogos';
import { useTranslations } from 'next-intl';

import { GiTeamIdea, GiSpellBook } from 'react-icons/gi';
import { FaBrain, FaRegLightbulb, FaTools } from 'react-icons/fa';
import { RiEmpathizeFill, RiSpeakFill } from 'react-icons/ri';
import { FaMagnifyingGlass, FaUserClock } from 'react-icons/fa6';

export default function Skills2() {
  const t = useTranslations('skills');

  const skillsLogos = [
    {
      icon: (
        <FaBrain className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
      ),
      title: t('pensamiento'),
    },
    {
      icon: (
        <GiSpellBook className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
      ),
      title: t('aprendizaje'),
    },
    {
      icon: (
        <RiSpeakFill className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
      ),
      title: t('comunicacion'),
    },
    {
      icon: (
        <GiTeamIdea className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
      ),
      title: t('equipo'),
    },
    {
      icon: (
        <FaRegLightbulb className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
      ),
      title: t('creatividad'),
    },
    {
      icon: (
        <RiEmpathizeFill className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
      ),
      title: t('empatia'),
    },
    {
      icon: (
        <FaMagnifyingGlass className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
      ),
      title: t('curiosidad'),
    },
    {
      icon: (
        <FaUserClock className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
      ),
      title: t('responsabilidad'),
    },
    {
      icon: (
        <FaTools className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
      ),
      title: t('resolucion'),
    },
  ];

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
