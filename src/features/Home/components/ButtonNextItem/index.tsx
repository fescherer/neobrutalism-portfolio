'use client'

import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

type ButtonNextItemProps = {
  nextItem: string
  aria: string
}

export default function ButtonNextItem({
  nextItem,
  aria
}: ButtonNextItemProps) {
  if (nextItem === 'last')
    return (
      <a
        href={`#init`}
        className="m-4 opacity-60 transition-all hover:scale-110"
        aria-label={aria}
      >
        <ArrowCircleUp size={32} weight="light" />
      </a>
    )

  return (
    <a
      href={`#${nextItem}`}
      className="m-4 opacity-60 transition-all hover:scale-110"
      aria-label={aria}
    >
      <ArrowCircleDown size={32} weight="light" />
    </a>
  )
}
