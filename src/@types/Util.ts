import { Locale } from '@/util/functions/i18n/i18n-config'

export type Icon = {
  color?: string
  fill?: boolean
}

export type Children = {
  children: React.ReactNode
}

export type ProjectCardType = {
  id: number
  title: string
  tags: string[]
  url: string
  date: string
  description: string
}

export type ParamsLang = {
  lang: Locale
}
