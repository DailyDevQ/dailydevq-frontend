import React from "react"
import { SiteHeader } from "@/components/site-header"

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DailyDevQ",
    url: "https://dailydevq.com",
    description:
      "매일 아침 9시, 개발자를 위한 기술 면접 질문과 실무 예시를 제공하는 무료 뉴스레터 서비스",
    sameAs: [
      "https://github.com/dailydevq",
      "https://twitter.com/dailydevq",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <SiteHeader />

      <main className="min-h-screen text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-6 md:px-12 lg:px-20 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              꾸준함이 만드는
              <br />
              <span className="text-lime-300">기술 면접 합격</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              DailyDevQ는 바쁜 개발자를 위한 마이크로 러닝 플랫폼입니다.
              <br />
              매일 아침 5분, 한 가지 개념만 확실하게.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="container mx-auto max-w-5xl">
            <div className="liquid-glass rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-300">우리의 미션</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                면접 준비는 멀리 있지 않습니다. 출근길 지하철, 점심시간, 퇴근 후 침대에서.
                <br />
                하루 단 5분이면 충분합니다.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                우리는 개발자가 부담 없이, 꾸준히 성장할 수 있도록 매일 한 가지 핵심 개념을
                <br />
                3문장 요약, 실무 코드, 1문항 퀵퀴즈로 전달합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center">왜 DailyDevQ인가요?</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "⚡",
                  title: "5분이면 충분",
                  desc: "긴 강의도, 두꺼운 책도 필요 없습니다. 핵심만 빠르게 흡수하세요.",
                },
                {
                  icon: "🎯",
                  title: "실무 중심",
                  desc: "이론만 나열하지 않습니다. 실제 코드와 사용 사례를 함께 제공합니다.",
                },
                {
                  icon: "📅",
                  title: "매일 한 걸음",
                  desc: "365일, 하루도 빠짐없이. 꾸준함이 실력이 됩니다.",
                },
                {
                  icon: "🧠",
                  title: "AI 기반 생성",
                  desc: "최신 기술 트렌드를 반영한 질문을 AI가 매일 생성합니다.",
                },
                {
                  icon: "✅",
                  title: "퀵퀴즈",
                  desc: "배운 내용을 즉시 확인. 단순 암기가 아닌 이해를 목표로 합니다.",
                },
                {
                  icon: "💯",
                  title: "100% 무료",
                  desc: "광고 없이, 영구 무료. 개발자 커뮤니티를 위한 선물입니다.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="liquid-glass p-6 rounded-2xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">우리가 믿는 것</h2>
              <div className="space-y-6 text-left">
                <div className="liquid-glass p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-lime-300 mb-3">
                    1. 작은 습관이 큰 변화를 만든다
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    하루 5분, 365일이면 1,825분. 30시간이 넘는 학습 시간입니다.
                    작지만 꾸준한 투자가 면접 합격의 비결입니다.
                  </p>
                </div>

                <div className="liquid-glass p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-lime-300 mb-3">
                    2. 실무가 가장 좋은 선생님이다
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    이론만 아는 것과 실제로 쓸 수 있는 것은 다릅니다.
                    모든 캡슐에는 실무에서 바로 쓸 수 있는 코드 예시가 포함됩니다.
                  </p>
                </div>

                <div className="liquid-glass p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-lime-300 mb-3">
                    3. 지식은 공유될 때 더 가치있다
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    우리는 개발자 커뮤니티가 함께 성장하기를 바랍니다.
                    그래서 DailyDevQ는 영구 무료입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center px-6">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              오늘부터 시작하세요
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              내일 아침 9시, 첫 번째 Tech 캡슐이 당신의 메일함에 도착합니다.
            </p>
            <a
              href="/"
              className="inline-block bg-lime-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-lime-300 hover:scale-105 transition-all"
            >
              무료로 시작하기
            </a>
          </div>
        </section>

        {/* Footer */}
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
    </>
  )
}
