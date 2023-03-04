import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/util/Projects'

export default function Projects() {
  return (
    <div className="flex columns-2 md:grid md:grid-cols-3 m-3 md:m-10">
      {projects.map((card) => (
        <ProjectCard key={card.id} card={card} />
      ))}
    </div>
  )
}
