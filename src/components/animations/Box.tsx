import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactElement, useEffect } from "react";

const boxVariant = {
      visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
      hidden: { opacity: 0, scale: 0 }
};

interface BoxProps {
      num?: number;
      text?: string;
      size?: string;
}

const Box: React.FC<BoxProps> = ({ num, text, size }): ReactElement => {

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

      return (
            <motion.div
                  className={`${size ? size : "text-6xl"} font-bold text-center text-white`}
                  ref={ref}
                  variants={boxVariant}
                  initial="hidden"
                  animate={control}
            >
                  {text ? text : num}
            </motion.div>
      );
};

export default Box;