'use client'

import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'

type ImageAspectRatiProps = {
  image: string
}

export default function ImageAspectRatio({ image }: ImageAspectRatiProps) {
  return (
    <AspectRatio.Root ratio={16 / 9}>
      <Image src={image} fill alt="Project image" />
    </AspectRatio.Root>
  )
}
