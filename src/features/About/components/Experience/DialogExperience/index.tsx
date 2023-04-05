import { ExperienceData } from '@/@types/About'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import React, { Dispatch, SetStateAction } from 'react'

type DialogExperienceProps = {
  data: ExperienceData | null
  setState: Dispatch<SetStateAction<ExperienceData | null>>
}

export default function DialogExperience({
  data,
  setState
}: DialogExperienceProps) {
  if (!data) return <></>

  return (
    <Dialog.Content className="fixed top-1/2  right-1/2 w-[98%] bg-background sm:w-[80%] h-[80%] translate-x-1/2 -translate-y-1/2">
      <div className="">
        <div className="flex justify-between p-3 bg-background-accent">
          <h2 className="text-2xl font-bold uppercase">{data?.info.title}</h2>
          <Dialog.Close onClick={() => setState(null)}>
            <X size={24} />
          </Dialog.Close>
        </div>

        <Image
          src={data?.img_desc || ''}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          alt="Company Image"
        />

        <div className="p-3 text-justify">{data?.info.desc}</div>
      </div>
    </Dialog.Content>
  )
}
