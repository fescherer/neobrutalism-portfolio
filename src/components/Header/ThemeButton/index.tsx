'use client'

import { SunDim, Moon } from 'phosphor-react'
import { useEffect, useState } from 'react'

export default function ThemeButton() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    setTheme(
      window.matchMedia('(prefers-color-scheme:dark)').matches
        ? 'dark'
        : 'light'
    )
  }, [])

  function handleTheme() {
    console.log('theme')
    window.document.documentElement.setAttribute(
      'data-theme',
      theme === 'light' ? 'dark' : 'light'
    )
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <button onClick={handleTheme}>
      {theme === 'light' ? (
        <SunDim size={32} weight="fill" />
      ) : (
        <Moon size={32} weight="fill" />
      )}
    </button>
  )
}
