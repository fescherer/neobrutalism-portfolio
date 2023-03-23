import { getDictionaryHead } from '@/util/functions/i18n/get-dictionary'
import { Locale } from '@/util/functions/i18n/i18n-config'

export default async function Head({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionaryHead(lang)

  return (
    <>
      <title>{dictionary.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="My portifolio and personal blog" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      <link rel="preconnect" href="https://user-images.githubusercontent.com" />
      <link
        rel="dns-prefetch"
        href="https://user-images.githubusercontent.com"
      />
    </>
  )
}
