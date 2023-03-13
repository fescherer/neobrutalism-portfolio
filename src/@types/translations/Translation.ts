import { HeaderTranslation } from './header'
import { HomeTranslation } from './HomeTranslation'

export type Translation = {
  head: HeadTranslation
  header: HeaderTranslation
  project: ProjectTranslation
  home: HomeTranslation
}

export type HeadTranslation = {
  title: string
}

export type ProjectTranslation = {
  type: TypeTranslation
}

export type TypeTranslation = {
  college: string
  draw: string
}
