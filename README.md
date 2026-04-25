# Pērle — Запуск на Cloudflare Pages

Полная инструкция: «от голого репозитория до работающего сайта с заявками
в Telegram». ~30–45 минут с нуля.

**Почему Cloudflare Pages, а не Vercel:**
Vercel Hobby (бесплатный) официально запрещает коммерческое использование
любого рода — приём заявок на покупку, обработка платежей и т.д. За это
могут отключить проект. Cloudflare Pages free tier явно разрешает коммерцию,
имеет безлимитный трафик и стабильно работает из РФ.

## 0. Структура проекта

```
perle/
├── index.html              ← фронт (React + Babel inline)
├── perle-data.jsx          ← товары и переводы — единственное место для контента
├── functions/
│   └── api/
│       └── order.js        ← Cloudflare Pages Function: заявки в Telegram
└── README.md
```

## 1. Создаём Telegram-бота

1. Telegram → найти `@BotFather`
2. `/newbot` → имя `Pērle Orders` → username `perle_orders_bot`
3. BotFather присылает **токен** вида `7825436812:AAEjasdfk...` — это `TG_BOT_TOKEN`
4. Найти `@userinfobot` → `/start` → он присылает твой **chat ID** — это `TG_CHAT_ID`
5. Зайти в свой бот, нажать `/start` — иначе бот не сможет тебе писать первым

## 2. Заливаем код на GitHub

```bash
git init
git add .
git commit -m "Pērle initial"
git branch -M main
git remote add origin git@github.com:USERNAME/perle-shop.git
git push -u origin main
```

## 3. Подключаем Cloudflare Pages

1. Зайти на [dash.cloudflare.com](https://dash.cloudflare.com), залогиниться
2. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Выбрать репозиторий `perle-shop`
4. Настройки:
   - Project name: `perle`
   - Production branch: `main`
   - Framework preset: **None**
   - Build command: оставить пустым
   - Build output directory: `/`
5. **Save and Deploy**. Через 30 секунд URL вида `perle.pages.dev`
6. **Settings** → **Environment variables** (Production tab):
   - `TG_BOT_TOKEN` = токен из шага 1
   - `TG_CHAT_ID`   = твой chat ID
7. **Deployments** → последний → `…` → **Retry deployment** (чтобы переменные подхватились)

## 4. Проверяем

1. Открыть выданный URL в браузере
2. Положить товар в корзину → оформить заявку
3. В Telegram должно прийти уведомление

Если не приходит — Cloudflare Dashboard → Pages-проект → **Functions** → **Logs**.
Частая ошибка: `chat not found` = забыл `/start` боту в шаге 1.5.

## 5. Свой домен

1. Купить домен на [Namecheap](https://www.namecheap.com/) или [Porkbun](https://porkbun.com/)
2. Cloudflare Pages → проект → **Custom domains** → ввести `perle.shop`
3. Cloudflare скажет какие NS-серверы прописать у регистратора
4. Через 5–60 минут сайт работает по своему домену с бесплатным SSL

## 6. Локальное тестирование

```bash
# Только статика
python3 -m http.server 8000

# С работающими функциями
npm i -g wrangler
wrangler pages dev .
```

Для локального теста функций — создай `.dev.vars`:
```
TG_BOT_TOKEN=твой_токен
TG_CHAT_ID=твой_id
```

## 7. Что менять в коде

- **Товары** и **переводы** — `perle-data.jsx`
- **Срок изготовления** — `perle-data.jsx` → `order_thanks`
- **Валюта** — в `index.html` поиск по `${product.price}` и `${total}`
- **Telegram-уведомление** — `functions/api/order.js`

## 8. Платежи (через 30–50 заказов)

Добавить в `functions/api/order.js` блок YooKassa:

```js
const auth = btoa(`${env.YOOKASSA_SHOP_ID}:${env.YOOKASSA_SECRET}`);
const yk = await fetch('https://api.yookassa.ru/v3/payments', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${auth}`,
    'Content-Type':  'application/json',
    'Idempotence-Key': crypto.randomUUID(),
  },
  body: JSON.stringify({
    amount: { value: (total_usd * 92).toFixed(2), currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://perle.shop/thanks' },
    capture: true,
    description: `Pērle order ${customer.name}`,
  }),
});
const data = await yk.json();
return json({ ok: true, redirect: data.confirmation?.confirmation_url });
```

YooKassa = РФ-аудитория (нужен ИП/самозанятый). Stripe = мир (нужна латвийская SIA).
