"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function GoogleCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get("code")
      const errorParam = searchParams.get("error")

      if (errorParam) {
        setError("Google 로그인이 취소되었습니다.")
        setTimeout(() => router.push("/"), 3000)
        return
      }

      if (!code) {
        setError("인증 코드가 없습니다.")
        setTimeout(() => router.push("/"), 3000)
        return
      }

      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001"
        const response = await fetch(`${apiUrl}/api/v1/auth/google`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code,
            redirect_uri: `${window.location.origin}/auth/google/callback`,
          }),
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.detail || "Google 로그인에 실패했습니다.")
        }

        // 성공: 토큰 저장
        if (data.access_token) {
          localStorage.setItem("access_token", data.access_token)
          localStorage.setItem("user", JSON.stringify(data.user))
        }

        // 폭죽 이펙트 (선택사항)
        if (typeof window !== "undefined" && (window as any).confetti) {
          ;(window as any).confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#84CC16", "#22D3EE", "#3B82F6"],
          })
        }

        // 메인 페이지로 리다이렉트
        alert("🎉 Google 로그인에 성공했습니다! 평일 오전 7시에 뉴스레터를 받아보실 수 있습니다.")
        router.push("/")
      } catch (err) {
        console.error("Google auth error:", err)
        setError(err instanceof Error ? err.message : "로그인 중 오류가 발생했습니다.")
        setTimeout(() => router.push("/"), 3000)
      }
    }

    handleCallback()
  }, [searchParams, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1220]">
      <div className="text-center">
        {error ? (
          <div>
            <h1 className="text-2xl font-bold text-red-400 mb-4">❌ {error}</h1>
            <p className="text-gray-400">잠시 후 메인 페이지로 이동합니다...</p>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-white mb-4">🔄 Google 로그인 처리 중...</h1>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-400 mx-auto"></div>
          </div>
        )}
      </div>
    </div>
  )
}
