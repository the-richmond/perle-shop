/*
╔══════════════════════════════════════════════════════════════╗
║  PĒRLE — ДАННЫЕ ПРОДУКТОВ                                    ║
║  Этот файл — единственное место где нужно редактировать      ║
║  товары и переводы.                                          ║
╚══════════════════════════════════════════════════════════════╝

  КАК ДОБАВИТЬ НОВЫЙ ТОВАР:
  ─────────────────────────
  Скопируй один из объектов ниже и вставь в конец массива
  PRODUCTS (перед закрывающей "]").

  ОБЯЗАТЕЛЬНЫЕ ПОЛЯ:
  • id        — уникальный номер (увеличь на 1 от последнего)
  • name      — короткое название (на карточке)
  • full      — полное название (в модале)
  • material  — подзаголовок материала
  • price     — цена в USD (число)
  • type      — 'bifold' или 'cardholder' (определяет форму SVG)
  • colors    — { base, hi, dk } — три hex-цвета кожи:
                  base = основной · hi = светлее (блик) · dk = темнее (тень)

  ФОТО (когда будут готовы):
  • photo     — путь к фото закрытого изделия  ('images/имя-closed.jpg')
  • photoOpen — путь к фото открытого изделия  ('images/имя-open.jpg')

  ─── ГАЙД ПО СЪЁМКЕ ─────────────────────────────────────────
  ЗАКРЫТОЕ ФОТО (photo):
  → Флэтлэй на мраморе или льне
  → Дневной свет слева под 45°, мягкие тени
  → Съёмка строго сверху (90°), изделие по центру
  → Знак Pērle (перламутровое тиснение) должен быть виден
  → Разрешение: минимум 1200×800px, PNG или JPEG
  → Bi-fold: горизонтальный формат (3:2)
  → Card holder: квадратный (1:1)

  ОТКРЫТОЕ ФОТО (photoOpen):
  → Та же световая установка
  → Bi-fold: полностью раскрыт плашмя, видны слоты карт и отдел купюр
    Формат: 16:9 горизонтальный
  → Card holder: раскрыт на 90°, карты слегка веером
    Формат: 4:3 или квадрат
  → Видна внутренняя фактура, строчка, знак Pērle
  → Разрешение: минимум 1600×900px
  ─────────────────────────────────────────────────────────────
*/

const PRODUCTS = [
  {
    id: 1,
    name: 'Bi-Fold',
    full: 'Bi-Fold Wallet',
    material: 'Cognac · Italian Leather',
    price: 150,
    type: 'bifold',
    // photo: 'images/bifold-closed.jpg',
    // photoOpen: 'images/bifold-open.jpg',
    colors: { base: '#7a3a18', hi: '#b06030', dk: '#4a200c' },
    desc: {
      en: 'Hand-stitched bi-fold in cognac Italian leather with cold-pressed reptile embossing. Three card slots per side, full-length bill compartment. Pearl foil Pērle mark on interior. Each wallet is individually numbered.',
      ru: 'Бумажник bi-fold ручной работы из итальянской кожи цвета коньяк с холодным тиснением под рептилию. Три слота для карт с каждой стороны, отдел для купюр на всю длину. Знак Pērle из перламутровой фольги внутри. Каждый пронумерован.',
      lv: 'Rokām šūts bi-fold maks no Itālijas konjaka ādas ar auksti presētu rāpuļu iespieddizainu. Trīs karšu sloti katrā pusē, pilna garuma banknošu nodalījums. Pērle pērļu folijas zīmogs iekšpusē. Katrs numurēts.',
    },
    details: {
      en: ['Italian leather · Conceria 800 tannery', 'Reptile embossing · cold-pressed', '3 card slots × each side', 'Full-length bill compartment', 'Pearl foil Pērle mark inside', 'Hand-stitched · individually numbered'],
      ru: ['Итальянская кожа · дубильня Conceria 800', 'Тиснение под рептилию · холодный пресс', '3 слота для карт × каждая сторона', 'Отдел для купюр на всю длину', 'Знак Pērle из перламутровой фольги внутри', 'Ручная работа · пронумерован'],
      lv: ['Itāļu āda · Conceria 800 miecētava', 'Rāpuļu iespieddizains · aukstā presēšana', '3 karšu sloti × katrā pusē', 'Pilna garuma banknošu nodalījums', 'Pērle pērļu folijas zīmogs iekšpusē', 'Rokdarbs · numurēts'],
    },
    dims: '10.5 × 8.5 cm · 85g',
  },
  {
    id: 2,
    name: 'Card Holder',
    full: 'Card Holder',
    material: 'Noir · Italian Leather',
    price: 180,
    type: 'cardholder',
    // photo: 'images/cardholder-closed.jpg',
    // photoOpen: 'images/cardholder-open.jpg',
    colors: { base: '#181210', hi: '#2e2018', dk: '#060404' },
    desc: {
      en: 'Square card holder in noir Italian leather with reptile embossing. Three card slots on each outer face, three per inner face — twelve cards total. Single-piece construction, pearl foil Pērle mark on exterior.',
      ru: 'Квадратная карточница из чёрной итальянской кожи с тиснением под рептилию. Три слота на каждой внешней стороне, три на каждой внутренней — двенадцать карт итого. Конструкция из одного куска кожи, знак Pērle из перламутровой фольги снаружи.',
      lv: 'Kvadrātveida karšu turētājs no melnas Itālijas ādas ar rāpuļu iespieddizainu. Trīs karšu sloti katrā ārējā pusē, trīs katrā iekšējā — kopā divpadsmit kartes. Viena gabala konstrukcija, Pērle pērļu folijas zīmogs ārpusē.',
    },
    details: {
      en: ['Italian leather · Conceria 800 tannery', 'Reptile embossing · cold-pressed', '3 slots × 4 faces = 12 cards total', 'Single-piece construction', 'Pearl foil Pērle mark exterior', 'Hand-stitched · individually numbered'],
      ru: ['Итальянская кожа · дубильня Conceria 800', 'Тиснение под рептилию · холодный пресс', '3 слота × 4 стороны = 12 карт', 'Конструкция из одного куска', 'Знак Pērle снаружи из перламутровой фольги', 'Ручная работа · пронумерована'],
      lv: ['Itāļu āda · Conceria 800 miecētava', 'Rāpuļu iespieddizains · aukstā presēšana', '3 sloti × 4 sejas = 12 kartes kopā', 'Viena gabala konstrukcija', 'Pērle pērļu folijas zīmogs ārpusē', 'Rokdarbs · numurēts'],
    },
    dims: '10 × 10 cm · 55g',
  },
];

const I18N = {
  en: {
    collections:'Collections', about:'About', riga:'Riga', cart:'Cart',
    hold_hint:'— hold to open',
    hero_tagline:'Riga · Est. 2026',
    hero_sub:'Handcrafted leather accessories, born in Riga.',
    view_collection:'View Collection',
    details:'Details', add_cart:'Add to Cart',
    cart_empty:'Your cart is empty', checkout:'Checkout',
    total:'Total', back:'Back', continue:'Continue', place_order:'Place Order',
    return_shop:'Return to Shop',
    order_received:'Request received',
    order_thanks:'Thank you for your trust in Pērle. We will contact you within 24 hours via your chosen channel to confirm payment details. Each wallet is made by hand — your piece will be dispatched within 5–7 business days from payment.',
    contact:'Contact', delivery:'Delivery', payment:'Payment', confirm:'Confirm',
    full_name:'Full Name', email:'Email', phone:'Phone',
    city:'City', sdek_label:'SDEK Pickup Point or Delivery Address',
    cdek_find:'Find your nearest SDEK office',
    delivery_pvz:'SDEK Pickup',
    delivery_courier:'Courier to address',
    pvz_code_label:'SDEK pickup point (PVZ-code or street name)',
    pvz_open_map:'Open SDEK map for your city',
    courier_address_label:'Full address',
    courier_address_ph:'Street, house, apartment, postal code…',
    notes_label:'Notes (optional)', notes_ph:'Anything we should know about your order',
    sdek_note:'Worldwide shipping via SDEK · Pērle gift box with silk ribbon included.',
    how_to_contact:'How shall we reach you?',
    how_to_contact_sub:'Each Pērle order is finalised personally. Pick the channel where it’s easiest for us to send the payment QR / link and ship updates.',
    your_handle:'your handle / number',
    payment_explainer:'After receiving your request, we will send a personal payment link or SBP QR code to your chosen channel. Both Russian and most international cards (Visa / Mastercard / Mir) are accepted, as well as СБП.',
    send_request:'Send Request',
    card:'Card', sbp:'СБП', wire:'Wire Transfer',
    sbp_title:'Pay via СБП',
    sbp_body:'After placing the order you will receive a personal SBP QR code by email or messenger. Scan it with your banking app (Sber, T-Bank, VTB, Alfa) — the transfer is instant and free.',
    card_title:'Pay by card',
    card_body:'After placing the order you will receive a secure payment link (YooKassa / CloudPayments / Stripe — depending on issuing bank). Russian and most international cards (Visa, Mastercard, Mir) are accepted.',
    submitting:'Sending…',
    card_number:'Card Number', expiry:'Expiry', cvv:'CVV',
    footer:'© 2026 Pērle · Riga, Latvia',
    about_title:'About Pērle',
    about_s1:'The Craft',
    about_p1:'Pērle — the Latvian word for pearl — is a small luxury accessories house founded in Riga, 2026. Every piece is made entirely by hand from premium Italian leather, embossed with reptile texture and finished with a pearl foil seal.',
    about_s2:'The Leather',
    about_p2:'We work with heritage Italian tanneries — including Conceria 800 — selecting only full-grain hides with a depth of character that improves with age. The reptile pattern is cold-pressed, preserving the leather\'s natural grain beneath.',
    about_s3:'The Mark',
    about_p3:'Each wallet is hand-stitched, individually numbered, and carries the Pērle pearl foil mark — a reference to the iridescent quality of the finest pearls, and to the Baltic city that gave the brand its name.',
    about_mat_title:'Every Pērle piece includes:',
    about_mats:['Full-grain Italian leather','Conceria 800 & selected tanneries','Cold-pressed reptile embossing','Pearl foil interior or exterior mark','Silk-lined Pērle gift box','Individual numbering'],
    riga_title:'Rīga',
    riga_sub:'The city that gave the brand its soul',
    riga_p1:'Pērle was born from a deep connection to Riga — the capital of Latvia, a city of Art Nouveau facades, amber light on the Daugava, and a quiet northern elegance that shapes everything we make.',
    riga_p2:'The Baltic Sea has produced the world\'s finest amber for millennia. That same northern clarity — unhurried, precise, honest — is what we seek in every piece. No excess, only what is essential and beautiful.',
    riga_p3:'The name Pērle (pearl in Latvian, with the long ē of the Baltic vowel) captures this philosophy. A pearl is not made quickly. It takes time, pressure, and patience to become something luminous.',
  },
  ru: {
    collections:'Коллекции', about:'О нас', riga:'Рига', cart:'Корзина',
    hold_hint:'— зажмите чтобы открыть',
    hero_tagline:'Рига · Est. 2026',
    hero_sub:'Аксессуары из кожи ручной работы, рождённые в Риге.',
    view_collection:'Смотреть коллекцию',
    details:'Подробнее', add_cart:'В корзину',
    cart_empty:'Корзина пуста', checkout:'Оформить заказ',
    total:'Итого', back:'Назад', continue:'Продолжить', place_order:'Заказать',
    return_shop:'Вернуться в магазин',
    order_received:'Заявка принята',
    order_thanks:'Спасибо за доверие к Pērle. В течение 24 часов мы свяжемся с вами в выбранном канале для подтверждения деталей оплаты. Каждый кошелёк изготавливается вручную — ваш заказ будет отправлен в течение 5–7 рабочих дней с момента оплаты.',
    contact:'Контакты', delivery:'Доставка', payment:'Оплата', confirm:'Подтверждение',
    full_name:'Имя и фамилия', email:'Email', phone:'Телефон',
    city:'Город', sdek_label:'Пункт СДЭК или адрес доставки',
    cdek_find:'Найти ближайший пункт СДЭК',
    delivery_pvz:'Пункт выдачи СДЭК',
    delivery_courier:'Курьером по адресу',
    pvz_code_label:'Код пункта или адрес ПВЗ',
    pvz_open_map:'Открыть карту пунктов СДЭК',
    courier_address_label:'Полный адрес',
    courier_address_ph:'Улица, дом, квартира, индекс…',
    notes_label:'Комментарий (необязательно)', notes_ph:'Если есть пожелания к заказу — напишите здесь',
    sdek_note:'Доставка по всему миру через СДЭК · Подарочная коробка Pērle с шёлковой лентой.',
    how_to_contact:'Как с вами связаться?',
    how_to_contact_sub:'Каждый заказ Pērle оформляется лично. Выберите канал, в котором вам удобно получить QR / ссылку на оплату и трек-номер.',
    your_handle:'ваш логин / номер',
    payment_explainer:'После получения заявки мы пришлём вам персональную ссылку на оплату или QR-код СБП в выбранном канале. Принимаем российские и большинство иностранных карт (Visa / Mastercard / Мир), а также СБП.',
    send_request:'Отправить заявку',
    card:'Карта', sbp:'СБП', wire:'Перевод',
    sbp_title:'Оплата через СБП',
    sbp_body:'После оформления заказа вы получите персональный QR-код СБП на e-mail или в мессенджере. Отсканируйте его в приложении банка (Сбер, Т-Банк, ВТБ, Альфа) — перевод мгновенный и без комиссии.',
    card_title:'Оплата картой',
    card_body:'После оформления заказа мы пришлём защищённую ссылку на оплату (YooKassa / CloudPayments / Stripe — в зависимости от банка-эмитента). Принимаем российские и большинство иностранных карт (Visa, Mastercard, Мир).',
    submitting:'Отправляем…',
    card_number:'Номер карты', expiry:'Срок', cvv:'CVV',
    footer:'© 2026 Pērle · Рига, Латвия',
    about_title:'О Pērle',
    about_s1:'Мастерство',
    about_p1:'Pērle — латышское слово «жемчужина» — небольшой дом люксовых аксессуаров, основанный в Риге в 2026 году. Каждое изделие создаётся полностью вручную из премиальной итальянской кожи, украшено тиснением под рептилию и отмечено знаком из перламутровой фольги.',
    about_s2:'Кожа',
    about_p2:'Мы работаем с историческими итальянскими дубильнями — в том числе Conceria 800 — отбирая только кожу полного дубления с характером, который становится богаче со временем. Тиснение под рептилию прессуется холодным способом, сохраняя натуральную фактуру кожи.',
    about_s3:'Знак',
    about_p3:'Каждый кошелёк прошит вручную, пронумерован и отмечен знаком Pērle из перламутровой фольги — отсылка к переливчатому качеству лучших жемчужин и к балтийскому городу, давшему бренду имя.',
    about_mat_title:'Каждое изделие Pērle включает:',
    about_mats:['Итальянская кожа полного дубления','Conceria 800 и отборные дубильни','Тиснение под рептилию, холодный пресс','Знак из перламутровой фольги','Подарочная коробка Pērle с шёлковой лентой','Индивидуальная нумерация'],
    riga_title:'Рига',
    riga_sub:'Город, давший бренду душу',
    riga_p1:'Pērle родился из глубокой связи с Ригой — столицей Латвии, городом фасадов в стиле ар-нуво, янтарного света на реке Даугава и тихой северной элегантности, которая пронизывает всё, что мы создаём.',
    riga_p2:'Балтийское море тысячелетиями давало миру лучший янтарь. Этот северный свет — чистый, неторопливый, честный — мы ищем в каждом изделии: ничего лишнего, только необходимое и красивое.',
    riga_p3:'Имя Pērle (жемчужина по-латышски, с долгой ē балтийского гласного) отражает эту философию. Жемчужина не создаётся быстро. Нужно время, давление и терпение, чтобы стать чем-то светящимся.',
  },
  lv: {
    collections:'Kolekcijas', about:'Par mums', riga:'Rīga', cart:'Grozs',
    hold_hint:'— turiet, lai atvērtu',
    hero_tagline:'Rīga · Est. 2026',
    hero_sub:'Ar rokām darināti ādas aksesuāri, dzimuši Rīgā.',
    view_collection:'Skatīt kolekciju',
    details:'Detaļas', add_cart:'Pievienot grozam',
    cart_empty:'Jūsu grozs ir tukšs', checkout:'Noformēt pasūtījumu',
    total:'Kopā', back:'Atpakaļ', continue:'Turpināt', place_order:'Pasūtīt',
    return_shop:'Atgriezties veikalā',
    order_received:'Pieteikums saņemts',
    order_thanks:'Paldies par uzticību Pērle. 24 stundu laikā mēs ar jums sazināsimies izvēlētajā kanālā, lai apstiprinātu maksājuma detaļas. Katrs maks tiek darināts ar rokām — pasūtījums tiks nosūtīts 5–7 darba dienu laikā pēc maksājuma.',
    contact:'Kontakti', delivery:'Piegāde', payment:'Maksājums', confirm:'Apstiprinājums',
    full_name:'Vārds Uzvārds', email:'E-pasts', phone:'Tālrunis',
    city:'Pilsēta', sdek_label:'SDEK saņemšanas punkts vai piegādes adrese',
    cdek_find:'Atrast tuvāko SDEK punktu',
    delivery_pvz:'SDEK saņemšanas punkts',
    delivery_courier:'Kurjers uz adresi',
    pvz_code_label:'PVZ kods vai adrese',
    pvz_open_map:'Atvērt SDEK punktu karti',
    courier_address_label:'Pilna adrese',
    courier_address_ph:'Iela, māja, dzīvoklis, indekss…',
    notes_label:'Komentārs (nav obligāts)', notes_ph:'Ja ir vēlmes pasūtījumam — uzrakstiet šeit',
    sdek_note:'Piegāde visā pasaulē caur SDEK · Pērle dāvanu kastīte ar zīda lenti.',
    how_to_contact:'Kā ar jums sazināties?',
    how_to_contact_sub:'Katrs Pērle pasūtījums tiek noformēts personīgi. Izvēlieties kanālu, kurā jums ērti saņemt maksājuma QR / saiti un izsekošanas numuru.',
    your_handle:'jūsu profils / numurs',
    payment_explainer:'Pēc pieteikuma saņemšanas mēs nosūtīsim jums personīgu maksājuma saiti vai SBP QR kodu izvēlētajā kanālā. Pieņemam Krievijas un lielāko daļu starptautisko karšu (Visa / Mastercard / Mir), kā arī СБП.',
    send_request:'Nosūtīt pieteikumu',
    card:'Karte', sbp:'СБП', wire:'Pārskaitījums',
    sbp_title:'Maksājums caur СБП',
    sbp_body:'Pēc pasūtījuma noformēšanas jūs saņemsiet personīgu SBP QR kodu uz e-pastu vai messenger. Skenējiet to bankas lietotnē — pārskaitījums ir tūlītējs un bez maksas.',
    card_title:'Maksājums ar karti',
    card_body:'Pēc pasūtījuma noformēšanas jūs saņemsiet drošu maksājuma saiti (YooKassa / CloudPayments / Stripe). Pieņemam Krievijas un lielāko daļu starptautisko karšu (Visa, Mastercard, Mir).',
    submitting:'Nosūta…',
    card_number:'Kartes numurs', expiry:'Derīguma termiņš', cvv:'CVV',
    footer:'© 2026 Pērle · Rīga, Latvija',
    about_title:'Par Pērle',
    about_s1:'Amatniecība',
    about_p1:'Pērle — latviešu vārds "pērle" — ir neliels luksusa aksesuāru nams, dibināts Rīgā 2026. gadā. Katrs izstrādājums tiek darināts pilnīgi ar rokām no augstākās kvalitātes Itālijas ādas, iespiests ar rāpuļu faktūru un apzīmēts ar pērļu folijas zīmogu.',
    about_s2:'Āda',
    about_p2:'Mēs strādājam ar mantojuma Itālijas miecētavām — tostarp Conceria 800 — izvēloties tikai pilnas graudu ādas ar raksturu, kas uzlabojas ar laiku. Rāpuļu raksts tiek presēts aukstā veidā, saglabājot ādas dabisko struktūru.',
    about_s3:'Zīmogs',
    about_p3:'Katrs maks ir rokām šūts, numurēts un apzīmēts ar Pērle pērļu folijas zīmogu — atsauce uz labāko pērļu mirdzošo kvalitāti un Baltijas pilsētu, kas deva zīmolam tā vārdu.',
    about_mat_title:'Katrs Pērle izstrādājums ietver:',
    about_mats:['Itāļu pilnas graudu āda','Conceria 800 un atlasītas miecētavas','Auksti presēts rāpuļu iespieddizains','Pērle pērļu folijas zīmogs','Pērle dāvanu kastīte ar zīda lenti','Individuāla numerācija'],
    riga_title:'Rīga',
    riga_sub:'Pilsēta, kas deva zīmolam dvēseli',
    riga_p1:'Pērle dzima no dziļas saiknes ar Rīgu — Latvijas galvaspilsētu, jugendstila fasāžu pilsētu, dzintara gaismu uz Daugavas un kluso ziemeļu eleganci, kas caurvij visu, ko mēs radām.',
    riga_p2:'Baltijas jūra tūkstošiem gadu ir devusi pasaulei labāko dzintaru. Tā pati ziemeļu gaisma — skaidra, nesteidzīga, godīga — ir tā, ko mēs meklējam katrā izstrādājumā: bez liekā, tikai nepieciešamais un skaistais.',
    riga_p3:'Vārds Pērle (pērle latviski, ar garo ē Baltijas patskaņu) atspoguļo šo filozofiju. Pērle netiek radīta ātri. Tas prasa laiku, spiedienu un pacietību, lai kļūtu par kaut ko spīdīgu.',
  },
};

Object.assign(window, { PRODUCTS, I18N });
