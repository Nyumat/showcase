import { motion, useScroll } from "framer-motion";
import { FC } from "react";

const Scrollbar: FC = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  // add "tranform origin-left" to the the scrollbar grow from the left
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className={`fixed top-0 left-0 w-full h-2 bg-orange-600 z-50`}
    ></motion.div>
  );
};

export default Scrollbar;
