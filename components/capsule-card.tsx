"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const tabs = ["CS", "DevOps", "Cloud", "AI"]
const code = `function debounce(fn, ms) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}`

export function CapsuleCard() {
  const [tab, setTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="liquid-glass rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6">오늘의 Tech 캡슐</h2>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className={`px-4 py-2 rounded-lg transition whitespace-nowrap ${
              tab === i ? "bg-lime-400 text-black font-semibold" : "bg-white/10 text-gray-300"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-4">Debounce 패턴</h3>

      <div className="space-y-3 mb-6 text-gray-300">
        <p>• 연속 이벤트 발생 시 마지막 호출만 실행</p>
        <p>• 검색창 최적화에 필수</p>
        <p>• API 호출 절감 가능</p>
      </div>

      <div className="relative bg-black/50 p-4 rounded-xl mb-6">
        <pre className="text-sm text-gray-300 overflow-x-auto">
          <code>{code}</code>
        </pre>
        <button
          onClick={copy}
          data-event="copy_code"
          className="absolute top-2 right-2 p-2 hover:bg-white/10 rounded-lg transition"
          aria-label="코드 복사"
        >
          {copied ? <Check size={16} className="text-lime-400" /> : <Copy size={16} />}
        </button>
      </div>

      <div className="space-y-3 mb-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" className="mt-1" />
          <span className="text-gray-300">타이머 취소 후 재설정</span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" className="mt-1" />
          <span className="text-gray-300">클로저로 timer 보관</span>
        </label>
      </div>

      <Button
        data-event="quiz_start"
        className="w-full bg-lime-400 text-black py-6 rounded-xl font-semibold hover:bg-lime-300 transition text-base"
      >
        퀵퀴즈 풀기
      </Button>
    </div>
  )
}
