import { ProjectCardType } from '@/@types/Util'
import GithubIcon from '@/Icons/Github'

type ProjectCardProps = {
  card: ProjectCardType
}

export default function ProjectCard({ card }: ProjectCardProps) {
  return (
    <div className="drop-shadow-neo-5 border-primary-dark border-2 bg-background">
      <div className="flex items-center justify-between px-3 border-b-2 py-1 bg-foreground text-primary-dark">
        <h3 className="text-4xl uppercase font-bold">{card.title}</h3>
        <div>
          <GithubIcon />
        </div>
      </div>
      <div className="flex flex-col gap-3 px-5 py-3 font-bold">
        <span className="text-sm">May, 2023</span>
        <p className="text-justify text-base">{card.description}</p>
        <button className="underline-offset-1 underline font-extrabold uppercase tracking-widest self-end hover:scale-105 hover:text-primary-dark">
          Read more
        </button>
      </div>
    </div>
  )
}
