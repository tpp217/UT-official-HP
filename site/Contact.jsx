// Contact — FormSubmit.co 経由でメール送信（サーバーレス）
//
// 仕様:
//   - AJAX エンドポイント (https://formsubmit.co/ajax/<email>) に JSON POST
//   - 初回送信時に受信先(<email>)へ FormSubmit からアクティベーション確認メールが届く
//     → メール内の Confirm ボタンを押すとサービス有効化、以降は通常運用
//   - スパム対策: ハニーポット (_honey)、ボディ末尾の重複送信ガード
//   - 受信メールはテーブル形式 (_template=table)、Reply-To に入力者メールを設定
//
// 移行メモ:
//   独自ドメイン取得・本番運用後は、FormSubmit ダッシュボードで発行される
//   「ハッシュ化されたエンドポイント (https://formsubmit.co/ajax/<hash>)」に
//   差し替えるとフロントHTMLにメールアドレスを露出させずに済む。

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/u.t.bluecolor@gmail.com';

function Contact(){
  const [services, setServices] = React.useState(new Set());
  const [budget, setBudget] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = React.useState('');
  const formRef = React.useRef(null);

  const toggleService = (s) => {
    const n = new Set(services);
    if (n.has(s)) n.delete(s); else n.add(s);
    setServices(n);
  };

  const svcOptions = ['HP制作','業務用Webアプリ','スマホアプリ','ECサイト','システムリフォーム','ブランディング'];
  const budgets = ['〜50万','50–150万','150–400万','400万〜','相談したい'];

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const fd = new FormData(e.currentTarget);
    const company = (fd.get('company') || '').toString().trim();
    const name    = (fd.get('name')    || '').toString().trim();
    const email   = (fd.get('email')   || '').toString().trim();
    const phone   = (fd.get('phone')   || '').toString().trim();
    const message = (fd.get('message') || '').toString().trim();
    const honey   = (fd.get('_honey')  || '').toString();

    // honeypot: bot が触ったら成功風に握り潰す
    if (honey) { setStatus('success'); return; }

    // FormSubmit に渡すペイロード。日本語キーがそのままメール本文の項目名になる
    const payload = {
      _subject:  `【サイト問い合わせ】${company} ${name} 様`,
      _template: 'table',
      _captcha:  'false',
      _replyto:  email,
      '会社名':  company,
      'お名前':  name,
      'メール':  email,
      '電話':    phone || '-',
      'ご興味のあるサービス': Array.from(services).join(', ') || '-',
      'ご予算感': budget || '-',
      'ご相談内容': message,
    };

    setStatus('sending');
    setErrorMsg('');

    try {
      const resp = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await resp.json().catch(()=>({}));
      if (!resp.ok || (data && data.success === 'false')) {
        throw new Error(data.message || `送信に失敗しました（${resp.status}）`);
      }

      setStatus('success');
      if (formRef.current) formRef.current.reset();
      setServices(new Set());
      setBudget('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || '送信に失敗しました');
    }
  };

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
          {status === 'success' ? (
            <div className="reveal" role="status" aria-live="polite"
              style={{background:'#fff',border:'2px solid var(--ink)',borderRadius:20,
                padding:'clamp(28px,3vw,44px)',boxShadow:'8px 8px 0 var(--ink)'}}>
              <div style={{fontFamily:'"Archivo Black",sans-serif',fontSize:'clamp(28px,3vw,40px)',lineHeight:1.1,marginBottom:14}}>
                送信ありがとうございます！
              </div>
              <p style={{margin:0,fontSize:15,lineHeight:1.85,color:'#222'}}>
                内容を確認のうえ、通常 3 営業日以内にご返信します。
              </p>
              <button type="button" onClick={()=>setStatus('idle')}
                className="btn btn-outline" style={{marginTop:22}}>
                もう一度送る
              </button>
            </div>
          ) : (
          <form ref={formRef} className="reveal" onSubmit={onSubmit}
            style={{background:'#fff',border:'2px solid var(--ink)',borderRadius:20,
              padding:'clamp(24px,3vw,40px)',boxShadow:'8px 8px 0 var(--ink)'}}>

            {/* honeypot（人間には見えない、botは触る） */}
            <div aria-hidden="true" style={{position:'absolute',left:'-9999px',top:'-9999px',height:0,width:0,overflow:'hidden'}}>
              <label>Website
                <input type="text" name="_honey" tabIndex="-1" autoComplete="off"/>
              </label>
            </div>

            <div style={{display:'grid',gap:20,
              gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))'}}>
              <div className="field"><label>会社名 *</label>
                <input name="company" required placeholder="株式会社◯◯" disabled={status==='sending'}/></div>
              <div className="field"><label>お名前 *</label>
                <input name="name" required placeholder="山田 太郎" disabled={status==='sending'}/></div>
              <div className="field"><label>メール *</label>
                <input name="email" type="email" required placeholder="you@company.com" disabled={status==='sending'}/></div>
              <div className="field"><label>電話 (任意)</label>
                <input name="phone" type="tel" placeholder="03-0000-0000" disabled={status==='sending'}/></div>
            </div>

            <div className="field" style={{marginTop:6}}>
              <label>ご興味のあるサービス (複数可)</label>
              <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:6}}>
                {svcOptions.map(s=>(
                  <button type="button" key={s}
                    onClick={()=>toggleService(s)}
                    disabled={status==='sending'}
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
                    disabled={status==='sending'}
                    className={'chip ' + (budget===b?'on':'')}>{b}</button>
                ))}
              </div>
            </div>

            <div className="field">
              <label>ご相談内容 *</label>
              <textarea name="message" required disabled={status==='sending'}
                placeholder="現状の課題、理想の姿、スケジュール感など。ラフな書き方で大丈夫です。"/>
            </div>

            {status === 'error' && (
              <div role="alert" style={{
                marginBottom:14,padding:'12px 14px',border:'2px solid var(--ink)',
                borderRadius:10,background:'#ffe2e8',fontSize:13.5,fontWeight:600,
              }}>
                {errorMsg || '送信に失敗しました。時間を置いて再度お試しください。'}
              </div>
            )}

            <div style={{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}>
              <button type="submit" className="btn btn-primary"
                disabled={status==='sending'}
                style={{
                  background:'var(--pink)',borderColor:'var(--ink)',
                  opacity: status==='sending' ? 0.7 : 1,
                  cursor: status==='sending' ? 'not-allowed' : 'pointer',
                }}>
                {status === 'sending' ? '送信中...' : '送信する →'}
              </button>
              <span style={{fontSize:12,color:'#555',
                fontFamily:'"Space Mono",monospace'}}>
                通常 3 営業日以内にご返信します
              </span>
            </div>
          </form>
          )}
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
