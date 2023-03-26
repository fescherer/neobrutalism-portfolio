import Projects from '@/features/Projects'
import getProjectsMetadata from '@/util/functions/getProjectMetadata'
import { Locale } from '@/util/functions/i18n/i18n-config'

type ProjectsPageProps = {
  params: { slug: string; lang: Locale }
}

export default function ProjectsPage({ params }: ProjectsPageProps) {
  const postMetadata = getProjectsMetadata(params.lang)

  return <Projects data={postMetadata} />
}
