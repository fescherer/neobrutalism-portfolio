import About from '@/features/About'
import {
  getDictionaryAbout,
  getDictionaryDefault
} from '@/util/functions/i18n/get-dictionary'
import { Locale } from '@/util/functions/i18n/i18n-config'

type AboutProps = {
  params: { slug: string; lang: Locale }
}

export default async function AboutPage({ params }: AboutProps) {
  const dictionary = await getDictionaryAbout(params.lang)
  const dictionaryDefault = await getDictionaryDefault(params.lang)

  return (
    <About translation={dictionary} translationDefault={dictionaryDefault} />
  )
}
