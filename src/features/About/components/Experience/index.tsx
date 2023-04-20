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
      date_end: '2016-04-01T13:00:00.000Z',
      link: 'https://centralinformaticaitatiba.com.br',
      img_showcase: [
        {
          img: 'https://user-images.githubusercontent.com/62115215/232231991-fb6ba65d-0c87-4367-852c-c365ec9d7417.png',
          title: '',
          alt: '',
          height: 97,
          width: 300
        }
      ],
      logo: 'https://user-images.githubusercontent.com/62115215/230795839-b7968d0a-11f0-4a09-8cb2-094b1ee6e7c7.png'
    },
    {
      id: 'central-info-itatiba',
      info: translation.jobs[1],
      date_start: '2016-04-01T13:00:00.000Z',
      date_end: '2016-04-01T13:00:00.000Z',
      link: 'https://centralinformaticaitatiba.com.br',
      img_showcase: [
        {
          img: 'https://user-images.githubusercontent.com/62115215/232231991-fb6ba65d-0c87-4367-852c-c365ec9d7417.png',
          title: '',
          alt: '',
          height: 97,
          width: 300
        }
      ],
      logo: 'https://user-images.githubusercontent.com/62115215/230795839-b7968d0a-11f0-4a09-8cb2-094b1ee6e7c7.png'
    },
    {
      id: 'sports-at-aprendice',
      info: translation.jobs[2],
      date_start: '2023-03-10T17:31:38.778Z',
      date_end: '2023-03-10T17:31:38.778Z',
      link: 'https://www.playscores.com',
      img_showcase: [
        {
          img: 'https://user-images.githubusercontent.com/62115215/232233087-76e87cd2-2c15-457b-8a85-a09591afac38.png',
          title: '',
          alt: '',
          height: 100,
          width: 150
        },
        {
          img: 'https://user-images.githubusercontent.com/62115215/232231991-fb6ba65d-0c87-4367-852c-c365ec9d7417.png',
          title: '',
          alt: '',
          height: 97,
          width: 300
        }
      ],
      logo: 'https://user-images.githubusercontent.com/62115215/230795837-01b25a2a-6a2b-4923-b966-46544d517df3.png'
    },
    {
      id: 'sports-at',
      info: translation.jobs[3],
      date_start: '2023-03-10T17:31:38.778Z',
      date_end: '2023-03-10T17:31:38.778Z',
      link: 'https://www.playscores.com',
      img_showcase: [
        {
          img: 'https://user-images.githubusercontent.com/62115215/232233087-76e87cd2-2c15-457b-8a85-a09591afac38.png',
          title: '',
          alt: '',
          height: 100,
          width: 150
        },
        {
          img: 'https://user-images.githubusercontent.com/62115215/232231991-fb6ba65d-0c87-4367-852c-c365ec9d7417.png',
          title: '',
          alt: '',
          height: 97,
          width: 300
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
