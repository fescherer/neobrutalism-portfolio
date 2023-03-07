'use client'

import ImageSlider from '@/components/ImageSlider'
import GithubIcon from '@/Icons/Github'
import { projects } from '@/util/Projects'
import * as Separator from '@radix-ui/react-separator'
import Link from 'next/link'

const project = projects[0]

export default function Project() {
  return (
    <div className="flex flex-col items-start gap-5 w-full px-4 py-2 max-w-[1000px] m-auto font-bold">
      <div className="flex flex-col  w-full items-start">
        <p className="opacity-70 mb-2">Home - Projects - Project 1</p>
        <p className="uppercase drop-shadow-neo-2 bg-background border border-primary-dark rounded p-0.5 text-base">
          College Project
        </p>

        <div className="flex justify-between text-5xl uppercase w-full items-center">
          <h1>{project.title}</h1>
          <Link href={''} className="hover:scale-105">
            <GithubIcon />
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        <p className="opacity-70">January, 2023</p>
        <div className="flex flex-wrap gap-5 items-center">
          {project.tags.map((tag) => (
            <div
              key={tag}
              className="border border-primary-dark border-1 drop-shadow-neo-1 uppercase bg-foreground px-3 text-xs rounded-sm"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <p className="opacity-70 text-base">
        Sed sit amet ipsum eu orci placerat blandit ac efficitur neque. Praesent
        nec auctor odio. Suspendisse in ipsum lorem. Nulla auctor elit non risus
        pretium facilisis. Proin eleifend rhoncus nisi, ut Nulla auctor elit non
        risus pretium
      </p>

      <Separator.Root className="bg-primary h-0.063 w-full my-3 opacity-70" />

      <ImageSlider></ImageSlider>
      <p>
        Sed sit amet ipsum eu orci placerat blandit ac efficitur neque. Praesent
        nec auctor odio. Suspendisse in ipsum lorem. Nulla auctor elit non risus
        pretium facilisis. Proin eleifend rhoncus nisi, ut Nulla auctor elit non
        risus pretium Sed sit amet ipsum eu orci placerat blandit ac efficitur
        neque. Praesent nec auctor odio. Suspendisse in ipsum lorem. Nulla
        auctor elit non risus pretium facilisis. Proin eleifend rhoncus nisi, ut
        Nulla auctor elit non risus pretium Sed sit amet ipsum eu orci placerat
        blandit ac efficitur neque. Praesent nec auctor odio. Suspendisse in
        ipsum lorem. Nulla auctor elit non risus pretium facilisis. Proin
        eleifend rhoncus nisi, ut Nulla auctor elit non risus pretium Sed sit
        amet ipsum eu orci placerat blandit ac efficitur neque. Praesent nec
        auctor odio. Suspendisse in ipsum lorem. Nulla auctor elit non risus
        pretium facilisis. Proin eleifend rhoncus nisi, ut Nulla auctor elit non
        risus pretium Sed sit amet ipsum eu orci placerat blandit ac efficitur
        neque. Praesent nec auctor odio. Suspendisse in ipsum lorem. Nulla
        auctor elit non risus pretium facilisis. Proin eleifend rhoncus nisi, ut
        Nulla auctor elit non risus pretium Sed sit amet ipsum eu orci placerat
        blandit ac efficitur neque. Praesent nec auctor odio. Suspendisse in
        ipsum lorem. Nulla auctor elit non risus pretium facilisis. Proin
        eleifend rhoncus nisi, ut Nulla auctor elit non risus pretium
      </p>
    </div>
  )
}
