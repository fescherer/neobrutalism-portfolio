import Projects from '@/features/Projects'
import { getAllProjects } from '@/util/functions/getProjectMetadata'

export default function ProjectsPage() {
  const postMetadata = getAllProjects()

  return <Projects data={postMetadata} />
}
