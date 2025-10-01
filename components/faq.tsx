"use client"

const faqs = [
  {
    q: "정말 매일 보내나요?",
    a: "네, 평일 오전 9시에 발송됩니다. 주말과 공휴일은 발송하지 않습니다.",
  },
  {
    q: "구독료는?",
    a: "100% 무료이며 광고도 없습니다. 앞으로도 계속 무료로 제공할 예정입니다.",
  },
  {
    q: "어떤 주제를 다루나요?",
    a: "CS 기초, DevOps, Cloud, AI/ML 등 실무에서 자주 쓰이는 기술 개념과 패턴을 다룹니다.",
  },
  {
    q: "구독 해지는 어떻게 하나요?",
    a: "매일 받는 이메일 하단의 '구독 해지' 링크를 클릭하시면 즉시 해지됩니다.",
  },
]

export function FAQ() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">자주 묻는 질문</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="liquid-glass rounded-xl p-6 group"
          >
            <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
              <span>{faq.q}</span>
              <span className="text-lime-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-300 mt-4 leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
