import { ExperienceData } from '@/@types/About'
import { DialogExperienceTranslation } from '@/@types/translations/AboutTranslation'
import { Divider } from '@/components/Primitives/Divider'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import React, { Dispatch, SetStateAction } from 'react'
import { DialogExperienceHeaderInfo } from './DialogExperienceHeaderInfo'

type DialogExperienceProps = {
  data: ExperienceData | null
  setState: Dispatch<SetStateAction<ExperienceData | null>>
  dialogTranslation: DialogExperienceTranslation
}

export default function DialogExperience({
  data,
  setState,
  dialogTranslation
}: DialogExperienceProps) {
  if (!data) return <></>

  return (
    <div className="fixed top-1/2 right-1/2 h-[80%] w-[98%] max-w-[50rem] translate-x-1/2 -translate-y-1/2 bg-background sm:w-[80%]">
      <div className="flex h-full flex-col">
        <div className="flex justify-between bg-background-accent p-3">
          <h2 className="text-2xl font-bold uppercase">{data?.info.title}</h2>
          <Dialog.Close onClick={() => setState(null)}>
            <X size={24} />
          </Dialog.Close>
        </div>

        <div className="flex h-full flex-col overflow-scroll p-3 ">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <DialogExperienceHeaderInfo
              dialogTranslation={dialogTranslation}
              data={data}
            />

            <div className="flex flex-col items-center gap-5">
              {data.img_showcase.map((item, index) => (
                <Image
                  key={index}
                  src={item.img || ''}
                  width={item.width}
                  height={item.height}
                  className="self-center"
                  alt={item.alt}
                  title={item.title}
                />
              ))}
            </div>
          </div>

          <Divider dataOrientation="horizontal" />

          {data?.info.desc.map((item: string, index: number) => (
            <div
              key={index}
              className="whitespace-pre-wrap text-justify indent-6"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
