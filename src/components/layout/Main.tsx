// import LazyLoad from "react-lazyload"
import { useState } from "react"
import { Social } from "../../types"
import Box from "../animations/Box"
import Projects from "../content/Projects"
import Socials from "../content/Socials"
import Body from "./Body"
import { AnimatePresence, motion } from "framer-motion"
import Music from "../content/Music"
import CompSci from "../content/CompSci"
import Misc from "../content/Misc"
import Galaxy from "../three/Galaxy"


const socials: Social[] = [
      { id: 1, title: "Youtube", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png", link: "https://www.youtube.com/@nyumat" },
      { id: 2, title: "Github", image: "https://www.svgrepo.com/show/449764/github.svg", link: "https://github.com/nyumat" },
      { id: 3, title: "Instagram", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png?20210403190622", link: "https://www.instagram.com/tomnyuma" },
      { id: 4, title: "Twitter", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1024px-Logo_of_Twitter.svg.png?20220821125553", link: "https://www.twitter.com/BotJcole" },
      { id: 5, title: "Devpost", image: "https://www.vectorlogo.zone/logos/devpost/devpost-icon.svg", link: "https://www.devpost.com/Nyumat" },
      { id: 6, title: "Discord", image: "https://www.svgrepo.com/show/353655/discord-icon.svg", link: "https://discord.com/users/nyumat" },
];


function Main() {
      const [isDone, setIsDone] = useState<boolean>(false)
      return (
            <main>
                  {/* <LazyLoad once> */}
                  <Body>
                        <Box text="I build things for the web." />
                  </Body>

                  <Body>
                        <div className="flex flex-col justify-center items-center w-full h-screen opacity-100">
                              <div className="absolute z-50">
                                    <Box text="Like these things..." shuffle={true} />
                                    {isDone ? (
                                          <div className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[100%]">
                                                <AnimatePresence mode="wait">
                                                      <motion.div
                                                            // TODO: Maybe add a Y axis translation animation to the arrows
                                                            initial={{ opacity: 0, scale: 0 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, scale: 0.1 }}
                                                            transition={{ duration: 0.5 }}
                                                            className="mt-16"
                                                      >
                                                            <div className="arrow bounce"></div>
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
                              <Box text="I do have favorites..." />
                              <br></br>
                              <Projects />
                        </div>
                  </Body>

                  <Body>
                        <div className="mt-48">
                              <Box text="When coding gets tough," />
                              <Music />
                              <br></br>
                              <br></br>

                              <Box text="I march with the band..." />
                        </div>
                  </Body>

                  <Body>
                        <div className="mt-48">
                              <Box text="Although I will say," />
                              <CompSci />
                              <br></br>
                              <Box text="This field has brought me many great memories." />
                        </div>
                  </Body>


                  <Body>
                        <div className="mt-64">
                              <Box text="Friends, Places, Experiences..." />
                              <br></br>
                              <Misc />
                              <br></br>
                              <br></br>
                              <Box text="I'll never forget." />
                        </div>
                  </Body>


                  <Body>
                        <div className="mt-48">
                              <Box text="Thank you for stopping by!" />
                              <br></br>
                              <Box text="I do have a few corners on the internet..." size="text-2xl" />
                              <Socials socials={socials} />
                        </div>
                  </Body>
                  {/* </LazyLoad> */}
            </main>

      )
}

export default Main
