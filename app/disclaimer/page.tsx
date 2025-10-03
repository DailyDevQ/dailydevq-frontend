import { SiteHeader } from "@/components/site-header"

export default function DisclaimerPage() {
  return (
    <>
      <SiteHeader />
      <section className="text-white py-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="liquid-glass rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-6 text-lime-300">면책사항</h1>
            <p className="text-gray-400 mb-8">마지막 업데이트: 2025.10</p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. 정보의 정확성</h2>
                <p className="leading-relaxed mb-3">
                  DailyDevQ는 제공하는 모든 정보의 정확성과 신뢰성을 위해 최선을 다하고 있습니다.
                  그러나 기술은 빠르게 변화하며, 제공된 정보가 항상 최신 상태를 유지한다고 보장할 수 없습니다.
                </p>
                <p className="leading-relaxed">
                  따라서 DailyDevQ는 제공된 정보의 완전성, 정확성, 신뢰성에 대해 명시적이거나 묵시적인
                  보증을 하지 않습니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. 콘텐츠의 사용</h2>
                <p className="leading-relaxed mb-3">
                  본 서비스에서 제공하는 모든 콘텐츠는 교육 및 정보 제공 목적으로만 제공됩니다.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>제공된 코드나 기술적 조언을 실무에 적용하기 전에 충분한 테스트를 수행하시기 바랍니다.</li>
                  <li>프로덕션 환경에 직접 적용으로 인한 문제에 대해서는 책임지지 않습니다.</li>
                  <li>중요한 프로젝트에 적용하기 전 전문가의 검토를 받으시기를 권장합니다.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. AI 생성 콘텐츠</h2>
                <p className="leading-relaxed mb-3">
                  본 서비스의 일부 콘텐츠는 AI(인공지능)를 활용하여 생성됩니다.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI가 생성한 콘텐츠는 검토 과정을 거치지만, 오류나 부정확한 정보가 포함될 수 있습니다.</li>
                  <li>AI 생성 콘텐츠를 맹신하지 말고, 공식 문서나 신뢰할 수 있는 출처와 교차 검증하시기 바랍니다.</li>
                  <li>AI 생성 콘텐츠에 대한 최종 판단과 사용 책임은 이용자에게 있습니다.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. 외부 링크 및 참조</h2>
                <p className="leading-relaxed mb-3">
                  본 서비스에는 외부 웹사이트나 리소스에 대한 링크가 포함될 수 있습니다.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>외부 링크는 편의를 위해 제공되며, 해당 사이트의 내용에 대해 책임지지 않습니다.</li>
                  <li>외부 사이트 방문으로 인한 손해에 대해서는 해당 사이트의 정책이 적용됩니다.</li>
                  <li>링크된 사이트의 개인정보 보호 정책은 DailyDevQ와 무관합니다.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. 손해배상의 제한</h2>
                <p className="leading-relaxed mb-3">
                  법률이 허용하는 최대 범위 내에서, DailyDevQ는 다음과 같은 사항에 대해 책임을 지지 않습니다:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>서비스 이용 또는 이용 불가로 인한 직접적, 간접적, 부수적, 결과적 손해</li>
                  <li>제공된 정보의 부정확성으로 인한 손해</li>
                  <li>이용자의 데이터 손실 또는 사업 중단으로 인한 손해</li>
                  <li>제3자의 행위로 인한 손해</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. 보안 관련 면책</h2>
                <p className="leading-relaxed mb-3">
                  본 서비스에서 제공하는 코드나 기술 정보에는 보안 취약점이 포함될 수 있습니다.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>제공된 코드를 사용하기 전 보안 검토를 수행하시기 바랍니다.</li>
                  <li>보안 관련 사고나 취약점으로 인한 손해에 대해서는 책임지지 않습니다.</li>
                  <li>중요한 시스템에 적용하기 전 보안 전문가의 검토를 받으시기를 권장합니다.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. 서비스 가용성</h2>
                <p className="leading-relaxed">
                  DailyDevQ는 서비스의 지속적인 가용성을 위해 노력하지만,
                  기술적 문제, 유지보수, 불가항력 등으로 인해 서비스가 중단될 수 있으며,
                  이로 인한 손해에 대해서는 책임을 지지 않습니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. 법률 자문 아님</h2>
                <p className="leading-relaxed">
                  본 서비스에서 제공하는 라이선스, 법적 이슈 등에 관한 정보는 일반적인 정보 제공 목적이며,
                  법률 자문이 아닙니다. 법적 문제에 대해서는 변호사와 상담하시기 바랍니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. 면책사항의 변경</h2>
                <p className="leading-relaxed">
                  본 면책사항은 사전 통지 없이 변경될 수 있습니다.
                  변경된 면책사항은 웹사이트에 게시됨과 동시에 효력이 발생합니다.
                </p>
              </section>

              <section className="bg-lime-400/10 p-6 rounded-xl border border-lime-400/20">
                <h2 className="text-2xl font-bold text-lime-300 mb-4">⚠️ 중요 안내</h2>
                <p className="leading-relaxed">
                  본 서비스를 이용함으로써 이용자는 위의 모든 면책사항에 동의하는 것으로 간주됩니다.
                  면책사항에 동의하지 않는 경우 서비스 이용을 중단하시기 바랍니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">문의</h2>
                <p className="leading-relaxed">
                  본 면책사항과 관련하여 문의사항이 있으신 경우
                  <a href="mailto:support@dailydevq.com" className="text-lime-300 hover:underline ml-1">
                    support@dailydevq.com
                  </a>
                  으로 연락해 주시기 바랍니다.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-12 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-sm text-gray-400 mb-4">
            © 2025 DailyDevQ. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            {/* 매일 아침 9시, 개발자를 위한 Tech 캡슐 */}
          </p>
        </div>
      </footer>
    </>
  )
}
