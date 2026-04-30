export default function Marquee() {
  const items = [
    'ORIGINAL BUSINESS WEB APPS',
    '◆',
    '業務の クセ を アプリ に',
    '✺',
    'SYSTEM REFORM',
    '●',
    'HP 制作',
    '▲',
    'SINCE 2015',
    '◼',
    'TOKYO / JAPAN',
  ];
  const line = (
    <div className="marquee-track">
      {items.concat(items).map((t, i) => (
        <span
          key={i}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 16,
            fontFamily: '"Archivo Black",sans-serif',
            fontSize: 'clamp(28px,5vw,56px)',
            letterSpacing: '-0.01em',
          }}
        >
          {t}
        </span>
      ))}
    </div>
  );
  return (
    <div
      style={{
        borderTop: '2px solid var(--ink)',
        borderBottom: '2px solid var(--ink)',
        background: 'var(--yellow)',
        padding: '14px 0',
        overflow: 'hidden',
      }}
    >
      <div className="marquee">
        {line}
        {line}
      </div>
    </div>
  );
}
