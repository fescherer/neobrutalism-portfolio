'use client'

import Slider from '@/components/Slider'
import GithubIcon from '@/Icons/Github'
import { projects } from '@/util/Projects'
import * as Separator from '@radix-ui/react-separator'
import Link from 'next/link'

const project = projects[0]

const images = [
  'https://user-images.githubusercontent.com/62115215/222925034-ae62b1bb-2c23-41d7-9acf-6ac36ab7bb19.png',
  'https://user-images.githubusercontent.com/62115215/222925050-937c853c-200a-48b3-95fd-9f55b0c03858.png',
  'https://user-images.githubusercontent.com/62115215/222925081-30c890d3-d2db-4ea3-9875-f6c9f1c09467.png',
  'https://user-images.githubusercontent.com/62115215/222925096-94945fd0-5fa5-4928-a5a8-fc33773e60cb.png'
]

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

      <div className="h-[780px] w-full drop-shadow-neo-5-foreground bg-background border-2 border-foreground rounded">
        <div></div>
      </div>

      <Slider></Slider>

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
