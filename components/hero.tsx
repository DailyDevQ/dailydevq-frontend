"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export function Hero() {
  const [email, setEmail] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 이메일 구독 로직
    console.log("Subscribing:", email)
  }

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-20 sm:py-32">
          <div className="mb-6 flex items-center gap-2">
            <Image src="/icons/dailydevq-white.svg" alt="DailyDevQ logo" width={32} height={32} className="h-8 w-8" />
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">DAILYDEVQ</p>
          </div>
          <h1 className="mt-4 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl max-w-5xl">
            <span className="block">매일 아침,</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)] mt-2">개발자를 위한</span>
            <span className="block mt-2">5분 테크레터</span>
          </h1>

          <p className="mt-8 text-center text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            최신 트렌드부터 실무 팁까지, 딱 필요한 것만 빠르게
          </p>

          {/* 이메일 구독 폼 - 리퀴드 글래스 스타일 */}
          <form onSubmit={handleSubmit} className="mt-12 w-full max-w-2xl">
            <div className="relative">
              {/* 회전하는 보라색 테두리 */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="rotating-border"></div>
              </div>

              {/* 메인 입력 박스 */}
              <div
                className={`
                  relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 p-2
                  liquid-glass-input rounded-2xl
                  transition-all duration-300
                  ${isFocused ? 'ring-2 ring-lime-400/50 shadow-[0_0_30px_rgba(132,204,22,0.3)]' : ''}
                `}
              >
                {/* 이메일 입력 */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="이메일을 입력해주세요"
                  required
                  className="
                    flex-1 bg-transparent px-6 py-3 text-white text-base
                    placeholder:text-gray-500
                    focus:outline-none
                    transition-all duration-300
                  "
                />

                {/* 제출 버튼 */}
                <Button
                  type="submit"
                  className="
                    bg-lime-400 text-black font-semibold text-base
                    px-6 py-3 rounded-xl
                    hover:bg-lime-300 hover:shadow-[0_0_25px_rgba(132,204,22,0.5)]
                    hover:scale-[1.02]
                    active:scale-[0.98]
                    transition-all duration-300
                    whitespace-nowrap
                  "
                  data-event="subscribe_submit"
                >
                  구독하기
                </Button>
              </div>
            </div>

            {/* 안내 문구 */}
            <p className="mt-4 text-center text-sm text-gray-400">
              📬 월~금 오전 9시, 메일함으로 배달됩니다
            </p>
          </form>

          {/* 통계 카드 */}
          <div className="mt-20 grid w-full max-w-5xl gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="
                  glass-border rounded-2xl bg-neutral-900/50 p-8 text-center
                  hover:bg-neutral-900/70 hover:scale-[1.02]
                  transition-all duration-300
                  cursor-default
                "
              >
                <div className="text-4xl font-bold text-lime-300 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                <p className="mt-3 text-sm text-gray-300">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const stats = [
  {
    number: "매일 아침 9시",
    label: "정기 발송",
    desc: "월요일부터 금요일까지 꾸준히",
  },
  {
    number: "5분 분량",
    label: "핵심 위주",
    desc: "출근길 지하철에서 읽기 좋은 길이",
  },
  {
    number: "무료 제공",
    label: "별도 비용 없음",
    desc: "가입만 하면 바로 받아볼 수 있습니다",
  },
]
