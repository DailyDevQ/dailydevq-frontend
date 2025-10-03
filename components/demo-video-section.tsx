"use client"

import Image from "next/image"

export function DemoVideoSection() {
  const row1 = [
    { name: "JavaScript", logo: "javascript", suffix: "original" },
    { name: "Python", logo: "python", suffix: "original" },
    { name: "TypeScript", logo: "typescript", suffix: "original" },
    { name: "Go", logo: "go", suffix: "original" },
    { name: "Rust", logo: "rust", suffix: "original" },
    { name: "Java", logo: "java", suffix: "original" },
    { name: "C++", logo: "cplusplus", suffix: "original" },
    { name: "C#", logo: "csharp", suffix: "original" },
    { name: "Kotlin", logo: "kotlin", suffix: "original" },
    { name: "Swift", logo: "swift", suffix: "original" },
    { name: "PHP", logo: "php", suffix: "original" },
    { name: "Ruby", logo: "ruby", suffix: "original" },
  ]

  const row2 = [
    { name: "AWS", logo: "amazonwebservices", suffix: "plain-wordmark" },
    { name: "Google Cloud", logo: "googlecloud", suffix: "original" },
    { name: "Azure", logo: "azure", suffix: "original" },
    { name: "Docker", logo: "docker", suffix: "original" },
    { name: "Kubernetes", logo: "kubernetes", suffix: "original" },
    { name: "Ansible", logo: "ansible", suffix: "original" },
    { name: "Terraform", logo: "terraform", suffix: "original" },
    { name: "GitHub Actions", logo: "githubactions", suffix: "original" },
    { name: "Jenkins", logo: "jenkins", suffix: "original" },
  ]

  const row3 = [
    { name: "PostgreSQL", logo: "postgresql", suffix: "original" },
    { name: "MongoDB", logo: "mongodb", suffix: "original" },
    { name: "Redis", logo: "redis", suffix: "original" },
    { name: "MySQL", logo: "mysql", suffix: "original" },
    { name: "React", logo: "react", suffix: "original" },
    { name: "Next.js", logo: "nextjs", suffix: "original" },
    { name: "Node.js", logo: "nodejs", suffix: "original" },
    { name: "Vue.js", logo: "vuejs", suffix: "original" },
    { name: "Django", logo: "django", suffix: "plain" },
    { name: "FastAPI", logo: "fastapi", suffix: "original" },
  ]

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center mb-8">
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
          {[...row1, ...row1].map((tech, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 flex items-center gap-3 liquid-glass rounded-2xl px-6 py-4 min-w-[160px]"
            >
              <Image
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.logo}/${tech.logo}-${tech.suffix}.svg`}
                alt={tech.name}
                width={32}
                height={32}
                className="w-8 h-8"
                unoptimized
              />
              <span className="text-white font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2 - Slower speed (reverse direction) */}
        <div className="flex gap-6 animate-scroll-reverse">
          {[...row2, ...row2].map((tech, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 flex items-center gap-3 liquid-glass rounded-2xl px-6 py-4 min-w-[160px]"
            >
              <Image
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.logo}/${tech.logo}-${tech.suffix}.svg`}
                alt={tech.name}
                width={32}
                height={32}
                className="w-8 h-8"
                unoptimized
              />
              <span className="text-white font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Row 3 - Fast speed */}
        <div className="flex gap-6 animate-scroll-fast">
          {[...row3, ...row3].map((tech, idx) => (
            <div
              key={`row3-${idx}`}
              className="flex-shrink-0 flex items-center gap-3 liquid-glass rounded-2xl px-6 py-4 min-w-[160px]"
            >
              <Image
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.logo}/${tech.logo}-${tech.suffix}.svg`}
                alt={tech.name}
                width={32}
                height={32}
                className="w-8 h-8"
                unoptimized
              />
              <span className="text-white font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
