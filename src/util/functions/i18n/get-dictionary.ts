import 'server-only'
import type { Locale } from './i18n-config'

const dictionariesHeader = {
  pt: () =>
    import('../../../i18n/pt/header.json').then((module) => module.default)
}

const dictionariesHome = {
  pt: () =>
    import('../../../i18n/pt/home.json').then((module) => module.default)
}

const dictionariesDefault = {
  pt: () =>
    import('../../../i18n/pt/default.json').then((module) => module.default)
}

const dictionariesHead = {
  pt: () =>
    import('../../../i18n/pt/head.json').then((module) => module.default)
}

const dictionariesProject = {
  pt: () =>
    import('../../../i18n/pt/project.json').then((module) => module.default)
}

export const getDictionaryHeader = async (locale: Locale) =>
  dictionariesHeader[locale]()

export const getDictionaryHome = async (locale: Locale) =>
  dictionariesHome[locale]()

export const getDictionaryDefault = async (locale: Locale) =>
  dictionariesDefault[locale]()

export const getDictionaryHead = async (locale: Locale) =>
  dictionariesHead[locale]()

export const getDictionaryProject = async (locale: Locale) =>
  dictionariesProject[locale]()
