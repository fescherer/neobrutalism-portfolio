import { ProjectsHomeTranslation } from '@/@types/translations/HomeTranslation'
import ProjectCard from '@/components/ProjectCard'
import { getHighlightedProjects } from '@/util/functions/getProjectMetadata'
import Link from 'next/link'
import ItemWrapper from '../components/ItemWrapper'

type ProjectsProps = {
  translation: ProjectsHomeTranslation
}

export default function Projects({ translation }: ProjectsProps) {
  const postMetadata = getHighlightedProjects()

  return (
    <ItemWrapper
      buttonNextItem="last"
      aria={translation.aria_next_item}
      title={translation.title}
      id="projects"
      href="projects"
    >
      <div className="m-10 flex flex-col md:flex-row gap-4 flex-wrap w-full justify-between items-center">
        {postMetadata.map((project) => (
          <ProjectCard key={project.slug} card={project} />
        ))}
        <Link
          href="/projects"
          className="flex hover:scale-110 transition-all animate-pop h-[320px] w-[230px] flex-col border-2 border-primary-dark bg-background drop-shadow-neo-5 justify-center items-center text-4xl font-bold uppercase"
        >
          {translation.more}
        </Link>
      </div>
    </ItemWrapper>
  )
}
