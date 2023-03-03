'use client'
/* eslint-disable @next/next/no-page-custom-font */
import '../globals.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="text-primary min-h-screen bg-background ">
      <Header />
      <div className="min-h-[calc(100vh-170px)]">{children}</div>
      <Footer />
    </main>
  )
}
