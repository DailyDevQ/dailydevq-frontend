"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface SubscribeDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialEmail?: string
}

export function SubscribeDialog({ open, onOpenChange, initialEmail = "" }: SubscribeDialogProps) {
  const [email, setEmail] = useState(initialEmail)
  const [isLoading, setIsLoading] = useState(false)

  // initialEmail이 변경되면 email state 업데이트
  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail)
    }
  }, [initialEmail])

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // TODO: 백엔드 API 연동
      console.log("Email subscription:", email)

      // 임시: 성공 처리
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert("구독이 완료되었습니다! 평일 오전 7시에 첫 뉴스레터를 받아보실 수 있습니다.")
      onOpenChange(false)
      setEmail("")
    } catch (error) {
      console.error("Subscription error:", error)
      alert("구독 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setIsLoading(true)

    try {
      // TODO: 구글 OAuth 연동
      console.log("Google OAuth login")

      // 임시: 구글 로그인 URL로 리다이렉트 (백엔드 연동 전)
      alert("구글 로그인 기능은 곧 제공될 예정입니다.")
    } catch (error) {
      console.error("Google login error:", error)
      alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-neutral-900 border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            DailyDevQ 구독하기
          </DialogTitle>
          <DialogDescription className="text-center text-gray-400 mt-2">
            매일 오전 7시, 여러분의 메일함으로 Tech Letter를 보내드립니다
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {/* 구글 소셜 로그인 */}
          <Button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full bg-white hover:bg-gray-100 text-gray-900 font-medium py-6 rounded-xl flex items-center justify-center gap-3 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google로 계속하기
          </Button>

          {/* 구분선 */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-neutral-900 px-2 text-gray-500">또는</span>
            </div>
          </div>

          {/* 이메일 입력 폼 */}
          <form onSubmit={handleEmailSubmit} className="space-y-3">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력해주세요"
                required
                disabled={isLoading}
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-white/5 border border-gray-700
                  text-white placeholder:text-gray-500
                  focus:outline-none focus:ring-2 focus:ring-lime-400/50
                  transition-all
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="
                w-full bg-lime-400 hover:bg-lime-300 text-black font-semibold
                py-3 rounded-xl transition-all
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              {isLoading ? "처리 중..." : "이메일로 구독하기"}
            </Button>
          </form>

          {/* 안내 문구 */}
          <p className="text-xs text-center text-gray-500 mt-4">
            구독 시 <a href="/privacy" className="underline hover:text-lime-300">개인정보처리방침</a> 및{" "}
            <a href="/terms" className="underline hover:text-lime-300">이용약관</a>에 동의하게 됩니다.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
