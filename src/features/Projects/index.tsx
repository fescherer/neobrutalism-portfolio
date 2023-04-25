import { ProjectMetadata } from '@/@types/Metadata'
import ProjectCard from '@/components/ProjectCard'

type ProjectsProps = {
  data: ProjectMetadata[]
}

export default function Projects({ data }: ProjectsProps) {
  const postPreviews = data.map((project) => (
    <div key={project.id}>
      <ProjectCard key={project.id} card={project} />
    </div>
  ))
  return (
    <div className="m-auto flex max-w-project flex-col gap-5 p-1">
      <div className="h-10 w-36 bg-primary" />
      <div className="flex flex-wrap justify-center gap-5">{postPreviews}</div>
    </div>
  )
}
