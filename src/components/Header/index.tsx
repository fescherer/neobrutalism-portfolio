import { HeaderTranslation } from '@/@types/translations/HeaderTranslation'
import FSLogo from '@/Icons/FSLogo'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

type HeaderProps = {
  translate: HeaderTranslation
}

export default function Header({ translate }: HeaderProps) {
  return (
    <nav
      id="init"
      className="m-auto flex w-full max-w-project items-center justify-between px-4 py-2 pb-10 font-bold"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <h1 className="text-title">
          <Link href="/">
            <FSLogo />
          </Link>
        </h1>

        <div
          data-collapse-toggle="navbar-default"
          className="text-gray-500 ml-3 inline-flex items-center rounded-lg p-2 text-sm md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          aria-label={translate.menu.aria_button}
        >
          <span className="sr-only">{translate.menu.sr_button}</span>

          <MobileMenu translate={translate} />
        </div>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 md:mt-0 md:flex-row md:space-x-8 md:text-2xl">
            <li>
              <Link href="/projects">{translate.menu.projects}</Link>
            </li>
            <li>
              <Link href="/about">{translate.menu.aboutme}</Link>
            </li>

            {/* <li>
              <ThemeButton translation={translate.theme} />
            </li>
            <LangSelector translate={translate.lang} /> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
