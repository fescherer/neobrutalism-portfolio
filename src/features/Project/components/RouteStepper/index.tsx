'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CaretRight } from 'phosphor-react'

export default function RouteStepper() {
  const pathName = usePathname()
  const routes = pathName.substring(4).split('/')

  return (
    <div className="flex gap-3">
      {routes.map((element, index) => (
        <p
          key={`${element}-${index}`}
          className="mb-2 flex items-center gap-3 uppercase opacity-70"
        >
          <Link
            href={''}
            className="btn-base opacity-100 hover:text-primary-dark"
          >
            {element}
          </Link>

          {index + 1 < routes.length && <CaretRight size={16} />}
        </p>
      ))}
    </div>
  )
}
