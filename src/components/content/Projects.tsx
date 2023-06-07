import ProjectCard from '../animations/ProjectCard'
// TODO: Dynamically import images
import p1 from "../../assets/projects/ispy.png";
import p2 from "../../assets/projects/nyumatflix.png";
import p3 from "../../assets/projects/landing.png";
import p4 from "../../assets/projects/tmad.png";
import p5 from "../../assets/projects/aidoctor.png";
import p6 from "../../assets/projects/blog.png";
import p7 from "../../assets/projects/nyumatype.png";
import p8 from "../../assets/projects/mmm.png";
import p9 from "../../assets/projects/doesband.png";
import p10 from "../../assets/projects/pokedex.png";
import { Project } from '../../types';


const projects: Project[] = [
  { id: 1, title: "ISpyAI", image: p1, link: "https://ispyai.onrender.com", github: "https://github.com/nyumat/ispyai" },
  { id: 2, title: "NyumatFlix", image: p2, link: "https://nyumatflix.herokuapp.com", github: "https://github.com/nyumat/nyumatflix" },
  { id: 3, title: "TalkToBeavs", image: p3, link: "https://talktobeavs.onrender.com", github: "https://github.com/nyumat/talktobeavs" },
  { id: 4, title: "TrackMe@Dixon", image: p4, link: "https://trackmedixon.onrender.com", github: "https://github.com/nyumat/progress" },
  { id: 5, title: "AI Doctor", image: p5, link: "https://ai-doctor.onrender.com", github: "https://github.com/Nyumat/TheAIDoctor" },
  { id: 6, title: "Nyuamat's Blog", image: p6, link: "https://nyumat.onrender.com", github: "https://github.com/nyumat/blog" },
  { id: 7, title: "Typing Test", image: p7, link: "https://nyumatype.onrender.com", github: "https://github.com/Nyumat/TheAIDoctor" },
  { id: 8, title: "Movie Tinder", image: p8, link: "https://moviematchmaker-app.herokuapp.com", github: "https://github.com/MovieMatchMaker/MovieMatchMaker" },
  { id: 9, title: "Band Photo Galley", image: p9, link: "https://nyumat-does-band.vercel.app", github: "https://github.com/Nyumat/NyumatDoesBand" },
  { id: 10, title: "Pokedex", image: p10, link: "https://github.com/Nyumat/NyumatPokedex", github: "https://github.com/Nyumat/NyumatPokedex" },
];

const Projects: React.FC = () => {
  return (
    <>
      <ProjectCard projects={projects} />
    </>
  )
}

export default Projects
