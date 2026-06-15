/* ATREA — контент сайта на 3 языках.
   RU — оригинал из Figma. DE/EUR — рабочий перевод (черновик на сверку Ольге).
   Картинки/иконки/цены/контакты — общие (STATIC), переводятся только тексты (TEXT). */

window.ATREA = (function () {
  'use strict';

  // ---- неизменные данные (одинаковы во всех языках) ----
  const STATIC = {
    phone: '+49 151 22 555558',
    mail: 'info@atrea.org',
    linkedin: 'https://www.linkedin.com/company/atrea-gmbh',
    instagram: 'https://instagram.com/atrea.gmbh',
    why: [
      { icon: 'wa-location.jpg' },
      { icon: 'wa-status.jpg' },
      { icon: 'wa-contacts.jpg' },
      { icon: 'wa-experience.jpg' },
      { icon: 'wa-longterm.jpg' },
      { icon: 'wa-participation.jpg' }
    ],
    ent: [{ img: 'ent-service.jpg' }, { img: 'ent-production.jpg' }, { img: 'ent-it.jpg' }],
    inv: [
      { img: 'inv-datacenter.png', price: '10.000.000 EUR' },
      { img: 'inv-factory.png', price: '20.000.000 EUR' },
      { img: 'inv-construction.png', price: '3.000.000 EUR' }
    ]
  };

  // ---- тексты по языкам ----
  const TEXT = {
    de: {
      langName: 'DE',
      nav: { tagline: 'Unternehmensgründung in Deutschland', entrepreneurs: 'Für Unternehmer', investors: 'Für Investoren', contact: 'Kontakt', about: 'Über uns' },
      hero: {
        badge: 'Starten Sie Ihren Weg mit ATREA',
        h1: 'Unternehmen für Geschäftsentwicklung und Investitionsprojekte in Deutschland',
        sub: 'Wir helfen ausländischen Unternehmern und Investoren, in den deutschen Markt einzutreten'
      },
      stats: [
        { num: '15', unit: ' Jahre', label: 'Entwicklungserfahrung' },
        { num: '17', unit: '', label: 'umgesetzte Projekte' },
        { num: '3', unit: ' Bereiche', label: 'Finanzen, Behörden, Management' },
        { num: '4', unit: '', label: 'Regionen Deutschlands' }
      ],
      why: {
        title: 'Warum ATREA?',
        tags: ['SCHNELLER', 'günstiger', 'sicherer'],
        cards: [
          { title: 'Standort', text: 'In Deutschland registriert und physisch ansässig' },
          { title: 'Status', text: 'Zugang zu Entscheidungsträgern im öffentlichen und im Finanzsektor' },
          { title: 'Kontakte', text: 'Zugang zu staatlichen Grundstücken und direkte Eigentümerkontakte, Organisation von Treffen jeder Ebene' },
          { title: 'Erfahrung', text: '15 Jahre Erfahrung schaffen ein echtes Verständnis des Systems' },
          { title: 'Langfristigkeit', text: 'An einer langfristigen Zusammenarbeit interessiert' },
          { title: 'Beteiligung', text: 'Wir beteiligen uns aktiv und praktisch an den Projekten' }
        ]
      },
      biz: {
        title: 'Markteintritt in Deutschland und weitere ausländische Märkte',
        states: [
          { title: 'Management', points: ['Marktanalyse', 'Auswahl von Grundstücken und Objekten', 'Projektstrukturierung', 'Baubegleitung', 'Projekte von der Idee bis zur Umsetzung', 'Aufbau der Produktionslinie'] },
          { title: 'Behörden', points: ['Abstimmung mit den Behörden', 'Beschaffung von Fördermitteln'] },
          { title: 'Finanzen', points: ['Beteiligungskapital', 'Kreditfinanzierung', 'Gewinnung von Investoren und Co-Investoren', 'Entwickler-Partnerschaften'] },
          { title: 'Internationale Expansion', points: ['VAE, Serbien, Ungarn, Polen, Schweiz usw.', 'Wir verfügen über internationale Partner', 'Wir wählen wirtschaftlich vorteilhafte Länder für Ihre Branche (Besteuerung)'] }
        ]
      },
      ent: {
        title: 'Für Unternehmer',
        btn: 'Starten Sie Ihren Weg mit ATREA',
        cards: [
          { title: 'Dienstleistungssektor', points: ['Anpassung an den deutschen Markt', 'Grundstücksauswahl', 'Infrastruktur', 'Erschließung', 'Abstimmung und Genehmigung', 'Bau', 'Management'] },
          { title: 'Produktion', points: ['Grundstücksauswahl', 'Infrastruktur', 'Erschließung', 'Abstimmung und Genehmigung', 'Bau', 'Inbetriebnahme der Linie', 'Management'] },
          { title: 'IT-Sektor', points: ['Beschaffung staatlicher Fördermittel', 'Lizenzierung', 'Beschaffung von Förderzuschüssen', 'Gewinnung von Investoren'] }
        ]
      },
      inv: {
        title: 'Für Investoren',
        btn: 'Mehr erfahren',
        from: 'ab',
        cards: [
          { title: 'Rechenzentrum', points: ['Kauf von Grundstücken ohne Genehmigung für Rechenzentren', 'Erlangung der Genehmigung', 'Verkauf x5 nach einem Jahr'] },
          { title: 'Werkseröffnung', points: ['Eröffnung eines Werks zur Herstellung fertiger High-Tech-Hauskomponenten', 'Rentabilität in 3 Jahren'] },
          { title: 'Bau eines Wohnquartiers in Bayern', points: ['Grundstück 24.000 m²', 'geplante Nutzfläche 200.000 m²', 'auf dem Gelände: Seniorenheim, Apartments und Gewerbeflächen'] }
        ]
      },
      founder: {
        label: 'Über uns',
        name: 'Oleksandr Tykhomirov',
        role: 'Geschäftsführender Gesellschafter · Gründer',
        quote: '„Was mich antreibt, ist die Überzeugung, dass wir durch die richtigen Projekte echte Veränderung bewirken – für Menschen, für die Wirtschaft und für die Zukunft."',
        text: 'atrea GmbH verbindet wirtschaftlichen Sachverstand mit gesellschaftlicher Haltung. Als Gründer stehe ich persönlich für jedes Projekt, jede Partnerschaft und jeden Deal – transparent, professionell und mit Weitblick.',
        tags: ['Geschäftsentwicklung', 'Investitionsprojekte', 'Behörden & Förderung', 'Internationale Expansion']
      },
      contact: {
        title: 'Wie können wir zusammenarbeiten?',
        sub: 'Wählen Sie Ihr Anliegen – wir melden uns innerhalb von 24 Stunden.',
        options: [
          { key: 'unternehmer', title: 'Für Unternehmer', desc: 'Markteintritt und Aufbau Ihres Geschäfts in Deutschland.' },
          { key: 'investor', title: 'Für Investoren', desc: 'Projekte mit Substanz und nachhaltiger Rendite.' },
          { key: 'partner', title: 'Partnerschaft', desc: 'Entwickler, Betreiber oder Planer – sprechen wir.' }
        ],
        form: { name: 'Name', company: 'Unternehmen', email: 'E-Mail', phone: 'Telefon', topic: 'Mein Anliegen',
          topicOptions: ['Bitte wählen …', 'Markteintritt / Unternehmen', 'Investition / Kooperation', 'Projektpartnerschaft', 'Internationale Expansion', 'Sonstiges'],
          message: 'Ihre Nachricht', submit: 'Anfrage absenden' },
        success: 'Vielen Dank! Wir melden uns innerhalb von 24 Stunden.'
      },
      footer: {
        title: 'Unternehmensgründung in Deutschland',
        phoneLabel: 'Telefon',
        mailLabel: 'E-Mail',
        address: ['atrea GmbH', 'Röntgenstr. 40a', '86368 Gersthofen'],
        slogan: 'Eine bessere Gesellschaft entsteht durch gute Taten.',
        legal: { impressum: 'Impressum', datenschutz: 'Datenschutz' }
      }
    },

    en: {
      langName: 'EN',
      nav: { tagline: 'Starting a business in Germany', entrepreneurs: 'For entrepreneurs', investors: 'For investors', contact: 'Contact', about: 'About' },
      hero: {
        badge: 'Start your journey with ATREA',
        h1: 'A company for business development and investment projects in Germany',
        sub: 'We help foreign entrepreneurs and investors enter the German market'
      },
      stats: [
        { num: '15', unit: ' years', label: 'of development experience' },
        { num: '17', unit: '', label: 'completed projects' },
        { num: '3', unit: ' areas', label: 'financial, governmental, managerial' },
        { num: '4', unit: '', label: 'regions of Germany' }
      ],
      why: {
        title: 'Why ATREA?',
        tags: ['FASTER', 'cheaper', 'safer'],
        cards: [
          { title: 'Location', text: 'Registered and physically based in Germany' },
          { title: 'Status', text: 'Access to decision-makers in the public and financial sectors' },
          { title: 'Contacts', text: 'Access to state-owned land and direct owner contacts, organisation of meetings at any level' },
          { title: 'Experience', text: '15 years of experience give a real understanding of the system' },
          { title: 'Long-term', text: 'Interested in long-term cooperation' },
          { title: 'Involvement', text: 'We take an active, hands-on part in the projects' }
        ]
      },
      biz: {
        title: 'Business expansion into the German and other foreign markets',
        states: [
          { title: 'Management', points: ['Market analysis', 'Selection of land and properties', 'Project structuring', 'Construction supervision', 'Projects from idea to completion', 'Setting up the production line'] },
          { title: 'Government', points: ['Coordination with government authorities', 'Obtaining subsidies'] },
          { title: 'Finance', points: ['Equity participation', 'Lending', 'Attracting investors and co-investors', 'Developer partnerships'] },
          { title: 'International expansion', points: ['UAE, Serbia, Hungary, Poland, Switzerland, etc.', 'We have international partners', 'We select economically advantageous countries for your sector (taxation)'] }
        ]
      },
      ent: {
        title: 'For entrepreneurs',
        btn: 'Start your journey with ATREA',
        cards: [
          { title: 'Service sector', points: ['Adaptation to the German market', 'Land selection', 'Infrastructure', 'Utility connections', 'Coordination and permits', 'Construction', 'Management'] },
          { title: 'Manufacturing', points: ['Land selection', 'Infrastructure', 'Utility connections', 'Coordination and permits', 'Construction', 'Line launch', 'Management'] },
          { title: 'IT sector', points: ['Obtaining government subsidies', 'Licensing', 'Obtaining grants', 'Attracting investors'] }
        ]
      },
      inv: {
        title: 'For investors',
        btn: 'Learn more',
        from: 'from',
        cards: [
          { title: 'Data center', points: ['Purchase of unpermitted land for data centers', 'Obtaining the permit', 'Selling at x5 within a year'] },
          { title: 'Factory launch', points: ['Opening a plant producing ready high-tech house components', 'Profitability in 3 years'] },
          { title: 'Construction of a residential quarter in Bavaria', points: ['Plot 24,000 m²', 'planned usable area 200,000 m²', 'on site: a retirement home, apartments and commercial space'] }
        ]
      },
      founder: {
        label: 'About us',
        name: 'Oleksandr Tykhomirov',
        role: 'Managing Partner · Founder',
        quote: '"What drives me is the conviction that the right projects create real change – for people, for the economy and for the future."',
        text: 'atrea GmbH combines business expertise with social responsibility. As founder, I personally stand behind every project, every partnership and every deal – transparent, professional and far-sighted.',
        tags: ['Business development', 'Investment projects', 'Authorities & funding', 'International expansion']
      },
      contact: {
        title: 'How can we work together?',
        sub: 'Choose your request – we will get back to you within 24 hours.',
        options: [
          { key: 'unternehmer', title: 'For entrepreneurs', desc: 'Market entry and building your business in Germany.' },
          { key: 'investor', title: 'For investors', desc: 'Projects with substance and sustainable returns.' },
          { key: 'partner', title: 'Partnership', desc: 'Developer, operator or planner – let us talk.' }
        ],
        form: { name: 'Name', company: 'Company', email: 'E-mail', phone: 'Phone', topic: 'My request',
          topicOptions: ['Please choose …', 'Market entry / company', 'Investment / cooperation', 'Project partnership', 'International expansion', 'Other'],
          message: 'Your message', submit: 'Send request' },
        success: 'Thank you! We will get back to you within 24 hours.'
      },
      footer: {
        title: 'Starting a business in Germany',
        phoneLabel: 'Phone',
        mailLabel: 'E-mail',
        address: ['atrea GmbH', 'Röntgenstr. 40a', '86368 Gersthofen'],
        slogan: 'A better society is built through good deeds.',
        legal: { impressum: 'Imprint', datenschutz: 'Privacy' }
      }
    },

    ru: {
      langName: 'RU',
      nav: { tagline: 'Открытие бизнеса в Германии', entrepreneurs: 'Для предпринимателей', investors: 'Для инвесторов', contact: 'Связаться', about: 'О нас' },
      hero: {
        badge: 'Начать свой путь с ATREA',
        h1: 'Компания по развитию бизнеса и инвестиционных проектов в Германии',
        sub: 'Мы помогаем иностранным предпринимателям и инвесторам выходить на немецкий рынок'
      },
      stats: [
        { num: '15', unit: ' лет', label: 'девелоперского опыта' },
        { num: '17', unit: '', label: 'реализованных проектов' },
        { num: '3', unit: ' сферы', label: 'финансовая, государственная, управленческая' },
        { num: '4', unit: '', label: 'региона Германии' }
      ],
      why: {
        title: 'Почему ATREA?',
        tags: ['БЫСТРЕЕ', 'дешевле', 'безопаснее'],
        cards: [
          { title: 'Локация', text: 'Зарегистрированы и физически находимся в Германии' },
          { title: 'Статус', text: 'Выходы на лиц, принимающих решения в государственном и финансовом секторе' },
          { title: 'Контакты', text: 'Имеем доступ к гос. участкам и прямые контакты с владельцами, организация встреч любого уровня' },
          { title: 'Опыт', text: '15-летний опыт даёт реальное понимание системы' },
          { title: 'Долгосрочность', text: 'Заинтересованы в долгосрочном сотрудничестве' },
          { title: 'Участие', text: 'Практически участвуем в проектах' }
        ]
      },
      biz: {
        title: 'Вывод бизнеса на немецкий и другие иностранные рынки',
        states: [
          { title: 'Менеджмент', points: ['Анализ рынка', 'Подбор участков и объектов', 'Структурирование проекта', 'Сопровождение строительства', 'Проекты от идеи до реализации', 'Постановка производственной линии'] },
          { title: 'Государство', points: ['Согласование с государственными органами', 'Получение дотаций'] },
          { title: 'Финансы', points: ['Долевое участие', 'Кредитование', 'Привлечение инвесторов и соинвесторов', 'Девелоперские партнёрства'] },
          { title: 'Международная экспансия', points: ['ОАЭ, Сербия, Венгрия, Польша, Швейцария и т.д.', 'Имеем международных партнёров', 'Подбираем экономически выгодные страны для вашего направления (налогообложение)'] }
        ]
      },
      ent: {
        title: 'Для предпринимателей',
        btn: 'Начать свой путь с ATREA',
        cards: [
          { title: 'Сфера обслуживания', points: ['Адаптация под рынок Германии', 'Выбор земли', 'Подбор инфраструктуры', 'Подведение коммуникаций', 'Согласование и получение разрешения', 'Строительство', 'Управление'] },
          { title: 'Производство', points: ['Выбор земли', 'Подбор инфраструктуры', 'Подведение коммуникаций', 'Согласование и получение разрешения', 'Строительство', 'Запуск линии', 'Управление'] },
          { title: 'IT-сегмент', points: ['Получение государственных дотаций', 'Получение лицензии', 'Получение грантов', 'Привлечение инвесторов'] }
        ]
      },
      inv: {
        title: 'Для инвесторов',
        btn: 'Узнать больше',
        from: 'от',
        cards: [
          { title: 'Data center', points: ['Покупка земли без разрешения под дата-центры', 'Получение разрешения', 'Продажа x5 через год'] },
          { title: 'Открытие завода', points: ['Открытие завода по производству готовых высокотехнологичных компонентов дома', 'Рентабельность 3 года'] },
          { title: 'Строительство жилого квартала в Баварии', points: ['Участок 24 000 м²', 'Запланированная полезная площадь 200 000 м²', 'На участке: дом престарелых, апартаменты и коммерческие помещения'] }
        ]
      },
      founder: {
        label: 'О нас',
        name: 'Oleksandr Tykhomirov',
        role: 'Управляющий партнёр · Основатель',
        quote: '«Меня движет убеждение, что правильные проекты создают реальные перемены — для людей, для экономики и для будущего.»',
        text: 'atrea GmbH соединяет деловую компетентность с социальной ответственностью. Как основатель, я лично отвечаю за каждый проект, каждое партнёрство и каждую сделку — прозрачно, профессионально и с дальним прицелом.',
        tags: ['Развитие бизнеса', 'Инвестпроекты', 'Госорганы и дотации', 'Международная экспансия']
      },
      contact: {
        title: 'Как мы можем сотрудничать?',
        sub: 'Выберите запрос — мы ответим в течение 24 часов.',
        options: [
          { key: 'unternehmer', title: 'Для предпринимателей', desc: 'Выход на рынок и запуск бизнеса в Германии.' },
          { key: 'investor', title: 'Для инвесторов', desc: 'Проекты с реальной ценностью и доходностью.' },
          { key: 'partner', title: 'Партнёрство', desc: 'Девелопер, оператор или планировщик — обсудим.' }
        ],
        form: { name: 'Имя', company: 'Компания', email: 'E-mail', phone: 'Телефон', topic: 'Мой запрос',
          topicOptions: ['Выберите …', 'Выход на рынок / бизнес', 'Инвестиции / кооперация', 'Проектное партнёрство', 'Международная экспансия', 'Другое'],
          message: 'Ваше сообщение', submit: 'Отправить запрос' },
        success: 'Спасибо! Мы свяжемся с вами в течение 24 часов.'
      },
      footer: {
        title: 'Открытие бизнеса в Германии',
        phoneLabel: 'Телефон',
        mailLabel: 'Почта',
        address: ['atrea GmbH', 'Röntgenstr. 40a', '86368 Gersthofen'],
        slogan: 'Лучшее общество строится через добрые дела.',
        legal: { impressum: 'Импрессум', datenschutz: 'Конфиденциальность' }
      }
    }
  };

  return { STATIC, TEXT, langs: ['de', 'en', 'ru'], defaultLang: 'de' };
})();
