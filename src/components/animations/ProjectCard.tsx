import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { ReactElement, useEffect } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { useInView } from "react-intersection-observer";
import { Vortex } from "react-loader-spinner";
import { Project } from "../../types";

interface ProjectCardProps {
  projects: Project[];
}

// TODO: Refactor this component to be more reusable or change scope of this component
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
              opacity: 1,
              transition: { staggerChildren: staggerDelay },
            },
          }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8"
          ref={ref}
        >
          {projects.map((project: Project) => (
            <>
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="relative w-full h-full"
              >
                <div
                  className="flex flex-col justify-center items-center mx-8"
                  onClick={() => window.open(project.link)}
                  role="button"
                  tabIndex={0}
                  aria-label="Open project"
                >
                  <h2 className="my-4 text-2xl font-bold text-center text-white">
                    {project.title}
                  </h2>

                  <HoverVideoPlayer
                    sizingMode="overlay"
                    videoId={project.id}
                    videoSrc={project.demoVideo}
                    pausedOverlay={
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="block h-full w-full rounded-lg border-2 border-slate-600/30"
                      />
                    }
                    hoverOverlayClassName="w-full h-full rounded-lg border-2 border-slate-600/30"
                    loadingOverlay={
                      <div className="overlay bg-black/70 h-full w-full flex justify-center items-center rounded-lg">
                        <Vortex
                          visible
                          height="120"
                          width="120"
                          ariaLabel="vortex-loading"
                          wrapperClass="vortex-wrapper"
                          colors={[
                            "#ffffff",
                            "#db4405",
                            "#ffffff",
                            "#db4405",
                            "#ffffff",
                            "#db4405",
                          ]}
                        />
                      </div>
                    }
                    videoClassName="w-full h-full rounded-lg border-2 border-slate-600/30"
                    preload="metadata"
                    unloadVideoOnPaused
                  />
                  <i
                    className="text-xs text-center text-white align-center justify-center mt-4 hover:cursor-pointer hover:text-blue-300 hover:underline"
                    onClick={() => window.open(project.link)}
                    role="button"
                    tabIndex={0}
                    aria-label="Open project"
                  >
                    {project.link}
                    <img
                      src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
                      className="inline-block w-6 h-6 ml-2 cursor-pointer"
                      onClick={() => window.open(project.github)}
                      role="button"
                      tabIndex={0}
                      aria-label="Open project"
                    />
                  </i>
                </div>
              </motion.div>
            </>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
