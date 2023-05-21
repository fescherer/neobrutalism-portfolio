'use client'

import GithubIcon from '@/Icons/Github'
import { appConfig } from '@/util/config'
import Link from 'next/link'
import { Copyright, LinkedinLogo, YoutubeLogo } from 'phosphor-react'

const date = new Date()
const currentYear = date.getFullYear()

const items = [
  { icon: <GithubIcon />, url: 'https://github.com/ofelipescherer' },
  {
    icon: <LinkedinLogo size={30} weight="fill" />,
    url: 'https://www.linkedin.com/in/ofelipescherer/'
  },
  {
    icon: <YoutubeLogo size={30} weight="fill" />,
    url: 'https://github.com/ofelipescherer'
  }
]

export default function Footer() {
  return (
    <footer className="flex flex-col items-center p-5">
      <div className="flex flex-wrap justify-center gap-2 opacity-80">
        <div className="flex gap-2">
          <div className="flex items-center">
            <span>Copyright</span>
            <Copyright size={12} weight="light" />
          </div>
          <span>{`2023 - ${currentYear}`}</span>
        </div>

        <span>{` ${appConfig.githubName} | ${appConfig.name}`}</span>
      </div>

      <div className=" flex gap-1">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            target="_blank"
            className="opacity-30 hover:scale-110 transition-all hover:opacity-100"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </footer>
  )
}
