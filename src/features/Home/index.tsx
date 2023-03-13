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
      <AboutMe translation={translation.aboutme} />
      <Snippets translation={translation.snippets} />
      <Projects />
    </>
  )
}
