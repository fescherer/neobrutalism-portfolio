import { IntroductionTranslation } from '@/@types/translations/HomeTranslation'
import Image from 'next/image'
import Link from 'next/link'
import ButtonNextItem from '../components/ButtonNextItem'

type IntroductionProps = {
  translation: IntroductionTranslation
}

function ExploreSite({ translation }: IntroductionProps) {
  return (
    <>
      <span className="opacity-80">{translation.explore}</span>
      <div className="flex gap-4">
        <Link
          href="/projects"
          className="hover:text-primary-dark transition-all hover:scale-110"
        >
          {translation.menu.projects}
        </Link>
        <Link
          href="/about"
          className="hover:text-primary-dark transition-all hover:scale-110"
        >
          {translation.menu.aboutme}
        </Link>
      </div>
    </>
  )
}

export default function Introduction({ translation }: IntroductionProps) {
  return (
    <div
      className="flex h-[calc(100vh-107px)] items-center justify-center"
      id="home-introduction"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="m-5 flex flex-col gap-5 sm:flex-row sm:gap-12">
          <div className="flex flex-col items-center gap-5">
            <div className="flex animate-scale flex-col text-4xl font-bold sm:text-6xl sm:leading-15">
              <span className="sm:drop-shadow-neo-2">{translation.meet}</span>
              <span className="sm:drop-shadow-neo-2">{translation.author}</span>
              <span className="drop-shadow-neo-1-ligth  text-xl opacity-80 sm:text-4xl">
                {translation.profession}
              </span>
            </div>

            <div className="hidden flex-col items-center font-bold sm:flex">
              <ExploreSite translation={translation} />
            </div>
          </div>

          <figure className="relative">
            <Image
              src="https://user-images.githubusercontent.com/62115215/221433922-02ebc877-4a47-44f4-8f3c-fd97ca2b1058.png"
              width={296}
              height={350}
              alt={translation.alt_image}
              className="rounded-sm border-4 border-primary-dark drop-shadow-neo-5"
              unoptimized={true}
            />

            <div className="absolute bottom-10 -left-12 rounded-sm border-4 border-primary-dark bg-foreground px-6 py-2 text-4xl font-extrabold drop-shadow-neo-3">
              HELLO!
            </div>
          </figure>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="flex flex-col items-center font-bold sm:hidden">
            <ExploreSite translation={translation} />
          </div>

          <ButtonNextItem
            aria={translation.aria_next_item}
            nextItem="about-me"
          />
        </div>
      </div>
    </div>
  )
}
