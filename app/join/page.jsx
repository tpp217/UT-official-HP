import Link from 'next/link';
import Reveal from '../components/Reveal';
import Footer from '../components/Footer';

export const metadata = {
  title: '採用情報・代理店募集 | 株式会社ユニークトラッシュ',
  description:
    '株式会社ユニークトラッシュのSE採用と、Web制作・業務アプリ開発を提案いただくパートナー募集ページです。',
  alternates: { canonical: '/join' },
  openGraph: {
    title: '採用情報・代理店募集 | 株式会社ユニークトラッシュ',
    description:
      'SE採用とパートナー募集。現場の課題を仕組みに変える仲間と、必要な企業へ提案いただくパートナーを募集しています。',
    url: '/join',
  },
};

const fitItems = [
  '業務の流れを聞き取り、課題を仕様に落とし込める',
  '小さく作り、使われ方を見ながら改善したい',
  'AIや自動化を、現場の時短やミス削減につなげたい',
  'Excel運用や古いシステムの置き換えに前向き',
];

const careerRows = [
  ['職種', 'システムエンジニア / Webアプリケーションエンジニア'],
  ['仕事内容', '業務用Webアプリ、社内システム、Webサイト、既存システム刷新の設計・開発・運用'],
  ['主な技術', 'Next.js / React / Node.js / PostgreSQL / Supabase / Vercel / GitHub / Stripe / LINE連携'],
  ['歓迎経験', 'Webアプリ開発、業務システム開発、顧客折衝、要件定義、DB設計、運用保守など'],
  ['契約形態', '正社員、業務委託、副業など、関わり方は相談可能'],
  ['働き方', 'リモート中心。打ち合わせはオンラインで行います'],
];

const partnerMerits = [
  {
    n: '01',
    title: '顧客課題から提案できる',
    body: 'Webサイト制作から業務アプリ、EC、既存システム刷新まで、顧客の課題に合わせて提案できます。',
    bg: 'var(--yellow)',
    ink: 'var(--ink)',
  },
  {
    n: '02',
    title: '技術面は当社が支援',
    body: '要件整理、見積、設計、実装、公開後の改善まで、技術側の対応は当社が支援します。',
    bg: 'var(--blue)',
    ink: '#fff',
  },
  {
    n: '03',
    title: '紹介から始められる',
    body: '紹介のみ、商談同席、共同提案など、既存の営業スタイルに合わせて関わり方を選べます。',
    bg: 'var(--mint)',
    ink: 'var(--ink)',
  },
];

const partnerRows = [
  ['対象', '広告代理店、Web制作会社、士業、コンサル会社、法人営業会社、既存顧客を持つ個人事業主'],
  ['募集形態', '紹介パートナー / 販売代理店 / 共同提案パートナー'],
  ['提案できる領域', 'コーポレートサイト、LP、業務用Webアプリ、EC、既存システム刷新、運用保守'],
  ['当社の支援', '提案資料、初回商談同席、技術ヒアリング、見積作成、納品後フォロー'],
  ['報酬', '案件内容・関与範囲に応じて個別相談'],
  ['対応地域', '全国対応。オンライン商談を基本に進行します'],
];

function Header() {
  const links = [
    { href: '/#services', label: 'サービス', en: 'Services' },
    { href: '/#company', label: '会社概要', en: 'Company' },
    { href: '#careers', label: '採用', en: 'Careers' },
    { href: '#partners', label: '代理店募集', en: 'Partners' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(246,242,233,.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1.5px solid var(--ink)',
      }}
    >
      <div
        className="wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          padding: '18px 0',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 42,
              height: 42,
              background: 'var(--ink)',
              color: 'var(--yellow)',
              display: 'grid',
              placeItems: 'center',
              borderRadius: 10,
              fontFamily: '"Archivo Black",sans-serif',
              fontSize: 22,
              transform: 'rotate(-6deg)',
            }}
          >
            UT
          </div>
          <div>
            <div
              style={{
                fontFamily: '"Archivo Black",sans-serif',
                fontSize: 17,
                letterSpacing: '-0.01em',
              }}
            >
              Uniq Trash
            </div>
            <div
              style={{
                fontSize: 10,
                letterSpacing: '0.14em',
                opacity: 0.55,
                fontFamily: '"Space Mono",monospace',
              }}
            >
              ユニークトラッシュ
            </div>
          </div>
        </Link>

        <nav className="nav-inline" style={{ display: 'flex', gap: 22, fontSize: 13, fontWeight: 700 }}>
          {links.map((link) => (
            <a key={link.href} href={link.href} style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span>{link.label}</span>
              <span style={{ fontFamily: '"Space Mono",monospace', fontSize: 9, opacity: 0.5 }}>
                {link.en}
              </span>
            </a>
          ))}
        </nav>

        <a href="#entry" className="btn btn-primary join-header-cta" style={{ padding: '10px 18px', fontSize: 13 }}>
          応募・相談 →
        </a>
      </div>
    </header>
  );
}

function SectionHeading({ label, dot = 'var(--blue)', children, copy }) {
  return (
    <div
      className="reveal"
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 24,
        marginBottom: 34,
        flexWrap: 'wrap',
      }}
    >
      <div>
        <div className="sec-label" style={{ marginBottom: 14 }}>
          <span className="dot" style={{ background: dot }} />
          <span>{label}</span>
        </div>
        <h2 className="section">{children}</h2>
      </div>
      {copy && (
        <p style={{ margin: 0, maxWidth: 440, fontSize: 15, lineHeight: 1.85, color: '#333' }}>
          {copy}
        </p>
      )}
    </div>
  );
}

function InfoTable({ rows }) {
  return (
    <div
      className="nb-card reveal"
      style={{
        background: '#fff',
        overflow: 'hidden',
      }}
    >
      {rows.map(([label, body], index) => (
        <div
          key={label}
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(120px, 180px) 1fr',
            gap: 20,
            padding: '18px clamp(18px,3vw,28px)',
            borderBottom: index === rows.length - 1 ? 'none' : '1.5px solid var(--ink)',
          }}
        >
          <div
            style={{
              fontFamily: '"Space Mono",monospace',
              fontSize: 12,
              letterSpacing: '0.12em',
              color: '#666',
              fontWeight: 700,
            }}
          >
            {label}
          </div>
          <div style={{ fontSize: 15, lineHeight: 1.8, fontWeight: 600 }}>{body}</div>
        </div>
      ))}
    </div>
  );
}

export default function JoinPage() {
  return (
    <>
      <Reveal />
      <Header />

      <main className="join-page">
        <section id="top" className="paper-grid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="wrap" style={{ padding: '56px clamp(20px,4vw,56px) 72px', position: 'relative' }}>
            <div
              className="blob"
              style={{
                top: 34,
                right: 'clamp(14px,4vw,56px)',
                width: 'clamp(92px,12vw,136px)',
                height: 'clamp(92px,12vw,136px)',
                background: 'var(--blue)',
                color: '#fff',
                borderRadius: '20px 50% 24px 50%',
                display: 'grid',
                placeItems: 'center',
                textAlign: 'center',
                fontFamily: '"Archivo Black",sans-serif',
                fontSize: 'clamp(11px,1.1vw,14px)',
                lineHeight: 1.2,
                transform: 'rotate(8deg)',
              }}
            >
              JOIN
              <br />
              OUR
              <br />
              WORK
            </div>

            <div className="sec-label join-hero-label" style={{ marginBottom: 20 }}>
              <span className="dot" style={{ background: 'var(--pink)' }} />
              <span>CAREERS & PARTNERS · UNIQ TRASH INC.</span>
            </div>

            <h1 className="mega join-hero-title">
              <span className="join-title-line">作る人と、</span>
              <span className="join-title-line join-title-line-strong">
                <span className="join-title-highlight">届ける人</span>
                <span>を募集。</span>
              </span>
            </h1>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 620px) minmax(260px, 1fr)',
                gap: 28,
                alignItems: 'end',
                marginTop: 34,
              }}
              className="join-hero-grid"
            >
              <p style={{ margin: 0, fontSize: 'clamp(15px,1.25vw,17px)', lineHeight: 1.85, fontWeight: 500 }}>
                ユニークトラッシュは、業務用Webアプリ、Webサイト制作、既存システム刷新を扱う会社です。
                現場の困りごとを仕様に変える<strong>SE系メンバー</strong>と、
                必要としている企業へ提案いただく<strong>パートナー</strong>を募集しています。
              </p>
              <div className="join-hero-actions" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href="#careers" className="btn btn-primary">
                  採用を見る
                </a>
                <a href="#partners" className="btn btn-outline">
                  代理店を見る
                </a>
              </div>
            </div>

            <div
              style={{
                marginTop: 44,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 14,
              }}
            >
              {[
                ['SE / WEB APP', '現場の課題を、使われる仕組みに変える。', 'var(--pink)', '#fff'],
                ['PARTNER', '紹介・共同提案・販売代理まで対応。', 'var(--yellow)', 'var(--ink)'],
                ['REMOTE FIRST', '全国からオンライン中心で参加できます。', 'var(--mint)', 'var(--ink)'],
              ].map(([title, body, bg, ink], index) => (
                <article
                  key={title}
                  className="tile reveal"
                  style={{
                    minHeight: 156,
                    padding: 18,
                    background: bg,
                    color: ink,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transform: index % 2 === 0 ? 'rotate(-0.35deg)' : 'rotate(0.35deg)',
                  }}
                >
                  <div style={{ fontFamily: '"Space Mono",monospace', fontSize: 11, opacity: 0.7 }}>
                    0{index + 1}
                  </div>
                  <div>
                    <div style={{ fontFamily: '"Archivo Black",sans-serif', fontSize: 20 }}>{title}</div>
                    <p style={{ margin: '8px 0 0', fontSize: 13.5, lineHeight: 1.65, fontWeight: 700 }}>
                      {body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="careers" style={{ padding: 'clamp(60px,10vw,112px) 0' }}>
          <div className="wrap">
            <SectionHeading
              label="CAREERS · SE RECRUIT"
              dot="var(--blue)"
              copy="担当領域、技術スタック、働き方をまとめています。正社員だけでなく、業務委託や副業での参加も相談できます。"
            >
              SE採用。
              <br />
              現場を理解し、
              <br />
              仕組みに落とす人へ。
            </SectionHeading>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.05fr) minmax(280px, .95fr)', gap: 22 }} className="join-two-col">
              <InfoTable rows={careerRows} />

              <div
                className="nb-card reveal"
                style={{
                  background: 'var(--blue)',
                  color: '#fff',
                  padding: '28px clamp(22px,3vw,34px)',
                }}
              >
                <div className="sec-label" style={{ marginBottom: 18 }}>
                  <span className="dot" style={{ background: 'var(--yellow)' }} />
                  <span>GOOD FIT</span>
                </div>
                <h3 style={{ margin: 0, fontSize: 'clamp(24px,3vw,34px)', lineHeight: 1.15, fontWeight: 900 }}>
                  コードだけでなく、
                  <br />
                  業務を見る仕事です。
                </h3>
                <div style={{ display: 'grid', gap: 10, marginTop: 24 }}>
                  {fitItems.map((item) => (
                    <div
                      key={item}
                      style={{
                        background: 'rgba(255,255,255,.09)',
                        border: '1.5px solid rgba(255,255,255,.28)',
                        borderRadius: 12,
                        padding: '12px 14px',
                        fontSize: 14,
                        lineHeight: 1.65,
                        fontWeight: 700,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" style={{ padding: 'clamp(60px,10vw,112px) 0', background: 'var(--paper)', borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)' }}>
          <div className="wrap">
            <SectionHeading
              label="PARTNER PROGRAM · AGENCY"
              dot="var(--pink)"
              copy="紹介・共同提案・販売代理まで、関わり方は柔軟です。提案できる領域と当社の支援内容をまとめています。"
            >
              代理店募集。
              <br />
              提案から一緒に。
            </SectionHeading>

            <div style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginBottom: 24 }}>
              {partnerMerits.map((item) => (
                <article
                  key={item.n}
                  className="nb-card reveal"
                  style={{
                    background: item.bg,
                    color: item.ink,
                    padding: '24px 22px 26px',
                  }}
                >
                  <div style={{ fontFamily: '"Space Mono",monospace', fontSize: 11, letterSpacing: '0.14em', opacity: 0.7 }}>
                    {item.n} · MERIT
                  </div>
                  <h3 style={{ margin: '16px 0 10px', fontSize: 24, lineHeight: 1.2, fontWeight: 900 }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, fontWeight: 600 }}>{item.body}</p>
                </article>
              ))}
            </div>

            <InfoTable rows={partnerRows} />
          </div>
        </section>

        <section style={{ padding: 'clamp(60px,9vw,100px) 0' }}>
          <div className="wrap">
            <SectionHeading
              label="FLOW · HOW TO START"
              dot="var(--yellow)"
              copy="まずは短い面談で、経験・顧客層・関わり方を確認します。条件が合えば、小さな案件から始めます。"
            >
              はじめ方は、
              <br />
              シンプルです。
            </SectionHeading>

            <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {[
                ['01', '問い合わせ', 'フォームで「採用応募」または「代理店募集」を選び、現在の状況をお知らせください。'],
                ['02', 'オンライン面談', '経験、得意領域、希望する関わり方、案件イメージを確認します。'],
                ['03', '小さく開始', '副業、紹介1件、共同提案など、無理のない範囲から始めます。'],
              ].map(([n, title, body]) => (
                <article key={n} className="nb-card reveal" style={{ background: '#fff', padding: 22 }}>
                  <div style={{ fontFamily: '"Archivo Black",sans-serif', fontSize: 34, color: 'var(--pink)' }}>{n}</div>
                  <h3 style={{ margin: '8px 0 8px', fontSize: 22, fontWeight: 900 }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: '#333' }}>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="entry" style={{ padding: 'clamp(60px,9vw,100px) 0', background: 'var(--yellow)', borderTop: '2px solid var(--ink)' }}>
          <div className="wrap">
            <div
              className="nb-card reveal"
              style={{
                background: '#fff',
                padding: 'clamp(28px,4vw,46px)',
                display: 'grid',
                gridTemplateColumns: 'minmax(0,1fr) auto',
                gap: 24,
                alignItems: 'center',
              }}
            >
              <div>
                <div className="sec-label" style={{ marginBottom: 14 }}>
                  <span className="dot" style={{ background: 'var(--pink)' }} />
                  <span>ENTRY / CONTACT</span>
                </div>
                <h2 style={{ margin: 0, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1.08, fontWeight: 900 }}>
                  まずは話して、
                  <br />
                  合う形を決めます。
                </h2>
                <p style={{ margin: '16px 0 0', fontSize: 15, lineHeight: 1.8, color: '#333' }}>
                  お問い合わせフォームで、採用応募または代理店募集を選んで送信してください。
                  経歴書、会社資料、提案したい案件がある場合は、本文に概要を添えてください。
                </p>
              </div>
              <a href="/#contact" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
                お問い合わせへ →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
