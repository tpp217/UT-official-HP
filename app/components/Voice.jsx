export default function Voice() {
  const vs = [
    { n: '01', name: 'T様 / 物流 T社 ご担当', role: '情報システム部 部長',
      bg: 'var(--yellow)', ink: 'var(--ink)',
      quote: '「Excelで回ってた現場が、アプリになった途端に業務が1/3に。うちのクセを丸ごと汲んでくれた感じ。」' },
    { n: '02', name: 'K様 / K金属工業', role: '代表取締役',
      bg: 'var(--pink)', ink: '#fff',
      quote: '「採用サイトを作り直してもらったら、応募数が3倍。トンマナの作り込みが別格でした。」' },
    { n: '03', name: 'S様 / S商事', role: '管理本部 DX推進',
      bg: 'var(--blue)', ink: '#fff',
      quote: '「20年使ったオフコンを、業務を止めずにWebへ。AI変換でここまでスムーズになるのかと驚き。」' },
  ];

  return (
    <section style={{ padding: 'clamp(60px,10vw,120px) 0' }}>
      <div className="wrap">
        <div className="reveal" style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', gap: 24, marginBottom: 40, flexWrap: 'wrap',
        }}>
          <div>
            <div className="sec-label" style={{ marginBottom: 14 }}>
              <span className="dot" style={{ background: 'var(--coral)' }} />
              <span>VOICE · お客様の声</span>
            </div>
            <h2 className="section">いっしょに<br />作った人たちの、声。</h2>
          </div>
        </div>

        <div style={{
          display: 'grid', gap: 18,
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}>
          {vs.map((v, i) => (
            <figure key={v.n} className="nb-card reveal" style={{
              margin: 0, padding: '26px 24px 24px', background: v.bg, color: v.ink,
              position: 'relative',
              transform: i % 2 === 0 ? 'rotate(-0.6deg)' : 'rotate(0.6deg)',
            }}>
              <div style={{
                fontFamily: '"Archivo Black",sans-serif', fontSize: 64,
                lineHeight: 0.8, marginBottom: 6,
              }}>
                “
              </div>
              <blockquote style={{
                margin: 0, fontSize: 'clamp(15px,1.3vw,17px)',
                lineHeight: 1.75, fontWeight: 500,
              }}>
                {v.quote}
              </blockquote>
              <figcaption style={{
                marginTop: 22, paddingTop: 14,
                borderTop: `1.5px solid ${v.ink === '#fff' ? '#fff4' : 'rgba(20,20,20,.2)'}`,
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%', background: '#fff',
                  border: '2px solid var(--ink)', display: 'grid', placeItems: 'center',
                  fontFamily: '"Archivo Black",sans-serif', fontSize: 16, color: 'var(--ink)',
                }}>{v.name[0]}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{v.name}</div>
                  <div style={{
                    fontSize: 11, opacity: 0.75, marginTop: 2,
                    fontFamily: '"Space Mono",monospace',
                  }}>{v.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
