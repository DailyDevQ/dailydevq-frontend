import { SiteHeader } from "@/components/site-header"
import { FAQ } from "@/components/faq"

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <section className="text-white py-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          <FAQ />
        </div>
      </section>

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
    </>
  )
}
