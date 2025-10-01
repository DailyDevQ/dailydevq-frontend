import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { CapsuleCard } from "@/components/capsule-card"
import { QuizTeaser } from "@/components/quiz-teaser"
import { ArchivePreview } from "@/components/archive-preview"
import { FAQ } from "@/components/faq"

export const dynamic = "force-static"

export default function Page() {
  return (
    <main className="min-h-screen text-white">
      <SiteHeader />
      <Hero />

      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <CapsuleCard />
      </section>

      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <QuizTeaser />
      </section>

      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <ArchivePreview />
      </section>

      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <FAQ />
      </section>

      <footer className="border-t border-gray-800 py-12 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-sm text-gray-400 mb-4">
            © 2025 DailyDevQ. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            매일 아침 9시, 기술 면접 준비를 위한 캡슐
          </p>
        </div>
      </footer>
    </main>
  )
}
