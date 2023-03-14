export const i18n = {
  defaultLocale: 'pt',
  locales: ['pt']
} as const

export type Locale = (typeof i18n)['locales'][number]

export const language = [
  'home',
  'default',
  'head',
  'header',
  'project'
] as const

export type Language = (typeof language)[number]
