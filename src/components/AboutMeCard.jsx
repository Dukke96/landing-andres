'use client';

import Image from 'next/image';
import React from 'react';
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useTranslations } from 'next-intl';
import CVButton from './CVButton';

export default function AboutMeCard() {
  const t = useTranslations('about');

  const [headerAbout] = useTypewriter({
    words: ['Andrés ', 'Dukke '],
    loop: 0,
  });

  return (
    <>
      {/* <!-- Component: Horizontal card--> */}
      <div className='flex flex-col whitespace-normal overflow-hidden rounded-lg text-slate-800 dark:text-slate-100  sm:flex-row'>
        {/*  <!-- Body--> */}
        <div className=' flex-1 p-6 sm:mx-6 sm:px-0'>
          <header className='flex gap-4 mb-4'>
            <div className='flex mb-5'>
              <h3 className='flex text-2xl md:text-4xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 whitespace-pre'>
                {t('hola')}{' '}
              </h3>
              <span className='flex w-fit sm:min-w-[144px] md:min-w-[216px] lg:min-w-[360px] text-2xl md:text-4xl lg:text-6xl font-bold text-purple-600 dark:text-purple-400 whitespace-pre'>
                {headerAbout}
                <Cursor cursorStyle='</>' />
              </span>
            </div>
          </header>
          <p className='lg:w-fit text-justify'>{t('presentacion')}</p>
          <div className='mt-12 xl:mt-20'>
            <span className='flex mx-auto text-4xl mt-5 mb-5 w-full justify-around max-w-[450px] my-auto'>
              <a
                href='https://github.com/Dukke96'
                target='_blank'
                className='hover:scale-125 transition-all'
                rel='noreferrer'
                aria-label='Visit my GitHub profile'
              >
                <FaGithub />
              </a>
              <a
                href='https://www.linkedin.com/in/andresduqueing/'
                target='_blank'
                className='hover:text-[#0b66c3] hover:scale-125 transition-all'
                rel='noreferrer'
                aria-label='Visit my Linkedin profile'
              >
                <FaLinkedin />
              </a>
              <a
                href='https://api.whatsapp.com/send?phone=573202411663'
                target='_blank'
                className='hover:text-[#1ad03f] hover:scale-125 transition-all'
                rel='noreferrer'
                aria-label='Visit my Whatsapp profile'
              >
                <FaWhatsapp />
              </a>
              <a
                href='https://t.me/Andres_Duque'
                target='_blank'
                className='hover:text-[#2fa2d9] hover:scale-125 transition-all'
                rel='noreferrer'
                aria-label='Visit my Telegram profile'
              >
                <FaTelegramPlane />
              </a>
              <a
                href='https://discord.com/users/690420097130692638'
                target='_blank'
                className='hover:text-[#5563ea] hover:scale-125 transition-all'
                rel='noreferrer'
                aria-label='Visit my Discord profile'
              >
                <FaDiscord />
              </a>
            </span>
            <span className='flex justify-center'>
              <CVButton />
            </span>
          </div>
        </div>
        {/*  <!-- Image --> */}
        <figure className='flex-1 mx-auto transition-all overflow-hidden items-end align-top max-w-[464px]'>
          {/* <img
            src='/Perfil-Landing.png'
            alt='Foto Dukke IA'
            width='400'
            height='300'
            className='object-cover flex justify-end min-h-full min-w-full aspect-auto max-h-[464px]'
          /> */}
          <Image
            src='/Perfil-Landing.png'
            alt='Foto Dukke IA'
            width={400}
            height={300}
            className='object-cover flex justify-end min-h-full min-w-full max-h-[464px]'
            loading='lazy'
          />
        </figure>
      </div>
      {/* <!-- End Horizontal card--> */}
    </>
  );
}
