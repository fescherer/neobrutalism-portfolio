'use client'

import { ExperienceTranslation } from '@/@types/translations/AboutTranslation'
import { ExperienceData } from '@/@types/About'
import ExperienceFragment from './ExperienceFragment'
import { useState } from 'react'
import DialogExperience from './DialogExperience'
import ResponsiveDialog from '@/components/ResponsiveDialog'

type ExperienceProps = {
  translation: ExperienceTranslation
}

export default function Experiences({ translation }: ExperienceProps) {
  const data: ExperienceData[] = [
    {
      id: 'central-info-itatiba-aprendice',
      info: translation.central_informatica_aprendice,
      date_start: '2016-04-01T13:00:00.000Z',
      date_end: '2016-04-01T13:00:00.000Z',
      img: 'https://user-images.githubusercontent.com/62115215/230795839-b7968d0a-11f0-4a09-8cb2-094b1ee6e7c7.png',
      img_desc: ''
    },
    {
      id: 'central-info-itatiba',
      info: translation.central_informatica,
      date_start: '2016-04-01T13:00:00.000Z',
      date_end: '2016-04-01T13:00:00.000Z',
      img: 'https://user-images.githubusercontent.com/62115215/230795839-b7968d0a-11f0-4a09-8cb2-094b1ee6e7c7.png',
      img_desc: ''
    },
    {
      id: 'sports-at-aprendice',
      info: translation.playscores_aprendice,
      date_start: '2023-03-10T17:31:38.778Z',
      date_end: '2023-03-10T17:31:38.778Z',
      img: 'https://user-images.githubusercontent.com/62115215/230795837-01b25a2a-6a2b-4923-b966-46544d517df3.png',
      img_desc: ''
    },
    {
      id: 'sports-at',
      info: translation.playscores,
      date_start: '2023-03-10T17:31:38.778Z',
      date_end: '2023-03-10T17:31:38.778Z',
      img: 'https://user-images.githubusercontent.com/62115215/230795837-01b25a2a-6a2b-4923-b966-46544d517df3.png',
      img_desc: ''
    }
  ]

  const [dialog, setDialog] = useState<ExperienceData | null>(null)

  return (
    <div className="flex flex-col gap-5">
      {data.map((experience) => (
        <ExperienceFragment
          key={experience.id}
          setDialog={setDialog}
          experience={experience}
        ></ExperienceFragment>
      ))}

      <ResponsiveDialog state={dialog} setState={setDialog}>
        <DialogExperience data={dialog} setState={setDialog} />
      </ResponsiveDialog>
    </div>
  )
}
