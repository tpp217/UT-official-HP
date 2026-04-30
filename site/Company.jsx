// Company — brief company profile + stats
function Company(){
  const stats = [
    { n:'2015', l:'創業年' },
    { n:'120+', l:'制作プロジェクト' },
    { n:'28',   l:'チームメンバー' },
    { n:'92%',  l:'リピート率' },
  ];

  const info = [
    { k:'社名',   v:'株式会社ユニークトラッシュ / Uniq Trash inc.' },
    { k:'設立',   v:'2015年11月11日' },
    { k:'代表',   v:'代表取締役　枦山 能人' },
    { k:'所在地', v:'東京都多摩市' },
    { k:'事業内容', v:'オリジナル業務用Webアプリ制作・HP制作・システムリフォーム・ブランディング' },
  ];

  return (
    <section id="company" style={{
      padding:'clamp(60px,10vw,120px) 0',
      background:'var(--ink)',color:'#fff',
      borderTop:'2px solid var(--ink)',
    }}>
      <div className="wrap">
        <div className="reveal" style={{marginBottom:40}}>
          <div className="sec-label" style={{marginBottom:14,color:'var(--yellow)'}}>
            <span className="dot" style={{background:'var(--yellow)'}}/>
            <span>COMPANY · 05 / 06</span>
          </div>
          <h2 className="section" style={{color:'#fff'}}>
            私たちについて、<br/>
            <span style={{color:'var(--yellow)'}}>ちょっとだけ。</span>
          </h2>
          <p style={{marginTop:24,maxWidth:640,fontSize:'clamp(15px,1.2vw,17px)',
            lineHeight:1.85,color:'#ddd'}}>
            「ユニークトラッシュ」は、
            <span style={{color:'var(--yellow)',fontWeight:700}}>"他の誰のものでもない、その会社だけのゴミ(=味)"</span>
            という意味。他社に捨てられがちな個性や業務のクセこそが、本当の資産だと私たちは信じています。
          </p>
        </div>

        <div className="reveal" style={{display:'grid',gap:16,marginTop:20,
          gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))'}}>
          {stats.map((s,i)=>(
            <div key={i} style={{
              padding:'26px 22px',border:'1.5px solid #fff3',borderRadius:16,
              background:'rgba(255,255,255,.04)',
            }}>
              <div style={{fontFamily:'"Archivo Black",sans-serif',
                fontSize:'clamp(36px,4.5vw,56px)',color:'var(--yellow)',lineHeight:1,
                letterSpacing:'-0.03em'}}>{s.n}</div>
              <div style={{marginTop:8,fontSize:13,color:'#bbb',
                fontFamily:'"Space Mono",monospace',letterSpacing:'.06em'}}>{s.l}</div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{marginTop:48,display:'grid',gap:28,
          gridTemplateColumns:'1fr'}}>
          <div style={{
            background:'#1f1f1f',borderRadius:20,padding:'clamp(24px,3vw,36px)',
            border:'1.5px solid #333',
          }}>
            {info.map((r,i)=>(
              <div key={i} style={{
                display:'grid',gridTemplateColumns:'minmax(100px,160px) 1fr',
                padding:'14px 0',borderBottom: i===info.length-1?'none':'1px solid #333',
                gap:24,alignItems:'baseline',
              }}>
                <div style={{fontSize:12,color:'#888',
                  fontFamily:'"Space Mono",monospace',letterSpacing:'.1em'}}>{r.k}</div>
                <div style={{fontSize:14.5,color:'#eee',lineHeight:1.7}}>{r.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Company = Company;
