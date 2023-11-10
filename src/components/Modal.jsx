/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ title, message, isShowing, setIsShowing }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    const html = document.querySelector('html');

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = 'hidden';

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        const modal = document.querySelector('#modal'); // select the modal by it's id

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

        const focusableContent = modal.querySelectorAll(focusableElements);

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

        document.addEventListener('keydown', (e) => {
          if (e.keyCode === 27) {
            setIsShowing(false);
          }

          const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

          if (!isTabPressed) {
            return;
          }

          if (e.shiftKey) {
            // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus(); // add focus for the last focusable element
              e.preventDefault();
            }
          } else {
            // if tab key is pressed
            // eslint-disable-next-line no-lonely-if
            if (document.activeElement === lastFocusableElement) {
              // if focused has reached to last focusable element then focus first focusable element after pressing tab
              firstFocusableElement.focus(); // add focus for the first focusable element
              e.preventDefault();
            }
          }
        });

        firstFocusableElement.focus();
      } else {
        html.style.overflowY = 'visible';
      }
    }
  }, [isShowing]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isShowing && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            <div
              className='fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'
              aria-labelledby='header-3a content-3a'
              aria-modal='true'
              tabindex='-1'
              role='dialog'
            >
              {/*    <!-- Modal --> */}
              <div
                ref={wrapperRef}
                className='flex max-h-[90vh] w-11/12 max-w-xl flex-col gap-6 overflow-hidden rounded bg-slate-200 dark:bg-slate-900 p-6 text-slate-900 dark:text-slate-200 shadow-xl shadow-slate-700/10'
                id='modal'
                role='document'
              >
                {/*        <!-- Modal header --> */}
                <header id='header-3a' className='flex items-center gap-4'>
                  <h3 className='flex-1 text-xl font-medium text-purple-600 dark:text-purple-400'>
                    {title}
                  </h3>
                  <button
                    type='button'
                    onClick={() => setIsShowing(false)}
                    className='inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-purple-600 dark:text-purple-400 transition duration-300 hover:bg-purple-400 dark:hover:bg-purple-200 hover:text-purple-700 dark:hover:text-purple-500 dark:focus:bg-purple-300 focus:bg-purple-500 focus:text-purple-800 dark:focus:text-purple-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent'
                    aria-label='close dialog'
                  >
                    <span className='relative only:-mx-5'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        role='graphics-symbol'
                        aria-labelledby='title-79 desc-79'
                      >
                        <title id='title-79'>Cerrar</title>
                        <desc id='desc-79'>Cerrar modal</desc>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </span>
                  </button>
                </header>
                {/*        <!-- Modal body --> */}
                <div id='content-3a' className='flex-1 overflow-auto'>
                  <p>{message}</p>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
