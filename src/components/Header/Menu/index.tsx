'use client'

import { HeaderTranslation } from '@/@types/translations/HeaderTranslation'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type MenuProps = {
  translate: HeaderTranslation
}

export function Menu({ translate }: MenuProps) {
  const pathname = usePathname()
  const splitPathName = pathname.split('/')

  return (
    <ul className="flex flex-col text-2xl md:mt-0 md:flex-row md:space-x-4 md:text-2xl overflow-hidden whitespace-nowrap">
      {/* <li className="flex cursor-pointer hover:bg-background">
        <Link href="/" className="flex w-full px-5 py-2">
          {translate.menu.snippets}
        </Link>
      </li> */}
      <li
        className={clsx('flex cursor-pointer hover:text-primary-dark', {
          'text-primary-dark': splitPathName?.[2] === 'projects'
        })}
      >
        <Link href="/projects" className="flex w-full px-5 py-2 ">
          {translate.menu.projects}
        </Link>
      </li>
      <li
        className={clsx('flex cursor-pointer hover:text-primary-dark', {
          'text-primary-dark': splitPathName?.[2] === 'about'
        })}
      >
        <Link href="/about" className="flex w-full px-5 py-2">
          {translate.menu.aboutme}
        </Link>
      </li>

      {/* <li className="cursor-pointer px-5 py-2">
        <ThemeButton translation={translate.theme} />
      </li>

      <li className="cursor-pointer px-5 py-2">
        <LangSelector translate={translate.lang} />
      </li> */}
    </ul>
  )
}
