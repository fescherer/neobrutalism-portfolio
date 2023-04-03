'use client'

import { ExperienceTranslation } from '@/@types/translations/AboutTranslation'
import { Experience as ExperienceType } from '@/@types/translations/AboutTranslation'
import { getDateFormated } from '@/util/functions/getDateFormated'
import Image from 'next/image'
import { Calendar } from 'phosphor-react'

type ExperienceProps = {
  translation: ExperienceTranslation
}

type ExperienceData = {
  id: string
  info: ExperienceType
  date_start: string
  date_end: string
  img: string
}

export default function Experience({ translation }: ExperienceProps) {
  const data: ExperienceData[] = [
    {
      id: 'central-info-itatiba-aprendice',
      info: translation.central_informatica_aprendice,
      date_start: '2016-04-01T13:00:00.000Z',
      date_end: '2016-04-01T13:00:00.000Z',
      img: 'https://user-images.githubusercontent.com/62115215/229382690-60e99ebb-82d1-4840-a07c-ba9a5abf5a02.png'
    },
    {
      id: 'central-info-itatiba',
      info: translation.central_informatica,
      date_start: '2016-04-01T13:00:00.000Z',
      date_end: '2016-04-01T13:00:00.000Z',
      img: 'https://user-images.githubusercontent.com/62115215/229382690-60e99ebb-82d1-4840-a07c-ba9a5abf5a02.png'
    },
    {
      id: 'sports-at',
      info: translation.playscores_aprendice,
      date_start: '2023-03-10T17:31:38.778Z',
      date_end: '2023-03-10T17:31:38.778Z',
      img: 'https://user-images.githubusercontent.com/62115215/229382690-60e99ebb-82d1-4840-a07c-ba9a5abf5a02.png'
    },
    {
      id: 'sports-at',
      info: translation.playscores,
      date_start: '2023-03-10T17:31:38.778Z',
      date_end: '2023-03-10T17:31:38.778Z',
      img: 'https://user-images.githubusercontent.com/62115215/229382690-60e99ebb-82d1-4840-a07c-ba9a5abf5a02.png'
    }
  ]

  return (
    <div className="flex flex-col gap-5">
      {data.map((experience) => (
        <div key={experience.id} className="flex flex-col">
          <div className="flex flex-col">
            <h4 className="tex-3xl font-extrabold uppercase">
              {experience.info.title}
            </h4>
            <div className="flex gap-3">
              <Image src={experience.img} width={50} height={50} alt="dasdsa" />
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <Calendar size={24} />
                  <span>
                    {`${getDateFormated(
                      experience.date_start
                    )} - ${getDateFormated(experience.date_end)}`}
                  </span>
                </div>
                <span>{experience.info.job}</span>
              </div>
            </div>
          </div>

          <p className="text-base font-bold">{experience.info.short_desc}</p>

          <button className="self-end bg-background-accent min-w-[150px] rounded py-1 px-2 text-base font-bold drop-shadow-neo-2 border-primary-dark border-2">
            MORE INFO
          </button>
        </div>
      ))}
    </div>
  )
}
