const items = [
  { title: "Promise vs async/await", date: "2025-01-15", category: "CS" },
  { title: "Docker Compose 기초", date: "2025-01-14", category: "DevOps" },
  { title: "S3 버킷 정책", date: "2025-01-13", category: "Cloud" },
  { title: "RAG 구조 이해", date: "2025-01-12", category: "AI" },
  { title: "TCP vs UDP", date: "2025-01-11", category: "CS" },
  { title: "GitHub Actions 워크플로우", date: "2025-01-10", category: "DevOps" },
]

export function ArchivePreview() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">지난 캡슐 아카이브</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <button
            key={item.date}
            data-event="capsule_open"
            className="liquid-glass rounded-xl p-6 text-left hover:scale-105 hover:bg-white/10 transition group"
          >
            <div className="text-xs text-lime-400 mb-2 font-semibold uppercase">
              {item.category}
            </div>
            <h4 className="font-bold mb-3 group-hover:text-lime-300 transition">
              {item.title}
            </h4>
            <p className="text-sm text-gray-400">{item.date}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
