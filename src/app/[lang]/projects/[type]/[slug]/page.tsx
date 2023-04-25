import Project from '@/features/Project'
import { getDictionaryProject } from '@/util/functions/i18n/get-dictionary'
import { Locale } from '@/util/functions/i18n/i18n-config'
import fs from 'fs'
import matter, { GrayMatterFile } from 'gray-matter'
import { ProjectMetadata } from '@/@types/Metadata'
import { getAllProjects } from '@/util/functions/getProjectMetadata'

type ProjectPageProps = {
  params: { type: string; slug: string; lang: Locale }
}

export const generateStaticParams = async () => {
  const projects: ProjectMetadata[] = getAllProjects()

  return projects.map((project) => ({
    type: project.type,
    slug: project.slug
  }))
}

// export async function generateMetadata({ params }: ProjectPageProps) {
//   const dictionary = await getDictionaryHead(params.lang)

//   {
//     /*
//   Esses daqui são metadados padrões quando usamos esse tipo de abordagem

//   <meta charset="utf-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1"> /
// */
//   }

//   return {
//     title: 'PROJECT 1',
//     openGraph: {
//       title: 'TITULO PROJTO 1',
//       description: 'DESCRIÇÃO',
//       type: 'article',
//       publishedTime: '2023-01-01T00:00:00.000Z',
//       authors: ['Felipe Scherer']
//     }
//   }
// }

async function getProject(
  type: string,
  slug: string,
  lang: string
): Promise<GrayMatterFile<string>> {
  const folder = `projects/${lang}/${type}/`
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf8')

  const matterResult = matter(content)
  return matterResult
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const dictionary = await getDictionaryProject(params.lang)
  const project = await getProject(params.type, params.slug, params.lang)

  return <Project translate={dictionary} project={project} />
}
