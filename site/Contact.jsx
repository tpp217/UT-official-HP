// Contact — form with validation feel + alternative contacts
function Contact(){
  const [services, setServices] = React.useState(new Set());
  const [budget, setBudget] = React.useState('');

  const toggleService = (s) => {
    const n = new Set(services);
    if (n.has(s)) n.delete(s); else n.add(s);
    setServices(n);
  };

  const svcOptions = ['HP制作','業務用Webアプリ','スマホアプリ','ECサイト','システムリフォーム','ブランディング'];
  const budgets = ['〜50万','50–150万','150–400万','400万〜','相談したい'];

  return (
    <section id="contact" style={{padding:'clamp(60px,10vw,120px) 0',
      background:'var(--yellow)',borderBottom:'2px solid var(--ink)',
      position:'relative',overflow:'hidden'}}>
      {/* decorative */}
      <svg viewBox="0 0 200 200" style={{
        position:'absolute',top:-30,right:-30,width:240,height:240,opacity:.5,
      }}>
        <circle cx="100" cy="100" r="90" fill="none" stroke="var(--ink)" strokeWidth="2" strokeDasharray="6 6"/>
      </svg>

      <div className="wrap" style={{position:'relative'}}>
        <div className="reveal" style={{marginBottom:40}}>
          <div className="sec-label" style={{marginBottom:14}}>
            <span className="dot" style={{background:'var(--ink)'}}/>
            <span>CONTACT · 06 / 06</span>
          </div>
          <h2 className="section">
            まずは、<br/>
            話してみませんか？
          </h2>
          <p style={{marginTop:20,maxWidth:560,fontSize:'clamp(15px,1.2vw,16px)',
            lineHeight:1.85}}>
            30分のオンライン相談は無料です。
            具体的な要件が決まっていなくても大丈夫。
            業務の困りごとを聞かせてください。
          </p>
        </div>

        <div style={{display:'grid',gap:22,
          gridTemplateColumns:'minmax(0,1fr)'}}>
          <form className="reveal" onSubmit={e=>{e.preventDefault();alert('送信ありがとうございます！（デモ）');}}
            style={{background:'#fff',border:'2px solid var(--ink)',borderRadius:20,
              padding:'clamp(24px,3vw,40px)',boxShadow:'8px 8px 0 var(--ink)'}}>
            <div style={{display:'grid',gap:20,
              gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))'}}>
              <div className="field"><label>会社名 *</label>
                <input required placeholder="株式会社◯◯"/></div>
              <div className="field"><label>お名前 *</label>
                <input required placeholder="山田 太郎"/></div>
              <div className="field"><label>メール *</label>
                <input type="email" required placeholder="you@company.com"/></div>
              <div className="field"><label>電話 (任意)</label>
                <input type="tel" placeholder="03-0000-0000"/></div>
            </div>

            <div className="field" style={{marginTop:6}}>
              <label>ご興味のあるサービス (複数可)</label>
              <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:6}}>
                {svcOptions.map(s=>(
                  <button type="button" key={s}
                    onClick={()=>toggleService(s)}
                    className={'chip ' + (services.has(s)?'on':'')}>{s}</button>
                ))}
              </div>
            </div>

            <div className="field">
              <label>ご予算感</label>
              <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:6}}>
                {budgets.map(b=>(
                  <button type="button" key={b}
                    onClick={()=>setBudget(b)}
                    className={'chip ' + (budget===b?'on':'')}>{b}</button>
                ))}
              </div>
            </div>

            <div className="field">
              <label>ご相談内容 *</label>
              <textarea required placeholder="現状の課題、理想の姿、スケジュール感など。ラフな書き方で大丈夫です。"/>
            </div>

            <div style={{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}>
              <button type="submit" className="btn btn-primary" style={{background:'var(--pink)',borderColor:'var(--ink)'}}>
                送信する →
              </button>
              <span style={{fontSize:12,color:'#555',
                fontFamily:'"Space Mono",monospace'}}>
                通常 3 営業日以内にご返信します
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
