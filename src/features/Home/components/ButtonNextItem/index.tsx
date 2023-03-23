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
