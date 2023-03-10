'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Script from 'next/script'
import './globals.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />

      <body className="font-sans text-primary min-h-screen bg-background selection:bg-[#DA858C]">
        <Header></Header>
        <main className="min-h-[calc(100vh-170px)]">{children}</main>
        <Footer></Footer>
      </body>
      <Script id="theme-script-load">
        {`
        if (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme:dark)').matches)
        {
          document.documentElement.setAttribute("data-theme", "dark")
        }
        else {
          document.documentElement.setAttribute("data-theme", "light")
        }
  `}
      </Script>
    </html>
  )
}
