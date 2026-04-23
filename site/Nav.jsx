// Nav — sticky top with mobile drawer
function Nav(){
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(()=>{
    const on = ()=> setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', on); on();
    return ()=> window.removeEventListener('scroll', on);
  },[]);

  const items = [
    {href:'#services', en:'Services', jp:'サービス'},
    {href:'#reform',   en:'Reform',   jp:'リフォーム'},
    {href:'#flow',     en:'Flow',     jp:'制作フロー'},
    {href:'#company',  en:'Company',  jp:'会社概要'},
  ];

  return (
    <>
      <header style={{
        position:'sticky', top:0, zIndex:100,
        background: scrolled ? 'rgba(246,242,233,.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1.5px solid var(--ink)' : '1.5px solid transparent',
        transition:'background .25s, border-color .25s',
      }}>
        <div className="wrap" style={{display:'flex',alignItems:'center',
          justifyContent:'space-between', padding:'18px 0'}}>
          <a href="#top" style={{display:'flex',alignItems:'center',gap:12}}>
            <div style={{
              width:42,height:42,background:'var(--ink)',color:'var(--yellow)',
              display:'grid',placeItems:'center',borderRadius:10,
              fontFamily:'"Archivo Black",sans-serif',fontSize:22,transform:'rotate(-6deg)',
            }}>UT</div>
            <div>
              <div style={{fontFamily:'"Archivo Black",sans-serif',fontSize:17,letterSpacing:'-0.01em'}}>
                Uniq Trash
              </div>
              <div style={{fontSize:10,letterSpacing:'0.14em',opacity:.55,
                fontFamily:'"Space Mono",monospace'}}>
                ユニークトラッシュ
              </div>
            </div>
          </a>

          <nav className="nav-inline" style={{display:'flex',gap:28,fontSize:13,fontWeight:600}}>
            {items.map(it=>(
              <a key={it.href} href={it.href} style={{display:'flex',alignItems:'baseline',gap:6}}>
                <span>{it.jp}</span>
                <span style={{fontFamily:'"Space Mono",monospace',fontSize:9,opacity:.5}}>{it.en}</span>
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn-primary" style={{padding:'10px 18px',fontSize:13}}>
            お問い合わせ →
          </a>

          <button
            className="nav-toggle"
            onClick={()=>setOpen(true)}
            aria-label="menu"
            style={{display:'none',background:'var(--ink)',color:'var(--yellow)',
              width:44,height:44,borderRadius:10,border:0,cursor:'pointer'}}
          >
            <div style={{fontSize:20}}>☰</div>
          </button>
        </div>
      </header>

      <div className={'nav-drawer ' + (open?'open':'')}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{fontFamily:'"Archivo Black",sans-serif',fontSize:18,color:'var(--yellow)'}}>
            MENU
          </div>
          <button onClick={()=>setOpen(false)}
            style={{background:'var(--yellow)',color:'var(--ink)',border:0,
              width:44,height:44,borderRadius:10,fontSize:22,cursor:'pointer'}}>
            ✕
          </button>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:18,marginTop:36}}>
          {items.map(it=>(
            <a key={it.href} href={it.href} onClick={()=>setOpen(false)}
              style={{color:'var(--yellow)',fontSize:32,fontWeight:900,
                fontFamily:'"Zen Kaku Gothic New",sans-serif',letterSpacing:'-0.02em'}}>
              {it.jp} <span style={{fontSize:12,opacity:.5,fontFamily:'"Space Mono",monospace'}}>/ {it.en}</span>
            </a>
          ))}
          <a href="#contact" onClick={()=>setOpen(false)}
            className="btn btn-primary"
            style={{marginTop:20,background:'var(--yellow)',color:'var(--ink)',borderColor:'var(--yellow)',
              alignSelf:'flex-start'}}>
            お問い合わせ →
          </a>
        </div>
      </div>
    </>
  );
}
window.Nav = Nav;
