'use client'

import { useState } from 'react'

export default function ThemeButton() {
  const [theme, setTheme] = useState('light')

  function handleTheme() {
    console.log('theme')
    window.document.documentElement.setAttribute(
      'data-theme',
      theme === 'light' ? 'dark' : 'light'
    )
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div>
      <button
        className="border border-zinc-800 hover:bg-slate-300"
        onClick={handleTheme}
      >
        Change Theme
      </button>
    </div>
  )
}
