'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header></Header>
      <h1>hello world!</h1>
    </main>
  )
}
