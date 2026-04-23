// Option B — Pop Chaos
// Coly/gamefreak energy turned up. Huge marquee-style Japanese katakana title,
// overlapping sticker shapes, offset duplicated text. On hover, layers shift
// apart (parallax), photos shake. Saturated pop palette.

function HeroPop() {
  const [hover, setHover] = React.useState(false);
  const [mx, setMx] = React.useState(0.5);
  const [my, setMy] = React.useState(0.5);
  const ref = React.useRef(null);

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setMx((e.clientX - r.left) / r.width);
    setMy((e.clientY - r.top) / r.height);
  };

  const C = {
    bg: '#ff3d7f',      // hot pink
    ink: '#120f0b',
    cream: '#fff8e7',
    electric: '#00e0a4', // neon mint
    yolk: '#ffe14c',
    cobalt: '#1a2cff',
  };

  const px = (mx - 0.5) * 24;
  const py = (my - 0.5) * 24;

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', width: '100%', height: '100%', background: C.bg,
        color: C.ink, overflow: 'hidden',
        fontFamily: '"RocknRoll One", "Zen Kaku Gothic New", sans-serif',
      }}
    >
      {/* Halftone dots */}
      <div style={{
        position:'absolute', inset: 0, opacity: .22,
        backgroundImage: `radial-gradient(${C.ink} 1.2px, transparent 1.8px)`,
        backgroundSize: '14px 14px',
      }}/>

      {/* Big rotating sticker — upper right */}
      <div style={{
        position:'absolute', top: -80, right: -80, width: 420, height: 420,
        background: C.electric, borderRadius: '50%',
        transform: `translate(${px*0.6}px, ${py*0.6}px) rotate(${hover ? 18 : 0}deg)`,
        transition: 'transform .5s cubic-bezier(.2,.9,.3,1)',
      }}/>
      {/* Yolk burst — lower left */}
      <svg viewBox="0 0 200 200" style={{
        position:'absolute', bottom: -60, left: -60, width: 360, height: 360,
        transform: `translate(${-px*0.4}px, ${-py*0.4}px) rotate(${hover ? -12 : 0}deg)`,
        transition: 'transform .5s',
      }}>
        <path fill={C.yolk} d="M100,8 L118,62 L174,52 L138,96 L186,128 L128,134 L134,190 L100,148 L66,190 L72,134 L14,128 L62,96 L26,52 L82,62 Z"/>
      </svg>

      {/* Top bar */}
      <div style={{
        position:'relative', display:'flex', justifyContent:'space-between', alignItems:'center',
        padding: '24px 44px', zIndex: 5,
      }}>
        <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
          <div style={{
            width: 44, height: 44, background: C.ink, color: C.electric, borderRadius: 14,
            display:'grid', placeItems:'center',
            fontFamily:'"Archivo Black", sans-serif', fontSize: 20,
          }}>U!</div>
          <div style={{ fontFamily:'"RocknRoll One"', fontSize: 20, color: C.cream }}>
            ユニークトラッシュ
          </div>
        </div>
        <nav style={{ display:'flex', gap: 28, fontSize: 13, fontWeight: 700, color: C.cream }}>
          {['制作実績','サービス','リフォーム','会社概要','採用'].map(x => (
            <a key={x} style={{ color: C.cream, textDecoration:'none', cursor:'pointer' }}>{x}</a>
          ))}
        </nav>
        <button style={{
          background: C.ink, color: C.yolk, border: 0, padding: '12px 22px',
          borderRadius: 999, fontWeight: 800, fontSize: 13, cursor:'pointer',
          fontFamily: '"Archivo", sans-serif', letterSpacing: '0.04em',
        }}>
          CONTACT ↘
        </button>
      </div>

      {/* Massive title */}
      <div style={{
        position:'relative', padding: '30px 44px 0', zIndex: 3,
        transform: `translate(${px*0.2}px, ${py*0.2}px)`,
        transition: 'transform .2s',
      }}>
        <div style={{
          fontFamily:'"Archivo Black", sans-serif', fontSize: 13, letterSpacing:'0.16em',
          color: C.ink, background: C.cream, display:'inline-block',
          padding: '6px 12px', borderRadius: 6, marginBottom: 20,
        }}>
          ORIGINAL BUSINESS WEB APPS + HP
        </div>

        {/* Stacked huge title with offset duplicate */}
        <div style={{ position:'relative', lineHeight: 0.82 }}>
          <h1 style={{
            margin: 0, fontFamily:'"RocknRoll One"', fontWeight: 400,
            fontSize: 180, color: C.cream, letterSpacing: '-0.02em',
            textShadow: `6px 6px 0 ${C.ink}`,
          }}>
            クセのある
          </h1>
          <h1 style={{
            margin: 0, fontFamily:'"RocknRoll One"', fontWeight: 400,
            fontSize: 180, color: C.yolk, letterSpacing: '-0.02em',
            marginLeft: 80, marginTop: -6,
            textShadow: `6px 6px 0 ${C.ink}`,
          }}>
            業務を、
          </h1>
          <h1 style={{
            margin: 0, fontFamily:'"RocknRoll One"', fontWeight: 400,
            fontSize: 180, color: C.electric, letterSpacing: '-0.02em',
            marginLeft: 20, marginTop: -6,
            textShadow: `6px 6px 0 ${C.ink}`,
          }}>
            愛おしく。
          </h1>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{
        position:'absolute', left: 44, right: 44, bottom: 32,
        display:'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: 18, alignItems:'end',
        zIndex: 5,
      }}>
        <div style={{ color: C.cream, fontSize: 15, lineHeight: 1.7, fontFamily: '"Zen Kaku Gothic New", sans-serif', fontWeight: 500 }}>
          業務用Webアプリ、HP、そしてレガシーシステムの<br/>
          <b style={{ background: C.cobalt, color: C.cream, padding: '2px 8px', borderRadius: 4 }}>AI式 システムリフォーム</b>
          まで。現場のクセを味方にする制作会社です。
        </div>

        {/* Thumbnail card that shakes on hover */}
        <div
          style={{
            position:'relative', background: C.cream, borderRadius: 18, padding: 14,
            border: `3px solid ${C.ink}`,
            transform: hover ? 'rotate(-3deg) translateY(-8px)' : 'rotate(0) translateY(0)',
            transition: 'transform .35s cubic-bezier(.2,.9,.3,1.3)',
            boxShadow: `8px 8px 0 ${C.ink}`,
          }}
        >
          <div style={{
            height: 120, borderRadius: 10, background: `repeating-linear-gradient(45deg, ${C.cobalt}, ${C.cobalt} 10px, ${C.electric} 10px, ${C.electric} 20px)`,
            display:'grid', placeItems:'center', color: C.cream,
            fontFamily:'"Archivo Black"', fontSize: 14, letterSpacing:'0.1em',
          }}>
            CASE · 01
          </div>
          <div style={{ fontSize: 12, marginTop: 8, fontWeight: 700 }}>物流管理アプリ刷新</div>
          <div style={{ fontSize: 10, color: '#666', marginTop: 2, fontFamily:'"Space Mono"' }}>2025 · Logistics</div>
        </div>

        <div
          style={{
            position:'relative', background: C.ink, borderRadius: 18, padding: 14,
            color: C.cream,
            transform: hover ? 'rotate(3deg) translateY(-14px)' : 'rotate(0) translateY(0)',
            transition: 'transform .4s cubic-bezier(.2,.9,.3,1.3)',
            boxShadow: `8px 8px 0 ${C.electric}`,
          }}
        >
          <div style={{
            height: 120, borderRadius: 10, background: C.bg,
            display:'grid', placeItems:'center',
            fontFamily:'"Archivo Black"', fontSize: 14, letterSpacing:'0.1em', color: C.ink,
          }}>
            CASE · 02
          </div>
          <div style={{ fontSize: 12, marginTop: 8, fontWeight: 700 }}>オフコン→Webへ移行</div>
          <div style={{ fontSize: 10, color: '#bbb', marginTop: 2, fontFamily:'"Space Mono"' }}>2026 · Reform</div>
        </div>
      </div>
    </div>
  );
}

window.HeroPop = HeroPop;
