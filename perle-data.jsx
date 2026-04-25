/*
╔══════════════════════════════════════════════════════════════╗
║  PĒRLE — ДАННЫЕ ПРОДУКТОВ И ПЕРЕВОДЫ                        ║
║  Это единственное место для редактирования контента сайта.  ║
╚══════════════════════════════════════════════════════════════╝

──────────────────────────────────────────────────────────────────
КАК ДОБАВИТЬ НОВЫЙ ТОВАР
──────────────────────────────────────────────────────────────────
Скопируй один объект из массива PRODUCTS, вставь в конец, увеличь id.

ЦЕНЫ:
  price: { rub: 14990, eur: 139 }
  Психологические окончания: *990, *790, *490.
  Курс зашит, обновляй вручную при сильных колебаниях.

ОСТАТКИ:
  stock: 5    — общий счётчик. Когда отправляешь заказ, открывай
                этот файл, уменьшай число на 1, делай git push.
                stock: 0 → карточка серая, кнопка "В корзину" disabled.
                stock: 1, 2, 3 → на карточке покажется "Осталось N".

ЦВЕТА (важно!):
  colors — массив. ПЕРВЫЙ цвет — дефолтный (показывается при заходе).
  Можешь добавить любое количество — в карточке появятся свотчи (кружки).

  Каждый цвет имеет:
  • id     — латиница, без пробелов  (например 'cognac', 'noir')
  • name   — { ru, en, lv } — отображаемое название
  • hex    — цвет swatch-кружка (один цвет)
  • svg    — { base, hi, dk } — три оттенка для SVG-плейсхолдера
              base = основной · hi = блик · dk = тень
              (используется ТОЛЬКО когда фото ещё нет)

  Фотографии (опциональные, добавляй когда снимешь):
  • photo_closed       — закрытый кошелёк, квадрат 800×800,
                         изделие по центру, занимает ~60% ширины
  • photo_ajar         — приоткрытый (на hover) — ~70% ширины
  • frames_open        — массив stop-motion кадров, от закрытого к
                         открытому. 3-7 кадров обычно хватает.
                         Последний кадр = полностью открытый (~90% ширины).

  Фотографий может НЕ быть — система сама нарисует SVG-плейсхолдер.
  Если есть `photo_closed` но нет `photo_ajar` — на hover ничего не
  меняется (просто показывается closed).

КАЧЕСТВА (qualities):
  Это короткие маркеры на самой карточке товара (не "О нас").
  Каждое качество — одна строка, до 4-5 слов.

──────────────────────────────────────────────────────────────────
КАК СНИМАТЬ
──────────────────────────────────────────────────────────────────
КОНТЕЙНЕР: квадрат, 800×800px минимум (для retina).

CLOSED (закрытый):
  Кошелёк по центру, занимает ~60% ширины кадра.
  Свет слева сверху под 45°. Мраморная или льняная подложка.
  Знак Pērle хорошо виден.

AJAR (приоткрытый, на hover):
  Та же позиция, та же подложка.
  Приоткрыт на ~30°, видна часть внутренней фактуры.

FRAMES_OPEN (stop-motion открывания):
  Снимай на штативе, не двигай камеру.
  3-7 кадров: closed → 30° → 60° → 90° → 120° → fully open.
  Каждый кадр — отдельный JPG/PNG.
  Последний кадр — кошелёк полностью раскрыт (~90% ширины кадра).

──────────────────────────────────────────────────────────────────
*/

const PRODUCTS = [
  {
    id: 1,
    type: 'bifold',
    stock: 5,
    name: { ru: 'Bi-Fold',         en: 'Bi-Fold',          lv: 'Bi-Fold' },
    full: { ru: 'Бумажник Bi-Fold', en: 'Bi-Fold Wallet',   lv: 'Bi-Fold maks' },
    price: { rub: 14990, eur: 139 },
    dims: '10.5 × 8.5 cm · 85g',
    desc: {
      ru: 'Бумажник bi-fold ручной работы из итальянской кожи с холодным тиснением под рептилию. Три слота для карт с каждой стороны, отдел для купюр на всю длину. Знак Pērle из перламутровой фольги внутри. Прошито вручную седельным швом, индивидуально пронумеровано.',
      en: 'Hand-stitched bi-fold in Italian leather with cold-pressed reptile embossing. Three card slots per side, full-length bill compartment. Pearl foil Pērle mark on interior. Saddle-stitched by hand, individually numbered.',
      lv: 'Rokām šūts bi-fold maks no Itālijas ādas ar auksti presētu rāpuļu iespieddizainu. Trīs karšu sloti katrā pusē, pilna garuma banknošu nodalījums. Pērle pērļu folijas zīmogs iekšpusē. Šūts ar rokām ar segla šuvi, individuāli numurēts.',
    },
    qualities: {
      ru: ['Кожа Conceria 800', 'Холодное тиснение', 'Седельный шов вручную', 'Нумерация от руки', 'Подарочная коробка'],
      en: ['Conceria 800 leather',  'Cold-pressed embossing',  'Hand saddle stitch',     'Hand-numbered',      'Gift box included'],
      lv: ['Conceria 800 āda',      'Auksti presēts dizains',  'Roku segla šuve',        'Roku numerācija',    'Dāvanu kastīte'],
    },
    colors: [
      {
        id: 'cognac',
        name: { ru: 'Коньяк', en: 'Cognac', lv: 'Konjaks' },
        hex:  '#7a3a18',
        svg:  { base: '#7a3a18', hi: '#b06030', dk: '#4a200c' },
        // Раскомментируй когда снимешь:
        // photo_closed: 'images/bifold-cognac-closed.jpg',
        // photo_ajar:   'images/bifold-cognac-ajar.jpg',
        // frames_open:  ['images/bifold-cognac-01.jpg','images/bifold-cognac-02.jpg','images/bifold-cognac-03.jpg','images/bifold-cognac-04.jpg','images/bifold-cognac-05.jpg'],
      },
      {
        id: 'noir',
        name: { ru: 'Чёрный', en: 'Noir', lv: 'Melns' },
        hex:  '#181210',
        svg:  { base: '#181210', hi: '#2e2018', dk: '#060404' },
      },
    ],
  },
  {
    id: 2,
    type: 'cardholder',
    stock: 4,
    name: { ru: 'Card Holder',  en: 'Card Holder',  lv: 'Karšu turētājs' },
    full: { ru: 'Карточница',   en: 'Card Holder',  lv: 'Karšu turētājs' },
    price: { rub: 17990, eur: 169 },
    dims: '10 × 10 cm · 55g',
    desc: {
      ru: 'Квадратная карточница из итальянской кожи с тиснением под рептилию. Три слота на каждой внешней стороне, три на каждой внутренней — двенадцать карт итого. Конструкция из одного куска кожи, знак Pērle снаружи.',
      en: 'Square card holder in Italian leather with reptile embossing. Three card slots on each outer face, three per inner face — twelve cards total. Single-piece construction, pearl foil Pērle mark on exterior.',
      lv: 'Kvadrātveida karšu turētājs no Itālijas ādas ar rāpuļu iespieddizainu. Trīs karšu sloti katrā ārējā pusē, trīs katrā iekšējā — kopā divpadsmit kartes. Viena gabala konstrukcija, Pērle pērļu folijas zīmogs ārpusē.',
    },
    qualities: {
      ru: ['Кожа Conceria 800', 'Из одного куска', '12 слотов для карт', 'Седельный шов вручную', 'Нумерация от руки'],
      en: ['Conceria 800 leather',  'Single-piece construction', '12 card slots total',  'Hand saddle stitch',  'Hand-numbered'],
      lv: ['Conceria 800 āda',      'Viena gabala konstrukcija', '12 karšu sloti',       'Roku segla šuve',     'Roku numerācija'],
    },
    colors: [
      {
        id: 'noir',
        name: { ru: 'Чёрный', en: 'Noir', lv: 'Melns' },
        hex:  '#181210',
        svg:  { base: '#181210', hi: '#2e2018', dk: '#060404' },
      },
      {
        id: 'cognac',
        name: { ru: 'Коньяк', en: 'Cognac', lv: 'Konjaks' },
        hex:  '#7a3a18',
        svg:  { base: '#7a3a18', hi: '#b06030', dk: '#4a200c' },
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// FORMAT PRICE — единая функция форматирования цены
// Использование во всём приложении: window.PRICE(product, lang)
// ─────────────────────────────────────────────────────────────
function PRICE(product, lang) {
  if (lang === 'ru') {
    // 14 990 ₽   (тонкий пробел — Russian convention)
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(product.price.rub);
  }
  // €139 / €169 — без копеек, для en и lv
  return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(product.price.eur);
}
function PRICE_VALUE(product, lang) {
  return lang === 'ru' ? product.price.rub : product.price.eur;
}
function PRICE_CURRENCY(lang) {
  return lang === 'ru' ? 'RUB' : 'EUR';
}

// ─────────────────────────────────────────────────────────────
// I18N — переводы интерфейса
// ─────────────────────────────────────────────────────────────
const I18N = {
  ru: {
    collections:'Коллекции', about:'О нас', riga:'Рига', cart:'Корзина',
    hero_tagline:'Рига · Est. 2026',
    hero_sub:'Семейная мастерская из Петербурга. Кожаные аксессуары ручной работы.',
    view_collection:'Смотреть коллекцию',
    details:'Подробнее', add_cart:'В корзину', sold_out:'Нет в наличии',
    stock_left:'Осталось',
    cart_empty:'Корзина пуста', checkout:'Оформить заказ',
    total:'Итого', back:'Назад', continue:'Продолжить', place_order:'Заказать',
    return_shop:'Вернуться в магазин',
    color:'Цвет',
    free_shipping:'Бесплатная доставка по России. Международная — обсуждается лично.',
    drag_hint:'Возьмите кошелёк в руку',
    tap_to_open:'Нажмите, чтобы открыть',

    // Checkout
    contact:'Контакты', confirm:'Подтверждение',
    full_name:'Имя и фамилия', email:'Email', phone:'Телефон',
    notes_label:'Комментарий (необязательно)',
    notes_ph:'Гравировка, особые пожелания, удобное время для связи…',
    how_to_contact:'Как с вами связаться?',
    how_to_contact_sub:'Каждый заказ Pērle оформляется лично. Я свяжусь с вами в течение 24 часов — обсудим оплату и способ доставки.',
    your_handle:'логин / номер',
    payment_explainer:'Оплата картой (Visa / Mastercard / Мир) или СБП. Бесплатная доставка по России; международная отдельно (от €20 в Европу, от €40 в остальной мир).',
    send_request:'Отправить заявку',
    submitting:'Отправляем…',

    // Order received
    order_received:'Заявка принята',
    order_thanks:'Спасибо за доверие к Pērle. В течение 24 часов я свяжусь с вами в выбранном канале — обсудим оплату и доставку. Каждое изделие изготавливается вручную, отправка в течение 5–7 рабочих дней с момента оплаты.',

    // Footer
    footer:'© 2026 Pērle · Рига, Латвия',
    nav_returns:'Возврат',
    nav_privacy:'Персональные данные',

    // Returns modal
    returns_title:'Возврат и обмен',
    returns_body:`Вы можете вернуть изделие Pērle в течение 14 календарных дней с момента получения, если оно вам не подошло.

Условия возврата:
• Изделие не использовалось, не имеет следов эксплуатации
• Сохранены подарочная коробка, шёлковая лента и бирка с номером
• Возврат пересылкой за счёт покупателя
• Деньги возвращаются на тот же счёт/карту, с которого была оплата, в течение 5 рабочих дней с момента получения возврата

По индивидуальным заказам (гравировка, нестандартные цвета и материалы) возврат не предусмотрен.

Для оформления возврата напишите мне в Telegram или на email — обсудим детали.`,

    // Privacy modal
    privacy_title:'Обработка персональных данных',
    privacy_body:`Оставляя заявку на сайте perle-riga.com, вы даёте согласие на обработку ваших персональных данных в соответствии с ФЗ-152 «О персональных данных».

Какие данные собираются:
• Имя и фамилия
• Email и телефон
• Логин в выбранном мессенджере
• Адрес доставки (после личного контакта)

Зачем:
• Связаться с вами по поводу заказа
• Согласовать оплату и доставку
• Отправить трек-номер

Что НЕ делается:
• Данные не передаются третьим лицам, кроме служб доставки
• Не используются для рекламной рассылки без отдельного согласия
• Не продаются и не публикуются

Вы можете в любой момент попросить удалить ваши данные — напишите на perleriga@gmail.com или в Telegram.`,
    close_modal:'Закрыть',

    // About — unified first-person voice
    about_title:'О Pērle',
    about_s1:'Семейная мастерская',
    about_p1:'Pērle — латышское «жемчужина» — это маленькая семейная мастерская, основанная в Риге в 2026 году. Я, Ричард, делаю кошельки и аксессуары из итальянской кожи. Моя мама работает с пряжей — её вязаные изделия со временем появятся в отдельной коллекции.',
    about_s2:'Кожа',
    about_p2:'Я работаю с историческими итальянскими дубильнями, в том числе Conceria 800. Только полнолицевой растительного дубления — кожа с характером, который становится глубже со временем. Тиснение под рептилию прессуется холодным способом, чтобы сохранить натуральную фактуру под ним.',
    about_s3:'Знак',
    about_p3:'Я прошиваю каждое изделие седельным швом вручную — двумя иглами, без машины. Знак Pērle ставлю перламутровой фольгой. Каждый кошелёк нумерую от руки — серия закрывается на пятисотом.',

    // Riga — same first-person register
    riga_title:'Рига',
    riga_sub:'Город, давший бренду имя',
    riga_p1:'Я родился в Риге — столице Латвии, городе ар-нуво и янтарного света над Даугавой. Та тихая северная элегантность — то, что я ищу в каждом изделии.',
    riga_p2:'Балтийское море тысячелетиями давало миру лучший янтарь. Ту же северную ясность — неторопливую, точную, честную — я хочу видеть в коже. Ничего лишнего, только необходимое и красивое.',
    riga_p3:'Имя Pērle (жемчужина с долгой ē балтийского гласного) отражает эту философию. Жемчужина рождается медленно — нужно время, давление и терпение.',
  },

  en: {
    collections:'Collections', about:'About', riga:'Riga', cart:'Cart',
    hero_tagline:'Riga · Est. 2026',
    hero_sub:'A small family atelier from Saint Petersburg. Handmade leather accessories.',
    view_collection:'View Collection',
    details:'Details', add_cart:'Add to Cart', sold_out:'Sold Out',
    stock_left:'Only',
    cart_empty:'Your cart is empty', checkout:'Checkout',
    total:'Total', back:'Back', continue:'Continue', place_order:'Place Order',
    return_shop:'Return to Shop',
    color:'Colour',
    free_shipping:'Free shipping in Russia. International — discussed personally.',
    drag_hint:'Pick the wallet up',
    tap_to_open:'Tap to open',

    contact:'Contact', confirm:'Confirm',
    full_name:'Full Name', email:'Email', phone:'Phone',
    notes_label:'Notes (optional)',
    notes_ph:'Engraving, special wishes, convenient time to reach you…',
    how_to_contact:'How shall we reach you?',
    how_to_contact_sub:'Each Pērle order is finalised personally. I will contact you within 24 hours to discuss payment and delivery.',
    your_handle:'handle / number',
    payment_explainer:'Card (Visa / Mastercard / Mir) or SBP. Free shipping in Russia; international charged separately (from €20 to Europe, from €40 elsewhere).',
    send_request:'Send Request',
    submitting:'Sending…',

    order_received:'Request received',
    order_thanks:'Thank you for your trust in Pērle. I will contact you within 24 hours via your chosen channel to discuss payment and delivery. Each piece is made by hand — dispatched within 5–7 business days from payment.',

    footer:'© 2026 Pērle · Riga, Latvia',
    nav_returns:'Returns',
    nav_privacy:'Privacy',

    returns_title:'Returns & Exchanges',
    returns_body:`You may return any Pērle piece within 14 days of receipt if it does not suit you.

Conditions:
• Item unused, no signs of wear
• Original gift box, silk ribbon and number tag preserved
• Return shipping at buyer's expense
• Refund to the same account/card used for payment, within 5 business days of receiving the return

Custom orders (engraving, non-standard colours or materials) are not eligible for return.

To start a return please contact me via Telegram or email.`,

    privacy_title:'Personal Data Processing',
    privacy_body:`By submitting a request on perle-riga.com you consent to the processing of your personal data.

Data collected:
• Name
• Email and phone
• Messenger handle
• Delivery address (after personal contact)

Purpose:
• Contact you about your order
• Arrange payment and shipping
• Send tracking number

What is NOT done:
• Data is not shared with third parties except shipping services
• No marketing emails without separate consent
• Not sold or published

You may request deletion of your data at any time — email perleriga@gmail.com or message via Telegram.`,
    close_modal:'Close',

    about_title:'About Pērle',
    about_s1:'A Family Atelier',
    about_p1:'Pērle — Latvian for pearl — is a small family atelier founded in Riga in 2026. I, Richard, make wallets and accessories from Italian leather. My mother works with yarn — her knitted pieces will join the collection in their own line in time.',
    about_s2:'The Leather',
    about_p2:'I work with heritage Italian tanneries — including Conceria 800. Only full-grain, vegetable-tanned hides — leather with character that deepens with age. The reptile pattern is cold-pressed to preserve the natural grain beneath.',
    about_s3:'The Mark',
    about_p3:'I saddle-stitch every piece by hand — two needles, no machine. The Pērle mark goes on in pearl foil. I number each wallet by hand; the series closes at five hundred.',

    riga_title:'Rīga',
    riga_sub:'The city that gave the brand its name',
    riga_p1:'I was born in Riga — capital of Latvia, a city of Art Nouveau facades and amber light over the Daugava. That quiet northern elegance is what I look for in every piece.',
    riga_p2:'The Baltic Sea has produced the world\'s finest amber for millennia. The same northern clarity — unhurried, precise, honest — is what I want to see in leather. Nothing extra, only what is essential and beautiful.',
    riga_p3:'The name Pērle (pearl, with the long ē of the Baltic vowel) captures this philosophy. A pearl is not made quickly. It takes time, pressure, and patience.',
  },

  lv: {
    collections:'Kolekcijas', about:'Par mums', riga:'Rīga', cart:'Grozs',
    hero_tagline:'Rīga · Est. 2026',
    hero_sub:'Maza ģimenes darbnīca no Sanktpēterburgas. Roku darba ādas aksesuāri.',
    view_collection:'Skatīt kolekciju',
    details:'Detaļas', add_cart:'Pievienot grozam', sold_out:'Nav pieejams',
    stock_left:'Atlikuši',
    cart_empty:'Jūsu grozs ir tukšs', checkout:'Noformēt pasūtījumu',
    total:'Kopā', back:'Atpakaļ', continue:'Turpināt', place_order:'Pasūtīt',
    return_shop:'Atgriezties veikalā',
    color:'Krāsa',
    free_shipping:'Bezmaksas piegāde Krievijā. Starptautiskā — apspriežama personīgi.',
    drag_hint:'Paņemiet maku rokā',
    tap_to_open:'Pieskarieties, lai atvērtu',

    contact:'Kontakti', confirm:'Apstiprinājums',
    full_name:'Vārds Uzvārds', email:'E-pasts', phone:'Tālrunis',
    notes_label:'Komentārs (nav obligāts)',
    notes_ph:'Gravīra, īpašas vēlmes, ērts saziņas laiks…',
    how_to_contact:'Kā ar jums sazināties?',
    how_to_contact_sub:'Katrs Pērle pasūtījums tiek noformēts personīgi. Es ar jums sazināšos 24 stundu laikā, lai apspriestu maksājumu un piegādi.',
    your_handle:'profils / numurs',
    payment_explainer:'Karte (Visa / Mastercard / Mir) vai SBP. Bezmaksas piegāde Krievijā; starptautiskā tiek aprēķināta atsevišķi (no €20 uz Eiropu, no €40 citur).',
    send_request:'Nosūtīt pieteikumu',
    submitting:'Nosūta…',

    order_received:'Pieteikums saņemts',
    order_thanks:'Paldies par uzticību Pērle. Es ar jums sazināšos 24 stundu laikā izvēlētajā kanālā, lai apspriestu maksājumu un piegādi. Katrs izstrādājums tiek darināts ar rokām un tiek nosūtīts 5–7 darba dienu laikā pēc maksājuma.',

    footer:'© 2026 Pērle · Rīga, Latvija',
    nav_returns:'Atgriešana',
    nav_privacy:'Datu aizsardzība',

    returns_title:'Atgriešana un apmaiņa',
    returns_body:`Jūs varat atgriezt jebkuru Pērle izstrādājumu 14 dienu laikā pēc saņemšanas, ja tas jums neder.

Nosacījumi:
• Izstrādājums nav lietots, bez nēsāšanas pēdām
• Saglabāta dāvanu kastīte, zīda lente un numura zīmīte
• Atgriešanas sūtījums pircēja izdevumi
• Naudas atmaksa uz to pašu kontu/karti 5 darba dienu laikā

Pielāgotiem pasūtījumiem (gravīra, nestandarta krāsas vai materiāli) atgriešana nav iespējama.

Lai sāktu atgriešanu, sazinieties ar mani Telegram vai e-pastā.`,

    privacy_title:'Personas datu apstrāde',
    privacy_body:`Iesniedzot pieteikumu vietnē perle-riga.com, jūs piekrītat savu personas datu apstrādei.

Tiek vākti dati:
• Vārds
• E-pasts un tālrunis
• Messenger profils
• Piegādes adrese (pēc personīgas saziņas)

Mērķis:
• Sazināties par jūsu pasūtījumu
• Vienoties par maksājumu un piegādi
• Nosūtīt izsekošanas numuru

Kas NETIEK darīts:
• Dati netiek nodoti trešajām pusēm, izņemot piegādes pakalpojumus
• Bez atsevišķas piekrišanas netiek izmantoti reklāmai
• Netiek pārdoti vai publicēti

Jūs jebkurā laikā varat pieprasīt savu datu dzēšanu — rakstiet uz perleriga@gmail.com vai Telegram.`,
    close_modal:'Aizvērt',

    about_title:'Par Pērle',
    about_s1:'Ģimenes darbnīca',
    about_p1:'Pērle — latviešu vārds "pērle" — ir maza ģimenes darbnīca, dibināta Rīgā 2026. gadā. Es, Ričards, darinu makus un aksesuārus no Itālijas ādas. Mana mamma strādā ar dziju — viņas adītie izstrādājumi laika gaitā pievienosies kolekcijai atsevišķā līnijā.',
    about_s2:'Āda',
    about_p2:'Es strādāju ar mantojuma Itālijas miecētavām, tostarp Conceria 800. Tikai pilnas graudu, augu miecētas ādas — āda ar raksturu, kas padziļinās ar laiku. Rāpuļu rakstu presēju aukstā veidā, lai saglabātu dabisko struktūru zem tā.',
    about_s3:'Zīmogs',
    about_p3:'Es šuju katru izstrādājumu ar rokām segla šuvē — divām adatām, bez mašīnas. Pērle zīmogu uzlieku ar pērļu foliju. Numurēju katru maku ar roku — sērija beigsies pie pieciem simtiem.',

    riga_title:'Rīga',
    riga_sub:'Pilsēta, kas deva zīmolam vārdu',
    riga_p1:'Es esmu dzimis Rīgā — Latvijas galvaspilsētā, jugendstila fasāžu pilsētā un dzintara gaismu pilsētā pie Daugavas. Tā klusā ziemeļu elegance ir tā, ko es meklēju katrā izstrādājumā.',
    riga_p2:'Baltijas jūra tūkstošiem gadu ir devusi pasaulei labāko dzintaru. To pašu ziemeļu skaidrību — nesteidzīgu, precīzu, godīgu — es vēlos redzēt ādā. Bez liekā, tikai nepieciešamais un skaistais.',
    riga_p3:'Vārds Pērle (pērle latviski, ar garo ē Baltijas patskaņu) atspoguļo šo filozofiju. Pērle netiek radīta ātri. Tas prasa laiku, spiedienu un pacietību.',
  },
};

Object.assign(window, { PRODUCTS, I18N, PRICE, PRICE_VALUE, PRICE_CURRENCY });
