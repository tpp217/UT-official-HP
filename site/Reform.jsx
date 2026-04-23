// Reform — signature service: system reform (legacy → modern)
function Reform(){
  const items = [
    { from:'メインフレーム',  to:'クラウドネイティブ',  icon:'▣', },
    { from:'オフコン',        to:'Web アプリ',          icon:'◫', },
    { from:'旧 UNIX',         to:'Linux / コンテナ',    icon:'◩', },
    { from:'旧 Windows',      to:'最新 .NET / Cloud',   icon:'◪', },
    { from:'COBOL / RPG',     to:'TypeScript / Go / Python', icon:'◧', },
    { from:'Oracle Forms / Access', to:'React + REST / GraphQL', icon:'◨', },
  ];

  return (
    <section id="reform" style={{padding:'clamp(60px,10vw,120px) 0',position:'relative'}}>
      <div className="wrap">
        <div className="reveal" style={{marginBottom:40}}>
          <div className="sec-label" style={{marginBottom:14}}>
            <span className="dot" style={{background:'var(--lavender)'}}/>
            <span>SYSTEM REFORM · 03 / 06 · 私たちの代名詞</span>
          </div>
          <h2 className="section">
            古いシステム、<br/>
            <span style={{fontFamily:'"Archivo Black",sans-serif',
              display:'inline-block',background:'var(--ink)',color:'var(--yellow)',
              padding:'0 0.14em',borderRadius:8,transform:'rotate(-1deg)'}}>
              AI で引っ越し
            </span>
            します。
          </h2>
        </div>

        <div className="reveal blueprint" style={{padding:'clamp(28px,4vw,48px)',
          display:'grid',gridTemplateColumns:'1fr',gap:32}}>
          <div style={{position:'relative',zIndex:1}}>
            <div style={{fontFamily:'"Space Mono",monospace',fontSize:11,
              letterSpacing:'0.2em',color:'var(--yellow)'}}>
              — REFORM BLUEPRINT —
            </div>
            <p style={{margin:'18px 0 0',maxWidth:760,fontSize:'clamp(15px,1.3vw,18px)',
              lineHeight:1.85,color:'#cfe1ff'}}>
              <b style={{color:'#fff'}}>システムリフォーム</b>とは、先進的なAI変換技術にて、
              メインフレームやオフコンなどのレガシーシステム、老朽化したUNIXやWindowsシステムなどを、
              最新のOS・DB・プログラム言語、フレームワークなどに更新する
              <b style={{color:'var(--yellow)'}}>&nbsp;引っ越し型のシステム更新</b>です。
              業務を止めず、現行仕様を尊重したまま、着実にモダナイズします。
            </p>
          </div>

          {/* Before → After cards */}
          <div style={{position:'relative',zIndex:1,display:'grid',gap:14,
            gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))'}}>
            {items.map((it,i)=>(
              <div key={i} className="pop-hover" style={{
                background:'#fff',color:'var(--ink)',
                borderRadius:16,border:'2px solid var(--ink)',
                padding:'18px 18px 16px',position:'relative',
                boxShadow:'4px 4px 0 rgba(255,210,63,.8)',
              }}>
                <div style={{display:'flex',gap:10,alignItems:'center',
                  fontFamily:'"Space Mono",monospace',fontSize:10,
                  letterSpacing:'0.14em',color:'#999'}}>
                  <span>CASE</span><span>0{i+1}</span>
                </div>
                <div style={{marginTop:10,display:'flex',alignItems:'center',gap:14}}>
                  <div style={{
                    width:48,height:48,borderRadius:10,background:'#f1ede3',
                    display:'grid',placeItems:'center',fontSize:24,
                    border:'1.5px solid var(--ink)',
                  }}>{it.icon}</div>
                  <div>
                    <div style={{fontSize:11,color:'#888',fontFamily:'"Space Mono",monospace'}}>FROM</div>
                    <div style={{fontWeight:800,fontSize:15}}>{it.from}</div>
                  </div>
                </div>
                <div style={{
                  margin:'12px 0',height:22,
                  display:'flex',alignItems:'center',gap:8,
                  fontFamily:'"Space Mono",monospace',fontSize:11,color:'var(--blue)',
                }}>
                  <div style={{flex:1,borderTop:'2px dashed var(--blue)'}}/>
                  <span>AI 変換</span>
                  <div style={{flex:1,borderTop:'2px dashed var(--blue)'}}/>
                  <span>▼</span>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:14}}>
                  <div style={{
                    width:48,height:48,borderRadius:10,background:'var(--mint)',
                    display:'grid',placeItems:'center',fontSize:24,
                    border:'1.5px solid var(--ink)',
                  }}>✦</div>
                  <div>
                    <div style={{fontSize:11,color:'#888',fontFamily:'"Space Mono",monospace'}}>TO</div>
                    <div style={{fontWeight:800,fontSize:15}}>{it.to}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div style={{position:'relative',zIndex:1,display:'grid',gap:14,
            gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))',marginTop:6}}>
            {[
              {n:'30–60%', l:'運用コスト削減'},
              {n:'現行仕様', l:'そのまま引継ぎ'},
              {n:'業務無停止', l:'段階移行で安心'},
              {n:'10年先', l:'持続可能な技術基盤'},
            ].map((b,i)=>(
              <div key={i} style={{
                background:'rgba(255,255,255,.06)',border:'1.5px solid rgba(255,255,255,.2)',
                borderRadius:14,padding:'18px 18px',
              }}>
                <div style={{fontFamily:'"Archivo Black",sans-serif',fontSize:28,
                  color:'var(--yellow)',lineHeight:1}}>{b.n}</div>
                <div style={{marginTop:6,fontSize:13,color:'#cfe1ff'}}>{b.l}</div>
              </div>
            ))}
          </div>

          <div style={{position:'relative',zIndex:1,display:'flex',gap:10,flexWrap:'wrap'}}>
            <a href="#contact" className="btn" style={{
              background:'var(--yellow)',color:'var(--ink)',borderColor:'var(--ink)',
              boxShadow:'4px 4px 0 #fff',
            }}>
              無料リフォーム診断 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Reform = Reform;
