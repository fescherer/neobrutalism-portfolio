import { HeaderTranslation } from '@/@types/translations/HeaderTranslation'
import FSLogo from '@/Icons/FSLogo'
import Link from 'next/link'
import LangSelector from './LangSelector'
import MobileMenu from './MobileMenu'
import ThemeButton from './ThemeButton'

type HeaderProps = {
  translate: HeaderTranslation
}

export default function Header({ translate }: HeaderProps) {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-2 max-w-project m-auto pb-10 font-bold">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <h1 className="text-title">
          <Link href="/">
            <FSLogo />
          </Link>
        </h1>

        <div
          data-collapse-toggle="navbar-default"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          aria-label={translate.menu.aria_button}
        >
          <span className="sr-only">{translate.menu.sr_button}</span>
          {/* <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg> */}
          <MobileMenu translate={translate} />
        </div>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:text-2xl">
            <li>{translate.menu.snippets}</li>
            <li>
              <Link href="/projects">{translate.menu.projects}</Link>
            </li>
            <li>
              <Link href="/about">{translate.menu.aboutme}</Link>
            </li>

            <li>
              <ThemeButton translation={translate.theme} />
            </li>
            <LangSelector translate={translate.lang} />
          </ul>
        </div>
      </div>
    </nav>
  )
}
