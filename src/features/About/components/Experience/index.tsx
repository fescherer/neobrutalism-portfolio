'use client'

import { ExperienceTranslation } from '@/@types/translations/AboutTranslation'
import { ExperienceData } from '@/@types/About'
import ExperienceFragment from './ExperienceFragment'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import DialogExperience from './DialogExperience'

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

  const [dialog, setDialog] = useState<string>('')

  return (
    <div className="flex flex-col gap-5">
      {data.map((experience) => (
        <ExperienceFragment
          dialog={dialog}
          setDialog={setDialog}
          experience={experience}
        ></ExperienceFragment>
      ))}

      <Dialog.Root open={!!dialog}>
        <Dialog.Trigger></Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay onClick={() => setDialog('')} />
          <Dialog.Content className="bg-primary w-16 h-16 top-0 bottom-0">
            <Dialog.Title>AAAAAAAAAAAAA</Dialog.Title>
            <Dialog.Description />
            <Dialog.Close />
            <DialogExperience />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

