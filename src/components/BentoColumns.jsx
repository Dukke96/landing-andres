'use client';

// Bibliotecas externas
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';

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
import Hobbies from './Hobbies';

// Animaciones
import educationAnimation from '@/assets/educationAnimation.json';
import experienceAnimation from '@/assets/experienceAnimation.json';
import stackAnimation from '@/assets/stackAnimation.json';
import skillsAnimation from '@/assets/skillsAnimation.json';
import projectsAnimation from '@/assets/projectsAnimation.json';

export default function BentoColumns() {
  const t = useTranslations('bento');

  // Refs e inView para animaciones del aboutMe
  const { ref: aboutMeMobileRef, inView: aboutMeMobileInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: aboutMeSMRef, inView: aboutMeSMInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: aboutMeMDRef, inView: aboutMeMDInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: aboutMeRef, inView: aboutMeInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Refs e inView para animaciones del stack
  const { ref: stackMobileRef, inView: stackMobileInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: stackSMRef, inView: stackSMInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: stackMDRef, inView: stackMDInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: stackRef, inView: stackInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Refs e inView para animaciones de skills
  const { ref: skillsMobileRef, inView: skillsMobileInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: skillsSMRef, inView: skillsSMInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: skillsMDRef, inView: skillsMDInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Refs e inView para animaciones de experience
  const { ref: experienceMobileRef, inView: experienceMobileInView } =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  const { ref: experienceSMRef, inView: experienceSMInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: experienceMDRef, inView: experienceMDInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Refs e inView para animaciones de education
  const { ref: educationMobileRef, inView: educationMobileInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: educationSMRef, inView: educationSMInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: educationMDRef, inView: educationMDInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Refs e inView para animaciones de projects
  const { ref: projectsMobileRef, inView: projectsMobileInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: projectsSMRef, inView: projectsSMInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: projectsMDRef, inView: projectsMDInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Refs e inView para animaciones de hobbies
  const { ref: hobbiesMobileRef, inView: hobbiesMobileInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: hobbiesSMRef, inView: hobbiesSMInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: hobbiesMDRef, inView: hobbiesMDInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: hobbiesRef, inView: hobbiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Refs e inView para animaciones de getInTouch
  const { ref: getInTouchMobileRef, inView: getInTouchMobileInView } =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  const { ref: getInTouchSMRef, inView: getInTouchSMInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: getInTouchMDRef, inView: getInTouchMDInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Mobile */}
      <div className='sm:hidden justify-center overflow-visible'>
        {/* Primera fila */}
        <div className='flex flex-col items-center mb-5 gap-5'>
          <div
            ref={aboutMeMobileRef}
            className={`${
              aboutMeMobileInView ? 'animate-fade-in-up opacity-100' : ''
            } opacity-0 min-w-[340px] rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500`}
          >
            <AboutMeCard />
          </div>
          <div
            ref={stackMobileRef}
            className={`${
              stackMobileInView ? 'animate-fade-in-right opacity-100' : ''
            } opacity-0 relative lg:w-3/3 my-5 w-full justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500`}
          >
            <div className='absolute top-[-50px] left-[-30px] z-40'>
              <InViewLottie
                animationData={stackAnimation}
                width={120}
                height={120}
              />
            </div>
            <Stack />
          </div>
          <div
            ref={skillsMobileRef}
            className={`${
              skillsMobileInView ? 'animate-fade-in-left opacity-100' : ''
            } opacity-0 relative lg:w-3/3 my-5 w-full justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500`}
          >
            <div className='absolute top-[-60px] left-[-40px] z-40'>
              <InViewLottie
                animationData={skillsAnimation}
                width={140}
                height={140}
              />
            </div>
            <Skills2 />
          </div>
        </div>
        {/* Segunda fila */}
        <div className='flex flex-col items-center mb-5 gap-5'>
          <div
            ref={experienceMobileRef}
            className={`${
              experienceMobileInView ? 'animate-fade-in-down opacity-100' : ''
            } opacity-0 relative min-w-[340px] rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500`}
          >
            <div className='absolute top-[-60px] right-[-20px] z-40'>
              <InViewLottie
                animationData={experienceAnimation}
                width={170}
                height={170}
              />
            </div>
            <ExperienceFeed />
          </div>
          <div
            ref={educationMobileRef}
            className={`${
              educationMobileInView ? 'animate-fade-in-up opacity-100' : ''
            } opacity-0 relative min-w-[340px] rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500`}
          >
            <div className='absolute top-[-50px] right-[-10px]'>
              <InViewLottie
                animationData={educationAnimation}
                width={150}
                height={150}
              />
            </div>
            <EducationFeed />
          </div>
        </div>
        {/* Tercera fila */}
        <div
          ref={projectsMobileRef}
          className={`${
            projectsMobileInView ? 'animate-zoom-in opacity-100' : ''
          } opacity-0 glide-mb mb-5 rounded-xl my-5`}
        >
          <div className='flex mx-auto my-auto justify-center text-center'>
            <div className='flex-col w-full justify-center mx-auto text-2xl font-bold text-purple-600 dark:text-purple-400 mb-5 mt-5'>
              {t('proyectos')}
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
          <div
            ref={hobbiesMobileRef}
            className={`${
              hobbiesMobileInView ? 'animate-blurred-fade-in opacity-100' : ''
            } opacity-0 min-w-[340px] w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90`}
          >
            <Hobbies />
          </div>
          <div
            ref={getInTouchMobileRef}
            className={`${
              getInTouchMobileInView
                ? 'animate-blurred-fade-in opacity-100'
                : ''
            } opacity-0 min-w-[340px] w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90`}
          >
            <GetInTouch />
          </div>
        </div>
      </div>

      {/* Tablet SM */}
      <div className='hidden sm:block justify-center overflow-visible md:hidden'>
        {/* Primera fila */}
        <div className='flex flex-col items-center mb-5 gap-5'>
          <div
            ref={aboutMeSMRef}
            className={`${
              aboutMeSMInView ? 'animate-fade-in-up opacity-100' : ''
            } opacity-0 min-w-[340px] w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500`}
          >
            <AboutMeCard />
          </div>
          <div
            ref={stackSMRef}
            className={`${
              stackSMInView ? 'animate-fade-in-right opacity-100' : ''
            } opacity-0 lg:w-3/3 my-5 w-full justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500`}
          >
            <Stack />
          </div>
          <div
            ref={skillsSMRef}
            className={`${
              skillsSMInView ? 'animate-fade-in-left opacity-100' : ''
            } opacity-0 w-full mb-5 rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500`}
          >
            <Skills2 />
          </div>
        </div>
        {/* Segunda fila */}
        <div className='flex flex-col items-center mb-5 gap-5'>
          <div
            ref={experienceSMRef}
            className={`${
              experienceSMInView ? 'animate-fade-in-down opacity-100' : ''
            } opacity-0 min-w-[340px] rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500`}
          >
            <ExperienceFeed />
          </div>
          <div
            ref={educationSMRef}
            className={`${
              educationSMInView ? 'animate-fade-in-up opacity-100' : ''
            } opacity-0 min-w-[340px] rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500`}
          >
            <EducationFeed />
          </div>
        </div>
        {/* Tercera fila */}
        <div
          ref={projectsSMRef}
          className={`${
            projectsSMInView ? 'animate-zoom-in opacity-100' : ''
          } opacity-0 mb-5 rounded-xl my-20`}
        >
          <div className='flex-col mx-auto my-auto justify-start text-center'>
            <div className='flex-col w-full justify-start mx-auto text-3xl font-bold text-purple-600 dark:text-purple-400 mb-5 mt-5'>
              {t('proyectos')}
            </div>
          </div>
          <div className='glide-sm hover:cursor-grab'>
            <ProjectsCarouselSM perView={1} />
          </div>
        </div>
        {/* Cuarta fila */}
        <div className='flex flex-col mb-5 gap-5 items-center'>
          <div
            ref={hobbiesSMRef}
            className={`${
              hobbiesSMInView ? 'animate-blurred-fade-in opacity-100' : ''
            } opacity-0 min-w-[340px] w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90`}
          >
            <Hobbies />
          </div>
          <div
            ref={getInTouchSMRef}
            className={`${
              getInTouchSMInView ? 'animate-blurred-fade-in opacity-100' : ''
            } opacity-0 min-w-[340px] w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90`}
          >
            <GetInTouch />
          </div>
        </div>
      </div>

      {/* Laptop MD */}
      <div className='md:overflow-visible hidden md:block lg:hidden'>
        {/* Primera fila */}
        <div
          ref={aboutMeMDRef}
          className={`${
            aboutMeMDInView ? 'animate-fade-in-up opacity-100' : ''
          } opacity-0 lg:w-3/3 my-5 w-full justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500`}
        >
          <AboutMeCard />
        </div>
        <div
          ref={stackMDRef}
          className={`${
            stackMDInView ? 'animate-fade-in-right opacity-100' : ''
          } opacity-0 lg:w-3/3 my-5 w-full justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500`}
        >
          <Stack />
        </div>
        <div
          ref={skillsMDRef}
          className={`${
            skillsMDInView ? 'animate-fade-in-left opacity-100' : ''
          } opacity-0 w-full mb-5 rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500`}
        >
          <Skills2 />
        </div>
        {/* Segunda fila */}
        <div className='md:flex-row flex flex-col mb-5 gap-5'>
          <div
            ref={experienceMDRef}
            className={`${
              experienceMDInView ? 'animate-fade-in-down opacity-100' : ''
            } opacity-0 md:w-1/2 w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500`}
          >
            <ExperienceFeed />
          </div>
          <div
            ref={educationMDRef}
            className={`${
              educationMDInView ? 'animate-fade-in-up opacity-100' : ''
            } opacity-0 md:w-1/2 w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500`}
          >
            <EducationFeed />
          </div>
        </div>
        {/* Tercera fila */}
        <div
          ref={projectsMDRef}
          className={`${
            projectsMDInView ? 'animate-zoom-in opacity-100' : ''
          } opacity-0 mb-5 rounded-xl my-20`}
        >
          <div className='flex-col mx-auto my-auto justify-start text-center'>
            <div className='flex-col w-full justify-start mx-auto text-3xl font-bold text-purple-600 dark:text-purple-400 mb-5 mt-5'>
              {t('proyectos')}
            </div>
          </div>
          <div className='glide-md hover:cursor-grab'>
            <ProjectsCarouselMD perView={2} />
          </div>
        </div>
        {/* Cuarta fila */}
        <div className='flex flex-col mb-5 gap-5 items-center'>
          <div
            ref={hobbiesMDRef}
            className={`${
              hobbiesMDInView ? 'animate-blurred-fade-in opacity-100' : ''
            } opacity-0 min-w-[340px] w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90`}
          >
            <Hobbies />
          </div>
          <div
            ref={getInTouchMDRef}
            className={`${
              getInTouchMDInView ? 'animate-blurred-fade-in opacity-100' : ''
            } opacity-0 min-w-[340px] w-full rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90`}
          >
            <GetInTouch />
          </div>
        </div>
      </div>

      {/* Desktop LG */}
      <div className='hidden lg:block'>
        {/* Primera fila */}
        <div
          ref={aboutMeRef}
          className={`lg:w-3/3 w-full opacity-0 justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500 ${
            aboutMeInView ? 'animate-fade-in-up opacity-100' : ''
          }`}
        >
          <AboutMeCard />
        </div>

        {/* Segunda fila */}
        <div className='lg:flex flex-grow gap-20 my-20 flex-col lg:flex-row h-full'>
          <div className='lg:relative w-1/2 flex-col justify-center flex-grow'>
            <div
              ref={stackRef}
              className={`${
                stackInView ? 'animate-fade-in-right' : ''
              } rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500 h-full`}
            >
              <div className='absolute top-[-100px] left-[-90px] z-40'>
                <InViewLottie
                  animationData={stackAnimation}
                  width={200}
                  height={200}
                />
              </div>
              <Stack />
            </div>
          </div>

          <div className='lg:relative w-1/2 flex-col justify-center flex-grow'>
            <div
              ref={skillsRef}
              className={`${
                skillsInView ? 'animate-fade-in-left' : ''
              } rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500 h-full`}
            >
              <div className='absolute top-[-100px] left-[-90px] z-40'>
                <InViewLottie
                  animationData={skillsAnimation}
                  width={200}
                  height={200}
                />
              </div>
              <Skills2 />
            </div>
          </div>
        </div>

        {/* Tercera fila */}
        <div className='lg:flex-row flex flex-col gap-20 my-20'>
          <div className='lg:relative w-1/2 flex-col justify-center flex-grow'>
            <div
              ref={experienceRef}
              className={`${
                experienceInView ? 'animate-fade-in-down opacity-100' : ''
              } opacity-0 rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500 h-full`}
            >
              <div className='absolute top-[-90px] right-[-90px] z-40'>
                <InViewLottie
                  animationData={experienceAnimation}
                  width={250}
                  height={250}
                />
              </div>
              <ExperienceFeed />
            </div>
          </div>

          <div className='lg:relative w-1/2 flex-col justify-center flex-grow'>
            <div
              ref={educationRef}
              className={`${
                educationInView ? 'animate-fade-in-up opacity-100' : ''
              } rounded-xl opacity-0 border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90 hover:shadow-md dark:hover:shadow-slate-200 hover:shadow-slate-500 h-full`}
            >
              <div className='absolute top-[-100px] right-[-60px]'>
                <InViewLottie
                  animationData={educationAnimation}
                  width={200}
                  height={200}
                />
              </div>
              <EducationFeed />
            </div>
          </div>
        </div>

        {/* Cuarta fila */}
        <div
          ref={projectsRef}
          className={`${
            projectsInView ? 'animate-zoom-in opacity-100' : ''
          } mb-5 opacity-0 rounded-xl my-20`}
        >
          <div className='flex-col mx-auto my-auto justify-start text-center'>
            <div className='flex-col w-full justify-start mx-auto text-3xl font-bold text-purple-600 dark:text-purple-400 mb-5 mt-5'>
              {t('proyectos')}
            </div>
          </div>
          <div className='glide-lg hover:cursor-grab'>
            <ProjectsCarouselLG perView={3} />
          </div>
        </div>

        {/* Quinta fila */}
        <div
          ref={hobbiesRef}
          className={`${
            hobbiesInView ? 'animate-blurred-fade-in opacity-100' : ''
          } flex gap-5 mb-40 opacity-0`}
        >
          <div className='w-1/3 rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90'>
            <Hobbies />
          </div>
          <div className='w-2/3 rounded-xl border-2 border-slate-400/10 bg-neutral-100/90 dark:bg-neutral-900/90'>
            <GetInTouch />
          </div>
        </div>
      </div>
    </>
  );
}
