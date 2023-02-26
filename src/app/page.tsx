'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="bg-background text-primary grid grid-rows-[auto,_1fr,auto] min-h-screen">
      <Header />
      <h1 className="font-bold">Logo</h1>
      <Footer />
    </main>
  )
}
