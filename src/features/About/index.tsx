import { AboutTranslation } from '@/@types/translations/AboutTranslation'
import { DefaultTranslation } from '@/@types/translations/Translation'
import Image from 'next/image'
import Experience from './components/Experience'
import History from './components/History'
import Skills from './components/Skills'

type AboutProps = {
  translation: AboutTranslation
  translationDefault: DefaultTranslation
}

export default function About({ translation, translationDefault }: AboutProps) {
  return (
    <div className="m-auto flex w-full max-w-project flex-col gap-5 px-4 py-2">
      <h1 className="-rotate-2 text-6xl font-bold">{translation.title}</h1>

      <div className="mb-6 flex flex-col items-center gap-12 md:flex-row">
        <Image
          src="https://user-images.githubusercontent.com/62115215/233803111-83a50ab6-a510-4f92-9591-3adb410fd409.png"
          width={296}
          height={350}
          alt={translation.introduction.alt_image}
          className="hidden min-w-[296px] rounded-sm border-4 border-primary-dark bg-primary drop-shadow-neo-5 md:block"
        />

        <div className="font-bold">
          <h2 className="text-4xl">{translationDefault.author}</h2>

          <p className="text-justify indent-8 text-base">
            {translation.first_description}
          </p>

          <div className="underline-offset-3 mt-10 flex w-full justify-evenly font-extrabold uppercase underline">
            <a href="#skills-experience" className="btn-base">
              {translation.introduction.skills_experience}
            </a>
            <a href="#my-history" className="btn-base">
              {translation.introduction.my_history}
            </a>
          </div>
        </div>

        <Image
          src="https://user-images.githubusercontent.com/62115215/233803111-83a50ab6-a510-4f92-9591-3adb410fd409.png"
          width={296}
          height={350}
          alt={translation.introduction.alt_image}
          className="block min-w-[296px] rounded-sm border-4 border-primary-dark bg-primary drop-shadow-neo-5 md:hidden"
        />
      </div>

      {/* Skills and Experience */}
      <div className="block grid-cols-2 gap-20 md:grid" id="skills-experience">
        <div className="flex flex-col gap-6">
          <h2 className="mb-7 -rotate-2 text-6xl font-bold leading-12">
            {translation.skills_experience.title}
          </h2>

          <p className="text-justify indent-8 text-base font-bold">
            {translation.skills_experience.description}
          </p>

          <blockquote className="text-justify indent-8 text-base font-bold ">
            <p className="text-xl italic">
              {`"${translation.skills_experience.quote.quote_block}"`}
            </p>
            <p className="text-end uppercase">
              {translation.skills_experience.quote.author}
            </p>
          </blockquote>

          <div className="flex flex-col gap-5">
            <h3 className="text-5xl font-bold">{translation.skills.title}</h3>
            <Skills translation={translation.skills} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-5xl font-bold">{translation.experience.title}</h3>
          <Experience translation={translation.experience} />
        </div>
      </div>

      <div className="flex flex-col" id="my-history">
        <History translation={translation.my_history} />
      </div>
    </div>
  )
}

