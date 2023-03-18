'use client'

import Link from 'next/link'
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
    <Link
      href={`#${nextItem}`}
      scroll={true}
      className="hover:scale-110 transition-all opacity-60"
      aria-label={aria}
    >
      <ArrowCircleDown size={32} weight="light" />
    </Link>
  )
}
