// Services — detailed cards with hover wiggle
function Services(){
  const data = [
    { n:'01', title:'コーポレートサイト', en:'Corporate Site', bg:'var(--pink)', ink:'#fff',
      body:'会社の顔になるHP。ブランドの軸を決め、採用・営業・投資家まで一気に効くサイトへ。',
      bullets:['情報設計・IA','CMS構築 (WP/microCMS)','多言語対応']},
    { n:'02', title:'LP・キャンペーン', en:'Landing / Campaign', bg:'var(--yellow)', ink:'var(--ink)',
      body:'1ページで売る。心理設計 × 演出 × 計測まで一気通貫でCVRを追いかけます。',
      bullets:['広告連動LP','季節キャンペーン','A/Bテスト運用']},
    { n:'03', title:'業務用Webアプリ', en:'Web App', bg:'var(--blue)', ink:'#fff',
      body:'現場でしか出会えない「クセ」をそのままアプリに。Excel運用を卒業しましょう。',
      bullets:['受発注・在庫管理','ワークフロー','社内ポータル']},
    { n:'04', title:'スマホアプリ', en:'Mobile App', bg:'var(--mint)', ink:'var(--ink)',
      body:'iOS / Android ネイティブ、または React Native。現場オペレーターが使える設計を。',
      bullets:['iOS / Android','PWA','オフライン対応']},
    { n:'05', title:'SaaS・システム開発', en:'SaaS / System', bg:'var(--lavender)', ink:'var(--ink)',
      body:'自社プロダクトの 0→1、10→100 まで。マルチテナント・課金・権限まわりも得意。',
      bullets:['マルチテナント','Stripe 決済','権限・監査']},
    { n:'06', title:'ECサイト構築', en:'E-Commerce', bg:'var(--coral)', ink:'#fff',
      body:'Shopify / Next Commerce / 独自カート。購入体験まで設計します。',
      bullets:['Shopify カスタム','独自カート','OMS 連携']},
    { n:'07', title:'デザイン・ブランディング', en:'Branding', bg:'#2a2a2a', ink:'var(--yellow)',
      body:'ロゴだけじゃない、"空気"まで設計。プロダクトUIとブランドを一気通貫で。',
      bullets:['VI / ロゴ','UI システム','トンマナ策定']},
    { n:'08', title:'SEO・マーケ支援', en:'SEO / Marketing', bg:'#fff', ink:'var(--ink)',
      body:'作って終わりにしない。計測・改善・コンテンツまで伴走します。',
      bullets:['GA4 / GTM 設計','テクニカルSEO','記事ディレクション']},
    { n:'09', title:'運用保守・コンサル', en:'Ops / Consulting', bg:'var(--mint)', ink:'var(--ink)',
      body:'作ったあとが本番。月次で改善するサブスク型の運用プランも。',
      bullets:['保守 SLA','月次改善','技術顧問']},
  ];

  return (
    <section id="services" style={{padding:'clamp(60px,10vw,120px) 0'}}>
      <div className="wrap">
        <div className="reveal" style={{display:'flex',alignItems:'flex-end',
          justifyContent:'space-between',gap:24,marginBottom:40,flexWrap:'wrap'}}>
          <div>
            <div className="sec-label" style={{marginBottom:14}}>
              <span className="dot" style={{background:'var(--blue)'}}/>
              <span>SERVICES · 01 / 06</span>
            </div>
            <h2 className="section">
              やること、<br/>
              <span style={{background:'var(--mint)',padding:'0 0.14em',borderRadius:8,
                display:'inline-block',transform:'rotate(-1deg)'}}>
                ぜんぶ
              </span>
              あります。
            </h2>
          </div>
          <p style={{margin:0,maxWidth:360,fontSize:15,lineHeight:1.85,color:'#333'}}>
            受託制作からプロダクト開発、そして古いシステムの載せ替えまで。
            「何屋さんか分かりづらい」と言われますが、全部うちです。
          </p>
        </div>

        <div style={{display:'grid',gap:18,
          gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))'}}>
          {data.map((d,i)=>(
            <article key={d.n} className="nb-card reveal" style={{
              background:d.bg,color:d.ink,padding:'26px 24px 28px',
              position:'relative',
              transform: i%3===1?'rotate(0.3deg)':'rotate(-0.3deg)',
            }}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                <div style={{fontFamily:'"Space Mono",monospace',fontSize:11,
                  letterSpacing:'0.16em',opacity:.7}}>
                  {d.n} · {d.en}
                </div>
                <div style={{fontSize:20}}>↗</div>
              </div>
              <h3 style={{margin:'18px 0 10px',fontSize:'clamp(20px,2vw,26px)',
                fontWeight:900,letterSpacing:'-0.02em',lineHeight:1.2}}>
                {d.title}
              </h3>
              <p style={{margin:0,fontSize:14,lineHeight:1.75,opacity:.9}}>
                {d.body}
              </p>
              <div style={{display:'flex',flexWrap:'wrap',gap:6,marginTop:18}}>
                {d.bullets.map(b=>(
                  <span key={b} style={{
                    fontSize:11,padding:'5px 10px',borderRadius:999,
                    border:`1.5px solid ${d.ink === '#fff' ? '#fff6' : 'rgba(20,20,20,.35)'}`,
                    fontFamily:'"Space Mono",monospace',letterSpacing:'0.04em',
                  }}>{b}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
