export const metadata = {
  title: 'プライバシーポリシー | 株式会社ユニークトラッシュ',
  description: '株式会社ユニークトラッシュのプライバシーポリシー（個人情報の取り扱いについて）。',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="privacy-body">
      <header className="privacy-top">
        <div className="wrap row">
          <a href="/" className="brand">
            <span className="mark">UT</span>
            <span className="name">
              Uniq Trash inc.
              <small>株式会社ユニークトラッシュ</small>
            </span>
          </a>
          <a
            href="/"
            style={{ fontFamily: '"Space Mono",monospace', fontSize: 12, letterSpacing: '0.1em' }}
          >
            ← TOP に戻る
          </a>
        </div>
      </header>

      <main className="privacy-main wrap">
        <h1>プライバシーポリシー</h1>
        <div className="privacy-lede">PRIVACY POLICY · 個人情報の取り扱いについて</div>

        <p>
          株式会社ユニークトラッシュ（以下「当社」といいます）は、当社が運営するウェブサイトおよびサービスにおいて取得する個人情報を、適切に取り扱うことが当社の社会的責務であると考え、本プライバシーポリシー（以下「本ポリシー」といいます）を定め、これを遵守します。
        </p>

        <h2><span className="num">1</span>取得する個人情報</h2>
        <p>当社は、本サイトのお問い合わせフォーム等を通じて、以下の情報を取得することがあります。</p>
        <ul>
          <li>会社名・お名前</li>
          <li>メールアドレス</li>
          <li>電話番号（任意）</li>
          <li>ご相談内容、ご興味のあるサービス、ご予算感など、フォームに入力いただいた情報</li>
        </ul>

        <h2><span className="num">2</span>個人情報の利用目的</h2>
        <p>取得した個人情報は、以下の目的の範囲内で利用します。</p>
        <ul>
          <li>お問い合わせへの回答および対応</li>
          <li>当社サービスのご提供および契約の履行</li>
          <li>当社サービス・製品に関する情報のご案内</li>
          <li>本サイトの改善および統計的分析</li>
          <li>法令に基づく対応</li>
        </ul>

        <h2><span className="num">3</span>第三者への提供・委託</h2>
        <p>
          当社は、ご本人の同意がある場合、または法令で認められる場合を除き、取得した個人情報を第三者に提供しません。ただし、業務遂行上必要な範囲で、以下の外部サービスに個人情報の取り扱いを委託することがあります。
        </p>
        <ul>
          <li>本サイトのお問い合わせフォーム送信に伴うメール配信サービス（FormSubmit.co）</li>
          <li>本サイトのホスティングサービス（Vercel Inc.）</li>
        </ul>
        <p>委託先の選定にあたっては、個人情報の取り扱いについて十分な水準にあることを確認し、必要かつ適切な監督を行います。</p>

        <h2><span className="num">4</span>安全管理措置</h2>
        <p>
          当社は、取得した個人情報の漏えい、滅失または毀損の防止その他個人情報の安全管理のために、必要かつ適切な措置を講じます。
        </p>

        <h2><span className="num">5</span>個人情報の保管期間</h2>
        <p>
          取得した個人情報は、利用目的の達成に必要な期間保管し、不要となった時点で速やかに消去します。具体的には、お問い合わせ対応終了後3年を目安に廃棄するものとします（契約成立等により別途定めがある場合を除きます）。
        </p>

        <h2><span className="num">6</span>Cookie および アクセス解析について</h2>
        <p>
          本サイトは、サービス向上および利用状況の分析を目的として、Google LLC が提供する「Google Analytics 4」を利用する場合があります。Google Analytics は Cookie 等の技術を利用して匿名のアクセス情報（ページ閲覧数・滞在時間・参照元・端末情報など）を収集しますが、収集データから特定の個人が識別されることはありません。当社は IP アドレスの匿名化を有効化したうえで運用します。
        </p>
        <p>
          Cookie によるデータ収集を望まない場合は、ブラウザの設定で Cookie を無効化するか、Google が提供する{' '}
          <a href="https://tools.google.com/dlpage/gaoptout?hl=ja" target="_blank" rel="noopener noreferrer">
            「Google Analytics オプトアウト アドオン」
          </a>{' '}
          をインストールすることで、本サイトでの計測を無効化できます。
        </p>
        <p>
          Google Analytics の利用規約・プライバシーポリシーについては、Google 社の{' '}
          <a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener noreferrer">
            プライバシーポリシー
          </a>{' '}および{' '}
          <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer">
            Google Analytics 利用規約
          </a>{' '}をご確認ください。
        </p>

        <h2><span className="num">7</span>個人情報の開示・訂正・削除等</h2>
        <p>
          ご本人から、当社が保有する個人情報の開示、訂正、利用停止、消去等のご請求があった場合、当社は本人確認を行ったうえで、合理的な範囲でこれに対応します。お問い合わせは下記窓口までご連絡ください。
        </p>

        <h2><span className="num">8</span>本ポリシーの改定</h2>
        <p>
          当社は、関連法令の改正、当社サービスの変更等に応じ、本ポリシーを改定することがあります。重要な変更がある場合は、本サイト上でお知らせします。
        </p>

        <h2><span className="num">9</span>お問い合わせ窓口</h2>
        <dl>
          <dt>事業者名</dt>
          <dd>株式会社ユニークトラッシュ</dd>
          <dt>所在地</dt>
          <dd>東京都多摩市</dd>
          <dt>連絡先</dt>
          <dd>
            <a href="mailto:u.t.bluecolor@gmail.com">u.t.bluecolor@gmail.com</a>
          </dd>
        </dl>

        <div className="privacy-meta">
          <span>
            <b>制定日</b> 2026年5月1日
          </span>
          <span>
            <b>最終改定</b> 2026年5月1日
          </span>
        </div>
      </main>

      <footer className="privacy-bot">
        <div className="wrap row">
          <span>© 2026 UNIQ TRASH INC. ALL RIGHTS RESERVED.</span>
          <a href="/">TOP →</a>
        </div>
      </footer>
    </div>
  );
}
