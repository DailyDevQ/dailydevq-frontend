import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import Plasma from "@/components/plasma"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "DailyDevQ | 매일 오전 7시, 실무 핵심만 전합니다",
  description:
    "매일 오전 7시, 실무 핵심만 전합니다. Tech Letter.",
  keywords: ["기술 뉴스레터", "개발자", "프로그래밍", "DevOps", "Cloud", "AI", "무료 구독"],
  authors: [{ name: "DailyDevQ" }],
  creator: "DailyDevQ",
  publisher: "DailyDevQ",
  themeColor: "#0B1020",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://dailydevq.com",
    siteName: "DailyDevQ",
    title: "DailyDevQ | 매일 오전 7시, 실무 핵심만 전합니다",
    description: "매일 오전 7시, 실무 핵심만 전합니다. Tech Letter.",
    images: [
      {
        url: "https://dailydevq.com/dedeq_wordmark.svg",
        width: 1600,
        height: 600,
        alt: "DailyDevQ wordmark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyDevQ | 매일 오전 7시, 실무 핵심만 전합니다",
    description: "매일 오전 7시, 실무 핵심만 전합니다. Tech Letter",
    images: ["https://dailydevq.com/dedeq_wordmark.svg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Font Preload */}
        <link
          rel="preload"
          href="/fonts/Inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />

        {/* Favicon */}
        <link rel="icon" href="/icons/dailydevq.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/dailydevq.svg" />

        {/* Confetti */}
        <Script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js" strategy="beforeInteractive" />

        {/* Google Tag Manager (deferred) */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFLHXXGK');`}
        </Script>

        {/* Google Analytics (deferred) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W6LV22900R" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6LV22900R');
          `}
        </Script>
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <div className="site-bg" aria-hidden="true">
          <div className="hidden md:block w-full h-full">
            <Plasma
              color="#000000"
              speed={0.8}
              direction="forward"
              scale={1.5}
              opacity={0.4}
              mouseInteractive={true}
            />
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
