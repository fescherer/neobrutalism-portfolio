import { Children } from '@/@types/Util'
import Link from 'next/link'

interface HomeTitle extends Children {
  href: string
}

export default function HomeTitle({ children, href }: HomeTitle) {
  return (
    <Link
      href={href}
      className="self-start text-5xl font-bold uppercase hover:text-primary-dark hover:scale-110 transition-all"
    >
      <h2>{children}</h2>
    </Link>
  )
}
