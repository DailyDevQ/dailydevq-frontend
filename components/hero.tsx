"use client"

import { Button } from "@/components/ui/button"
import { SubscribeDialog } from "@/components/subscribe-dialog"
import Image from "next/image"
import { useState } from "react"

export function Hero() {
  const [email, setEmail] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 이메일 입력 후 팝업 열기
    setDialogOpen(true)
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
            <span className="block">매일 오전 7시,</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)] mt-2">실무 핵심만 전합니다</span>
            <span className="block mt-2">Tech Letter</span>
          </h1>

          <p className="mt-8 text-center text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            최신 기술 트렌드와 실무 노하우를 정리해서 전달합니다.
            <br />
            바쁜 일상 속에서도 꾸준히 학습할 수 있도록.
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
              📬 평일 오전 7시에 발송됩니다
            </p>
          </form>

          {/* 구독 다이얼로그 - 이메일 값 전달 */}
          <SubscribeDialog
            open={dialogOpen}
            onOpenChange={setDialogOpen}
            initialEmail={email}
          />

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
    number: "매일 오전 7시",
    label: "정기 발송",
    desc: "평일 매일 일정한 시간에 받아보세요",
  },
  {
    number: "핵심 정리",
    label: "간결한 구성",
    desc: "필요한 내용만 정리해서 전달합니다",
  },
  {
    number: "무료 제공",
    label: "비용 없음",
    desc: "별도 비용 없이 누구나 구독 가능합니다",
  },
]
