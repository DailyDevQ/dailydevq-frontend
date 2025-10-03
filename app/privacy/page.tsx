import { SiteHeader } from "@/components/site-header"

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <section className="text-white py-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="liquid-glass rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-6 text-lime-300">개인정보처리방침</h1>
            <p className="text-gray-400 mb-8">시행일자: 2025.10.03</p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. 수집하는 개인정보 항목</h2>
                <p className="leading-relaxed mb-3">
                  DailyDevQ는 뉴스레터 서비스 제공을 위해 다음의 개인정보를 수집합니다:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>필수항목: 이메일 주소</li>
                  <li>자동수집항목: 서비스 이용 기록, 접속 로그, IP 주소</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. 개인정보의 수집 및 이용 목적</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>뉴스레터 발송 및 서비스 제공</li>
                  <li>서비스 개선 및 통계 분석</li>
                  <li>중요 공지사항 전달</li>
                  <li>이용자 문의 응대</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. 개인정보의 보유 및 이용 기간</h2>
                <p className="leading-relaxed">
                  이용자의 개인정보는 구독 해지 시까지 보유하며, 해지 즉시 지체 없이 파기합니다.
                  다만, 관련 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관합니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. 개인정보의 제3자 제공</h2>
                <p className="leading-relaxed">
                  DailyDevQ는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.
                  다만, 다음의 경우에는 예외로 합니다:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>이용자가 사전에 동의한 경우</li>
                  <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. 개인정보의 파기 절차 및 방법</h2>
                <p className="leading-relaxed mb-3">
                  이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용 목적이 달성되면 지체 없이 파기합니다.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>전자적 파일 형태: 복구 및 재생이 불가능한 방법으로 영구 삭제</li>
                  <li>종이 문서: 분쇄 또는 소각</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. 이용자의 권리와 행사 방법</h2>
                <p className="leading-relaxed mb-3">
                  이용자는 언제든지 다음의 권리를 행사할 수 있습니다:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>개인정보 열람 요구</li>
                  <li>개인정보 정정 요구</li>
                  <li>개인정보 삭제 요구</li>
                  <li>개인정보 처리 정지 요구</li>
                  <li>구독 해지 (이메일 하단의 구독 해지 링크 클릭)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. 개인정보 보호책임자</h2>
                <div className="bg-white/5 p-6 rounded-xl">
                  <p className="mb-2">이메일: support@dailydevq.com</p>
                  <p>개인정보 보호와 관련한 문의사항은 위 연락처로 문의해주시기 바랍니다.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. 개인정보처리방침의 변경</h2>
                <p className="leading-relaxed">
                  이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경사항이 있는 경우
                  웹사이트를 통해 공지하겠습니다.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 DailyDevQ. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
              <a href="/privacy" className="hover:text-lime-300 transition-colors">
                개인정보처리방침
              </a>
              <span className="text-gray-700">|</span>
              <a href="/terms" className="hover:text-lime-300 transition-colors">
                이용약관
              </a>
              <span className="text-gray-700">|</span>
              <a href="/disclaimer" className="hover:text-lime-300 transition-colors">
                면책사항
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
