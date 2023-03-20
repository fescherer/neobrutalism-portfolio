import Projects from '@/features/Projects'
import getProjectsMetadata from '@/util/functions/getProjectMetadata'

export default function ProjectsPage() {
  const postMetadata = getProjectsMetadata()

  return <Projects data={postMetadata} />
}
