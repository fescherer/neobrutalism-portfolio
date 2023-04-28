import RouteStepper from '../RouteStepper'
import Link from 'next/link'
import GithubIcon from '@/Icons/Github'
import {
  ProjectTranslation,
  TypeTranslation
} from '@/@types/translations/ProjectTranslation'
import { GrayMatterFile } from 'gray-matter'
import { Browser } from '@/Icons/Browser'
import { FigmaLogo } from '@/Icons/FigmaLogo'

type ProjectHeaderProps = {
  translate: ProjectTranslation
  project: GrayMatterFile<string>
}

const getTypeColor = (type: string): string => {
  switch (type) {
    case 'archived':
      return 'bg-[#FF9F8C]'
    case 'coding-lesson':
      return 'bg-[#FFCE94]'
    case 'coding-week':
      return 'bg-[#FDD97C]'
    case 'college-lesson':
      return 'bg-[#C1F0B2]'
    case 'drawing':
      return 'bg-[#B2E4F0]'
    case 'original':
      return 'bg-[#C7CEEA]'
    case 'snippets':
      return 'bg-[#D6B2F0]'
  }
  return 'bg-background'
}

export default function ProjectHeader({
  project,
  translate
}: ProjectHeaderProps) {
  const bg = getTypeColor(project.data.type)

  return (
    <div className="flex w-full flex-col items-start">
      <RouteStepper />
      <p
        className={`uppercase ${bg} rounded border border-primary-dark p-0.5 text-base text-primary-dark drop-shadow-neo-2`}
      >
        {translate.type[project.data.type as keyof TypeTranslation]}
      </p>

      <div className="flex w-full items-center justify-between text-5xl uppercase text-primary-dark">
        <h1>{project.data.title}</h1>
        <div className="flex gap-2">
          {project.data?.github && (
            <Link
              href={project.data.github}
              target="_blank"
              className="hover:scale-105 transition-all"
            >
              <GithubIcon />
            </Link>
          )}

          {project.data?.site && (
            <Link
              href={project.data.site}
              target="_blank"
              className="hover:scale-105 transition-all flex flex-col items-center"
            >
              <div className="w-2 h-2 bg-primary-dark rounded-full animate-bounce-fast " />
              <Browser />
            </Link>
          )}

          {project.data?.figma && (
            <Link
              href={project.data.figma}
              target="_blank"
              className="hover:scale-105 transition-all"
            >
              <FigmaLogo />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
