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
          className="opacity-70 mb-2 flex gap-3 uppercase items-center"
        >
          <Link
            href={''}
            className="hover:text-primary-dark btn-base opacity-100"
          >
            {element}
          </Link>

          {index + 1 < routes.length && <CaretRight size={16} />}
        </p>
      ))}
    </div>
  )
}
