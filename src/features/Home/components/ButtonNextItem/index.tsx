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
        className="hover:scale-110 transition-all opacity-60 m-4"
        aria-label={aria}
      >
        <ArrowCircleUp size={32} weight="light" />
      </a>
    )

  return (
    <a
      href={`#${nextItem}`}
      className="hover:scale-110 transition-all opacity-60 m-4"
      aria-label={aria}
    >
      <ArrowCircleDown size={32} weight="light" />
    </a>
  )
}
