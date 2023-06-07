import { Social } from "../../types"
import Box from "../animations/Box"
import Interests from "../content/Interests"
import Memories from "../content/Memories"
import Projects from "../content/Projects"
import Socials from "../content/Socials"
import Canva from "../three/Canva"
import Body from "./Body"

const socials: Social[] = [
      { id: 1, title: "Youtube", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png", link: "https://www.youtube.com/@nyumat" },
      { id: 2, title: "Github", image: "https://www.svgrepo.com/show/449764/github.svg", link: "https://github.com/nyumat" },
      { id: 3, title: "Instagram", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png?20210403190622", link: "https://www.instagram.com/tomnyuma" },
      { id: 4, title: "Twitter", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1024px-Logo_of_Twitter.svg.png?20220821125553", link: "https://www.twitter.com/BotJcole" },
      { id: 5, title: "Devpost", image: "https://www.vectorlogo.zone/logos/devpost/devpost-icon.svg", link: "https://www.devpost.com/Nyumat" },
      { id: 6, title: "Discord", image: "https://www.svgrepo.com/show/353655/discord-icon.svg", link: "https://discord.com/users/nyumat" },
];


function Main() {
      return (
            <>

                  <Body>
                        <Box text="I build things for the web." />
                  </Body>

                  <Body>
                        <div className="flex flex-col justify-center items-center w-full h-screen opacity-100">
                              <div className="absolute z-50">
                                    <Box text="Like these things..." />
                              </div>
                              <Canva />
                        </div>
                  </Body>


                  <Body>
                        <div className="mt-32">
                              <Box text="I do have favorites..." />
                              <Projects />
                        </div>
                  </Body>

                  <Body>
                        <div className="">
                              <Box text="Performance is where it all started..." />
                              <Interests />
                        </div>
                  </Body>

                  <Body>
                        <div className="my-32">
                              <Box text="I will say," />
                              <br></br>
                              <Box text="The best part about CS is the memories." />
                              <Memories />
                        </div>
                  </Body>


                  <Body>
                        <div className="mt-32">
                              <Box text="Thanks for stopping by!" />
                              <br></br>
                              <Box text="Interact with me on my socials!" size="text-2xl" />
                              <Socials socials={socials} />
                        </div>
                  </Body>
            </>

      )
}

export default Main
