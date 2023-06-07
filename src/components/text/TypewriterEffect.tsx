import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

function TypewriterComponent() {
      const elementRef = useRef(null);
      let typewriter: { stop: () => void; };

      useEffect(() => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            typewriter = new Typewriter(elementRef.current, {
                  strings: ['I am a <strong>Web Developer.</strong>', '  <strong>Musician.</strong>', '<strong>Designer.</strong>', '<strong>  Student.</strong>', '<strong>Software Engineer.</strong>'],
                  autoStart: true,
                  loop: true,
                  delay: 40,
            });

            return () => {
                  if (typewriter) {
                        typewriter.stop();
                  } else {
                        return;
                  }
            };
      }, []);

      return (
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl whitespace-wrap text-center z-50 pb-16 w-full text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  Hi! I'm Tom Nyuma.
                  <span className="text-accent"> | </span>
                  <span ref={elementRef}></span>
            </h1>
      );
}

export default TypewriterComponent;
