/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useTranslations } from 'next-intl';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaGitAlt, FaGithub, FaNpm, FaReact } from 'react-icons/fa';
import {
  SiApollographql,
  SiGitlab,
  SiGraphql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si';

export default function Projects() {
  const t = useTranslations('proyectos');
  const projects = [
    {
      imagen:
        'https://res.cloudinary.com/dxt8ig0vt/image/upload/v1699682108/Captura_de_pantalla_2023-11-11_005444_njzdp4.png',
      titulo: t('greenLoop.titulo'),
      subtitulo: t('greenLoop.subtitulo'),
      descripción: t('greenLoop.descripcion'),
      stack: [
        <SiNextdotjs key='Next.JS' className='w-8 h-8' />,
        <FaReact key='React.JS' className='w-8 h-8' />,
        <SiTailwindcss key='Tailwind' className='w-8 h-8' />,
        <SiGraphql key='GraphQL' className='w-8 h-8' />,
        <SiApollographql key='Apollo' className='w-8 h-8' />,
        <SiPrisma key='Prisma' className='w-8 h-8' />,
        <BiLogoPostgresql key='Postgresql' className='w-8 h-8' />,
        <FaGitAlt key='Git' className='w-8 h-8' />,
        <FaNpm key='Npm' className='w-8 h-8' />,
        <SiVercel key='Vercel' className='w-8 h-8' />,
        <FaGithub key='Github' className='w-8 h-8' />,
      ],
    },
    {
      imagen:
        'https://res.cloudinary.com/dxt8ig0vt/image/upload/v1699681981/Captura_de_pantalla_2023-11-11_005216_keulrc.png',
      titulo: t('labSonrisas.titulo'),
      subtitulo: t('labSonrisas.subtitulo'),
      descripción: t('labSonrisas.descripcion'),
      stack: [
        <SiNextdotjs key='Next.JS' className='w-8 h-8' />,
        <FaReact key='React.JS' className='w-8 h-8' />,
        <SiTailwindcss key='Tailwind' className='w-8 h-8' />,
        <SiGraphql key='GraphQL' className='w-8 h-8' />,
        <SiApollographql key='Apollo' className='w-8 h-8' />,
        <SiPrisma key='Prisma' className='w-8 h-8' />,
        <BiLogoPostgresql key='Postgresql' className='w-8 h-8' />,
        <FaGitAlt key='Git' className='w-8 h-8' />,
        <FaNpm key='Npm' className='w-8 h-8' />,
        <SiVercel key='Vercel' className='w-8 h-8' />,
        <SiGitlab key='Gitlab' className='w-8 h-8' />,
      ],
    },
    {
      imagen:
        'https://res.cloudinary.com/dxt8ig0vt/image/upload/v1699682632/Captura_de_pantalla_2023-11-11_010320_vvouuw.png',
      titulo: t('portfolio.titulo'),
      subtitulo: t('portfolio.subtitulo'),
      descripción: t('portfolio.descripcion'),
      stack: [
        <SiNextdotjs key='Next.JS' className='w-8 h-8' />,
        <FaReact key='React.JS' className='w-8 h-8' />,
        <SiTailwindcss key='Tailwind' className='w-8 h-8' />,
        <SiNodedotjs key='Node.JS' className='w-8 h-8' />,
        <FaGitAlt key='Git' className='w-8 h-8' />,
        <FaNpm key='Npm' className='w-8 h-8' />,
        <SiVercel key='Vercel' className='w-8 h-8' />,
        <FaGithub key='Github' className='w-8 h-8' />,
      ],
    },
  ];

  return (
    <ul className='whitespace-no-wrap flex-no-wrap flex-grow [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full mb-5'>
      {projects.map((project) => (
        <li key={project.titulo} className='flex h-full'>
          <div className='rounded-xl flex-col justify-between bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500  transition-all text-slate-800 dark:text-slate-100'>
            {/*  <!-- Image --> */}
            <figure>
              <img
                src={project.imagen}
                alt={project.titulo}
                className='aspect-video w-full rounded-t-xl'
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className='p-6'>
              <header className='mb-4'>
                <h3 className='text-xl font-bold text-purple-600 dark:text-purple-400'>
                  {project.titulo}
                </h3>
                <p className='text-sm text-slate-400'>{project.subtitulo}</p>
              </header>
              <div className='flex-col'>
                <p>{project.descripción}</p>
                <div className='flex items-center justify-between flex-wrap pt-5 pb-2'>
                  {project.stack.map((stackItem) => (
                    <div key={stackItem.key} className='mr-3 mb-3'>
                      {stackItem}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
