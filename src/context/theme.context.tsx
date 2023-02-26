import { appConfig } from '@/util/config'
import { useEffect, createContext, useState, useContext } from 'react'

enum ThemeType {
  light = 'light',
  dark = 'dark'
}

type ThemeContextType = {
  theme: ThemeType
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeType.light,
  toggleTheme: () => undefined
})

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.light)

  const loadTheme = async () => {
    if (typeof window !== 'undefined') {
      const storagedTheme = window.localStorage.getItem(
        `${appConfig.appName}:theme`
      )

      if (storagedTheme) {
        setTheme(ThemeType[storagedTheme as ThemeType])
      } else {
        window.localStorage.setItem(
          `${appConfig.appName}:theme`,
          ThemeType.light
        )
      }
    }
  }

  useEffect(() => {
    loadTheme()
  }, [])

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      let selectedTheme

      if (theme === ThemeType.light) {
        selectedTheme = ThemeType.dark
      } else {
        selectedTheme = ThemeType.light
      }

      setTheme(selectedTheme)
      window.localStorage.setItem(`${appConfig.appName}:theme`, selectedTheme)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
