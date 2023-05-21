import { HomeTranslation } from '@/@types/translations/HomeTranslation'
import AboutMe from './AboutMe'
import Introduction from './Introduction'
import Projects from './Projects'

type HomeProps = {
  translation: HomeTranslation
}

export default function Home({ translation }: HomeProps) {
  return (
    <>
      <Introduction translation={translation.introduction} />
      <div className="bg-background-accent">
        <AboutMe translation={translation.aboutme} />
      </div>

      <Projects translation={translation.projects} />
    </>
  )
}
