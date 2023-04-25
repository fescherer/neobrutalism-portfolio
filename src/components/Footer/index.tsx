'use client'

import GithubIcon from '@/Icons/Github'
import { appConfig } from '@/util/config'
import { Copyright, LinkedinLogo, YoutubeLogo } from 'phosphor-react'

const date = new Date()
const currentYear = date.getFullYear()

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
        <button className="opacity-30 hover:fill-[#000] hover:opacity-100">
          <GithubIcon />
        </button>
        <button className="opacity-30 hover:bg-[#000] hover:opacity-100">
          <LinkedinLogo size={30} weight="fill" />
        </button>
        <button className="opacity-30 hover:bg-[#000] hover:opacity-100">
          <YoutubeLogo size={30} weight="fill" />
        </button>
      </div>
    </footer>
  )
}
