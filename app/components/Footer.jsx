export default function Footer() {
  // 個別ページが用意でき次第、各 href を差し替える
  const cols = [
    { t: 'Services', items: [
      { label: 'LP・キャンペーン', href: '/#services' },
      { label: '業務用Webアプリ', href: '/#services' },
      { label: 'スマホアプリ', href: '/#services' },
      { label: 'SaaS・システム', href: '/#services' },
      { label: 'ECサイト', href: '/#services' },
      { label: 'システムリフォーム', href: '/#reform' },
    ]},
    { t: 'Company', items: [
      { label: '私たちについて', href: '/#company' },
      { label: '採用情報', href: '/join#careers' },
    ]},
    { t: 'Contact', items: [
      { label: 'お問い合わせ', href: '/#contact' },
      { label: '無料相談', href: '/#contact' },
      { label: 'パートナー募集', href: '/join#partners' },
    ]},
  ];

  // 実URLが揃ったら href を差し替える
  const socials = [
    { label: 'X', href: '#' },
    { label: 'Note', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'YouTube', href: '#' },
  ];

  return (
    <footer style={{ background: 'var(--ink)', color: '#ccc', padding: '60px 0 24px' }}>
      <div className="wrap">
        <div style={{
          display: 'grid', gap: 40,
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          paddingBottom: 40, borderBottom: '1px solid #333',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 44, height: 44, background: 'var(--yellow)', color: 'var(--ink)',
                display: 'grid', placeItems: 'center', borderRadius: 10,
                fontFamily: '"Archivo Black",sans-serif', fontSize: 22, transform: 'rotate(-6deg)',
              }}>UT</div>
              <div>
                <div style={{
                  color: '#fff', fontFamily: '"Archivo Black",sans-serif', fontSize: 18,
                }}>
                  Uniq Trash inc.
                </div>
                <div style={{
                  fontSize: 11, color: '#888',
                  fontFamily: '"Space Mono",monospace', letterSpacing: '0.14em',
                }}>
                  株式会社ユニークトラッシュ
                </div>
              </div>
            </div>
            <p style={{ marginTop: 18, fontSize: 13, lineHeight: 1.75, color: '#aaa', maxWidth: 280 }}>
              オリジナルの業務用ウェブアプリ制作とHP制作、
              そしてAI変換によるシステムリフォーム。
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
              {socials.map((s) => {
                const isPlaceholder = s.href === '#';
                const commonStyle = {
                  width: 36, height: 36, borderRadius: 10,
                  border: '1.5px solid #444', display: 'grid', placeItems: 'center',
                  fontSize: 11, fontWeight: 700, color: '#ccc',
                };
                if (isPlaceholder) {
                  return (
                    <span
                      key={s.label}
                      aria-label={s.label}
                      title={`${s.label}（準備中）`}
                      style={{ ...commonStyle, opacity: 0.5, cursor: 'default' }}
                    >
                      {s.label[0]}
                    </span>
                  );
                }
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={commonStyle}
                  >
                    {s.label[0]}
                  </a>
                );
              })}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <div style={{
                color: 'var(--yellow)',
                fontFamily: '"Space Mono",monospace', fontSize: 11,
                letterSpacing: '0.18em', marginBottom: 14,
              }}>{c.t}</div>
              <ul style={{
                listStyle: 'none', padding: 0, margin: 0,
                display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                {c.items.map((it) => (
                  <li key={it.label}>
                    <a href={it.href} style={{ color: '#ddd', fontSize: 13.5 }}>
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          paddingTop: 22, display: 'flex', gap: 16, justifyContent: 'space-between',
          flexWrap: 'wrap', fontSize: 11, color: '#777',
          fontFamily: '"Space Mono",monospace', letterSpacing: '0.1em',
        }}>
          <div>© 2026 UNIQ TRASH INC. ALL RIGHTS RESERVED.</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="/privacy" style={{ color: '#777' }}>PRIVACY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
