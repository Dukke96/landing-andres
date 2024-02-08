/* eslint-disable no-unused-vars */

'use client';

import React, { useState } from 'react';
import {
  FaDiscord,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';
import formAnimation from '@/assets/formAnimation.json';
import sendingEmailAnimation from '@/assets/sendingEmailAnimation.json';
import InViewLottie from './InViewLottie';
import Modal from './Modal';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    number: '',
    detalles: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    isOpen: false,
    title: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Inicia el spinner antes de enviar la solicitud

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setIsLoading(false); // Oculta el spinner una vez que se recibe la respuesta

      if (res.ok) {
        const data = await res.json();

        setModalInfo({
          isOpen: true,
          title: 'Éxito',
          message: 'Correo enviado correctamente.',
        });

        // Resetear el formulario
        setFormData({
          name: '',
          lastName: '',
          email: '',
          number: '',
          detalles: '',
        });
      } else {
        const errorData = await res.json();

        setModalInfo({
          isOpen: true,
          title: 'Error',
          message: errorData.message || 'Hubo un error al enviar el correo.',
        });
      }
    } catch (error) {
      setIsLoading(false); // Asegúrate de ocultar el spinner incluso si hay un error
      setModalInfo({
        isOpen: true,
        title: 'Error',
        message: 'Hubo un problema de conexión.',
      });
    }
  };

  return (
    // <!-- Contact Us -->
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='max-w-2xl lg:max-w-5xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-purple-600 dark:text-purple-400'>
            Contáctame
          </h1>
          <p className='mt-1 text-slate-900 dark:text-slate-200'>
            Me encantaría poder ayudarte, así que no dudes en contactarme.
          </p>
        </div>

        <div className='mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16'>
          {/* <!-- Card --> */}
          <div className='flex flex-col border border-slate-900 rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700'>
            <h2 className='mb-8 text-xl font-semibold text-slate-900 dark:text-slate-200 text-center'>
              Llena el siguiente formulario
              <span className='flex justify-center'>
                {/* <Lottie
                    animationData={formAnimation}
                    style={{ width: 100, height: 100 }}
                  /> */}
                <div className='flex justify-center'>
                  <InViewLottie
                    animationData={formAnimation}
                    width={100}
                    height={100}
                  />
                </div>
              </span>
            </h2>

            <form>
              <div className='grid gap-4'>
                {/* <!-- Grid --> */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label htmlFor='name' className='sr-only'>
                      Nombre
                    </label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      className='py-3 px-4 block w-full rounded-md text-sm dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-300 placeholder-slate-500'
                      placeholder='Nombre'
                      onChange={handleChange}
                      value={formData?.name}
                    />
                  </div>

                  <div>
                    <label htmlFor='lastName' className='sr-only'>
                      Apellido
                    </label>
                    <input
                      type='text'
                      name='lastName'
                      id='lastName'
                      className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-300 placeholder-slate-500'
                      placeholder='Apellido'
                      onChange={handleChange}
                      value={formData?.lastName}
                    />
                  </div>
                </div>
                {/* <!-- End Grid --> */}

                <div>
                  <label htmlFor='email' className='sr-only'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='email'
                    className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-300 placeholder-slate-500'
                    placeholder='Email'
                    onChange={handleChange}
                    value={formData?.email}
                  />
                </div>

                <div>
                  <label htmlFor='number' className='sr-only'>
                    Teléfono
                  </label>
                  <input
                    type='text'
                    name='number'
                    id='number'
                    className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-300 placeholder-slate-500'
                    placeholder='Celular'
                    onChange={handleChange}
                    value={formData?.number}
                  />
                </div>

                <div>
                  <label htmlFor='detalles' className='sr-only'>
                    Detalles
                  </label>
                  <textarea
                    id='detalles'
                    name='detalles'
                    rows='4'
                    className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-300 placeholder-slate-500'
                    placeholder='Detalles'
                    onChange={handleChange}
                    value={formData?.detalles}
                  />
                </div>
              </div>
              {/* <!-- End Grid --> */}

              <div className='mt-4 grid'>
                <button
                  type='button'
                  className='inline-flex justify-center items-center gap-x-3 text-center bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800'
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
              </div>

              {isLoading && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'>
                  <InViewLottie
                    animationData={sendingEmailAnimation}
                    width={500}
                    height={500}
                  />
                </div>
              )}

              <Modal
                title={modalInfo?.title}
                message={modalInfo?.message}
                isShowing={modalInfo?.isOpen}
                setIsShowing={(isOpen) =>
                  setModalInfo((info) => ({ ...info, isOpen }))
                }
              />

              <div className='mt-3 text-center'>
                <p className='text-sm dark:text-slate-200 text-slate-900 '>
                  Te responderé tan pronto como sea posible.
                </p>
              </div>
            </form>
          </div>
          {/* <!-- End Card --> */}

          <div className='divide-y divide-gray-200 dark:divide-gray-800'>
            {/* <!-- Icon Block --> */}
            <div className='flex gap-x-7 py-6'>
              <a
                href='https://www.linkedin.com/in/andresduqueing/'
                target='_blank'
                className='hover:text-[#0b66c3] dark:hover:text-[#0b66c3] text-3xl text-slate-800 dark:text-slate-200 '
                rel='noreferrer'
                aria-label='Visit my Linkedin profile'
              >
                <FaLinkedin />
              </a>
              <div>
                <h3 className='font-semibold text-slate-900 dark:text-slate-200'>
                  Linkedin
                </h3>
                <p className='mt-1 text-sm text-slate-900 dark:text-slate-200'>
                  Si deseas conocer mi perfil de linkedin o contactarme por ahí
                  no dudes en hacerlo.
                </p>
                <a
                  className='mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600  dark:text-gray-400  hover:text-[#0b66c3] dark:hover:text-[#0b66c3] hover:font-bold'
                  href='https://www.linkedin.com/in/andresduqueing/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Visit my Linkedin profile'
                >
                  Ir a Linkedin
                  <svg
                    className='w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className='flex gap-x-7 py-6'>
              <a
                href='https://api.whatsapp.com/send?phone=573202411663'
                target='_blank'
                className='hover:text-[#1ad03f] dark:hover:text-[#1ad03f] text-3xl text-slate-800 dark:text-slate-200'
                rel='noreferrer'
                aria-label='Visit my Whatsapp profile'
              >
                <FaWhatsapp />
              </a>
              <div>
                <h3 className='font-semibold text-slate-900 dark:text-slate-200'>
                  Whatsapp
                </h3>
                <p className='mt-1 text-sm text-slate-900 dark:text-slate-200'>
                  La forma mas rapida de contactarme 🎉.
                </p>
                <a
                  className='mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600  dark:text-gray-400 hover:text-[#1ad03f] dark:hover:text-[#1ad03f] hover:font-bold'
                  href='https://api.whatsapp.com/send?phone=573202411663'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Visit my Whatsapp profile'
                >
                  Ir a Whatsapp
                  <svg
                    className='w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className=' flex gap-x-7 py-6'>
              <a
                href='https://t.me/Andres_Duque'
                target='_blank'
                className='hover:text-[#2fa2d9] dark:hover:text-[#2fa2d9] text-3xl text-slate-800 dark:text-slate-200'
                rel='noreferrer'
                aria-label='Visit my Telegram profile'
              >
                <FaTelegramPlane />
              </a>
              <div>
                <h3 className='font-semibold text-slate-900 dark:text-slate-200'>
                  Telegram
                </h3>
                <p className='mt-1 text-sm text-slate-900 dark:text-slate-200'>
                  Una opción alternativa para recibir una respuesta rápida.
                </p>
                <a
                  className='mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#2fa2d9] dark:hover:text-[#2fa2d9] hover:font-bold'
                  href='asd'
                >
                  Ir a Telegram
                  <svg
                    className='w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className=' flex gap-x-7 py-6'>
              <a
                href='https://discord.com/users/690420097130692638'
                target='_blank'
                className='hover:text-[#5563ea] dark:hover:text-[#5563ea] text-3xl text-slate-800 dark:text-slate-200'
                rel='noreferrer'
                aria-label='Visit my Discord profile'
              >
                <FaDiscord />
              </a>
              <div>
                <h3 className='font-semibold text-slate-900 dark:text-slate-200'>
                  Discord
                </h3>
                <p className='mt-1 text-sm text-slate-900 dark:text-slate-200'>
                  Opción por si quieres hacer un nuevo amigo.
                </p>
                <a
                  className='mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#5563ea] dark:hover:text-[#5563ea] hover:font-bold'
                  href='https://discord.com/users/690420097130692638'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Visit my Discord profile'
                >
                  Ir a Discord
                  <svg
                    className='w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}
          </div>
        </div>
      </div>
    </div>
    // {/* <!-- End Contact Us --> */}
  );
}
