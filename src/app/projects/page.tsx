import ProjectCard from '@/components/ProjectCard'
import getProjectsMetadata from '@/util/functions/getProjectMetadata'

export default function Projects() {
  const postMetadata = getProjectsMetadata()

  const postPreviews = postMetadata.map((project) => (
    <div key={project.id}>
      <ProjectCard key={project.id} card={project}></ProjectCard>
    </div>
  ))
  return (
    <div className="flex columns-2 md:grid md:grid-cols-3 m-3 md:m-10">
      {postPreviews}
    </div>
  )
}
