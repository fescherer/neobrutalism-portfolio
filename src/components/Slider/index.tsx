import { ArrowArcLeft, ArrowArcRight, DotsNine } from 'phosphor-react'
import React, { useState } from 'react'
function Slider() {
  const slides = [
    {
      url: 'https://user-images.githubusercontent.com/62115215/222925096-94945fd0-5fa5-4928-a5a8-fc33773e60cb.png'
    },
    {
      url: 'https://user-images.githubusercontent.com/62115215/222925050-937c853c-200a-48b3-95fd-9f55b0c03858.png'
    },
    {
      url: 'https://user-images.githubusercontent.com/62115215/222925034-ae62b1bb-2c23-41d7-9acf-6ac36ab7bb19.png'
    },

    {
      url: 'https://user-images.githubusercontent.com/62115215/222925081-30c890d3-d2db-4ea3-9875-f6c9f1c09467.png'
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="bg-contain bg-no-repeat bg-primary backdrop-blur-lg w-full h-full rounded-2xl bg-center duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowArcLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowArcRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <DotsNine />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
