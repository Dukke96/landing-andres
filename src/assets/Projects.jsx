/* eslint-disable import/prefer-default-export */
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

export const Projects = [
  {
    imagen:
      'https://res.cloudinary.com/dxt8ig0vt/image/upload/v1699682632/Captura_de_pantalla_2023-11-11_010320_vvouuw.png',
    titulo: 'Dukke Dev',
    subtitulo: 'Proyecto propio',
    descripción:
      'Landing page personal donde cuento un poco sobre quién soy, las tecnologías y soft skills que he adquirido a lo largo del tiempo, un poco sobre mi experiencia laboral y académica, los proyectos de los que he hecho parte, mis hobbies y las formas en que puedes contactarme.',
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
  {
    imagen:
      'https://res.cloudinary.com/dxt8ig0vt/image/upload/v1699682108/Captura_de_pantalla_2023-11-11_005444_njzdp4.png',
    titulo: 'Green Loop',
    subtitulo: 'Desarrollado en Prevalentware',
    descripción:
      'Plataforma administrativa para una empresa dedicada a la construcción sostenible, Para esta plataforma desarrollé tareas por parte del front-end, tales como registro de actas y facturas haciendo uso de mutaciones y queries de graphQL, visualización de datos en tablas y un sistema de notificaciones interna para todo el personal con envío de correos incluido.',
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
    titulo: 'Lab Sonrisas',
    subtitulo: 'Desarrollado en Prevalentware',
    descripción:
      'Plataforma administrativa para una empresa dedicada a la fabricación y distribución de alineadores dentales invisibles. Desarrollé diferentes tareas, tales como el desarrollo de la interfaz y mutaciones de graphQL para la creación y edición de personas, pedidos, facturas, entre otros. Funcionalidad responsive para firmar desde el celular al momento de recibir el pedido y varias tareas más.',
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
];
