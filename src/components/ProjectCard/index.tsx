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
    <div className="drop-shadow-neo-5 border-primary-dark border-2 bg-background w-[245px]">
      <div className="flex items-center justify-between px-3 border-b-2 py-1 bg-foreground text-primary-dark">
        <h3
          title={card.title}
          className="text-3xl whitespace-nowrap uppercase font-bold max-w-[170px] overflow-hidden overflow-ellipsis"
        >
          {card.title}
        </h3>
        <Link href={card.github} target="_blank">
          <GithubIcon />
        </Link>
      </div>

      <ImageAspectRatio image={card.image} />

      <div className="flex flex-col gap-3 px-5 py-3 font-bold">
        <span className="text-sm">{getDateFormated(card.date)}</span>
        <p className="text-justify text-base">{card.description}</p>
        <Link
          href={`projects/${card.slug}`}
          className="underline-offset-1 underline font-extrabold uppercase transition-all tracking-widest self-end hover:scale-105 hover:text-primary-dark"
        >
          Read more
        </Link>
      </div>
    </div>
  )
}
