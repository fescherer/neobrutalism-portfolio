import GithubIcon from '@/Icons/Github'
import { appConfig } from '@/util/config'
import { Copyright, LinkedinLogo, YoutubeLogo } from 'phosphor-react'

const date = new Date()
const currentYear = date.getFullYear()

export default function Footer() {
  return (
    <footer className="flex flex-col items-center m-1">
      <div className="flex gap-2 opacity-80">
        <div className="flex items-center">
          <span>Copyright</span>
          <Copyright size={12} weight="light" />
        </div>
        <span>
          2023 - {currentYear} {appConfig.githubName} | {appConfig.name}
        </span>
      </div>

      <div className="opacity-30 flex gap-1">
        <GithubIcon />
        <LinkedinLogo size={30} weight="fill" />
        <YoutubeLogo size={30} weight="fill" />
      </div>
    </footer>
  )
}
