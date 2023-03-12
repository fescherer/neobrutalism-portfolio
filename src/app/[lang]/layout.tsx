'use client'
/* eslint-disable @next/next/no-page-custom-font */

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { i18n } from '@/util/functions/i18n/i18n-config'
import Script from 'next/script'
import './globals.css'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>

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
