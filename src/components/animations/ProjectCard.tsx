import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Project } from '../../types';
import { ReactElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface ProjectCardProps {
      projects: Project[];
}

const ProjectCard = ({ projects }: ProjectCardProps): ReactElement => {
      const control = useAnimation();
      const [ref, inView] = useInView();

      const staggerDelay = 0.30;

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

                                          <div className="flex flex-col">
                                                <img
                                                      src={project.image}
                                                      alt={project.title}
                                                      className="w-full h-full rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-110 hover:cursor-pointer"
                                                />
                                                <i className="text-xs text-center text-white align-center justify-center mt-4 hover:cursor-pointer hover:text-blue-300 hover:underline" onClick={() => window.open(project.link)}>
                                                      {project.link}
                                                      <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" className="inline-block w-6 h-6 ml-2 cursor-pointer" onClick={() => window.open(project.github)} />
                                                </i>
                                                <h2 className="mt-4 text-2xl font-bold text-center text-white">
                                                      {project.title}
                                                </h2>
                                          </div>

                                    </motion.div>
                              ))}
                        </motion.div>
                  </AnimatePresence>
            </div>
      );
};

export default ProjectCard;
