import Home from '@/features/Home'
import { getDictionaryHome } from '@/util/functions/i18n/get-dictionary'
import { Locale } from '@/util/functions/i18n/i18n-config'

export default async function Index({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionaryHome(params.lang)

  return <Home translation={dictionary} />
}
