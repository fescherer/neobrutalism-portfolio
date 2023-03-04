import { ProjectCardType } from '@/@types/Util'
import ProjectCard from '@/components/ProjectCard'
import HomeTitle from '../components/HomeTile'

const cards: ProjectCardType[] = [
  {
    id: 1,
    title: 'Project 1',
    tags: ['Angular', 'Figma', 'React'],
    url: '',
    date: 0,
    description:
      'Sed sit amet ipsum eu orci placerat blandit ac efficitur neque. Praesent nec auctor odio. Suspendisse in ipsum lorem. Nulla auctor elit non risus pretium facilisis. Proin eleifend rhoncus nisi, ut Nulla auctor elit non risus pretium facilisis. Proin eleifend rhoncus nisi, ut '
  }
]

export default function Projects() {
  return (
    <div>
      <HomeTitle>Projects</HomeTitle>
      <div className="grid grid-cols-5 m-10">
        {cards.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}
