'use client'

import { ExperienceTranslation } from '@/@types/translations/AboutTranslation'
import { ExperienceData } from '@/@types/About'
import ExperienceFragment from './ExperienceFragment'
import { useState } from 'react'
import DialogExperience from './DialogExperience'
import ResponsiveDialog from '@/components/ResponsiveDialog'
import { Divider } from '@/components/Primitives/Divider'

type ExperienceProps = {
  translation: ExperienceTranslation
}

export default function Experiences({ translation }: ExperienceProps) {
  const data: ExperienceData[] = [
    {
      id: 'central-info-itatiba-aprendice',
      info: translation.jobs[0],
      date_start: '2016-04-01T13:00:00.000Z',
      date_end: '2017-12-01T13:00:00.000Z',
      link: 'https://centralinformaticaitatiba.com.br',
      img_showcase: [
        {
          img: 'https://user-images.githubusercontent.com/62115215/232231991-fb6ba65d-0c87-4367-852c-c365ec9d7417.png',
          title: 'Logo Central Informática Itatiba',
          alt: 'Logo Central Informática Itatiba',
          height: 97,
          width: 300
        }
      ],
      logo: 'https://user-images.githubusercontent.com/62115215/230795839-b7968d0a-11f0-4a09-8cb2-094b1ee6e7c7.png'
    },
    {
      id: 'central-info-itatiba',
      info: translation.jobs[1],
      date_start: '2020-01-01T13:00:00.000Z',
      date_end: '2021-06-01T13:00:00.000Z',
      link: 'https://centralinformaticaitatiba.com.br',
      img_showcase: [
        {
          img: 'https://user-images.githubusercontent.com/62115215/232231991-fb6ba65d-0c87-4367-852c-c365ec9d7417.png',
          title: 'Logo Central Informática Itatiba',
          alt: 'Logo Central Informática Itatiba',
          height: 97,
          width: 300
        }
      ],
      logo: 'https://user-images.githubusercontent.com/62115215/230795839-b7968d0a-11f0-4a09-8cb2-094b1ee6e7c7.png'
    },
    {
      id: 'sports-at-aprendice',
      info: translation.jobs[2],
      date_start: '2021-06-10T13:00:00.000Z',
      date_end: '2022-04-01T13:00:00.000Z',
      link: 'https://www.playscores.com',
      img_showcase: [
        {
          img: 'https://user-images.githubusercontent.com/62115215/233807949-48e73e65-e299-4638-be99-24b19b0e747e.png',
          title: 'Logo Sports AT',
          alt: 'Logo Sports AT',
          height: 59,
          width: 211
        },
        {
          img: 'https://user-images.githubusercontent.com/62115215/233807950-bf77901c-a0bc-442b-999d-d76a9392dae1.png',
          title: 'Logo Playscores',
          alt: 'Logo Playscores',
          height: 56,
          width: 138
        }
      ],
      logo: 'https://user-images.githubusercontent.com/62115215/230795837-01b25a2a-6a2b-4923-b966-46544d517df3.png'
    },
    {
      id: 'sports-at',
      info: translation.jobs[3],
      date_start: '2022-04-01T13:00:00.000Z',
      date_end: 'present_day',
      link: 'https://www.playscores.com',
      img_showcase: [
        {
          img: 'https://user-images.githubusercontent.com/62115215/233807949-48e73e65-e299-4638-be99-24b19b0e747e.png',
          title: 'Logo Sports AT',
          alt: 'Logo Sports AT',
          height: 59,
          width: 211
        },
        {
          img: 'https://user-images.githubusercontent.com/62115215/233807950-bf77901c-a0bc-442b-999d-d76a9392dae1.png',
          title: 'Logo Playscores',
          alt: 'Logo Playscores',
          height: 56,
          width: 138
        }
      ],
      logo: 'https://user-images.githubusercontent.com/62115215/230795837-01b25a2a-6a2b-4923-b966-46544d517df3.png'
    }
  ]

  const [dialog, setDialog] = useState<ExperienceData | null>(null)

  return (
    <div className="flex flex-col gap-5">
      {data.map((experience, index) => (
        <div key={experience.id}>
          <ExperienceFragment setDialog={setDialog} experience={experience} />
          {index !== data.length && <Divider dataOrientation="horizontal" />}
        </div>
      ))}

      <ResponsiveDialog state={dialog} setState={setDialog}>
        <DialogExperience
          data={dialog}
          setState={setDialog}
          dialogTranslation={translation.dialog}
        />
      </ResponsiveDialog>
    </div>
  )
}
