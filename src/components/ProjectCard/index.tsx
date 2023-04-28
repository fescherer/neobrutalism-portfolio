import { ProjectMetadata } from '@/@types/Metadata'
import GithubIcon from '@/Icons/Github'
import { getDateFormated } from '@/util/functions/getDateFormated'
import Link from 'next/link'
import ImageAspectRatio from '../ImageAspectRatio'

type ProjectCardProps = {
  card: ProjectMetadata
}

export default function ProjectCard({ card }: ProjectCardProps) {
  return (
    <div className="flex animate-pop h-[320px] w-[230px] flex-col border-2 border-primary-dark bg-background drop-shadow-neo-5">
      <div className="flex items-center justify-between border-b-2 bg-foreground px-3 py-1 text-primary-dark">
        <h3
          title={card.title}
          className="max-w-[170px] overflow-hidden overflow-ellipsis whitespace-nowrap text-3xl font-bold uppercase"
        >
          {card.title}
        </h3>
        <Link
          href={card.github}
          target="_blank"
          className="tracking-widest transition-all hover:scale-105"
        >
          <GithubIcon />
        </Link>
      </div>
      <div>
        <ImageAspectRatio image={card.image} />
      </div>

      <div className="flex h-full flex-col gap-3 px-5 py-3 font-bold">
        <span className="text-sm">{getDateFormated(card.date)}</span>
        <p
          title={card.description}
          className="vertical-ellipsis h-full text-justify text-base"
        >
          {card.description}
        </p>
        <Link
          href={`projects/${card.type}/${card.slug}`}
          className="self-end font-extrabold uppercase tracking-widest underline underline-offset-1 transition-all hover:scale-105 hover:text-primary-dark"
        >
          Read more
        </Link>
      </div>
    </div>
  )
}
