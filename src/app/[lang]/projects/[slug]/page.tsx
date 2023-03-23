import Project from '@/features/Project'
import { getDictionaryProject } from '@/util/functions/i18n/get-dictionary'
import { Locale } from '@/util/functions/i18n/i18n-config'
import getProjectsMetadata from '@/util/functions/getProjectMetadata'
import fs from 'fs'
import matter, { GrayMatterFile } from 'gray-matter'

type ProjectProps = {
  params: { slug: string; lang: Locale }
}

export const generateStaticParams = async () => {
  const projects = getProjectsMetadata()
  return projects.map((project) => ({
    slug: project.slug
  }))
}

async function getProject(slug: string): Promise<GrayMatterFile<string>> {
  const folder = 'projects/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf8')

  const matterResult = matter(content)
  return matterResult
}

export default async function ProjectPage({ params }: ProjectProps) {
  const dictionary = await getDictionaryProject(params.lang)
  const project = await getProject(params.slug)

  return <Project translate={dictionary} project={project} />
}
