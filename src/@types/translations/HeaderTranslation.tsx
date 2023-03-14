export type HeaderTranslation = {
  title: string
  menu: {
    'aria-button': string
    'sr-button': string
    snippets: string
    aboutme: string
    projects: string
  }
  theme: ThemeButtonTranslation
  lang: LangTranslation
}

export type ThemeButtonTranslation = {
  'aria-button-light': string
  'aria-button-dark': string
}

export type LangTranslation = {
  en: string
  pt: string
}
