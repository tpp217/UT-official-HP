export default function Flow() {
  const steps = [
    { n: '01', title: 'ヒアリング', jp: 'まず話を聞かせてください',
      body: '業務フロー、現場のクセ、理想の姿。30分のオンラインMTGから始まります。',
      color: 'var(--pink)' },
    { n: '02', title: '提案・見積', jp: '方針と金額を透明に',
      body: 'スコープ・技術構成・フェーズ分割。1週間以内に提案書をお渡しします。',
      color: 'var(--yellow)' },
    { n: '03', title: 'デザイン・設計', jp: 'プロトタイプで確かめる',
      body: '画面設計・UIデザイン・DB/API設計。クリック可能なプロトタイプで方向性を合わせます。',
      color: 'var(--blue)' },
    { n: '04', title: '開発・検証', jp: '2週間ごとにお見せ',
      body: 'スクラム的にスプリントで進め、毎回動くものをデモ。仕様のズレをゼロに。',
      color: 'var(--mint)' },
    { n: '05', title: 'リリース・伴走', jp: '作ってからが本番',
      body: '段階リリース、運用保守、月次改善。必要なら現場への導入研修も担当します。',
      color: 'var(--coral)' },
  ];

  const faqs = [
    { q: '予算の目安はどれくらいですか？',
      a: 'コーポレートサイトは 40 万円〜、業務用Webアプリは 100 万円〜、システムリフォームは規模により 300 万円〜が目安です。案件内容により幅がありますので、無料でざっくり見積もります。' },
    { q: 'どのくらいの期間で作れますか？',
      a: 'LPなら 1.5–2週、コーポレートサイトは 3–4週、業務アプリは 1–2ヶ月が標準。フェーズを切って段階的にリリースする進め方を推奨しています。' },
    { q: 'リフォームは業務を止めますか？',
      a: '原則、止めずに移行します。新旧並行運用→段階切替→旧システム停止、の3フェーズ構成が基本です。' },
    { q: '地方や海外でも対応できますか？',
      a: 'はい、フルリモートで進行します。現地訪問は基本的に行わず、オンラインMTG・チャット・プロトタイプ共有で完結。全国どこでも、海外拠点ともご一緒できます。' },
    { q: '既存の開発会社から引き継ぐことはできますか？',
      a: 'できます。コードレビュー + 運用引き継ぎのパックを用意しています。ドキュメントが無くても大丈夫です。' },
  ];

  return (
    <section id="flow" style={{
      padding: 'clamp(60px,10vw,120px) 0',
      background: 'var(--paper)',
      borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)',
    }}>
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 40 }}>
          <div className="sec-label" style={{ marginBottom: 14 }}>
            <span className="dot" style={{ background: 'var(--mint)' }} />
            <span>FLOW · 04 / 06</span>
          </div>
          <h2 className="section">
            作る、<br />
            <span style={{
              background: 'var(--blue)', color: '#fff', padding: '0 0.14em',
              borderRadius: 8, display: 'inline-block', transform: 'rotate(-1deg)',
            }}>
              ながれ。
            </span>
          </h2>
        </div>

        <div style={{
          display: 'grid', gap: 16,
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        }}>
          {steps.map((s) => (
            <div key={s.n} className="nb-card reveal" style={{
              background: s.color,
              color: s.color === 'var(--blue)' || s.color === 'var(--coral)' ? '#fff' : 'var(--ink)',
              padding: '22px 22px 24px', position: 'relative',
            }}>
              <div style={{
                fontFamily: '"Archivo Black",sans-serif', fontSize: 48,
                lineHeight: 1, opacity: 0.9, letterSpacing: '-0.04em',
              }}>{s.n}</div>
              <div style={{
                fontSize: 'clamp(18px,1.6vw,22px)', fontWeight: 900,
                marginTop: 14, letterSpacing: '-0.02em',
              }}>{s.title}</div>
              <div style={{
                fontSize: 12, marginTop: 4, opacity: 0.75,
                fontFamily: '"Space Mono",monospace',
              }}>/ {s.jp}</div>
              <p style={{ margin: '14px 0 0', fontSize: 13.5, lineHeight: 1.75, opacity: 0.92 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: '1fr', gap: 40 }}>
          <div className="reveal">
            <div className="sec-label" style={{ marginBottom: 14 }}>
              <span className="dot" style={{ background: 'var(--yellow)' }} />
              <span>FAQ — よくある質問</span>
            </div>
            <h3 style={{
              margin: 0, fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 900,
              letterSpacing: '-0.02em', lineHeight: 1.1,
            }}>
              聞かれやすいこと、<br />先にお答えします。
            </h3>
          </div>

          <div className="acc reveal" style={{
            background: '#fff', border: '2px solid var(--ink)', borderRadius: 20,
            padding: '8px 22px', boxShadow: '6px 6px 0 var(--ink)',
          }}>
            {faqs.map((f, i) => (
              <details key={i} open={i === 0}>
                <summary>
                  <span>
                    <span style={{
                      opacity: 0.5, marginRight: 10,
                      fontFamily: '"Space Mono",monospace', fontSize: 14,
                    }}>Q{String(i + 1).padStart(2, '0')}</span>
                    {f.q}
                  </span>
                  <span className="ico">+</span>
                </summary>
                <p className="answer">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
