'use client'

import { HeaderTranslation } from '@/@types/translations/HeaderTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu } from '../Menu'

type HeaderProps = {
  translate: HeaderTranslation
}

export default function MobileMenu({ translate }: HeaderProps) {
  const [isHidden, setIsHidden] = useState(false)

  function handleIsHidden() {
    setIsHidden((prev) => !prev)
  }

  return (
    <nav className="group select-none">
      <button className="hover:scale-110 transition-all">
        <label
          className="group cursor-pointer text-base"
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
        />
      </button>
      {isHidden ? (
        <>
          <button
            className="absolute top-0 left-0 z-50 h-full w-full bg-overlay select-none"
            onClick={handleIsHidden}
          />
          <div className="absolute top-0 left-0 z-50 h-full w-[35vw] animate-grow overflow-hidden bg-background-accent">
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

            <Menu translate={translate} />
          </div>
        </>
      ) : (
        <></>
      )}
    </nav>
  )
}
