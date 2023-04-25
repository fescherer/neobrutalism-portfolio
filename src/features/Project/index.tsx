import Markdown from 'markdown-to-jsx'
import Link from 'next/link'
import GithubIcon from '@/Icons/Github'
import ImageSlider from '@/features/Project/components/ImageSlider'
import RouteStepper from '@/features/Project/components/RouteStepper'
import { getDateFormated } from '@/util/functions/getDateFormated'
import {
  ProjectTranslation,
  TypeTranslation
} from '@/@types/translations/ProjectTranslation'
import { GrayMatterFile } from 'gray-matter'

type ProjectProps = {
  translate: ProjectTranslation
  project: GrayMatterFile<string>
}

const getTypeColor = (type: string): string => {
  switch (type) {
    case 'college':
      return 'bg-[#F0DF83]'
    case 'drawing':
      return 'bg-[#83C2F0]'
    case 'coding-week':
      return 'bg-[#F0A483]'
    case 'course':
      return 'bg-[#C0F083]'
    case 'original':
      return 'bg-[#F08383]'
  }
  return 'bg-background'
}

export default function Project({ translate, project }: ProjectProps) {
  const bg = getTypeColor(project.data.type)

  return (
    <div className="m-auto flex w-full max-w-project flex-col items-start gap-5 px-4 py-2 font-bold">
      <div className="flex w-full flex-col items-start">
        <RouteStepper />
        <p
          className={`uppercase ${bg} rounded border border-primary-dark p-0.5 text-base text-primary-dark drop-shadow-neo-2`}
        >
          {translate.type[project.data.type as keyof TypeTranslation]}
        </p>

        <div className="flex w-full items-center justify-between text-5xl uppercase text-primary-dark">
          <h1>{project.data.title}</h1>
          <Link
            href={project.data.github}
            target="_blank"
            className="hover:scale-105"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        <p className="opacity-70">{getDateFormated(project.data.date, true)}</p>
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

      <article className="prose max-w-none text-justify font-bold text-primary prose-headings:text-primary-dark">
        <Markdown>{project.content}</Markdown>
      </article>
    </div>
  )
}
