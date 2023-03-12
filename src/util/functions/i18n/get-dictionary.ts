import 'server-only'
import type { Locale } from './i18n-config'

const dictionaries = {
  pt: () => import('../../../i18n/pt.json').then((module) => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
