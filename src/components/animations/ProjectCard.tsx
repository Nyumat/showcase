import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { ReactElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Project } from "../../types";

interface ProjectCardProps {
  projects: Project[];
}

const ProjectCard = ({ projects }: ProjectCardProps): ReactElement => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const staggerDelay = 0.3;

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
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8"
          ref={ref}
        >
          {projects.map((project: Project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative w-full h-full px-16"
            >
              <div
                className="flex flex-col"
                onClick={() => window.open(project.link)}
              >
                <h2 className="my-4 text-2xl font-bold text-center text-white">
                  {project.title}
                </h2>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full rounded-lg transition duration-500 ease-in-out transform hover:scale-110 hover:cursor-pointer border-2 border-slate-600/30"
                />
                <i
                  className="text-xs text-center text-white align-center justify-center mt-4 hover:cursor-pointer hover:text-blue-300 hover:underline"
                  onClick={() => window.open(project.link)}
                >
                  {project.link}
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
                    className="inline-block w-6 h-6 ml-2 cursor-pointer"
                    onClick={() => window.open(project.github)}
                  />
                </i>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
