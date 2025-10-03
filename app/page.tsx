import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { DemoVideoSection } from "@/components/demo-video-section"

export const dynamic = "force-static"

export default function Page() {
  return (
    <main className="min-h-screen text-white">
      <SiteHeader />
      <Hero />
      <DemoVideoSection />

      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 DailyDevQ. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
              <a href="/privacy" className="hover:text-lime-300 transition-colors">
                개인정보처리방침
              </a>
              <span className="text-gray-700">|</span>
              <a href="/terms" className="hover:text-lime-300 transition-colors">
                이용약관
              </a>
              <span className="text-gray-700">|</span>
              <a href="/disclaimer" className="hover:text-lime-300 transition-colors">
                면책사항
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
