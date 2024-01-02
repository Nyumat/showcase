import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { ReactElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Social } from "../../types";

interface SocialsProps {
  socials: Social[];
}

const Socials = ({ socials }: SocialsProps): ReactElement => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const staggerDelay = 0.5;

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full opacity-100 my-16">
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate={control}
          variants={{
            visible: {
              transition: { staggerChildren: staggerDelay },
            },
          }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8"
          ref={ref}
        >
          {socials.map((social: Social) => (
            <motion.div
              key={social.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative w-full h-full px-16 hover:cursor-pointer"
            >
              <div
                className="flex flex-col items-center align-center justify-center p-4"
                onClick={() => window.open(social.link)}
              >
                <img
                  src={social.image}
                  alt={social.title}
                  className="mb-2 h-32 w-auto rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-125 hover:cursor-pointer"
                />
                <i
                  className="mt-4 text-xs italic hover:cursor-pointer hover:underline hover:text-blue-300"
                  onClick={() => window.open(social.link)}
                >
                  {social.link?.includes("discord")
                    ? "https://discord.com/users/nyumat"
                    : social.link}
                </i>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Socials;
