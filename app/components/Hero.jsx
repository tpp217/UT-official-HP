'use client';
import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [hoverTile, setHoverTile] = useState(null);
  const stageRef = useRef(null);
  const stickerRef = useRef(null);

  useEffect(() => {
    const sticker = stickerRef.current;
    if (!sticker) return;
    // ホバー可能なポインタ環境（PC等）でのみ追従を有効化。
    // モバイル/タッチでは mousemove が無意味なため登録しない。
    if (typeof window.matchMedia === 'function' &&
        !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }
    // mousemove ごとの style 更新を rAF で間引く
    let rafId = null;
    let lastX = 0;
    let lastY = 0;
    const apply = () => {
      rafId = null;
      sticker.style.left = lastX + 'px';
      sticker.style.top = lastY + 'px';
    };
    const onMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (rafId === null) rafId = window.requestAnimationFrame(apply);
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const s = stickerRef.current;
    if (!s) return;
    if (hoverTile) s.classList.add('on');
    else s.classList.remove('on');
  }, [hoverTile]);

  const tiles = [
    { id: 't1', label: 'Corporate', jp: 'コーポレートサイト', bg: 'var(--pink)', ink: '#fff', glyph: '◼' },
    { id: 't2', label: 'Campaign', jp: 'LP・キャンペーン', bg: 'var(--yellow)', ink: 'var(--ink)', glyph: '✺' },
    { id: 't3', label: 'Web App', jp: '業務用Webアプリ', bg: 'var(--blue)', ink: '#fff', glyph: '◆' },
    { id: 't4', label: 'Mobile App', jp: 'スマホアプリ', bg: 'var(--mint)', ink: 'var(--ink)', glyph: '●' },
    { id: 't5', label: 'SaaS/Sys', jp: 'SaaS・システム', bg: 'var(--lavender)', ink: 'var(--ink)', glyph: '▲' },
    { id: 't6', label: 'E-Commerce', jp: 'EC構築', bg: 'var(--coral)', ink: '#fff', glyph: '✦' },
  ];

  return (
    <>
      <div ref={stickerRef} className="cursor-sticker">VIEW →</div>
      <section
        id="top"
        ref={stageRef}
        className="paper-grid"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <div
          className="wrap"
          style={{ padding: '40px clamp(20px,4vw,56px) 60px', position: 'relative' }}
        >
          {/* floating reform badge */}
          <div
            className="blob"
            style={{
              top: 30,
              right: 'clamp(10px, 3vw, 40px)',
              width: 'clamp(90px,12vw,130px)',
              height: 'clamp(90px,12vw,130px)',
              background: 'var(--pink)',
              borderRadius: '50%',
              color: '#fff',
              display: 'grid',
              placeItems: 'center',
              textAlign: 'center',
              fontFamily: '"Archivo Black",sans-serif',
              fontSize: 'clamp(10px,1.1vw,13px)',
              lineHeight: 1.2,
              transform: 'rotate(-12deg)',
            }}
          >
            SYSTEM
            <br />
            REFORM
            <br />
            <span
              style={{
                fontSize: '0.72em',
                fontFamily: '"Space Mono",monospace',
                opacity: 0.9,
                marginTop: 4,
              }}
            >
              AI 移行
            </span>
          </div>

          <div className="sec-label" style={{ marginBottom: 20 }}>
            <span className="dot" style={{ background: 'var(--pink)' }} />
            <span>WE MAKE BUSINESS WEB APPS · EST. 2015</span>
          </div>

          <h1 className="mega">
            業務のクセ、
            <br />
            <span style={{ display: 'inline-block' }}>
              <span
                style={{
                  background: 'var(--yellow)',
                  padding: '0 0.14em',
                  borderRadius: 8,
                  display: 'inline-block',
                  transform: 'rotate(-1.5deg)',
                }}
              >
                まるごと
              </span>
            </span>
            <br />
            アプリに。
          </h1>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 24,
              marginTop: 32,
              alignItems: 'end',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0,520px) auto',
                gap: 32,
                alignItems: 'end',
                flexWrap: 'wrap',
              }}
              className="hero-bottom"
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 'clamp(15px,1.25vw,17px)',
                  lineHeight: 1.8,
                  color: '#1f1f1f',
                  maxWidth: 580,
                  fontWeight: 500,
                }}
              >
                <b>Excel運用も、紙の台帳も、属人化した業務も。</b>
                <br />
                現場のクセをそのままアプリにする、
                <b>オーダーメイドの業務用Webアプリ</b>と コーポレートサイト制作。さらに、20年動き続けてきた
                メインフレーム／オフコン／旧UNIX・Windowsは、
                <b style={{ background: 'var(--yellow)', padding: '0 4px', borderRadius: 4 }}>
                  AI変換で&quot;止めずに&quot;最新環境へ
                </b>
                —— それが私たちの「システムリフォーム」です。
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href="#services" className="btn btn-primary">
                  サービスを見る
                </a>
                <a href="#reform" className="btn btn-outline">
                  リフォーム診断 ↗
                </a>
              </div>
            </div>
          </div>

          {/* Tile grid */}
          <div
            style={{
              marginTop: 48,
              display: 'grid',
              gap: 14,
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            }}
          >
            {tiles.map((t, i) => (
              <a
                key={t.id}
                href="#services"
                onMouseEnter={() => setHoverTile(t.id)}
                onMouseLeave={() => setHoverTile(null)}
                className="tile"
                style={{
                  background: t.bg,
                  color: t.ink,
                  padding: 18,
                  minHeight: 160,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transform: i % 2 === 0 ? 'rotate(-0.4deg)' : 'rotate(0.4deg)',
                }}
              >
                <div className="glyph" style={{ fontSize: 42, lineHeight: 1 }}>
                  {t.glyph}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: '"Archivo Black",sans-serif',
                      fontSize: 18,
                      letterSpacing: '-0.01em',
                      lineHeight: 1,
                    }}
                  >
                    {t.label}
                  </div>
                  <div style={{ fontSize: 12, marginTop: 6, opacity: 0.82, fontWeight: 600 }}>
                    {t.jp}
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 12,
                    fontFamily: '"Space Mono",monospace',
                    fontSize: 10,
                    opacity: 0.6,
                  }}
                >
                  0{i + 1}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
