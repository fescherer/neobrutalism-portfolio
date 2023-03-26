'use client'
import { HeaderTranslation } from '@/@types/translations/HeaderTranslation'
import FSLogo from '@/Icons/FSLogo'
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
    console.log(isHidden)
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
          <div className="absolute top-0 left-0 bg-background-accent h-full z-50 min-w-[35%] animate-grow ">
            <ul className="flex flex-col text-2xl  md:flex-row md:space-x-8 md:mt-0 md:text-2xl">
              <Link href="/" className="mb-6 p-5">
                <FSLogo></FSLogo>
              </Link>

              <li className="px-5 py-2 cursor-pointer ">
                {translate.menu.snippets}
              </li>
              <li className="px-5 py-2 cursor-pointer">
                <Link href="/projects">{translate.menu.projects}</Link>
              </li>
              <li className="px-5 py-2 cursor-pointer">
                <Link href="/about">{translate.menu.aboutme}</Link>
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
