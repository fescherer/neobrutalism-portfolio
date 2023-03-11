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
    <div className="flex gap-5 flex-wrap justify-center max-w-project m-auto">
      {postPreviews}
    </div>
  )
}
