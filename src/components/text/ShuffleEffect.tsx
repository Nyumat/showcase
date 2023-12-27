import anime from 'animejs/lib/anime.es.js';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const randomChar = () => {
      const possible =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz';
      return possible.charAt(Math.floor(Math.random() * possible.length));
};

const mask = (chars: string[], progress: number) => {
      const masked: string[] = [];

      for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            if (char === ' ') {
                  masked.push(' ');
            } else {
                  masked.push(progress > Math.random() ? randomChar() : char);
            }
      }

      return masked.join('');
};

interface ShuffleTextProps {
      text: string;
      size?: string;
}

const ShuffleText: React.FC<ShuffleTextProps> = ({ text, size }): React.ReactElement => {
      const shuffleRef = useRef<HTMLSpanElement>(null);
      const control = useAnimation();
      const [x, inView] = useInView();

      useEffect(() => {
            if (inView) {
                  control.start("visible");
            }

            return () => {
                  control.stop();
            }
      }, [control, inView]);

      useEffect(() => {
            if (!shuffleRef.current) return;

            const el = shuffleRef.current;

            const shuffle = () => {
                  if (!el) return;

                  const chars = el.textContent?.split('') || [];

                  const params = {
                        progress: 0,
                  };

                  const a = anime({
                        targets: params,
                        progress: 1,
                        duration: 1000,
                        easing: 'easeInOutQuad',
                        direction: 'alternate',

                        update: () => {
                              el.textContent = mask(chars, params.progress);
                        },
                        complete: () => {
                              el.classList.add('completed');
                        },
                  });

                  if (el.classList.contains('completed')) {
                        el.classList.remove('completed');
                  }

                  a.play();
            };


            const interval = setInterval(shuffle, 3000);

            // Clean up animation on unmount
            return () => {
                  clearInterval(interval);
                  if (el) {
                        el.classList.remove('completed');
                  } else {
                        return;
                  }
            };
      }, []);

      const gradients = [
            'from-orange-400 via-pink-500 to-white-500',
            'from-pink-500 via-purple-500 to-blue-500',
            'from-purple-500 via-blue-500 to-green-500',
            'from-blue-500 via-green-500 to-yellow-500',
            'from-green-500 via-yellow-500 to-orange-500',
      ];

      const fluidGradientColorChange = {
            from: gradients[Math.floor(Math.random() * gradients.length)],
            to: gradients[Math.floor(Math.random() * gradients.length)],
      };

      return (
            <div ref={x}>
                  <motion.span
                        ref={shuffleRef}
                        className={`animate-text bg-gradient-to-r ${fluidGradientColorChange.from} ${fluidGradientColorChange.to} bg-clip-text text-transparent ${size ? size : 'text-6xl'} font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}
                        initial="hidden"
                        animate={control}
                        variants={{
                              visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: { duration: 2 },
                              },
                              hidden: { opacity: 0, scale: 0 },
                        }}
                  >
                        {text}
                  </motion.span>
            </div>
      );
};

export default ShuffleText;
