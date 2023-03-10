'use client'

import { ArrowCircleDown } from 'phosphor-react'

type ButtonNextItemProps = {
  nextItem: string
}

export default function ButtonNextItem({ nextItem }: ButtonNextItemProps) {
  function handleNextItem() {
    console.log(nextItem)
  }

  return (
    <button
      className="hover:scale-110 transition-all opacity-60"
      onClick={handleNextItem}
    >
      <ArrowCircleDown size={32} weight="light" />
    </button>
  )
}
