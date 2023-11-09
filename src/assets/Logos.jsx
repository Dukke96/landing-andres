'use client';

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGraphql,
  SiPrisma,
  SiRedux,
  SiNodedotjs,
  SiApollographql,
} from 'react-icons/si';
import { FaReact, FaVuejs, FaGitAlt, FaNpm } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';

export const logos = [
  {
    icon: (
      <SiNextdotjs className='w-14 h-14 glow-effect-next hover:scale-125 transition-all' />
    ),
    title: 'Next JS',
  },
  {
    icon: (
      <FaReact className='w-14 h-14 glow-effect-react hover:text-[#149fca] hover:scale-125 transition-all' />
    ),
    title: 'React JS',
  },
  {
    icon: (
      <SiTailwindcss className='w-14 h-14 glow-effect-tailwind hover:text-[#38bdf8] hover:scale-125 transition-all' />
    ),
    title: 'Tailwind',
  },
  {
    icon: (
      <SiRedux className='w-14 h-14 glow-effect-redux hover:text-[#7849bd] hover:scale-125 transition-all' />
    ),
    title: 'Redux',
  },
  {
    icon: (
      <SiTypescript className='w-14 h-14 glow-effect-typescript hover:text-[#3178c6] hover:scale-125 transition-all' />
    ),
    title: 'TypeScript',
  },
  {
    icon: (
      <FaVuejs className='w-14 h-14 glow-effect-vue hover:text-[#42b983] hover:scale-125 transition-all' />
    ),
    title: 'Vue JS',
  },
  {
    icon: (
      <FaGitAlt className='w-14 h-14 glow-effect-git hover:text-[#f34d27] hover:scale-125 transition-all' />
    ),
    title: 'Git',
  },
  {
    icon: (
      <FaNpm className='w-14 h-14 glow-effect-npm hover:text-[#cd3534] hover:scale-125 transition-all' />
    ),
    title: 'npm',
  },
  {
    icon: (
      <SiGraphql className='w-14 h-14 glow-effect-graphql hover:text-[#f5009b] hover:scale-125 transition-all' />
    ),
    title: 'GraphQL',
  },
  {
    icon: (
      <SiApollographql className='w-14 h-14 glow-effect-apollo hover:text-[#290b9f] hover:scale-125 transition-all' />
    ),
    title: 'Apollo',
  },
  {
    icon: (
      <SiPrisma className='w-14 h-14 glow-effect-prisma hover:scale-125 transition-all' />
    ),
    title: 'Prisma',
  },
  {
    icon: (
      <SiNodedotjs className='w-14 h-14 glow-effect-nodejs hover:text-[#68a063] hover:scale-125 transition-all' />
    ),
    title: 'Node JS',
  },
  {
    icon: (
      <BiLogoPostgresql className='w-14 h-14 glow-effect-postgresql hover:text-[#30648c] hover:scale-125 transition-all' />
    ),
    title: 'PostgreSQL',
  },
];
