// Footer
function Footer(){
  const cols = [
    { t:'Services', items:['コーポレートサイト','LP・キャンペーン','業務用Webアプリ','スマホアプリ','SaaS・システム','ECサイト','システムリフォーム'] },
    { t:'Company',  items:['私たちについて','メンバー','ブログ','プレスリリース','採用情報'] },
    { t:'Contact',  items:['お問い合わせ','無料相談','資料ダウンロード','パートナー募集'] },
  ];
  return (
    <footer style={{background:'var(--ink)',color:'#ccc',padding:'60px 0 24px'}}>
      <div className="wrap">
        <div style={{display:'grid',gap:40,
          gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',
          paddingBottom:40,borderBottom:'1px solid #333'}}>
          <div>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <div style={{width:44,height:44,background:'var(--yellow)',color:'var(--ink)',
                display:'grid',placeItems:'center',borderRadius:10,
                fontFamily:'"Archivo Black",sans-serif',fontSize:22,transform:'rotate(-6deg)'}}>UT</div>
              <div>
                <div style={{color:'#fff',fontFamily:'"Archivo Black",sans-serif',fontSize:18}}>
                  Uniq Trash inc.
                </div>
                <div style={{fontSize:11,color:'#888',
                  fontFamily:'"Space Mono",monospace',letterSpacing:'0.14em'}}>
                  株式会社ユニークトラッシュ
                </div>
              </div>
            </div>
            <p style={{marginTop:18,fontSize:13,lineHeight:1.75,color:'#aaa',maxWidth:280}}>
              オリジナルの業務用ウェブアプリ制作とHP制作、
              そしてAI変換によるシステムリフォーム。
            </p>
            <div style={{display:'flex',gap:8,marginTop:18}}>
              {['X','Note','GitHub','YouTube'].map(s=>(
                <a key={s} href="#" onClick={e=>e.preventDefault()}
                  style={{width:36,height:36,borderRadius:10,
                    border:'1.5px solid #444',display:'grid',placeItems:'center',
                    fontSize:11,fontWeight:700,color:'#ccc'}}>
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
          {cols.map(c=>(
            <div key={c.t}>
              <div style={{color:'var(--yellow)',
                fontFamily:'"Space Mono",monospace',fontSize:11,
                letterSpacing:'0.18em',marginBottom:14}}>{c.t}</div>
              <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:10}}>
                {c.items.map(it=>(
                  <li key={it}><a href="#" onClick={e=>e.preventDefault()}
                    style={{color:'#ddd',fontSize:13.5}}>{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{paddingTop:22,display:'flex',gap:16,justifyContent:'space-between',
          flexWrap:'wrap',fontSize:11,color:'#777',
          fontFamily:'"Space Mono",monospace',letterSpacing:'0.1em'}}>
          <div>© 2026 UNIQ TRASH INC. ALL RIGHTS RESERVED.</div>
          <div style={{display:'flex',gap:16}}>
            <a href="#" onClick={e=>e.preventDefault()} style={{color:'#777'}}>PRIVACY</a>
            <a href="#" onClick={e=>e.preventDefault()} style={{color:'#777'}}>TERMS</a>
            <a href="#" onClick={e=>e.preventDefault()} style={{color:'#777'}}>SITEMAP</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
