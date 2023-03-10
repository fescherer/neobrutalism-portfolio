'use client'

import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react'
import React from 'react'

const slides = [
  'https://user-images.githubusercontent.com/62115215/222925096-94945fd0-5fa5-4928-a5a8-fc33773e60cb.png',
  'https://user-images.githubusercontent.com/62115215/222925050-937c853c-200a-48b3-95fd-9f55b0c03858.png',
  'https://user-images.githubusercontent.com/62115215/222925034-ae62b1bb-2c23-41d7-9acf-6ac36ab7bb19.png',
  'https://user-images.githubusercontent.com/62115215/222925081-30c890d3-d2db-4ea3-9875-f6c9f1c09467.png',
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80'
]

export default function ImageSlider() {
  const [imageIndex, setImageIndex] = React.useState(0)

  function handleImageIndex(isDecrease = false) {
    let nextIndex: number
    if (isDecrease) {
      if (imageIndex !== 0) nextIndex = imageIndex - 1
      else nextIndex = slides.length
    } else {
      if (imageIndex !== slides.length) nextIndex = imageIndex + 1
      else nextIndex = 0
    }
    setImageIndex(nextIndex)
  }

  return (
    <div className="h-[200px] md:h-[600px] transition-all w-full drop-shadow-neo-5-foreground relative bg-background border-2 border-foreground rounded">
      <div className="top-1/2 w-full flex justify-between absolute -translate-y-[50%] px-3">
        <button
          className="btn-base hover:opacity-100 opacity-60"
          onClick={() => handleImageIndex(true)}
        >
          <ArrowCircleLeft size={32} weight="fill" />
        </button>
        <button
          className="btn-base hover:opacity-100 opacity-60"
          onClick={() => handleImageIndex()}
        >
          <ArrowCircleRight size={32} weight="fill" />
        </button>
      </div>

      <div
        style={{ backgroundImage: `url(${slides[imageIndex]})` }}
        className="transition-[background-image] bg-primary-dark h-full bg-contain bg-no-repeat duration-500 bg-center"
      ></div>
    </div>
  )
}
