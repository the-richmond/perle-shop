/**
 * Pērle — Order Intake (Cloudflare Pages Function)
 * ─────────────────────────────────────────────────────────────
 * Принимает POST с данными заявки от фронтенда (Checkout component)
 * и шлёт уведомление в Telegram-бот.
 *
 * URL на сайте: POST /api/order  (Pages Functions автоматически
 * мапит functions/api/order.js → /api/order)
 *
 * Переменные окружения (Cloudflare Pages → Settings → Environment Variables):
 *   TG_BOT_TOKEN — токен бота от @BotFather в Telegram
 *   TG_CHAT_ID   — твой chat_id (узнать через @userinfobot)
 *
 * TODO (когда будет готовая платёжка):
 *   После Telegram-уведомления — здесь же создаёшь платёж в YooKassa,
 *   возвращаешь { ok:true, redirect: confirmation_url } и фронт делает
 *   window.location.href = data.redirect.
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  let order;
  try {
    order = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const { customer = {}, delivery = {}, contact = {}, items = [], total_usd, language } = order;
  if (!customer.name || !customer.email || !customer.phone) return json({ error: 'Incomplete customer info' }, 400);
  if (!items.length) return json({ error: 'Empty cart' }, 400);

  // Telegram message
  const itemsText = items.map(i => `  • ${escapeMd(i.name)} — $${i.price}`).join('\n');
  const deliveryBlock = delivery.kind === 'courier'
    ? `   Курьер: ${escapeMd(delivery.city || '—')}, ${escapeMd(delivery.address || '—')}`
    : `   ПВЗ СДЭК: ${escapeMd(delivery.city || '—')} · ${escapeMd(delivery.sdek || '—')}`;

  const message = [
    '🎁 *НОВАЯ ЗАЯВКА Pērle*',
    '',
    `👤 *${escapeMd(customer.name)}*`,
    `📞 ${escapeMd(customer.phone)}`,
    `✉️ ${escapeMd(customer.email)}`,
    '',
    `💬 *Канал связи:* ${escapeMd(contact.method || '—')}`,
    `   ${escapeMd(contact.value || '—')}`,
    '',
    '📦 *Состав:*',
    itemsText,
    `💰 *Итого: $${total_usd}*`,
    '',
    '📍 *Доставка:*',
    deliveryBlock,
    delivery.notes ? `   Комментарий: ${escapeMd(delivery.notes)}` : '',
    '',
    `🌐 Язык: ${language || 'en'}`,
  ].filter(Boolean).join('\n');

  if (!env.TG_BOT_TOKEN || !env.TG_CHAT_ID) {
    return json({ error: 'Bot not configured (set TG_BOT_TOKEN and TG_CHAT_ID in Cloudflare → Pages → Settings → Environment Variables)' }, 500);
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

// Helpers
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
