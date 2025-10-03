"use client"

export function DemoVideoSection() {
  const row1 = [
    { name: "JavaScript", icon: "⚡" },
    { name: "Python", icon: "🐍" },
    { name: "TypeScript", icon: "💙" },
    { name: "Go", icon: "🔷" },
    { name: "Rust", icon: "🦀" },
    { name: "Java", icon: "☕" },
    { name: "Kotlin", icon: "🟣" },
    { name: "Swift", icon: "🍎" },
  ]

  const row2 = [
    { name: "AWS", icon: "☁️" },
    { name: "Google Cloud", icon: "🌥️" },
    { name: "Azure", icon: "🔵" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⚓" },
    { name: "Terraform", icon: "🔧" },
    { name: "GitHub Actions", icon: "🔄" },
    { name: "Jenkins", icon: "🔨" },
  ]

  const row3 = [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Redis", icon: "🔴" },
    { name: "MySQL", icon: "🐬" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "💚" },
    { name: "GraphQL", icon: "💗" },
  ]

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center mb-8">
        <p className="text-lime-300 text-sm uppercase tracking-widest mb-3">다루는 기술</p>
        <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl mb-2">
          모든 기술 스택을 한 곳에서
        </h3>
        <p className="text-gray-400 text-sm">
          언어부터 클라우드, 데이터베이스까지 실무에 필요한 모든 것
        </p>
      </div>

      {/* Scrolling Logos - 3 Rows */}
      <div className="relative overflow-hidden py-8 space-y-6">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Normal speed */}
        <div className="flex gap-6 animate-scroll">
          {[...row1, ...row1].map((logo, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 flex items-center gap-3 liquid-glass rounded-2xl px-6 py-4 min-w-[160px]"
            >
              <span className="text-3xl">{logo.icon}</span>
              <span className="text-white font-medium">{logo.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2 - Slower speed (reverse direction) */}
        <div className="flex gap-6 animate-scroll-reverse">
          {[...row2, ...row2].map((logo, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 flex items-center gap-3 liquid-glass rounded-2xl px-6 py-4 min-w-[160px]"
            >
              <span className="text-3xl">{logo.icon}</span>
              <span className="text-white font-medium">{logo.name}</span>
            </div>
          ))}
        </div>

        {/* Row 3 - Fast speed */}
        <div className="flex gap-6 animate-scroll-fast">
          {[...row3, ...row3].map((logo, idx) => (
            <div
              key={`row3-${idx}`}
              className="flex-shrink-0 flex items-center gap-3 liquid-glass rounded-2xl px-6 py-4 min-w-[160px]"
            >
              <span className="text-3xl">{logo.icon}</span>
              <span className="text-white font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
