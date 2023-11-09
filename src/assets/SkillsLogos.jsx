import { GiTeamIdea, GiSpellBook } from 'react-icons/gi';
import { FaBrain, FaRegLightbulb, FaTools } from 'react-icons/fa';
import { RiEmpathizeFill, RiSpeakFill } from 'react-icons/ri';
import { FaMagnifyingGlass, FaUserClock } from 'react-icons/fa6';

export const skillsLogos = [
  {
    icon: (
      <FaBrain className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
    ),
    title: 'Pensamiento Lógico',
  },
  {
    icon: (
      <GiSpellBook className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
    ),
    title: 'Aprendizaje Continuo',
  },
  {
    icon: (
      <RiSpeakFill className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
    ),
    title: 'Comunicación Efectiva',
  },
  // {
  //     icon: (<TbTextResize/>),
  //     title: "Responsive Design",
  // },
  {
    icon: (
      <GiTeamIdea className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
    ),
    title: 'Trabajo en Equipo',
  },
  {
    icon: (
      <FaRegLightbulb className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
    ),
    title: 'Creatividad',
  },
  {
    icon: (
      <RiEmpathizeFill className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
    ),
    title: 'Empatía',
  },
  {
    icon: (
      <FaMagnifyingGlass className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
    ),
    title: 'Curiosidad',
  },
  {
    icon: (
      <FaUserClock className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
    ),
    title: 'Responsabilidad',
  },
  {
    icon: (
      <FaTools className='w-14 h-14 glow-effect-next hover:scale-125 transition-all text-slate-800 dark:text-slate-100 text-2xl' />
    ),
    title: 'Resolución de Problemas',
  },
];
