import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

function TypewriterComponent() {
  const elementRef = useRef(null);
  let typewriter: { stop: () => void };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    typewriter = new Typewriter(elementRef.current, {
      strings: [
        "I build <strong>web apps.</strong>",
        "I am a <strong>student.</strong>",
        "<strong>Musician.</strong>",
        "<strong>Person of color.</strong>",
        "<strong>Designer.</strong>",
        "<strong>Software Engineer.</strong>",
      ],
      autoStart: true,
      loop: true,
      delay: 50,
      cursor: "|",
      cursorClassName:
        "text-orange-600 saturate-200 animate-[pulse_1s_ease-in-out_infinite] font-bold",
      deleteSpeed: 45,
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
    <div className="mx-16 xs:mx-8 sm:mx-12 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-48">
      <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl whitespace-wrap text-center z-50 pb-16 w-full text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Hey, I'm{" "}
        <span className="text-orange-600 saturate-100">Tom Nyuma!</span>{" "}
        <span className="text-slate-500/50"> | </span>
        <span ref={elementRef}></span>
      </h1>
    </div>
  );
}

export default TypewriterComponent;
