// 問い合わせフォームの受信エンドポイント
// POST /api/contact → Resend 経由で u.t.bluecolor@gmail.com へメール送信
//
// 必要な環境変数（Vercel に設定）:
//   RESEND_API_KEY  : Resend の API キー
//   CONTACT_TO      : 受信先メール（既定: u.t.bluecolor@gmail.com）
//   CONTACT_FROM    : 送信元（既定: onboarding@resend.dev。独自ドメイン検証後に差し替え）

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {});
  const {
    company = '',
    name = '',
    email = '',
    phone = '',
    services = [],
    budget = '',
    message = '',
    website = '', // honeypot（人間は触らない）
  } = body;

  // honeypot: 値が入っていればbot扱い → 200で握り潰す
  if (website && String(website).trim() !== '') {
    return res.status(200).json({ ok: true });
  }

  // 必須チェック
  const missing = [];
  if (!String(company).trim()) missing.push('company');
  if (!String(name).trim())    missing.push('name');
  if (!String(email).trim())   missing.push('email');
  if (!String(message).trim()) missing.push('message');
  if (missing.length) {
    return res.status(400).json({ error: '必須項目が未入力です', fields: missing });
  }

  // 簡易メール形式チェック
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
    return res.status(400).json({ error: 'メール形式が不正です' });
  }

  // 文字数の上限ガード（10KB相当）
  if (String(message).length > 5000) {
    return res.status(400).json({ error: 'ご相談内容が長すぎます（5000文字以内）' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'メール送信設定が未完了です' });
  }

  const to   = process.env.CONTACT_TO   || 'u.t.bluecolor@gmail.com';
  const from = process.env.CONTACT_FROM || 'UT Site <onboarding@resend.dev>';

  const subject = `【サイト問い合わせ】${company} ${name} 様`;
  const lines = [
    `会社名: ${company}`,
    `お名前: ${name}`,
    `メール: ${email}`,
    `電話: ${phone || '-'}`,
    `ご興味のあるサービス: ${Array.isArray(services) && services.length ? services.join(', ') : '-'}`,
    `ご予算感: ${budget || '-'}`,
    '',
    'ご相談内容:',
    String(message),
  ];
  const text = lines.join('\n');

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      console.error('[contact] Resend error:', resp.status, detail);
      return res.status(502).json({ error: 'メール送信に失敗しました' });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('[contact] Unexpected error:', e);
    return res.status(500).json({ error: 'サーバーエラー' });
  }
}

function safeParse(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
