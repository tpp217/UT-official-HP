// 問い合わせフォームのメール送信 API（Resend 経由）
// 環境変数:
//   RESEND_API_KEY  - Resend の API キー（必須）
//   CONTACT_TO      - 受信メールアドレス（デフォルト u.t.bluecolor@gmail.com）
//   CONTACT_FROM    - 送信元メールアドレス（デフォルト onboarding@resend.dev、Resend で uniq-trash.com を verify 後は noreply@uniq-trash.com 等に差し替え）

export const runtime = 'nodejs';

const TO = process.env.CONTACT_TO || 'u.t.bluecolor@gmail.com';
const FROM = process.env.CONTACT_FROM || 'Uniq Trash <onboarding@resend.dev>';

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function buildHtml(d) {
  const rows = [
    ['会社名', d.company || '-'],
    ['お名前', d.name],
    ['メール', d.email],
    ['電話', d.phone || '-'],
    ['ご興味のあるサービス', d.services || '-'],
    ['ご予算感', d.budget || '-'],
    ['ご相談内容', d.message],
  ];
  const tbody = rows.map(([k, v]) =>
    `<tr><th align="left" style="padding:8px 12px;background:#f4f4f4;border:1px solid #ddd;white-space:nowrap">${escapeHtml(k)}</th><td style="padding:8px 12px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`
  ).join('');
  return `<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>サイト問い合わせ</title></head><body><table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;width:100%;max-width:640px"><tbody>${tbody}</tbody></table></body></html>`;
}

function buildText(d) {
  return [
    `会社名: ${d.company || '-'}`,
    `お名前: ${d.name}`,
    `メール: ${d.email}`,
    `電話: ${d.phone || '-'}`,
    `ご興味のあるサービス: ${d.services || '-'}`,
    `ご予算感: ${d.budget || '-'}`,
    '',
    'ご相談内容:',
    d.message,
  ].join('\n');
}

export async function POST(req) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ success: false, error: 'RESEND_API_KEY未設定' }, { status: 500 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ success: false, error: '不正なリクエスト' }, { status: 400 });
  }

  // honeypot: 値が入っていたらbotとみなして黙って成功を返す
  if (body._honey) {
    return Response.json({ success: true });
  }

  const name = (body.name || '').toString().trim();
  const email = (body.email || '').toString().trim();
  const message = (body.message || '').toString().trim();
  if (!name || !email || !message) {
    return Response.json({ success: false, error: '必須項目が未入力です' }, { status: 400 });
  }

  const company = (body.company || '').toString().trim();
  const phone = (body.phone || '').toString().trim();
  const services = (body.services || '').toString().trim();
  const budget = (body.budget || '').toString().trim();

  const subject = company
    ? `【サイト問い合わせ】${company} ${name} 様`
    : `【サイト問い合わせ】${name} 様`;

  const data = { company, name, email, phone, services, budget, message };
  const payload = {
    from: FROM,
    to: [TO],
    reply_to: email,
    subject,
    html: buildHtml(data),
    text: buildText(data),
  };

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    const text = await resp.text().catch(() => '');
    return Response.json({ success: false, error: `送信に失敗しました（${resp.status}）`, detail: text.slice(0, 200) }, { status: 502 });
  }

  return Response.json({ success: true });
}
