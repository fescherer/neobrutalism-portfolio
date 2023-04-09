import { HeaderTranslation } from './HeaderTranslation'
import { HomeTranslation } from './HomeTranslation'
import { ProjectTranslation } from './ProjectTranslation'

export type Translation = {
  head: HeadTranslation
  header: HeaderTranslation
  project: ProjectTranslation
  home: HomeTranslation
  default: DefaultTranslation
}

export type DefaultTranslation = {
  author: string
}

export type HeadTranslation = {
  title: string
}

export type QuoteTranslation = {
  quote_block: string
  author: string
}
