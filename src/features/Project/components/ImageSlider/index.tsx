'use client'

import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react'
import React from 'react'

type ImageSliderProps = {
  slides: string[]
}

export default function ImageSlider({ slides }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = React.useState(0)

  function handleImageIndex(
    type: 'decrease' | 'increase' | 'equal',
    index = 0
  ) {
    let nextIndex: number
    if (type === 'decrease') {
      if (imageIndex !== 0) nextIndex = imageIndex - 1
      else nextIndex = slides.length - 1
    } else if (type === 'increase') {
      if (imageIndex !== slides.length - 1) nextIndex = imageIndex + 1
      else nextIndex = 0
    } else {
      nextIndex = index
    }
    setImageIndex(nextIndex)
  }

  return (
    <div className="relative h-[200px] w-full rounded border-2 border-foreground bg-background drop-shadow-neo-5-foreground transition-all md:h-[600px]">
      <div className="absolute top-1/2 flex w-full -translate-y-[50%] justify-between px-3">
        <button
          className="btn-base opacity-60 hover:opacity-100"
          onClick={() => handleImageIndex('decrease')}
        >
          <ArrowCircleLeft size={32} weight="fill" />
        </button>
        <button
          className="btn-base opacity-60 hover:opacity-100"
          onClick={() => handleImageIndex('increase')}
        >
          <ArrowCircleRight size={32} weight="fill" />
        </button>
      </div>

      <div className="absolute bottom-5 flex w-full flex-wrap justify-center gap-3">
        {slides.map((image, index) => (
          <button
            key={image}
            onClick={() => handleImageIndex('equal', index)}
            className={`${
              imageIndex === index
                ? 'w-[20px] opacity-100'
                : 'w-[15px] opacity-60'
            } h-[15px] cursor-pointer  rounded-full bg-primary transition-all hover:opacity-100`}
          />
        ))}
      </div>

      <div
        style={{ backgroundImage: `url(${slides[imageIndex]})` }}
        className="h-full bg-primary-dark bg-contain bg-center bg-no-repeat duration-500"
      />
    </div>
  )
}
