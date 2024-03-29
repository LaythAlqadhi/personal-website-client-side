import React, { useEffect, useRef } from 'react';

function Introduction() {
  const elementsRef = useRef([]);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      elementsRef.current.forEach((el) => {
        /* eslint-disable-next-line no-param-reassign */
        el.style.opacity = 1;
      });
    }, 150);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <span
        className="text-primary text-4xl text-yellow-600 opacity-0 transition-opacity duration-1000"
        ref={(e) => elementsRef.current.push(e)}
      >
        LAYTH ALQADHI
      </span>
      <span
        className="text-secondary text-lg opacity-0 transition-opacity delay-700 duration-1000"
        ref={(e) => elementsRef.current.push(e)}
      >
        Full Stack Web Developer
      </span>
      <span
        className="material-symbols-outlined text-secondary animate-bounce text-4xl opacity-0 transition-opacity delay-[1400ms] duration-1000"
        aria-label="Scroll down"
        ref={(e) => elementsRef.current.push(e)}
      >
        arrow_drop_down
      </span>
    </div>
  );
}

export default Introduction;
