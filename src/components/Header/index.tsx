import { HeaderTranslation } from '@/@types/translations/HeaderTranslation'
import FSLogo from '@/Icons/FSLogo'
import Link from 'next/link'
import { Menu } from './Menu'
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
          <Menu translate={translate} />
        </div>
      </div>
    </nav>
  )
}
