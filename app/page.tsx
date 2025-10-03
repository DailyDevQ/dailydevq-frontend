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

      <footer className="border-t border-gray-800 py-12 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-sm text-gray-400 mb-4">
            © 2025 DailyDevQ. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            매일 아침 9시, 개발자를 위한 Tech 캡슐
          </p>
        </div>
      </footer>
    </main>
  )
}
