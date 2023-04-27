'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/util/functions/i18n/i18n-config'
import * as Popover from '@radix-ui/react-popover'
import { LangTranslation } from '@/@types/translations/HeaderTranslation'

type LangSelectorProps = {
  translate: LangTranslation
}

export default function LangSelector({ translate }: LangSelectorProps) {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <Popover.Root>
      <Popover.Trigger>{pathName.split('/')[1]}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="min-w-[50px] rounded-sm bg-foreground-accent p-3">
          <ul className="flex flex-col items-center gap-3">
            {i18n.locales.map((locale) => {
              return (
                <li key={locale}>
                  <Link href={redirectedPathName(locale)}>
                    {translate[locale]}
                  </Link>
                </li>
              )
            })}
          </ul>

          <Popover.Arrow className="fill-foreground-accent" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
