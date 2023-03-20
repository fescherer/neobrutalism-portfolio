import { ProjectMetadata } from '@/@types/Metadata'
import ProjectCard from '@/components/ProjectCard'

type ProjectsProps = {
  data: ProjectMetadata[]
}

export default function Projects({ data }: ProjectsProps) {
  const postPreviews = data.map((project) => (
    <div key={project.id}>
      <ProjectCard key={project.id} card={project}></ProjectCard>
    </div>
  ))
  return (
    <div className="flex gap-5 flex-wrap justify-center max-w-project m-auto">
      {postPreviews}
    </div>
  )
}
