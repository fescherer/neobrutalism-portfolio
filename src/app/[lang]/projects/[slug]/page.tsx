import Project from '@/features/Project'
import { getDictionaryProject } from '@/util/functions/i18n/get-dictionary'
import { Locale } from '@/util/functions/i18n/i18n-config'
import getProjectsMetadata from '@/util/functions/getProjectMetadata'

type ProjectProps = {
  params: { slug: string; lang: Locale }
}

export const generateStaticParams = async () => {
  const projects = getProjectsMetadata()
  return projects.map((project) => ({
    slug: project.slug
  }))
}

export default async function ProjectPage({ params }: ProjectProps) {
  const dictionary = await getDictionaryProject(params.lang)

  return <Project slug={params.slug} translate={dictionary} />
}
