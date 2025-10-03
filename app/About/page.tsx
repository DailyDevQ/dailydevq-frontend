"use client"

import React, { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SubscribeDialog } from "@/components/subscribe-dialog"

export default function AboutPage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DailyDevQ",
    url: "https://dailydevq.com",
    description:
      "매일 오전 7시, 여러분들을 위한 기술 면접 질문과 실무 예시를 제공하는 무료 뉴스레터 서비스",
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
              <span className="block">매일 오전 7시,</span>
              <span className="block text-lime-300 mt-4">여러분들이 하루를 여는 시간</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              최신 기술 트렌드부터 실무 노하우까지,
              <br />
              딱 필요한 내용만 골라서 메일함으로 보내드려요.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="container mx-auto max-w-5xl">
            <div className="liquid-glass rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-300">왜 DailyDevQ인가요?</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                기술은 매일 쏟아지는데, 시간은 늘 부족하죠.
                <br />
                출근길 지하철에서, 점심시간에, 잠들기 전 침대에서. 편하게 읽으실 수 있게 준비했어요.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                우리는 여러분들이 부담 없이 꾸준히 성장할 수 있도록
                <br />
                매일 한 가지 핵심 개념을 쉽게 풀어서 보내드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center">DailyDevQ의 특별한 점</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "⚡",
                  title: "딱 5분이면 돼요",
                  desc: "긴 강의나 두꺼운 책 없이도 핵심 내용만 빠르게 배울 수 있어요.",
                },
                {
                  icon: "🎯",
                  title: "실무에 바로 써먹는",
                  desc: "이론만 늘어놓지 않아요. 실제 코드와 사례를 함께 드립니다.",
                },
                {
                  icon: "📅",
                  title: "매일 꾸준하게",
                  desc: "평일 오전 7시, 빠짐없이. 작은 습관이 큰 실력이 돼요.",
                },
                {
                  icon: "🧠",
                  title: "AI가 직접 작성",
                  desc: "최신 기술 트렌드를 반영해 AI가 매일 새로운 내용을 만들어요.",
                },
                {
                  icon: "✅",
                  title: "즉시 확인하는 퀴즈",
                  desc: "읽고 끝이 아니에요. 퀴즈로 제대로 이해했는지 바로 확인해요.",
                },
                {
                  icon: "💯",
                  title: "완전 무료",
                  desc: "광고도 없고, 결제도 없어요. 개인 성장을 위한 선물이에요.",
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
                    1. 작은 습관이 큰 변화를 만들어요
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    하루 5분, 1년이면 30시간이 넘는 학습 시간이에요.
                    작지만 꾸준한 투자가 실력 향상의 비결입니다.
                  </p>
                </div>

                <div className="liquid-glass p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-lime-300 mb-3">
                    2. 실무가 가장 좋은 선생님
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    이론만 아는 것과 실제로 쓸 수 있는 건 다르죠.
                    모든 내용에는 실무에서 바로 써먹을 수 있는 코드 예시가 들어있어요.
                  </p>
                </div>

                <div className="liquid-glass p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-lime-300 mb-3">
                    3. 지식은 나눌 때 더 가치있어요
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    여러분들과 함께 성장하길 바라는 마음으로
                    DailyDevQ는 무료로 운영됩니다.
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
              내일 아침부터 시작해보세요
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              오전 7시, 첫 번째 Tech 캡슐이 메일함에 도착할 거예요.
            </p>
            <button
              onClick={() => setDialogOpen(true)}
              className="inline-block bg-lime-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-lime-300 hover:scale-105 transition-all"
            >
              무료로 시작하기
            </button>
          </div>
        </section>

        {/* 구독 다이얼로그 */}
        <SubscribeDialog open={dialogOpen} onOpenChange={setDialogOpen} />

        {/* Footer */}
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
    </>
  )
}
