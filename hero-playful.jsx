// Option A — Playful Grid
// Modular color grid. Each service is a tile. On hover the tile pops + rotates,
// a little sticker sprite appears. Mixes JP heading + EN accent. Reminiscent of
// gamefreak / coly meets a design studio.

function HeroPlayful() {
  const [hoverTile, setHoverTile] = React.useState(null);
  const [cursor, setCursor] = React.useState({ x: 0, y: 0 });
  const stageRef = React.useRef(null);

  const onMove = (e) => {
    const r = stageRef.current?.getBoundingClientRect();
    if (!r) return;
    setCursor({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  // Palette — three colorful accents, warm off-white bg
  const C = {
    bg: '#f6f2e9',
    ink: '#141414',
    pink: '#ff5c8a',
    yellow: '#ffd23f',
    blue: '#4a6cf7',
    mint: '#a3e4c4',
    lavender: '#c9b8ff',
    coral: '#ff8a5b',
  };

  const tiles = [
    { id: 't1', label: 'Corporate\nSite', jp: 'コーポレート', bg: C.pink,     ink: '#fff', emoji: '◼' },
    { id: 't2', label: 'LP &\nCampaign',  jp: 'LP / キャンペーン', bg: C.yellow,  ink: C.ink, emoji: '✺' },
    { id: 't3', label: 'Web\nApp',        jp: 'Webアプリ', bg: C.blue,    ink: '#fff', emoji: '◆' },
    { id: 't4', label: 'Mobile\nApp',     jp: 'スマホアプリ', bg: C.mint,    ink: C.ink, emoji: '●' },
    { id: 't5', label: 'SaaS /\nSystem',  jp: 'システム開発', bg: C.lavender,ink: C.ink, emoji: '▲' },
    { id: 't6', label: 'E-Commerce',      jp: 'EC構築', bg: C.coral,   ink: '#fff', emoji: '✦' },
  ];

  return (
    <div
      ref={stageRef}
      onMouseMove={onMove}
      style={{
        position: 'relative', width: '100%', height: '100%',
        background: C.bg, color: C.ink, overflow: 'hidden',
        fontFamily: '"Zen Kaku Gothic New", "Noto Sans JP", sans-serif',
      }}
    >
      {/* Grid paper background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${C.ink}08 1px, transparent 1px), linear-gradient(90deg, ${C.ink}08 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
      }}/>

      {/* Top bar */}
      <div style={{
        position: 'relative', display:'flex', alignItems:'center', justifyContent:'space-between',
        padding: '22px 48px',
      }}>
        <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
          <div style={{
            width: 40, height: 40, background: C.ink, color: C.yellow,
            display: 'grid', placeItems: 'center', borderRadius: 10,
            fontFamily: '"Archivo Black", sans-serif', fontSize: 22, transform: 'rotate(-6deg)',
          }}>UT</div>
          <div>
            <div style={{ fontFamily:'"Archivo Black", sans-serif', fontSize: 18, letterSpacing: '-0.01em' }}>Uniq Trash</div>
            <div style={{ fontSize: 10, letterSpacing: '0.14em', opacity: .55, fontFamily: '"Space Mono", monospace' }}>株式会社ユニークトラッシュ</div>
          </div>
        </div>
        <nav style={{ display:'flex', gap: 28, fontSize: 13, fontWeight: 500 }}>
          {['Services','Works','Reform','Company','Contact'].map(x => (
            <a key={x} style={{ color: C.ink, textDecoration:'none', cursor: 'pointer' }}>{x}</a>
          ))}
        </nav>
        <button style={{
          background: C.ink, color: C.yellow, border: 0, borderRadius: 999,
          padding: '10px 20px', fontWeight: 700, fontSize: 13, cursor: 'pointer',
          fontFamily: '"Archivo", sans-serif',
        }}>
          お問い合わせ →
        </button>
      </div>

      {/* Hero copy */}
      <div style={{ position: 'relative', padding: '20px 48px 32px' }}>
        <div style={{
          display:'flex', alignItems:'center', gap: 10, marginBottom: 18,
          fontFamily:'"Space Mono", monospace', fontSize: 11, letterSpacing: '0.1em',
        }}>
          <span style={{ width: 8, height: 8, background: C.pink, borderRadius: 2 }}/>
          <span>WE MAKE BUSINESS WEB APPS · EST. 2018</span>
        </div>

        <h1 style={{
          margin: 0,
          fontFamily: '"Zen Kaku Gothic New", sans-serif',
          fontWeight: 900,
          fontSize: 108,
          lineHeight: 0.92,
          letterSpacing: '-0.03em',
        }}>
          業務のクセ、<br/>
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <span style={{
              background: C.yellow, padding: '0 14px', borderRadius: 6,
              display: 'inline-block', transform: 'rotate(-1.5deg)',
            }}>
              まるごと
            </span>
          </span>
          アプリに。
        </h1>

        <div style={{ display: 'flex', gap: 40, marginTop: 26, alignItems:'flex-end' }}>
          <p style={{
            margin: 0, maxWidth: 520, fontSize: 15, lineHeight: 1.75, color: '#333',
          }}>
            オリジナルの業務用ウェブアプリ制作とHP制作。
            レガシーなメインフレーム / オフコン / 旧UNIX・Windows を、
            AI変換技術で現代のフレームワークに載せ替える「システムリフォーム」も。
          </p>
          <div style={{ display:'flex', gap: 10 }}>
            <button style={{
              background: C.ink, color: '#fff', border: 0, padding: '14px 22px',
              borderRadius: 12, fontWeight: 700, fontSize: 14, cursor: 'pointer',
            }}>制作事例を見る</button>
            <button style={{
              background: 'transparent', color: C.ink, border: `1.5px solid ${C.ink}`,
              padding: '14px 22px', borderRadius: 12, fontWeight: 700, fontSize: 14, cursor: 'pointer',
            }}>リフォーム診断 ↗</button>
          </div>
        </div>
      </div>

      {/* Service tile grid */}
      <div style={{
        position: 'absolute', left: 48, right: 48, bottom: 32,
        display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, height: 200,
      }}>
        {tiles.map((t, i) => {
          const hovered = hoverTile === t.id;
          const tilt = (i % 2 === 0 ? -1 : 1) * (hovered ? 4 : 0);
          return (
            <div
              key={t.id}
              onMouseEnter={() => setHoverTile(t.id)}
              onMouseLeave={() => setHoverTile(null)}
              style={{
                position:'relative', background: t.bg, color: t.ink,
                borderRadius: 18, padding: 18,
                display:'flex', flexDirection:'column', justifyContent:'space-between',
                transform: `translateY(${hovered ? -10 : 0}px) rotate(${tilt}deg) scale(${hovered ? 1.04 : 1})`,
                transition: 'transform .3s cubic-bezier(.2,.9,.3,1.2), box-shadow .3s',
                boxShadow: hovered
                  ? `0 18px 0 -6px ${C.ink}, 8px 8px 0 ${C.ink}`
                  : `4px 4px 0 ${C.ink}`,
                cursor: 'pointer',
                border: `2px solid ${C.ink}`,
                overflow: 'hidden',
              }}
            >
              <div style={{
                fontSize: 44, lineHeight: 1,
                transform: hovered ? 'rotate(20deg) scale(1.2)' : 'rotate(0) scale(1)',
                transition: 'transform .4s cubic-bezier(.2,.9,.3,1.2)',
              }}>{t.emoji}</div>
              <div>
                <div style={{
                  fontFamily:'"Archivo Black", sans-serif', fontSize: 18,
                  lineHeight: 1, whiteSpace:'pre-line', letterSpacing:'-0.01em',
                }}>{t.label}</div>
                <div style={{ fontSize: 11, marginTop: 6, opacity: .8 }}>{t.jp}</div>
              </div>
              {/* number stamp */}
              <div style={{
                position:'absolute', top: 10, right: 12, fontFamily:'"Space Mono",monospace',
                fontSize: 10, opacity: .6,
              }}>0{i+1}</div>
            </div>
          );
        })}
      </div>

      {/* Floating cursor sticker */}
      {hoverTile && (
        <div style={{
          position: 'absolute', left: cursor.x + 14, top: cursor.y + 14,
          pointerEvents:'none', padding: '6px 10px', background: C.ink, color:'#fff',
          fontSize: 11, fontWeight: 700, borderRadius: 8,
          fontFamily: '"Space Mono", monospace', letterSpacing: '0.06em',
          transform: 'rotate(-4deg)',
        }}>
          VIEW →
        </div>
      )}

      {/* corner marker */}
      <div style={{
        position:'absolute', top: 96, right: 48, width: 110, height: 110,
        background: C.pink, borderRadius: '50%',
        display:'grid', placeItems:'center', color:'#fff',
        fontFamily:'"Archivo Black", sans-serif', fontSize: 12, textAlign:'center',
        transform: 'rotate(-12deg)', border: `2px solid ${C.ink}`,
        boxShadow: `4px 4px 0 ${C.ink}`,
        lineHeight: 1.2,
      }}>
        SYSTEM<br/>REFORM<br/>
        <span style={{ fontSize: 9, fontFamily:'"Space Mono",monospace', opacity:.9, marginTop: 4 }}>
          AI 移行
        </span>
      </div>
    </div>
  );
}

window.HeroPlayful = HeroPlayful;
