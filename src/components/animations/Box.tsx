import { motion, useAnimation } from "framer-motion";
import { ReactElement, useLayoutEffect } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

interface BoxProps {
  num?: number;
  text?: string;
  size?: string;
  shuffle?: boolean;
}

const Box: React.FC<BoxProps> = ({
  num,
  text,
  size,
  shuffle,
}): ReactElement => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useLayoutEffect(() => {
    if (inView) {
      control.start("visible");
    }
    // If I ever want the animation to repeat when scrolling back up..
    // } else {
    //       control.start("hidden");
    // }

    return () => {
      control.stop();
    };
  }, [control, inView]);

  const render = () => {
    if (shuffle && text) {
      return (
        <motion.div
          className={`${
            size ? size : "text-6xl"
          }font-bold text-center text-white sm:text-4xl md:text-5xl lg:text-6xl`}
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          {/* TODO: Fix the shuffle bug and figure out perf issues
              <ShuffleText text={text} size="text-6xl" /> */}
          <Box text={text} size="text-6xl" />
        </motion.div>
      );
    } else {
      return (
        <>
          <motion.div
            className={`${
              size
                ? size
                : "text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl"
            } font-bold text-center text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl mx-16 xs:mx-8 sm:mx-12 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-48`}
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

  return <>{render()}</>;
};

export default Box;