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
    "매일 오전 7시, 기술로 일하는 사람들을 위한 Tech Letter. CS 기초부터 DevOps, Cloud, AI/ML까지 실무 노하우를 5분 안에 배우세요.",
  keywords: ["기술 뉴스레터", "개발자", "프로그래밍", "DevOps", "Cloud", "AI", "무료 구독"],
  authors: [{ name: "DailyDevQ" }],
  creator: "DailyDevQ",
  publisher: "DailyDevQ",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://dailydevq.com",
    title: "DailyDevQ | 매일 오전 7시, 실무 핵심만 전합니다",
    description: "매일 오전 7시, 기술로 일하는 사람들을 위한 Tech Letter. CS 기초부터 DevOps, Cloud, AI/ML까지 실무 노하우를 5분 안에 배우세요.",
    siteName: "DailyDevQ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DailyDevQ - 매일 오전 7시, 기술로 일하는 사람들을 위한 Tech Letter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyDevQ | 매일 오전 7시, 실무 핵심만 전합니다",
    description: "매일 오전 7시, 기술로 일하는 사람들을 위한 Tech Letter",
    images: ["/og-image.png"],
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

        {/* Dynamic Favicon Script */}
        <Script id="dynamic-favicon" strategy="beforeInteractive">
          {`
            function updateFavicon() {
              const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const faviconHref = darkMode ? '/icons/skitbit-white.svg' : '/icons/favicon-dark.svg';
              let link = document.querySelector("link[rel~='icon']");
              if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.getElementsByTagName('head')[0].appendChild(link);
              }
              link.href = faviconHref;
            }
            updateFavicon();
            // Listen for changes in theme
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
          `}
        </Script>

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
      <body>
        <div className="fixed inset-0 z-0 bg-gray-900">
          <Plasma
            color="#000000"
            speed={0.8}
            direction="forward"
            scale={1.5}
            opacity={0.4}
            mouseInteractive={true}
          />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
