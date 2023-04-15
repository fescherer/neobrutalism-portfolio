export type HeaderTranslation = {
  title: string
  menu: {
    aria_button: string
    sr_button: string
    snippets: string
    aboutme: string
    projects: string
  }
  theme: ThemeButtonTranslation
  lang: LangTranslation
}

export type ThemeButtonTranslation = {
  aria_button_light: string
  aria_button_dark: string
}

export type LangTranslation = {
  en: string
  pt: string
}
