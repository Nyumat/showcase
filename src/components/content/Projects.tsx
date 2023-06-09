import { projects } from '../../data'
import ProjectCard from '../animations/ProjectCard'

const Projects: React.FC = () => {
  return (
    <>
      <ProjectCard projects={projects} />
    </>
  )
}

export default Projects
