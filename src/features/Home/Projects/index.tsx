import ProjectCard from '@/components/ProjectCard'
import { bestProjects } from '@/util/Projects'
import HomeTitle from '../components/HomeTile'

export default function Projects() {
  return (
    <div>
      <HomeTitle>Projects</HomeTitle>
      <div className="grid grid-cols-5 m-10">
        {bestProjects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}
