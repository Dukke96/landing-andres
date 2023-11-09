'use client';

// Bibliotecas externas
import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';
import Lottie from 'lottie-react';
import { useInView } from 'react-intersection-observer';

// Componentes
import AboutMeCard from './AboutMeCard';
import ExperienceFeed from './ExperienceFeed';
import EducationFeed from './EducationFeed';
import GetInTouch from './GetInTouch';
import Stack from './Stack';
import ProjectsCarouselLG from './ProjectsCarouselLG';
import ProjectsCarouselMD from './ProjectsCarouselMD';
import ProjectsCarouselSM from './ProjectsCarouselSM';
import ProjectsCarouselMobile from './ProjectsCarouselMobile';
import Skills2 from './Skills';
import InViewLottie from './InViewLottie';

// Animaciones
import educationAnimation from '@/assets/educationAnimation.json';
import experienceAnimation from '@/assets/experienceAnimation.json';
import stackAnimation from '@/assets/stackAnimation.json';
import skillsAnimation from '@/assets/skillsAnimation.json';
import projectsAnimation from '@/assets/projectsAnimation.json';

// import experienceAnimationLottie from '@/assets/experienceAnimationLottie';

export default function BentoColumns() {
  // eslint-disable-next-line no-unused-vars
  const [inViewRefAbout, inViewAbout] = useInView({ triggerOnce: false });
  const [inViewRefStack, inViewStack] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [inViewRefSkills, inViewSkills] = useInView({ triggerOnce: false });
  const [inViewRefExperience, inViewExperience] = useInView({
    triggerOnce: true,
  });
  const [inViewRefEducation, inViewEducation] = useInView({
    triggerOnce: true,
  });

  const [animatePropsStack, setAnimatePropsStack] = useState({
    x: '-100vw',
    opacity: 0,
  });
  const [animatePropsSkills, setAnimatePropsSkills] = useState({
    x: '100vw',
    opacity: 0,
  });
  const [animatePropsExperience, setAnimatePropsExperience] = useState({
    x: '100vw',
    opacity: 0,
  });
  const [animatePropsEducation, setAnimatePropsEducation] = useState({
    x: '100vw',
    opacity: 0,
  });

  useEffect(() => {
    if (inViewStack) {
      setAnimatePropsStack({ x: 0, opacity: 1 });
    }
  }, [inViewStack]);

  useEffect(() => {
    if (inViewSkills) {
      setAnimatePropsSkills({ x: 0, opacity: 1 });
    }
  }, [inViewSkills]);

  useEffect(() => {
    if (inViewExperience) {
      setAnimatePropsExperience({ x: 0, opacity: 1 });
    }
  }, [inViewExperience]);

  useEffect(() => {
    if (inViewEducation) {
      setAnimatePropsEducation({ x: 0, opacity: 1 });
    }
  }, [inViewEducation]);

  return (
    <>
      {/* Mobile */}
      <div className='sm:hidden justify-center overflow-visible'>
        {/* Primera fila */}
        <div className='flex flex-col items-center mb-5 gap-5'>
          <div className='min-w-[340px] rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'>
            <AboutMeCard />
          </div>
          <div className='relative lg:w-3/3 my-5 w-full justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'>
            <Lottie
              animationData={stackAnimation}
              style={{ width: 120, height: 120 }}
              className='absolute top-[-50px] left-[-30px] z-50'
            />
            <Stack />
          </div>
          <div className='relative w-full mb-5 rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'>
            <Lottie
              animationData={skillsAnimation}
              style={{ width: 140, height: 140 }}
              className='absolute top-[-60px] left-[-40px] z-50'
            />
            <Skills2 />
          </div>
        </div>
        {/* Segunda fila */}
        <div className='flex flex-col items-center mb-5 gap-5'>
          <div className='relative min-w-[340px] rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'>
            <Lottie
              animationData={experienceAnimation}
              style={{ width: 170, height: 170 }}
              className='absolute top-[-60px] right-[-20px]'
            />
            <ExperienceFeed />
          </div>
          <div className='relative min-w-[340px] rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'>
            <Lottie
              animationData={educationAnimation}
              style={{ width: 150, height: 150 }}
              className='absolute top-[-50px] right-[-10px]'
            />
            <EducationFeed />
          </div>
        </div>
        {/* Tercera fila */}
        <div className='glide-mb mb-5 rounded-xl my-5'>
          <div className='flex mx-auto my-auto justify-center text-center'>
            <div className='flex-col w-full justify-center mx-auto text-2xl font-bold text-purple-600 dark:text-purple-400 mb-5 mt-5'>
              Proyectos
              <div className='flex mx-auto my-auto justify-center align-middle'>
                <InViewLottie
                  animationData={projectsAnimation}
                  width={400}
                  height={270}
                />
              </div>
            </div>
          </div>
          <div className='glide-mb'>
            <ProjectsCarouselMobile perView={1} />
          </div>
        </div>
        {/* Cuarta fila */}
        <div className='flex flex-col mb-5 gap-5 items-center'>
          <div className='min-w-[340px] w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90'>
            Hobbies
          </div>
          <div className='min-w-[340px] w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90'>
            <GetInTouch />
          </div>
        </div>
      </div>

      {/* Tablet SM */}
      <div className='hidden sm:block justify-center overflow-visible md:hidden'>
        {/* Primera fila */}
        <div className='flex flex-col items-center mb-5 gap-5'>
          <div className='min-w-[340px] w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'>
            <AboutMeCard />
          </div>
          <div className='lg:w-3/3 my-5 w-full justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'>
            <Stack />
          </div>
          <div className='w-full mb-5 rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'>
            <Skills2 />
          </div>
        </div>
        {/* Segunda fila */}
        <div className='flex flex-col items-center mb-5 gap-5'>
          <div className='min-w-[340px] rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'>
            <ExperienceFeed />
          </div>
          <div className='min-w-[340px] rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'>
            <EducationFeed />
          </div>
        </div>
        {/* Tercera fila */}
        <div className='glide-sm flex mb-5 rounded-xl'>
          <ProjectsCarouselSM perView={1} />
        </div>
        {/* Cuarta fila */}
        <div className='flex flex-col mb-5 gap-5 items-center'>
          <div className='min-w-[340px] w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90'>
            Hobbies
          </div>
          <div className='min-w-[340px] w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90'>
            <GetInTouch />
          </div>
        </div>
      </div>

      {/* Laptop MD */}
      <div className='md:overflow-visible hidden md:block lg:hidden'>
        {/* Primera fila */}
        <div className='lg:w-3/3 my-5 w-full justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'>
          <AboutMeCard />
        </div>
        <div className='lg:w-3/3 my-5 w-full justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'>
          <Stack />
        </div>
        <div className='w-full mb-5 rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'>
          <Skills2 />
        </div>
        {/* Segunda fila */}
        <div className='md:flex-row flex flex-col mb-5 gap-5'>
          <div className='md:w-1/2 w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'>
            <ExperienceFeed />
          </div>
          <div className='md:w-1/2 w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'>
            <EducationFeed />
          </div>
        </div>
        {/* Tercera fila */}
        <div className='glide-md flex mb-5 rounded-xl'>
          <ProjectsCarouselMD perView={2} />
        </div>
        {/* Cuarta fila */}
        <div className='flex gap-5 mb-5'>
          <div className='w-1/3 rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90'>
            Hobbies
          </div>
          <div className='w-2/3 rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90'>
            <GetInTouch />
          </div>
        </div>
      </div>

      {/* Desktop LG */}
      <div className='hidden lg:block'>
        {/* Primera fila */}
        <m.div
          ref={inViewRefAbout}
          initial={{ y: '-100vw', opacity: 0 }}
          animate={{ y: '0', opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='lg:w-3/3 my-5 w-full justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'
        >
          <AboutMeCard />
        </m.div>

        {/* Segunda fila */}
        <div className='lg:flex mb-5 gap-20 my-20 flex-col lg:flex-row h-full'>
          <div
            ref={inViewRefStack}
            className='lg:relative w-1/2 my-5 flex-col justify-center flex-grow'
          >
            <m.div
              initial={{ x: '-100vw', opacity: 0 }}
              animate={animatePropsStack}
              transition={{ type: 'tween', duration: 1.5, ease: 'easeInOut' }}
              className='rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500 h-full'
            >
              <div className='absolute top-[-120px] left-[-90px] z-50'>
                <InViewLottie
                  animationData={stackAnimation}
                  width={200}
                  height={200}
                />
              </div>
              <Stack />
            </m.div>
          </div>

          <div
            ref={inViewRefSkills}
            className='lg:relative w-1/2 my-5 flex-col justify-center flex-grow'
          >
            <m.div
              initial={{ x: '100vw', opacity: 0 }}
              animate={animatePropsSkills}
              transition={{ type: 'tween', duration: 1.5, ease: 'easeInOut' }}
              className='rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500 h-full'
            >
              <div className='absolute top-[-120px] left-[-90px] z-50'>
                <InViewLottie
                  animationData={skillsAnimation}
                  width={200}
                  height={200}
                />
              </div>
              <Skills2 />
            </m.div>
          </div>
        </div>

        {/* Tercera fila */}
        <div className='lg:flex-row flex flex-col mb-5 gap-20 my-20'>
          <div
            ref={inViewRefExperience}
            className='lg:relative w-1/2 my-5 flex-col justify-center flex-grow'
          >
            <m.div
              initial={{ x: '-100vw', opacity: 0 }}
              animate={animatePropsExperience}
              transition={{ type: 'tween', duration: 1.5, ease: 'easeInOut' }}
              className='rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500 h-full'
            >
              <div className='absolute top-[-90px] right-[-90px] z-50'>
                <InViewLottie
                  animationData={experienceAnimation}
                  width={250}
                  height={250}
                />
              </div>
              <ExperienceFeed />
            </m.div>
          </div>

          <div
            ref={inViewRefEducation}
            className='lg:relative w-1/2 my-5 flex-col justify-center flex-grow'
          >
            <m.div
              initial={{ x: '-100vw', opacity: 0 }}
              animate={animatePropsEducation}
              transition={{ type: 'tween', duration: 1.5, ease: 'easeInOut' }}
              className='rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500 h-full'
            >
              <div className='absolute top-[-100px] right-[-60px]'>
                <InViewLottie
                  animationData={educationAnimation}
                  width={200}
                  height={200}
                />
              </div>
              <EducationFeed />
            </m.div>
          </div>
          {/* <div className='relative w-1/2 rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'></div> */}
          {/* <div className='relative w-1/2 rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500'></div> */}
        </div>
        {/* Cuarta fila */}
        <div className='mb-5 rounded-xl my-24'>
          <div className='flex mx-auto my-auto justify-center text-center'>
            <div className='flex-col w-full justify-center mx-auto text-3xl font-bold text-purple-600 dark:text-purple-400 mb-5 mt-5'>
              Proyectos
              <div className='flex mx-auto my-auto justify-center align-middle'>
                <InViewLottie
                  animationData={projectsAnimation}
                  width={400}
                  height={270}
                />
              </div>
            </div>
          </div>
          <div className='glide-lg hover:cursor-grab'>
            <ProjectsCarouselLG perView={3} />
          </div>
        </div>
        {/* Quinta fila */}
        <div className='flex gap-5 mb-40'>
          <div className='w-1/3 rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90'>
            Hobbies
          </div>
          <div className='w-2/3 rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90'>
            <GetInTouch />
          </div>
        </div>
      </div>
    </>
  );
}
