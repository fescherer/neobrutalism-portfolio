import Markdown from 'markdown-to-jsx'

import ImageSlider from '@/features/Project/components/ImageSlider'
import { getDateFormatedWithDay } from '@/util/functions/getDateFormated'
import { ProjectTranslation } from '@/@types/translations/ProjectTranslation'
import { GrayMatterFile } from 'gray-matter'
import ProjectHeader from './components/ProjectHeader'

type ProjectProps = {
  translate: ProjectTranslation
  project: GrayMatterFile<string>
}

export default function Project({ translate, project }: ProjectProps) {
  return (
    <div className="m-auto flex w-full max-w-project flex-col items-start gap-5 px-4 py-2 font-bold">
      <ProjectHeader translate={translate} project={project} />

      <div className="flex flex-wrap gap-5">
        <p className="opacity-70">
          {getDateFormatedWithDay(project.data.date, true)}
        </p>
        <div className="flex flex-wrap items-center gap-5">
          {project.data.tags.map((tag: string) => (
            <div
              key={tag}
              className="border-1 rounded-sm border border-primary-dark bg-foreground px-3 text-xs uppercase drop-shadow-neo-1"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <p className="text-base opacity-70">{project.data.description}</p>

      <div className="my-3 h-0.063 w-full bg-primary opacity-70" />

      <ImageSlider slides={project.data.images} />

      <article className="prose max-w-none w- text-justify font-bold text-primary prose-headings:text-primary-dark">
        <Markdown
          options={{
            overrides: {
              strong: {
                props: {
                  className: 'text-primary font-extrabold'
                }
              },
              p: {
                props: {
                  className: 'indent-8'
                }
              },
              a: {
                props: {
                  className: 'text-primary font-bold'
                }
              },
              img: {
                props: {
                  className: 'w-[500px] m-auto'
                }
              },
              ul: {
                props: {
                  className: 'list-none'
                }
              },
              li: {
                props: {
                  className: 'text-primary before:content-["•"]'
                }
              }
            }
          }}
        >
          {project.content}
        </Markdown>
      </article>
    </div>
  )
}
