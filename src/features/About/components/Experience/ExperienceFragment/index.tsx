import { ExperienceData } from '@/@types/About'
import { getDateFormated } from '@/util/functions/getDateFormated'
import Image from 'next/image'
import { Calendar, UserSquare } from 'phosphor-react'
import { Dispatch, SetStateAction } from 'react'

type ExperienceFragmentProps = {
  experience: ExperienceData
  setDialog: Dispatch<SetStateAction<ExperienceData | null>>
}

export default function ExperienceFragment({
  experience,
  setDialog
}: ExperienceFragmentProps) {
  return (
    <>
      <div key={experience.id} className="flex flex-col">
        <div className="flex flex-col">
          <h4 className="tex-3xl font-extrabold uppercase">
            {experience.info.title}
          </h4>
          <div className="flex gap-3">
            <div>
              <Image
                src={experience.logo}
                width={(35 * 3) / 2}
                height={(35 * 2) / 3}
                alt={'Logo da empresa ' + experience.info.title}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3 text-base">
                <Calendar size={18} />
                <span>
                  {`${getDateFormated(
                    experience.date_start
                  )} - ${getDateFormated(experience.date_end)}`}
                </span>
              </div>
              <div className="flex gap-3 text-base">
                <UserSquare size={18} />
                <span>{experience.info.job}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-base font-bold">{experience.info.short_desc}</p>

        <button
          onClick={() => setDialog(experience)}
          className="self-end bg-background-accent min-w-[150px] rounded py-1 px-2 text-base font-bold drop-shadow-neo-2 border-primary-dark border-2"
        >
          MORE INFO
        </button>
      </div>
    </>
  )
}
