import { HomeTranslation } from '@/@types/translations/HomeTranslation'
import AboutMe from './AboutMe'
import Introduction from './Introduction'
import Projects from './Projects'
import Snippets from './Snippets'

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

      <Snippets translation={translation.snippets} />

      <div className="bg-background-accent">
        <Projects />
      </div>
    </>
  )
}
