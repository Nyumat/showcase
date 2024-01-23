// import LazyLoad from "react-lazyload"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { socials } from "../../data";
import Box from "../animations/Box";
import CompSci from "../content/CompSci";
import Footer from "../content/Footer";
import Music from "../content/Music";
import Projects from "../content/Projects";
import Socials from "../content/Socials";
import Galaxy from "../three/Galaxy";
import Body from "./Body";

/*
This component is the main content of the website.
Every route will render this component.
*/

function Main() {
  const [isDone, setIsDone] = useState<boolean>(false);
  return (
    <main>
      {/* <LazyLoad once> */}
      <Body>
        <div className="flex flex-col justify-center items-center w-full mt-64">
          <Box text="I started coding in 2020..." />
          <div className="tranform translate-y-24">
            <div className="arrow bounce " />
            <div className="arrow bounce " />
            <div className="arrow bounce " />
          </div>
        </div>
      </Body>

      <Body>
        <div className="flex flex-col justify-center items-center w-full mt-64">
          <Box text="And have come a long way since." />
          <div className="tranform translate-y-24">
            <div className="arrow bounce " />
            <div className="arrow bounce " />
            <div className="arrow bounce " />
          </div>
        </div>
      </Body>

      <Body>
        <div className="flex flex-col justify-center items-center w-full mt-64">
          <Box text="For instance, centering a div..." />
          <div className="tranform translate-y-24">
            <div className="arrow bounce " />
            <div className="arrow bounce " />
            <div className="arrow bounce " />
          </div>
        </div>
      </Body>

      <Body>
        <div className="flex flex-col justify-center items-center w-full h-screen opacity-100">
          <div className="absolute z-50">
            <Box text="Like this." shuffle={true} />
            {isDone ? (
              <div className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[100%]">
                <AnimatePresence mode="sync">
                  <motion.div
                    // TODO: Maybe add a Y axis translation animation to the arrows
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.1 }}
                    transition={{ duration: 0.5 }}
                    className="mt-16"
                  >
                    {/* <div className="arrow bounce"></div> */}
                    <div className="arrow bounce"></div>
                    <div className="arrow bounce"></div>
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : null}
          </div>
          <Galaxy props={setIsDone} />
        </div>
      </Body>

      <Body>
        <div className="mt-32">
          <Box text="Projects are how I learn..." />
          <br></br>
          <Projects />
        </div>
      </Body>

      <Body>
        <div className="mt-32">
          <Box text="However, I will say..." />
          <CompSci />

          <Box text="The memories are countless." />
        </div>
      </Body>

      <Body>
        <div className="mt-64 mb-64">
          <Box text="Although..when coding gets tough..." />
          <Music />
          <Box text="Music is always there to help me through." />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="arrow bounce " />
          <div className="arrow bounce " />
          <div className="arrow bounce " />
        </div>
      </Body>

      {/*
            TODO: add this section back at point? Eh, maybe not.
            <Misc />
        */}

      <Body>
        <div className="mt-32">
          <Box text="Thank you for stopping by!" />
          <br></br>
          <Box text="Feel free to reach out on any of my socials!" />
          <Socials socials={socials} />
        </div>
        <Footer />
      </Body>
      {/* </LazyLoad> */}
    </main>
  );
}

export default Main;
