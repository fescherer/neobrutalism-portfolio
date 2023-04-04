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
      id: 'sports-at-aprendice',
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

  const [dialog, setDialog] = useState<string>('')

  console.log(dialog)

  return (
    <div className="flex flex-col gap-5">
      {data.map((experience) => (
        <ExperienceFragment
          key={experience.id}
          dialog={dialog}
          setDialog={setDialog}
          experience={experience}
        ></ExperienceFragment>
      ))}

      <ResponsiveDialog state={dialog} setState={setDialog}>
        <DialogExperience />
      </ResponsiveDialog>
    </div>
  )
}
