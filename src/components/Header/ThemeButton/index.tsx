'use client'

import { ThemeButtonTranslation } from '@/@types/translations/HeaderTranslation'
import { SunDim, Moon } from 'phosphor-react'
import { useEffect, useState } from 'react'

type ThemeButtonProps = {
  translation: ThemeButtonTranslation
}

export default function ThemeButton({ translation }: ThemeButtonProps) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    setTheme(
      window.matchMedia('(prefers-color-scheme:dark)').matches
        ? 'dark'
        : 'light'
    )
  }, [])

  function handleTheme() {
    window.document.documentElement.setAttribute(
      'data-theme',
      theme === 'light' ? 'dark' : 'light'
    )
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      {theme === 'light' ? (
        <button
          onClick={handleTheme}
          aria-label={translation.aria_button_light}
        >
          <Moon size={15} weight="fill" />
        </button>
      ) : (
        <button
          onClick={handleTheme}
          aria-label={translation.aria_button_dark}
        >
          <SunDim size={15} weight="fill" />
        </button>
      )}
    </>
  )
}
