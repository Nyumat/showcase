import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactElement, useEffect } from "react";
import ShuffleText from '../text/ShuffleEffect';

const boxVariant = {
      visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
      hidden: { opacity: 0, scale: 0 }
};

interface BoxProps {
      num?: number;
      text?: string;
      size?: string;
      shuffle?: boolean;
}

const Box: React.FC<BoxProps> = ({ num, text, size, shuffle }): ReactElement => {

      const control = useAnimation();
      const [ref, inView] = useInView();

      useEffect(() => {
            if (inView) {
                  control.start("visible");
            }
            // If I ever want the animation to repeat when scrolling back up..
            // } else {
            //       control.start("hidden");
            // }
      }, [control, inView]);

      const render = () => {
            if (shuffle && text) {
                  return (
                        <motion.div
                              className={`${size ? size : "text-6xl"}font-bold text-center text-white sm:text-4xl md:text-5xl lg:text-6xl`}
                              ref={ref}
                              variants={boxVariant}
                              initial="hidden"
                              animate={control}
                        >
                              <ShuffleText text={text} size="text-6xl" />
                        </motion.div>

                  )
            } else {
                  return (

                        <>
                              <motion.div
                                    className={`${size ? size : "text-6xl"} font-bold text-center text-white sm:text-4xl md:text-5xl lg:text-6xl`}
                                    ref={ref}
                                    variants={boxVariant}
                                    initial="hidden"
                                    animate={control}
                              >
                                    {text ? text : num}
                              </motion.div>
                        </>
                  );
            }
      };

      return (
            <>
                  {render()}
            </>
      );

}

export default Box;