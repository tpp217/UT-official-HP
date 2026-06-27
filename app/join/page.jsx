import Link from 'next/link';
import Reveal from '../components/Reveal';
import Footer from '../components/Footer';

export const metadata = {
  title: '採用情報・代理店募集 | 株式会社ユニークトラッシュ',
  description:
    '株式会社ユニークトラッシュのSE採用情報と、Web制作・業務アプリ開発を紹介いただく代理店パートナー募集ページです。',
  alternates: { canonical: '/join' },
  openGraph: {
    title: '採用情報・代理店募集 | 株式会社ユニークトラッシュ',
    description:
      'SE採用と代理店パートナー募集。現場のクセをアプリにする仲間と、必要な会社へ届けるパートナーを募集しています。',
    url: '/join',
  },
};

const fitItems = [
  '現場の業務を観察して、仕様に落とし込むのが好き',
  '小さく作って、実運用で改善する進め方が合う',
  'AIや自動化を、実務に効く形で使いたい',
  '古いシステムやExcel運用の置き換えに興味がある',
];

const careerRows = [
  ['職種', 'システムエンジニア / Webアプリケーションエンジニア'],
  ['仕事内容', '業務用Webアプリ、社内システム、HP・LP、レガシーシステム移行の設計・開発・運用'],
  ['主な技術', 'Next.js / React / Node.js / PostgreSQL / Supabase / Vercel / GitHub / Stripe / LINE連携'],
  ['歓迎経験', 'Webアプリ開発、業務システム開発、顧客折衝、要件定義、DB設計、運用保守のいずれか'],
  ['雇用形態', '正社員 / 業務委託 / 副業からの参加も相談可'],
  ['勤務地', 'リモート中心。必要に応じてオンラインMTGで進行'],
];

const partnerMerits = [
  {
    n: '01',
    title: '提案しやすい商材',
    body: 'HP制作だけでなく、業務アプリ、EC、システムリフォームまで相談を広げられます。',
    bg: 'var(--yellow)',
    ink: 'var(--ink)',
  },
  {
    n: '02',
    title: '制作・技術は丸投げOK',
    body: '要件整理、見積、設計、実装、公開後の改善まで、技術側は当社が担当します。',
    bg: 'var(--blue)',
    ink: '#fff',
  },
  {
    n: '03',
    title: '紹介だけでも歓迎',
    body: '営業代行、紹介、共同提案など、既存の顧客接点に合わせた形で組めます。',
    bg: 'var(--mint)',
    ink: 'var(--ink)',
  },
];

const partnerRows = [
  ['対象', '広告代理店、Web制作会社、士業、コンサル会社、地域の法人営業会社、既存顧客を持つ個人事業主'],
  ['募集形態', '紹介パートナー / 販売代理店 / 共同提案パートナー'],
  ['扱える商材', 'コーポレートサイト、LP、業務用Webアプリ、EC、システムリフォーム、運用保守'],
  ['支援内容', '提案資料、初回商談同席、技術ヒアリング、見積作成、納品後フォロー'],
  ['報酬', '案件内容・関与範囲に応じて個別相談'],
  ['地域', '全国対応。オンライン商談を基本に進行'],
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

        <a href="#entry" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 13 }}>
          相談する →
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

            <div className="sec-label" style={{ marginBottom: 20 }}>
              <span className="dot" style={{ background: 'var(--pink)' }} />
              <span>CAREERS & PARTNERS · UNIQ TRASH INC.</span>
            </div>

            <h1 className="mega">
              作る人と、
              <br />
              <span style={{ background: 'var(--yellow)', padding: '0 0.14em', borderRadius: 8 }}>
                届ける人
              </span>
              を募集。
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
                ユニークトラッシュは、業務用Webアプリ、HP制作、レガシーシステム移行を扱う会社です。
                現場の困りごとを仕様に変える<strong>SE系メンバー</strong>と、
                必要としている会社へ商材を届ける<strong>代理店パートナー</strong>を募集しています。
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
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
                ['SE / WEB APP', '業務のクセを、動く仕組みに変える。', 'var(--pink)', '#fff'],
                ['AGENCY', '紹介・共同提案・販売代理、全部相談可。', 'var(--yellow)', 'var(--ink)'],
                ['REMOTE FIRST', '全国から、オンライン中心で参加できます。', 'var(--mint)', 'var(--ink)'],
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
              copy="募集要項だけでなく、どんな仕事を任せたいかが伝わるように、開発内容・技術・向いている人をまとめました。"
            >
              SE採用。
              <br />
              現場を読む人へ。
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
              copy="代理店募集ページで重視される、商材の売りやすさ・支援範囲・問い合わせまでの流れを1ページ内で分かるようにしました。"
            >
              代理店募集。
              <br />
              売れる形まで一緒に。
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
              copy="採用もパートナーも、まずは30分ほど話して、お互いに合うかを確認する流れです。"
            >
              はじめ方は、
              <br />
              シンプルです。
            </SectionHeading>

            <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {[
                ['01', '問い合わせ', '採用・代理店どちらかを明記してご連絡ください。'],
                ['02', 'オンライン面談', '経験、得意領域、組み方、案件イメージをすり合わせます。'],
                ['03', '小さく開始', '副業・紹介1件・共同提案など、始めやすい形から進めます。'],
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
                  採用も代理店も、
                  <br />
                  まずは相談から。
                </h2>
                <p style={{ margin: '16px 0 0', fontSize: 15, lineHeight: 1.8, color: '#333' }}>
                  お問い合わせフォームの「ご相談内容」に、採用希望または代理店希望と書いてください。
                  経歴書や提案資料がある場合は、その旨も添えてください。
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
