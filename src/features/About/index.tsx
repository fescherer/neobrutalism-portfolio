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
    <div className="flex flex-col gap-5 w-full px-4 py-2 max-w-project m-auto">
      <h1 className="text-6xl font-bold -rotate-2">{translation.title}</h1>

      <div className="flex md:flex-row flex-col gap-12 mb-6">
        <Image
          src="https://user-images.githubusercontent.com/62115215/233803111-83a50ab6-a510-4f92-9591-3adb410fd409.png"
          width={296}
          height={350}
          alt={translation.introduction.alt_image}
          className="hidden md:block bg-primary drop-shadow-neo-5 border-primary-dark border-4 rounded-sm"
        />

        <div className="font-bold">
          <h2 className="text-4xl">{translationDefault.author}</h2>

          <p className="text-base indent-8 text-justify">
            {translation.first_description}
          </p>

          <div className="flex justify-evenly font-extrabold uppercase underline underline-offset-3 w-full mt-10">
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
          className="md:hidden block bg-primary drop-shadow-neo-5 border-primary-dark border-4 rounded-sm"
        />
      </div>

      {/* Skills and Experience */}
      <div className="block md:grid grid-cols-2 gap-20" id="skills-experience">
        <div className="flex flex-col gap-6">
          <h2 className="text-6xl font-bold leading-12 -rotate-2 mb-7">
            {translation.skills_experience.title}
          </h2>

          <p className="font-bold text-base indent-8 text-justify">
            {translation.skills_experience.description}
          </p>

          <blockquote className="font-bold text-base indent-8 text-justify ">
            <p className="italic text-xl">
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
