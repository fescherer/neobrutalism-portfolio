'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Home from '@/features/Home'

export default function Index() {
  return (
    <main className="text-primary grid grid-rows-[auto,_1fr,auto] min-h-screen bg-background">
      <Header />
      <Home />
      <Footer />
    </main>
  )
}
