import { IntroductionTranslation } from '@/@types/translations/HomeTranslation'
import Image from 'next/image'
import ButtonNextItem from '../components/ButtonNextItem'

type IntroductionProps = {
  translation: IntroductionTranslation
}

function ExploreSite({ translation }: IntroductionProps) {
  return (
    <>
      <span className="opacity-80">{translation.explore}</span>
      <div className="flex gap-2">
        <span>{translation.menu.snippets}</span>
        <span>{translation.menu.projects}</span>
        <span>{translation.menu.aboutme}</span>
      </div>
    </>
  )
}

export default function Introduction({ translation }: IntroductionProps) {
  return (
    <div className="flex flex-col gap-5 items-center" id="home-introduction">
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-12 m-5">
        <div className="flex flex-col items-center gap-5">
          <div className="sm:text-6xl sm:leading-15 flex flex-col text-4xl font-bold animate-scale">
            <span className="sm:drop-shadow-neo-2">{translation.meet}</span>
            <span className="sm:drop-shadow-neo-2">{translation.author}</span>
            <span className="text-xl  sm:text-4xl opacity-80 drop-shadow-neo-1-ligth">
              {translation.profession}
            </span>
          </div>

          <div className="hidden font-bold sm:flex flex-col items-center">
            <ExploreSite translation={translation} />
          </div>
        </div>

        <Image
          src="https://user-images.githubusercontent.com/62115215/221433922-02ebc877-4a47-44f4-8f3c-fd97ca2b1058.png"
          width={296}
          height={350}
          alt={translation['alt-image']}
          className="drop-shadow-neo-5 border-primary-dark border-4 rounded-sm"
        />
      </div>

      <div className="flex flex-col items-center gap-1">
        <div className="flex font-bold sm:hidden flex-col items-center">
          <ExploreSite translation={translation} />
        </div>

        <ButtonNextItem
          aria={translation['aria-next-item']}
          nextItem="about-me"
        />
      </div>
    </div>
  )
}
