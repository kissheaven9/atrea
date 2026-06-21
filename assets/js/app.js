/* ATREA — рендеринг контента, переключатель языка и скролл-анимации. */
(function () {
  'use strict';
  const { STATIC, TEXT, langs, defaultLang } = window.ATREA;
  const IMG = 'assets/img/';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const esc = (s) => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

  let lang = localStorage.getItem('atrea_lang');
  if (!langs.includes(lang)) lang = defaultLang;

  const social = [
    { img: 'icon-whatsapp.png', href: 'https://wa.me/4915122555558', label: 'WhatsApp' },
    { img: 'icon-telegram.png', href: 'https://t.me/atrea', label: 'Telegram' },
    { img: 'icon-mail.png', href: 'mailto:' + STATIC.mail, label: 'E-Mail' }
  ];
  const statIcons = ['stat-experience.png', 'stat-projects.png', 'icon-roundabout.png', 'icon-location.png'];

  /* ---------------- Рендер ---------------- */
  function render() {
    const t = TEXT[lang];
    document.documentElement.lang = lang;

    // простые data-i18n
    $$('[data-i18n]').forEach(node => {
      const val = node.getAttribute('data-i18n').split('.').reduce((o, k) => o && o[k], t);
      if (val != null) node.textContent = val;
    });

    // навигация: телефон, соцсети
    const phone = $('#navPhone');
    phone.textContent = STATIC.phone;
    phone.href = 'tel:' + STATIC.phone.replace(/[^+\d]/g, '');
    $('#navSocials').innerHTML = social.map(s =>
      `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}"><img src="${IMG}${s.img}" alt="${s.label}"></a>`).join('');

    // статистика
    $('#stats').innerHTML = t.stats.map((s, i) => `
      <div class="stat reveal reveal--d${i % 4}">
        <div class="stat__icon"><img src="${IMG}${statIcons[i]}" alt=""></div>
        <div><div class="stat__num">${esc(s.num)}${esc(s.unit || '')}</div><div class="stat__label">${esc(s.label)}</div></div>
      </div>`).join('');

    // почему ATREA — заголовок (первое слово синим, ATREA тёмным), теги, карточки
    const wp = t.why.title.split(/ATREA/i);
    $('#whyTitle').innerHTML = `<span class="accent">${esc((wp[0] || '').trim())}</span> ATREA${esc(wp[1] || '')}`;
    $('#whyTags').innerHTML = t.why.tags.map(x => `<span class="why__tag">${esc(x)}</span>`).join('');
    $('#whyTrack').innerHTML = t.why.cards.map((c, i) => `
      <article class="why-card">
        <img class="why-card__img" src="${IMG}${STATIC.why[i].icon}" alt="">
        <h3 class="why-card__title">${esc(c.title)}</h3>
        <p class="why-card__text">${esc(c.text)}</p>
      </article>`).join('');

    // вывод бизнеса — подпись (внизу слева), индикатор-точки, панели
    $('#bizTitle').textContent = t.biz.title;
    $('#bizTabs').innerHTML = t.biz.states.map((s, i) =>
      `<button class="biz__dot${i === 0 ? ' is-active' : ''}" data-biz="${i}" aria-label="${esc(s.title)}"><span>${esc(s.title)}</span></button>`).join('');
    $('#bizPanels').innerHTML = t.biz.states.map((s, i) => `
      <div class="biz__panel${i === 0 ? ' is-active' : ''}" data-panel="${i}">
        <h3>${esc(s.title)}</h3>
        <ul>${s.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
      </div>`).join('');

    // предприниматели
    $('#entTitle').textContent = t.ent.title;
    $('#entGrid').innerHTML = t.ent.cards.map((c, i) => `
      <article class="pcard reveal reveal--d${i}">
        <div class="pcard__media"><img src="${IMG}${STATIC.ent[i].img}" alt="${esc(c.title)}"></div>
        <div class="pcard__body">
          <h3 class="pcard__title">${esc(c.title)}</h3>
          <ul class="pcard__list">${c.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
          <div class="pcard__foot"><button class="btn btn--primary js-cta" data-title="${esc(c.title)}">${esc(t.ent.btn)}</button></div>
        </div>
      </article>`).join('');

    // инвесторы
    $('#invTitle').textContent = t.inv.title;
    $('#invGrid').innerHTML = t.inv.cards.map((c, i) => `
      <article class="pcard reveal reveal--d${i}">
        <div class="pcard__media"><img src="${IMG}${STATIC.inv[i].img}" alt="${esc(c.title)}"></div>
        <div class="pcard__body">
          <h3 class="pcard__title">${esc(c.title)}</h3>
          <ul class="pcard__list">${c.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
          <div class="pcard__foot">
            <span class="pcard__price pcard__price--req">${esc(t.inv.onRequest)}</span>
            <button class="btn btn--green js-cta" data-title="${esc(c.title)}">${esc(t.inv.btn)}</button>
          </div>
        </div>
      </article>`).join('');
    $('#invDisclaimer').textContent = t.inv.disclaimer;

    // наши действующие проекты
    $('#projTitle').textContent = t.projects.title;
    $('#projGrid').innerHTML = t.projects.cards.map((c, i) => `
      <a class="proj reveal reveal--d${i}" href="${STATIC.projects[i].url}" target="_blank" rel="noopener">
        <div class="proj__media"><img src="${IMG}${STATIC.projects[i].img}" alt="${esc(c.name)}" loading="lazy"></div>
        <div class="proj__body">
          <div class="proj__loc">${esc(c.loc)}</div>
          <h3 class="proj__name">${esc(c.name)}</h3>
          <p class="proj__desc">${esc(c.desc)}</p>
          <span class="proj__link">${esc(t.projects.visit)} →</span>
        </div>
      </a>`).join('');

    // карта мира — международная связность
    const wm = t.worldmap;
    $('#wmPre').textContent = wm.pre;
    $('#wmAccent').innerHTML = [...wm.accent].map((ch, i) =>
      `<span style="--ld:${(i * 0.04).toFixed(2)}s">${ch === ' ' ? '&nbsp;' : esc(ch)}</span>`).join('');
    $('#wmSub').textContent = wm.sub;

    // основатель / Über uns
    const fo = t.founder;
    $('#founderLabel').textContent = fo.label;
    $('#founderQuotePre').textContent = fo.quotePre;
    $('#founderQuotePost').textContent = fo.quotePost;
    $('#founderText').textContent = fo.text;
    $('#founderName').textContent = fo.name;
    $('#founderRole').textContent = fo.role;
    $('#founderTags').innerHTML = fo.tags.map(x => `<span class="founder__tag">${esc(x)}</span>`).join('');
    startTypewriter($('#founderType'), fo.quoteCycle);

    // блок контактов (как сотрудничаем + форма)
    renderContact(t);

    // футер
    $('#footerTitle').textContent = t.footer.title;
    $('#footerContacts').innerHTML = `
      <div class="fcontact"><div class="fcontact__head"><span><img src="${IMG}icon-whatsapp.png" alt=""></span></div>
        <div class="fcontact__label">${esc(t.footer.phoneLabel)}</div><div class="fcontact__value">${esc(STATIC.phone)}</div></div>
      <div class="fcontact"><div class="fcontact__head"><span><img src="${IMG}icon-mail.png" alt=""></span></div>
        <div class="fcontact__label">${esc(t.footer.mailLabel)}</div><div class="fcontact__value">${esc(STATIC.mail)}</div></div>`;
    $('#footerSocial').innerHTML = footerSocials();
    $('#footerAddress').innerHTML = t.footer.address.map(esc).join(' · ');
    $('#footerLegal').innerHTML =
      `<a href="impressum.html">${esc(t.footer.legal.impressum)}</a><a href="datenschutz.html">${esc(t.footer.legal.datenschutz)}</a>`;
    $('#footerSlogan').textContent = '© 2025 atrea GmbH — ' + t.footer.slogan;

    // переключатель языка
    $('#langCurrent').textContent = t.langName;
    $('#langMenu').innerHTML = langs.map(l =>
      `<li role="menuitem" data-lang="${l}" class="${l === lang ? 'is-active' : ''}">${TEXT[l].langName} · ${langName(l)}</li>`).join('');

    bindDynamic();
    observeReveals();
    requestAnimationFrame(layoutPinned);
  }

  /* ---------------- Соцсети в футере ---------------- */
  const SVG = {
    whatsapp: '<path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.5c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.7-.9c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4.1.3.1.8-.1 1.4Z"/>',
    telegram: '<path d="M21.9 4.3 18.5 20c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.3-.1-.5-.6-.2L6.2 13.1l-4.8-1.5c-1-.3-1.1-1 .2-1.5l18.7-7.2c.9-.3 1.6.2 1.4 1.4Z"/>',
    mail: '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7L4 6.5V18h16V6.5L12 12Zm0-2 7.5-5h-15L12 10Z"/>',
    linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.6-1.9 3.9 0 4.6 2.5 4.6 5.8V21h-4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9V9Z"/>',
    instagram: '<path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5-3.4a1.1 1.1 0 1 1 0 2.3 1.1 1.1 0 0 1 0-2.3Z"/>'
  };
  function footerSocials() {
    const items = [
      { k: 'whatsapp', href: 'https://wa.me/4915122555558' },
      { k: 'telegram', href: 'https://t.me/atrea' },
      { k: 'mail', href: 'mailto:' + STATIC.mail },
      { k: 'linkedin', href: STATIC.linkedin },
      { k: 'instagram', href: STATIC.instagram }
    ];
    return items.map(s => `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.k}"><svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">${SVG[s.k]}</svg></a>`).join('');
  }

  /* ---------------- Контакт: «как сотрудничаем» + форма ---------------- */
  function renderContact(t) {
    const c = t.contact;
    $('#contactTitle').textContent = c.title;
    $('#contactSub').textContent = c.sub;
    $('#contactOptions').innerHTML = c.options.map((o, i) => `
      <button type="button" class="copt copt--${o.key} reveal reveal--d${i}" data-opt="${i}">
        <span class="copt__num">0${i + 1}</span>
        <span class="copt__title">${esc(o.title)}</span>
        <span class="copt__desc">${esc(o.desc)}</span>
      </button>`).join('');
    const f = c.form;
    $('#contactForm').innerHTML = `
      <div class="field"><label>${esc(f.name)} *</label><input name="name" required></div>
      <div class="field"><label>${esc(f.company)}</label><input name="company"></div>
      <div class="field"><label>${esc(f.email)} *</label><input type="email" name="email" required></div>
      <div class="field"><label>${esc(f.phone)}</label><input name="phone"></div>
      <div class="field field--full"><label>${esc(f.topic)}</label><select name="topic">${f.topicOptions.map((o, i) => `<option value="${i}">${esc(o)}</option>`).join('')}</select></div>
      <div class="field field--full"><label>${esc(f.message)} *</label><textarea name="message" rows="4" required></textarea></div>
      <div class="field--full"><button type="submit" class="btn btn--primary contact__submit">${esc(f.submit)} →</button></div>
      <p class="contact__success" id="contactSuccess" hidden>${esc(c.success)}</p>`;

    // выбор варианта → проставить тему в селект + плавно к форме
    $$('#contactOptions .copt').forEach(btn => btn.addEventListener('click', () => {
      const i = +btn.dataset.opt;
      $$('#contactOptions .copt').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const sel = $('#contactForm select[name="topic"]'); if (sel) sel.value = String(i + 1);
      $('#contactForm input[name="name"]').focus();
    }));

    // сабмит (демо — без бэкенда: валидация + успех)
    $('#contactForm').addEventListener('submit', e => {
      e.preventDefault();
      const form = e.currentTarget;
      let ok = true;
      ['name', 'email', 'message'].forEach(n => {
        const el2 = form.elements[n];
        const bad = !el2.value.trim() || (n === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el2.value));
        el2.classList.toggle('is-error', bad); if (bad) ok = false;
      });
      if (!ok) return;
      form.querySelectorAll('input,select,textarea,button').forEach(x => x.disabled = true);
      $('#contactSuccess').hidden = false;
      $('#contactSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  function langName(l) { return { de: 'Deutsch', en: 'English', ru: 'Русский' }[l]; }

  /* ---------------- Печатающаяся цитата (typewriter) ---------------- */
  const wait = ms => new Promise(r => setTimeout(r, ms));
  let typeCancel = null;
  function startTypewriter(el, words) {
    if (!el || !words || !words.length) return;
    if (typeCancel) typeCancel();
    let cancelled = false; typeCancel = () => { cancelled = true; };
    (async () => {
      let wi = 0;
      while (!cancelled) {
        const w = words[wi];
        for (let i = 1; i <= w.length && !cancelled; i++) { el.textContent = w.slice(0, i); await wait(70); }
        await wait(1400);
        for (let i = w.length; i >= 0 && !cancelled; i--) { el.textContent = w.slice(0, i); await wait(38); }
        await wait(220);
        wi = (wi + 1) % words.length;
      }
    })();
  }

  /* ---------------- Наклон фото основателя за курсором ---------------- */
  (function tiltFounder() {
    const box = $('.founder__photo'); if (!box) return;
    const img = box.querySelector('img'); if (!img) return;
    box.addEventListener('mousemove', e => {
      const r = box.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      img.style.transform = `perspective(720px) rotateY(${px * 16}deg) rotateX(${-py * 16}deg) scale(1.04)`;
    });
    box.addEventListener('mouseleave', () => { img.style.transform = ''; });
  })();

  /* ---------------- Переключатель языка ---------------- */
  const langBox = $('#lang');
  $('#langCurrent').addEventListener('click', e => {
    e.stopPropagation();
    langBox.classList.toggle('is-open');
    $('#langCurrent').setAttribute('aria-expanded', langBox.classList.contains('is-open'));
  });
  document.addEventListener('click', () => langBox.classList.remove('is-open'));
  $('#langMenu').addEventListener('click', e => {
    const li = e.target.closest('[data-lang]'); if (!li) return;
    lang = li.dataset.lang; localStorage.setItem('atrea_lang', lang);
    langBox.classList.remove('is-open');
    render();
  });

  /* ---------------- Бургер / мобильное меню ---------------- */
  const burger = $('#burger'), tabs = $('.nav__tabs');
  burger.addEventListener('click', () => tabs.classList.toggle('is-open'));

  /* ---------------- Динамические обработчики ---------------- */
  function bindDynamic() {
    // точки-индикатор блока "вывод бизнеса" — клик для перехода
    $$('#bizTabs .biz__dot').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = +btn.dataset.biz;
        if (isDesktop()) {
          // на десктопе — проскроллить к нужной фазе пиннинга
          const sec = $('#biz'); const n = TEXT[lang].biz.states.length;
          const extra = sec.offsetHeight - window.innerHeight;
          window.scrollTo({ top: sec.offsetTop + (extra * i) / (n - 1) + 4, behavior: 'smooth' });
        } else {
          setBiz(i);
        }
      });
    });
    // кнопки-CTA (демо-модалка)
    $$('.js-cta').forEach(b => b.addEventListener('click', () => openModal(b.dataset.title)));
  }

  function setBiz(i) {
    $$('#bizPanels .biz__panel').forEach(p => p.classList.toggle('is-active', +p.dataset.panel === i));
    $$('#bizTabs .biz__dot').forEach(b => b.classList.toggle('is-active', +b.dataset.biz === i));
  }

  /* ---------------- Модалка ---------------- */
  const modal = $('#modal');
  function openModal(title) {
    const t = TEXT[lang];
    $('#modalTitle').textContent = title;
    $('#modalText').textContent = {
      de: 'Hinterlassen Sie eine Anfrage — wir melden uns und besprechen Ihr Projekt im Detail.',
      en: 'Leave a request — we will get in touch and discuss your project in detail.',
      ru: 'Оставьте заявку — мы свяжемся и обсудим ваш проект детально.'
    }[lang];
    $('#modalBtn').textContent = t.nav.contact;
    modal.hidden = false;
  }
  modal.addEventListener('click', e => { if (e.target.hasAttribute('data-close')) modal.hidden = true; });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.hidden = true; });

  /* ---------------- Reveal по скроллу ---------------- */
  let io;
  function observeReveals() {
    if (io) io.disconnect();
    io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.15 });
    $$('.reveal').forEach(n => io.observe(n));
  }

  /* ---------------- Тень навигации ---------------- */
  const nav = $('#nav');

  /* ---------------- Пиннинг: размеры секций (desktop) ---------------- */
  const mqDesktop = window.matchMedia('(min-width: 861px)');
  const isDesktop = () => mqDesktop.matches;

  function layoutPinned() {
    const why = $('#why'), biz = $('#biz');
    if (isDesktop()) {
      // Почему ATREA: высота секции = экран + дистанция горизонтального хода
      const track = $('#whyTrack'), vp = $('.why__viewport');
      const extraX = Math.max(0, track.scrollWidth - vp.clientWidth);
      why.style.height = (window.innerHeight + extraX) + 'px';
      // Вывод бизнеса: по ~0.85 экрана на КАЖДОЕ состояние (вкл. последнее) —
      // полоса прокрутки на состояние = пауза, чтобы успеть прочитать.
      const n = TEXT[lang].biz.states.length;
      biz.style.height = (window.innerHeight + n * window.innerHeight * 0.85) + 'px';
    } else {
      why.style.height = '';
      biz.style.height = '';
    }
    onScroll();
  }

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 10);

    if (!isDesktop()) return;

    // --- горизонтальный ход карточек "почему ATREA" ---
    const why = $('#why'), track = $('#whyTrack'), vp = $('.why__viewport');
    const extraX = Math.max(0, track.scrollWidth - vp.clientWidth);
    if (extraX > 0) {
      const p = clamp((y - why.offsetTop) / extraX, 0, 1);
      track.style.transform = `translateX(${-p * extraX}px)`;
      const bar = $('#whyProgress'); if (bar) bar.style.width = (p * 100) + '%';
    }

    // --- смена состояний "вывод бизнеса" ---
    // каждому состоянию — равная "полоса" прокрутки (включая последнее),
    // чтобы можно было задержаться и прочитать перед уходом к след. блоку.
    const biz = $('#biz'); const n = TEXT[lang].biz.states.length;
    const extraY = biz.offsetHeight - window.innerHeight;
    if (extraY > 0) {
      const p = clamp((y - biz.offsetTop) / extraY, 0, 1);
      const idx = Math.min(n - 1, Math.floor(p * n));
      setBiz(idx);
    }
  }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  /* ---------------- Старт ---------------- */
  render();
  window.addEventListener('scroll', onScroll, { passive: true });
  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(layoutPinned, 150); });
  window.addEventListener('load', layoutPinned);
})();
