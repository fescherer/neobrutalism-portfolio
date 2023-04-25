'use client'

import RouteStepper from '../RouteStepper'
import { Browser } from 'phosphor-react'
import Link from 'next/link'
import GithubIcon from '@/Icons/Github'
import {
  ProjectTranslation,
  TypeTranslation
} from '@/@types/translations/ProjectTranslation'
import { GrayMatterFile } from 'gray-matter'

type ProjectHeaderProps = {
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
          {project.data.github && (
            <Link
              href={project.data.github}
              target="_blank"
              className="hover:scale-105"
            >
              <GithubIcon />
            </Link>
          )}

          {project.data.site && (
            <Link href={project.data.site}>
              <Browser size={20} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
