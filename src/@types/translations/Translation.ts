import { HeaderTranslation } from './header'

export type Translation = {
  head: HeadTranslation
  header: HeaderTranslation
  project: ProjectTranslation
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
