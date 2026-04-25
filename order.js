/**
 * Pērle — Order Intake (Cloudflare Pages Function)
 * ─────────────────────────────────────────────────────────────
 * URL: POST /api/order
 *
 * ENV (Cloudflare Pages → Settings → Environment Variables):
 *   TG_BOT_TOKEN  — токен от @BotFather
 *   TG_CHAT_ID    — твой chat_id (от @userinfobot)
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  let order;
  try { order = await request.json(); }
  catch { return json({ error: 'Invalid JSON' }, 400); }

  const { customer = {}, contact = {}, items = [], total, currency = 'RUB', notes = '', language } = order;
  if (!customer.name || !customer.email || !customer.phone) return json({ error: 'Incomplete customer info' }, 400);
  if (!items.length) return json({ error: 'Empty cart' }, 400);

  const fmt = (n) => currency === 'RUB'
    ? new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(n) + ' ₽'
    : '€' + new Intl.NumberFormat('en-IE', { maximumFractionDigits: 0 }).format(n);

  const itemLines = items.map(i =>
    `  • ${escapeMd(i.name)}${i.color ? ` · ${escapeMd(i.color)}` : ''} — ${fmt(i.price)}`
  ).join('\n');

  const lines = [
    '◯  *PĒRLE*  ◯',
    '──────────────',
    '',
    '*НОВАЯ ЗАЯВКА*',
    '',
    '*Клиент*',
    `  ${escapeMd(customer.name)}`,
    `  ${escapeMd(customer.phone)}`,
    `  ${escapeMd(customer.email)}`,
    '',
    '*Канал связи*',
    `  ${escapeMd(contact.method || '—')}  ·  ${escapeMd(contact.value || '—')}`,
    '',
    '*Заказ*',
    itemLines,
    '',
    `*Итого:*  ${fmt(total)}`,
  ];
  if (notes && notes.trim()) {
    lines.push('', '*Комментарий клиента*', `  ${escapeMd(notes)}`);
  }
  lines.push(
    '',
    '──────────────',
    `${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow', hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' })} МСК · ${language || 'ru'}`,
  );
  const message = lines.join('\n');

  if (!env.TG_BOT_TOKEN || !env.TG_CHAT_ID) {
    return json({ error: 'Bot not configured' }, 500);
  }

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${env.TG_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: env.TG_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
      }),
    });
    if (!tgRes.ok) {
      const detail = await tgRes.text();
      return json({ error: 'Telegram API error', detail: detail.slice(0, 300) }, 502);
    }
  } catch (err) {
    return json({ error: 'Telegram fetch failed', detail: String(err) }, 502);
  }

  return json({ ok: true });
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
function escapeMd(s) {
  if (s == null) return '';
  return String(s).replace(/[*_`\[\]]/g, '\\$&');
}
