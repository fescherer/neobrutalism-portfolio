'use client'

import { ArrowCircleDown } from 'phosphor-react'

type ButtonNextItemProps = {
  nextItem: string
  aria: string
}

export default function ButtonNextItem({
  nextItem,
  aria
}: ButtonNextItemProps) {
  function handleNextItem() {
    console.log(nextItem)
  }

  return (
    <button
      className="hover:scale-110 transition-all opacity-60"
      onClick={handleNextItem}
      aria-label={aria}
    >
      <ArrowCircleDown size={32} weight="light" />
    </button>
  )
}
