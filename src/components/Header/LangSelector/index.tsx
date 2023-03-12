'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/util/functions/i18n/i18n-config'
import * as Popover from '@radix-ui/react-popover'

export default function LangSelector() {
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
        <Popover.Content className="bg-foreground-accent min-w-[50px] p-3 rounded-sm">
          <ul className="flex flex-col items-center gap-3">
            {i18n.locales.map((locale) => {
              return (
                <li key={locale}>
                  <Link href={redirectedPathName(locale)}>{locale}</Link>
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
