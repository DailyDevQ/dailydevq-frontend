"use client"

const faqs = [
  {
    q: "정말 매일 보내나요?",
    a: "네, 평일 오전 7시에 보내드려요. 주말과 공휴일은 쉬어갑니다.",
  },
  {
    q: "구독료는?",
    a: "완전 무료예요. 광고도 없고, 앞으로도 계속 무료로 운영할 예정이에요.",
  },
  {
    q: "어떤 주제를 다루나요?",
    a: "CS 기초, DevOps, Cloud, AI/ML 등 실무에서 자주 쓰이는 기술 개념과 노하우를 다뤄요.",
  },
  {
    q: "구독 해지는 어떻게 하나요?",
    a: "매일 받는 이메일 하단의 '구독 해지' 버튼 하나면 끝이에요.",
  },
]

export function FAQ() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-lime-300 text-sm uppercase tracking-widest mb-3">FAQ</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">자주 묻는 질문</h2>
        <p className="text-gray-400 text-lg">DailyDevQ에 대해 궁금한 점을 확인해보세요</p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="liquid-glass rounded-2xl p-6 group hover:bg-white/5 transition-all duration-300"
          >
            <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
              <span className="pr-4">{faq.q}</span>
              <span className="text-lime-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </summary>
            <div className="mt-4 pt-4 border-t border-gray-700/50">
              <p className="text-gray-300 leading-relaxed">{faq.a}</p>
            </div>
          </details>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center liquid-glass rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-3">더 궁금한 점이 있으신가요?</h3>
        <p className="text-gray-400 mb-6">언제든지 문의해주세요. 빠르게 답변드리겠습니다.</p>
        <a
          href="mailto:support@dailydevq.com"
          className="inline-block bg-lime-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-lime-300 hover:scale-105 transition-all"
        >
          문의하기
        </a>
      </div>
    </div>
  )
}
