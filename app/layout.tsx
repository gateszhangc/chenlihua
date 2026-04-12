import type { Metadata } from "next"
import Script from "next/script"
import { Cinzel, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google"

import { siteConfig } from "@/lib/site"

import "./globals.css"

const notoSans = Noto_Sans_SC({
  variable: "--font-sans-cn",
  display: "swap",
  subsets: ["latin"],
})

const notoSerif = Noto_Serif_SC({
  variable: "--font-serif-cn",
  display: "swap",
  subsets: ["latin"],
})

const cinzel = Cinzel({
  variable: "--font-display",
  display: "swap",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  applicationName: siteConfig.name,
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.domain,
  },
  keywords: [...siteConfig.keywords],
  ...(siteConfig.googleSiteVerification
    ? {
        verification: {
          google: siteConfig.googleSiteVerification,
        },
      }
    : {}),
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: siteConfig.domain,
    images: [
      {
        url: siteConfig.heroImageUrl,
        width: 1400,
        height: 1800,
        alt: "陈丽华最新消息站点主视觉海报",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.heroImageUrl],
  },
}

function ClarityScript() {
  if (!siteConfig.clarityProjectId) {
    return null
  }

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${siteConfig.clarityProjectId}");`,
      }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSans.variable} ${notoSerif.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="site-shell min-h-full flex flex-col">
        <ClarityScript />
        {children}
      </body>
    </html>
  )
}
