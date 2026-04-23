// Option C — Craft Studio
// monokus meets appirits: cleaner editorial layout, smaller type, serif accent
// for JP, colorful but muted pastel swatches. Feels like a craft studio /
// design boutique, still playful via hover-wiggle and a 'worn paper' texture.

function HeroCraft() {
  const [hoverIdx, setHoverIdx] = React.useState(null);

  const C = {
    bg: '#ebe6db',
    paper: '#f4f0e4',
    ink: '#1b1a17',
    olive: '#7a8a3d',
    rust: '#c05a3a',
    sky: '#5a8ec7',
    mustard: '#d9a43f',
    plum: '#6b3c63',
  };

  const services = [
    { n: '01', en: 'Corporate',  jp: 'コーポレートサイト', color: C.rust },
    { n: '02', en: 'Campaign',   jp: 'LP・キャンペーン', color: C.mustard },
    { n: '03', en: 'WebApp',     jp: '業務用Webアプリ', color: C.olive },
    { n: '04', en: 'Mobile',     jp: 'スマホアプリ', color: C.sky },
    { n: '05', en: 'SaaS',       jp: 'SaaS・システム', color: C.plum },
  ];

  return (
    <div style={{
      position:'relative', width: '100%', height: '100%', background: C.bg,
      color: C.ink, overflow: 'hidden',
      fontFamily: '"Zen Kaku Gothic New", "Noto Sans JP", sans-serif',
    }}>
      {/* Soft paper noise */}
      <div style={{
        position:'absolute', inset: 0, pointerEvents:'none', opacity: .35,
        backgroundImage: `radial-gradient(${C.ink}0a 1px, transparent 1px)`,
        backgroundSize: '3px 3px',
      }}/>

      {/* Top bar */}
      <div style={{
        position:'relative', display:'flex', justifyContent:'space-between', alignItems:'center',
        padding: '28px 56px', borderBottom: `1px solid ${C.ink}22`,
      }}>
        <div style={{ display:'flex', alignItems:'flex-end', gap: 12 }}>
          <div style={{
            fontFamily:'"Hina Mincho", serif', fontSize: 30, lineHeight: 1,
            letterSpacing: '0.02em',
          }}>
            兎二九
          </div>
          <div style={{ fontFamily:'"Space Mono", monospace', fontSize: 10, letterSpacing:'0.15em', marginBottom: 4, color: C.ink + 'aa' }}>
            UNIQ · TRASH · INC.
          </div>
        </div>
        <nav style={{ display:'flex', gap: 34, fontSize: 13, color: C.ink, fontWeight: 500 }}>
          {['About','Works','Services','System Reform','Journal','Contact'].map(x => (
            <a key={x} style={{ color: C.ink, textDecoration:'none', cursor:'pointer' }}>{x}</a>
          ))}
        </nav>
        <div style={{ fontFamily:'"Space Mono", monospace', fontSize: 11, color: C.ink + 'aa' }}>
          FY26 · 東京
        </div>
      </div>

      {/* Main split */}
      <div style={{
        position:'relative', display:'grid', gridTemplateColumns: '1.2fr 1fr',
        padding: '48px 56px 0', gap: 56, height: 'calc(100% - 86px)',
      }}>
        {/* Left — editorial text */}
        <div>
          <div style={{
            fontFamily:'"Space Mono", monospace', fontSize: 11, letterSpacing:'0.2em',
            color: C.rust, marginBottom: 24,
          }}>
            ISSUE 001 — ORIGINAL BUSINESS WEB APPS
          </div>

          <h1 style={{
            margin: 0, fontFamily:'"Hina Mincho", serif', fontWeight: 400,
            fontSize: 92, lineHeight: 1.02, letterSpacing: '0.01em',
          }}>
            うまく<br/>
            <span style={{ position: 'relative', display:'inline-block' }}>
              回らない
              <svg viewBox="0 0 400 40" preserveAspectRatio="none" style={{
                position:'absolute', left: -6, right: -6, bottom: -4, width: 'calc(100% + 12px)', height: 16,
              }}>
                <path d="M2,20 C80,6 160,32 240,18 C320,4 380,26 398,20" stroke={C.mustard} strokeWidth="6" fill="none" strokeLinecap="round"/>
              </svg>
            </span><br/>
            業務を、<br/>
            <em style={{ fontStyle: 'normal', color: C.olive }}>作り直す。</em>
          </h1>

          <div style={{
            maxWidth: 460, marginTop: 28, fontSize: 14.5, lineHeight: 1.85, color: C.ink + 'dd',
          }}>
            株式会社ユニークトラッシュは、現場でしか出会えない「クセ」を読み取り、
            オリジナルの業務用Webアプリとコーポレートサイトを作る小さな制作会社です。
            <br/><br/>
            メインフレームやオフコン、旧式のUNIX・Windowsなど、
            動かし続けるのが辛くなったシステムは、
            <span style={{ background: C.mustard + '55', padding: '1px 4px' }}>AI変換技術を用いた「システムリフォーム」</span>
            で、最新のOS・DB・言語・フレームワークへ引っ越しを。
          </div>

          <div style={{ display:'flex', gap: 12, marginTop: 32 }}>
            <button style={{
              background: C.ink, color: C.paper, border: 0, padding: '14px 26px',
              borderRadius: 2, fontSize: 13, fontWeight: 600, cursor:'pointer',
              letterSpacing:'0.04em',
            }}>
              制作のご相談 →
            </button>
            <button style={{
              background: 'transparent', color: C.ink, border: `1px solid ${C.ink}`,
              padding: '14px 26px', borderRadius: 2, fontSize: 13, fontWeight: 600, cursor:'pointer',
            }}>
              システムリフォームとは
            </button>
          </div>
        </div>

        {/* Right — index of services w/ swatches */}
        <div style={{ position:'relative' }}>
          <div style={{
            fontFamily:'"Space Mono", monospace', fontSize: 11, letterSpacing:'0.2em',
            color: C.ink + '99', marginBottom: 20,
          }}>
            SERVICES — 取り扱い一式
          </div>

          <div style={{ borderTop: `1px solid ${C.ink}33` }}>
            {services.map((s, i) => {
              const hov = hoverIdx === i;
              return (
                <div
                  key={s.n}
                  onMouseEnter={() => setHoverIdx(i)}
                  onMouseLeave={() => setHoverIdx(null)}
                  style={{
                    borderBottom: `1px solid ${C.ink}33`,
                    padding: '18px 4px',
                    display:'grid', gridTemplateColumns: '40px 1fr auto auto',
                    alignItems:'center', gap: 14, cursor:'pointer',
                    background: hov ? C.paper : 'transparent',
                    transition: 'background .25s',
                  }}
                >
                  <div style={{
                    fontFamily:'"Space Mono", monospace', fontSize: 12,
                    color: C.ink + '77',
                  }}>{s.n}</div>
                  <div style={{
                    display:'flex', alignItems:'baseline', gap: 10,
                    transform: hov ? 'translateX(6px)' : 'translateX(0)',
                    transition: 'transform .3s cubic-bezier(.2,.9,.3,1)',
                  }}>
                    <div style={{
                      fontFamily:'"Hina Mincho", serif', fontSize: 22,
                    }}>{s.jp}</div>
                    <div style={{
                      fontFamily:'"Space Mono", monospace', fontSize: 10,
                      color: C.ink + '88', letterSpacing:'0.1em',
                    }}>{s.en}</div>
                  </div>
                  {/* Animated swatch */}
                  <div style={{
                    width: hov ? 96 : 18, height: 18, background: s.color,
                    borderRadius: 2, transition: 'width .35s cubic-bezier(.2,.9,.3,1)',
                  }}/>
                  <div style={{
                    fontSize: 18, transform: hov ? 'translateX(4px) rotate(-8deg)' : 'none',
                    transition: 'transform .3s',
                    color: C.ink + '88',
                  }}>→</div>
                </div>
              );
            })}
          </div>

          {/* Reform callout card */}
          <div style={{
            marginTop: 28, padding: 20, background: C.plum, color: C.paper, borderRadius: 4,
            position:'relative', overflow:'hidden',
          }}>
            <div style={{
              position:'absolute', top: -20, right: -20, width: 140, height: 140,
              border: `2px dashed ${C.paper}55`, borderRadius: '50%',
            }}/>
            <div style={{ fontFamily:'"Space Mono", monospace', fontSize: 10, letterSpacing:'0.2em', opacity:.8 }}>
              SPECIAL · 06
            </div>
            <div style={{ fontFamily:'"Hina Mincho", serif', fontSize: 24, marginTop: 6, lineHeight: 1.3 }}>
              システムリフォーム
            </div>
            <div style={{ fontSize: 11.5, marginTop: 8, lineHeight: 1.7, opacity: .85 }}>
              メインフレーム・オフコン・旧UNIX/Windowsを、
              AI変換技術で現代のフレームワークへ。
            </div>
          </div>
        </div>
      </div>

      {/* Corner stamp */}
      <div style={{
        position:'absolute', bottom: 24, left: 56,
        display:'flex', gap: 16, alignItems:'center',
        fontFamily:'"Space Mono", monospace', fontSize: 10, letterSpacing:'0.15em', color: C.ink + '88',
      }}>
        <span>◉ EST. 2018</span>
        <span>·</span>
        <span>TOKYO / JAPAN</span>
        <span>·</span>
        <span>〜 小さな制作会社 〜</span>
      </div>
    </div>
  );
}

window.HeroCraft = HeroCraft;
