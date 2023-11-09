import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import { useInView } from 'react-intersection-observer';

export default function InViewLottie({ animationData, width, height }) {
  const lottieRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView && lottieRef.current) {
      lottieRef.current.play();
    } else if (lottieRef.current) {
      lottieRef.current.pause();
    }
  }, [inView]);

  return (
    <div ref={ref} style={{ width, height }} className='lottie-container'>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}
      />
    </div>
  );
}
