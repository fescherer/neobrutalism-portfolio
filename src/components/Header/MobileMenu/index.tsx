'use client'

import { HeaderTranslation } from '@/@types/translations/HeaderTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import LangSelector from '../LangSelector'
import ThemeButton from '../ThemeButton'

type HeaderProps = {
  translate: HeaderTranslation
}

export default function MobileMenu({ translate }: HeaderProps) {
  const [isHidden, setIsHidden] = useState(false)

  function handleIsHidden() {
    setIsHidden((prev) => !prev)
  }

  return (
    <nav className="group">
      <label
        className="cursor-pointer text-base group"
        aria-label="Open navigation menu"
        htmlFor="menu-toggle"
      >
        &#9776;
      </label>
      <input
        className="hidden"
        id="menu-toggle"
        type="checkbox"
        onChange={handleIsHidden}
      ></input>
      {isHidden ? (
        <>
          <div
            className="absolute top-0 left-0 bg-overlay h-full w-full z-50"
            onClick={handleIsHidden}
          ></div>
          <div className="absolute top-0 left-0 bg-background-accent h-full z-50 w-[35vw] animate-grow overflow-hidden">
            <ul className="flex flex-col text-2xl  md:flex-row md:space-x-8 md:mt-0 md:text-2xl">
              <Link href="/">
                <figure className="p-4">
                  <Image
                    width={250}
                    height={50}
                    alt=""
                    src="https://user-images.githubusercontent.com/62115215/227785736-a779e491-88c5-450e-a955-758329385d9c.svg"
                  />
                </figure>
              </Link>

              <li className="cursor-pointer flex hover:bg-background">
                <Link href="/" className="flex w-full px-5 py-2">
                  {translate.menu.snippets}
                </Link>
              </li>
              <li className="cursor-pointer flex hover:bg-background">
                <Link href="/projects" className="flex w-full px-5 py-2">
                  {translate.menu.projects}
                </Link>
              </li>
              <li className="cursor-pointer flex hover:bg-background">
                <Link href="/about" className="flex w-full px-5 py-2">
                  {translate.menu.aboutme}
                </Link>
              </li>

              <li className="px-5 py-2 cursor-pointer">
                <ThemeButton translation={translate.theme}></ThemeButton>
              </li>

              <li className="px-5 py-2 cursor-pointer">
                <LangSelector translate={translate.lang} />
              </li>
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
    </nav>
  )
}
