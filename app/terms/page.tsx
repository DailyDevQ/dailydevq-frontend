import { SiteHeader } from "@/components/site-header"

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <section className="text-white py-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="liquid-glass rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-6 text-lime-300">이용약관</h1>
            <p className="text-gray-400 mb-8">적용일: 2025.10.03</p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">제1조 (목적)</h2>
                <p className="leading-relaxed">
                  본 약관은 DailyDevQ(이하 "서비스")가 제공하는 기술 뉴스레터 서비스의 이용과 관련하여
                  서비스와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">제2조 (정의)</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>"서비스"란 DailyDevQ가 제공하는 기술 관련 뉴스레터 서비스를 의미합니다.</li>
                  <li>"이용자"란 본 약관에 따라 서비스를 이용하는 자를 의미합니다.</li>
                  <li>"구독"이란 이메일 주소를 등록하여 정기적으로 뉴스레터를 수신하는 것을 의미합니다.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">제3조 (약관의 효력 및 변경)</h2>
                <p className="leading-relaxed mb-3">
                  ① 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.
                </p>
                <p className="leading-relaxed mb-3">
                  ② 서비스는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있으며,
                  변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력이 발생합니다.
                </p>
                <p className="leading-relaxed">
                  ③ 이용자는 변경된 약관에 동의하지 않을 경우 구독을 해지할 수 있습니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">제4조 (서비스의 제공)</h2>
                <p className="leading-relaxed mb-3">
                  ① 서비스는 다음과 같은 내용을 제공합니다:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                  <li>기술 관련 지식 및 정보 제공</li>
                  <li>프로그래밍 언어, 프레임워크, 클라우드 등 개발 관련 콘텐츠</li>
                  <li>실무 팁 및 모범 사례</li>
                </ul>
                <p className="leading-relaxed mb-3">
                  ② 서비스는 평일(월~금) 오전 9시에 발송되며, 주말 및 공휴일에는 발송되지 않습니다.
                </p>
                <p className="leading-relaxed">
                  ③ 서비스는 무료로 제공되며, 별도의 비용이 발생하지 않습니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">제5조 (서비스의 중단)</h2>
                <p className="leading-relaxed mb-3">
                  ① 서비스는 다음 각 호의 경우 서비스 제공을 일시적으로 중단할 수 있습니다:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>시스템 정기 점검, 증설 및 교체를 위해 필요한 경우</li>
                  <li>천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우</li>
                  <li>서비스 이용의 폭주 등으로 정상적인 서비스 제공이 어려운 경우</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">제6조 (이용자의 의무)</h2>
                <p className="leading-relaxed mb-3">
                  ① 이용자는 다음 행위를 하여서는 안 됩니다:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>타인의 이메일 주소를 무단으로 사용하는 행위</li>
                  <li>서비스 운영을 고의로 방해하는 행위</li>
                  <li>서비스의 콘텐츠를 무단으로 상업적 목적으로 사용하는 행위</li>
                  <li>관계 법령에 위배되는 행위</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">제7조 (구독 및 해지)</h2>
                <p className="leading-relaxed mb-3">
                  ① 구독을 원하는 자는 이메일 주소를 등록함으로써 구독 신청을 합니다.
                </p>
                <p className="leading-relaxed mb-3">
                  ② 이용자는 언제든지 구독을 해지할 수 있으며, 해지는 이메일 하단의 구독 해지 링크를 통해 가능합니다.
                </p>
                <p className="leading-relaxed">
                  ③ 구독 해지 시 이용자의 개인정보는 즉시 파기됩니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">제8조 (저작권)</h2>
                <p className="leading-relaxed mb-3">
                  ① 서비스가 제공하는 모든 콘텐츠에 대한 저작권은 서비스에 귀속됩니다.
                </p>
                <p className="leading-relaxed">
                  ② 이용자는 서비스가 제공하는 콘텐츠를 개인적인 학습 목적으로만 사용할 수 있으며,
                  상업적 목적으로 사용하거나 제3자에게 제공할 수 없습니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">제9조 (책임의 제한)</h2>
                <p className="leading-relaxed mb-3">
                  ① 서비스는 무료로 제공되며, 법령상 허용되는 한도 내에서 서비스와 관련한 책임을 부담하지 않습니다.
                </p>
                <p className="leading-relaxed">
                  ② 서비스는 이용자가 서비스를 이용하여 얻은 정보로 인해 발생한 손해에 대해 책임을 지지 않습니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">제10조 (분쟁의 해결)</h2>
                <p className="leading-relaxed">
                  본 약관과 관련하여 발생한 분쟁에 대해서는 대한민국 법을 준거법으로 하며,
                  관할법원은 민사소송법에 따릅니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">부칙</h2>
                <p className="leading-relaxed">
                  본 약관은 2025.10.03부터 시행됩니다.
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
