import { Button } from "@/components/ui/button"

export function QuizTeaser() {
  return (
    <div className="liquid-glass rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-4">오늘의 퀵퀴즈</h2>
      <p className="text-lg text-gray-300 mb-8">
        Q. debounce와 throttle의 차이점은?
      </p>
      <Button
        data-event="quiz_start"
        className="bg-lime-400 text-black px-8 py-6 rounded-xl font-semibold hover:bg-lime-300 transition text-base"
      >
        퀴즈 시작
      </Button>
    </div>
  )
}
