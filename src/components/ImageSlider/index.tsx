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
    <div className="h-[200px] md:h-[600px] transition-all w-full drop-shadow-neo-5-foreground relative bg-background border-2 border-foreground rounded">
      <div className="top-1/2 w-full flex justify-between absolute -translate-y-[50%] px-3">
        <button
          className="btn-base hover:opacity-100 opacity-60"
          onClick={() => handleImageIndex('decrease')}
        >
          <ArrowCircleLeft size={32} weight="fill" />
        </button>
        <button
          className="btn-base hover:opacity-100 opacity-60"
          onClick={() => handleImageIndex('increase')}
        >
          <ArrowCircleRight size={32} weight="fill" />
        </button>
      </div>

      <div className="flex flex-wrap justify-center w-full gap-3 absolute bottom-5">
        {slides.map((image, index) => (
          <button
            key={image}
            onClick={() => handleImageIndex('equal', index)}
            className={`${
              imageIndex === index
                ? 'w-[20px] opacity-100'
                : 'w-[15px] opacity-60'
            } h-[15px] bg-primary  rounded-full cursor-pointer hover:opacity-100 transition-all`}
          ></button>
        ))}
      </div>

      <div
        style={{ backgroundImage: `url(${slides[imageIndex]})` }}
        className="bg-primary-dark h-full bg-contain bg-no-repeat duration-500 bg-center"
      ></div>
    </div>
  )
}
