import Home from '@/features/Home'
import { getDictionary } from '@/util/functions/i18n/get-dictionary'
import { Locale } from '@/util/functions/i18n/i18n-config'

export default async function Index({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <>
      {dictionary['server-component'].welcome}
      <Home />
    </>
  )
}
