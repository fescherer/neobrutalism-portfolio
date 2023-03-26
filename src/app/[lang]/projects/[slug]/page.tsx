import Project from '@/features/Project'
import {
  getDictionaryHead,
  getDictionaryProject
} from '@/util/functions/i18n/get-dictionary'
import { i18n, Locale } from '@/util/functions/i18n/i18n-config'
import getProjectsMetadata from '@/util/functions/getProjectMetadata'
import fs from 'fs'
import matter, { GrayMatterFile } from 'gray-matter'

type ProjectPageProps = {
  params: { slug: string; lang: Locale }
}

export const generateStaticParams = async () => {
  // return i18n.locales.map((locale) => {
  const projects = getProjectsMetadata('pt')
  return projects.map((project) => ({
    slug: project.slug
  }))
  // })
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const dictionary = await getDictionaryHead(params.lang)

  {
    /*
  Esses daqui são metadados padrões quando usamos esse tipo de abordagem

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1"> /
*/
  }

  return {
    title: 'PROJECT 1',
    openGraph: {
      title: 'TITULO PROJTO 1',
      description: 'DESCRIÇÃO',
      type: 'article',
      publishedTime: '2023-01-01T00:00:00.000Z',
      authors: ['Felipe Scherer']
    }
  }
}

async function getProject(
  slug: string,
  lang: string
): Promise<GrayMatterFile<string>> {
  const folder = `projects/${lang}/`
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf8')

  const matterResult = matter(content)
  return matterResult
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const dictionary = await getDictionaryProject(params.lang)
  const project = await getProject(params.slug, params.lang)

  return <Project translate={dictionary} project={project} />
}
