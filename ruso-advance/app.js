/* Ruso Advance — lógica de la app: lecciones, repaso espaciado, voz y vistas. */
(() => {
  'use strict';

  /* ───────── estado guardado ───────── */
  const KEY = 'ruso-advance-v1';
  const DAY = 864e5;
  const DEFAULT_SET = { translit: true, trans: 'auto', autoplay: true, rate: 0.85, typing: true, sfx: true, voice: '', limit: 60, unlockAll: false };
  function fresh() {
    return { v: 1, name: '', g: '', started: Date.now(), done: {}, cards: {}, xp: 0, days: [], set: { ...DEFAULT_SET }, seenIntro: false };
  }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) { const s = JSON.parse(raw); s.set = { ...DEFAULT_SET, ...(s.set || {}) }; return { ...fresh(), ...s }; }
    } catch (e) { /* sin almacenamiento: se juega igual, sin guardar */ }
    return fresh();
  }
  let S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* nada */ } updateBadge(); }

  /* ───────── utilidades de texto ───────── */
  const $ = (sel, el) => (el || document).querySelector(sel);
  const $$ = (sel, el) => [...(el || document).querySelectorAll(sel)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const VOW = 'аеёиоуыэюяАЕЁИОУЫЭЮЯ';
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  function resolve(s) {
    return String(s).replace(/\{name\}/g, S.name || 'amigo').replace(/\{([^{}|]*)\|([^{}|]*)\}/g, (m, a, b) => S.g === 'f' ? b : a);
  }
  const stress = s => s.replace(/([аеёиоуыэюяАЕЁИОУЫЭЮЯ])'/g, '$1́');
  /* para mostrar: resuelve, escapa y pone acentos */
  const show = s => stress(esc(resolve(s)));
  /* para la voz y para comparar: sin marcas de acento */
  const plain = s => resolve(s).replace(/([аеёиоуыэюяАЕЁИОУЫЭЮЯ])'/g, '$1');
  const isCyr = s => /[а-яё]/i.test(s);
  function norm(s) {
    return plain(s).toLowerCase().replace(/́/g, '').replace(/ё/g, 'е').replace(/[.,!?¿¡«»"“”—–\-…:;()]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function lev(a, b) {
    const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  const similarity = (a, b) => { a = norm(a); b = norm(b); return 1 - lev(a, b) / Math.max(a.length, b.length, 1); };

  /* transliteración pensada para hispanohablantes: х = j, г+e/i = gu, acento en la vocal tónica */
  const TR = { а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', ж: 'zh', з: 'z', и: 'i', й: 'i', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'j', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'shch', ъ: '', ы: 'y', ь: '', э: 'e' };
  const IOT = { е: ['e', 'ye'], ё: ['io', 'yo'], ю: ['iu', 'yu'], я: ['ia', 'ya'] };
  const ACC = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú', y: 'ý' };
  const GO = /(^|[^а-яё])(его|него|ничего|чего|кого|того|этого|моего|твоего|всего|сегодня)(?=[^а-яё]|$)/gi;
  function translit(src) {
    let s = resolve(src).replace(GO, (m, a, w) => a + w.replace(/г/i, c => c === 'Г' ? 'В' : 'в'));
    let out = '';
    for (let i = 0; i < s.length; i++) {
      const ch = s[i], lo = ch.toLowerCase();
      if (ch === "'") continue;
      const stressed = s[i + 1] === "'" || lo === 'ё';
      const prev = (s[i - 1] || '').toLowerCase();
      let t;
      if (IOT[lo]) {
        const afterCons = /[бвгджзйклмнпрстфхцчшщ]/.test(prev);
        t = IOT[lo][afterCons ? 0 : 1];
      } else if (lo in TR) {
        t = TR[lo];
        if (lo === 'г' && /[еиэ]/i.test(s[i + 1] || '')) t = 'gu';
      } else { out += ch; continue; }
      if (stressed && t) { const k = t.length - 1; t = t.slice(0, k) + (ACC[t[k]] || t[k]); }
      if (ch !== lo && t) t = t[0].toUpperCase() + t.slice(1);
      out += t;
    }
    return out;
  }
  /* ruso con transliteración opcional debajo */
  const ruHTML = (s, cls) => '<span class="ru ' + (cls || '') + '">' + show(s) + '</span>' + (S.set.translit && isCyr(s) ? '<span class="tr">' + esc(translit(s)) + '</span>' : '');
  /* textos propios con HTML (notas, frases de Masha): solo se escapa el nombre; el ruso entre [[ ]] se vuelve tocable */
  const rich = s => stress(resolve(String(s).replace(/\{name\}/g, esc(S.name || 'amigo')))).replace(/\[\[(.+?)\]\]/g, (m, t) => '<span class="say" data-say="' + esc(t.replace(/́/g, '')) + '">' + t + '</span>');

  /* ───────── voz ───────── */
  const synth = window.speechSynthesis;
  let ruVoices = [];
  function loadVoices() {
    if (!synth) return;
    ruVoices = synth.getVoices().filter(v => /^ru/i.test(v.lang));
  }
  if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }
  function voice() {
    if (!ruVoices.length) return null;
    if (S.set.voice) { const v = ruVoices.find(v => v.name === S.set.voice); if (v) return v; }
    return ruVoices.find(v => /milena|katya|svetlana|dariya|irina|alena|google/i.test(v.name)) || ruVoices[0];
  }
  function speak(text, opt) {
    opt = opt || {};
    if (!synth || !text) { if (opt.done) opt.done(); return; }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(plain(text).replace(/…/g, ', '));
    u.lang = 'ru-RU';
    const v = voice(); if (v) u.voice = v;
    u.rate = opt.rate || S.set.rate;
    u.pitch = opt.pitch || 1;
    let ended = false;
    const end = () => { if (ended) return; ended = true; if (opt.masha) M.talk(false); if (opt.done) opt.done(); };
    u.onstart = () => { if (opt.masha) M.talk(true); };
    u.onend = end; u.onerror = end;
    synth.speak(u);
  }
  const PITCH = { olga: 0.8, waiter: 0.6, seller: 1.1, doctor: 0.7 };

  /* reconocimiento de voz (solo algunos navegadores) */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  function listen(expected, cb) {
    if (!SR) return cb(-1);
    let r;
    try { r = new SR(); } catch (e) { return cb(-1); }
    r.lang = 'ru-RU'; r.maxAlternatives = 5; r.interimResults = false;
    let got = false;
    r.onresult = e => {
      got = true;
      const alts = [...e.results[0]].map(a => a.transcript);
      let best = 0, heard = alts[0] || '';
      alts.forEach(a => { const sc = similarity(a, expected); if (sc > best) { best = sc; heard = a; } });
      cb(best, heard);
    };
    r.onerror = () => { if (!got) { got = true; cb(-1); } };
    r.onend = () => { if (!got) cb(-2); };
    try { r.start(); } catch (e) { cb(-1); }
  }

  /* ───────── sonidos ───────── */
  let actx;
  function sfx(kind) {
    if (!S.set.sfx) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const notes = { ok: [660, 990], bad: [260, 196], done: [523, 659, 784, 1047] }[kind] || [440];
      notes.forEach((f, i) => {
        const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime + i * 0.09;
        o.type = kind === 'bad' ? 'triangle' : 'square'; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.06, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
        o.connect(g); g.connect(actx.destination); o.start(t); o.stop(t + 0.18);
      });
    } catch (e) { /* sin audio */ }
  }

  /* ───────── Masha ───────── */
  const M = Masha.mount($('#avatar'));
  function say(text, expr, raw) {
    $('#bubble').innerHTML = '<span class="who">Маша</span>' + (raw ? text : rich(text));
    M.set(expr || 'neutral');
  }
  const line = (k, vars) => { let t = pick(LINES[k]); for (const v in vars || {}) t = t.replace('{' + v + '}', vars[v]); return t; };

  /* ───────── tarjetas ───────── */
  const CARDS = {};
  const LESSON_IDX = {};
  LESSONS.forEach((L, li) => {
    LESSON_IDX[L.id] = li;
    L.phrases.forEach((p, i) => { CARDS['p:' + L.id + ':' + i] = { t: 'p', L, ru: p[0], es: p[1], note: p[2] }; });
    let last = null;
    L.dialog.forEach((st, i) => {
      if (st.ru) last = st;
      if (st.u && last && st.u.length > (st.k || 1)) CARDS['c:' + L.id + ':' + i] = { t: 'c', L, prompt: last, u: st.u, k: st.k || 1 };
    });
    CARDS['g:' + L.grammar.id] = { t: 'g', L, G: L.grammar };
  });
  ALPHABET.forEach((a, i) => { CARDS['a:' + i] = { t: 'a', a, i }; });
  const lessonCards = L => Object.keys(CARDS).filter(id => CARDS[id].L === L);

  /* ───────── repetición espaciada (variante simple de SM-2) ───────── */
  const dayStart = t => { const d = new Date(t); d.setHours(0, 0, 0, 0); return d.getTime(); };
  const dueIn = days => dayStart(Date.now()) + days * DAY + 3 * 3600e3;
  const newCard = () => ({ ivl: 0, ease: 2.5, reps: 0, lapses: 0, due: Date.now(), re: false });
  /* q: 0 otra vez · 1 difícil · 2 bien · 3 fácil */
  function nextState(c, q, noFuzz) {
    const n = { ...c, reps: c.reps + 1 };
    if (q === 0) {
      n.lapses++; n.ease = Math.max(1.3, n.ease - 0.2);
      n.ivl = n.ivl >= 1 ? Math.max(1, Math.round(n.ivl * 0.4)) : 0;
      n.due = Date.now() + 10 * 60e3; n.re = true;
      return n;
    }
    let ivl;
    if (n.ivl < 1) ivl = q === 3 ? 3 : 1;
    else if (n.re) ivl = Math.max(1, n.ivl) + (q === 3 ? 1 : 0);
    else if (q === 1) { ivl = Math.max(n.ivl + 1, Math.round(n.ivl * 1.2)); n.ease = Math.max(1.3, n.ease - 0.15); }
    else if (q === 2) ivl = Math.max(n.ivl + 1, Math.round(n.ivl * n.ease));
    else { ivl = Math.max(n.ivl + 2, Math.round(n.ivl * n.ease * 1.3)); n.ease += 0.15; }
    if (!noFuzz && ivl > 4) ivl = Math.round(ivl * (0.95 + Math.random() * 0.1));
    n.ivl = Math.min(ivl, 365); n.re = false; n.due = dueIn(n.ivl);
    return n;
  }
  const fmtIvl = d => d < 1 ? '10 min' : d === 1 ? '1 día' : d < 30 ? d + ' días' : d < 365 ? Math.round(d / 30) + ' mes' + (Math.round(d / 30) > 1 ? 'es' : '') : '1 año';
  function grade(id, q) {
    S.cards[id] = nextState(S.cards[id] || newCard(), q);
  }
  const dueIds = () => Object.keys(S.cards).filter(id => CARDS[id] && S.cards[id].due <= Date.now()).sort((a, b) => S.cards[a].due - S.cards[b].due);
  function updateBadge() {
    const n = dueIds().length, b = $('#badge');
    if (!b) return;
    b.hidden = !n; b.textContent = n > 99 ? '99+' : n;
  }
  function markDay() {
    const t = new Date().toLocaleDateString('sv');
    if (!S.days.includes(t)) S.days.push(t);
    if (S.days.length > 400) S.days = S.days.slice(-400);
  }
  function streak() {
    const set = new Set(S.days); let n = 0; const d = new Date();
    if (!set.has(d.toLocaleDateString('sv'))) d.setDate(d.getDate() - 1);
    while (set.has(d.toLocaleDateString('sv'))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  /* ───────── lecciones: desbloqueo ───────── */
  const isDone = L => !!S.done[L.id];
  const nextLesson = () => LESSONS.find(L => !isDone(L));
  const unlocked = L => S.set.unlockAll || isDone(L) || L === nextLesson();

  /* ───────── navegación ───────── */
  const main = $('#main');
  function go(hash) { if (location.hash === hash) route(); else location.hash = hash; }
  function route() {
    if (synth) synth.cancel();
    M.talk(false);
    if (!S.name || !S.g) return renderOnboard();
    const h = location.hash.slice(1) || 'home';
    const [r, arg] = h.split('/');
    $$('#nav a').forEach(a => a.classList.toggle('on', a.dataset.r === r || (r === 'lesson' && a.dataset.r === 'path')));
    if (r === 'lesson' && LESSON_IDX[arg] != null) renderLesson(LESSONS[LESSON_IDX[arg]]);
    else if (r === 'path') renderPath();
    else if (r === 'review') renderReview();
    else if (r === 'notes') renderNotes(arg);
    else if (r === 'settings') renderSettings();
    else renderHome();
    main.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  /* atajos de teclado: 1-4 eligen, Intro sigue, Espacio repite el audio */
  document.addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const typing = /INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName);
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement.tagName === 'BUTTON' && !document.activeElement.disabled) return;
    if (e.key === 'Enter') {
      if (typing && document.activeElement.classList.contains('type-in')) return;
      const b = $$('[data-enter]', main).filter(b => !b.disabled && b.offsetParent).pop();
      if (b) { e.preventDefault(); b.click(); }
      return;
    }
    if (typing) return;
    if (/^[1-9]$/.test(e.key)) {
      const c = $$('.choice:not(:disabled), .grades .btn', main).filter(b => b.offsetParent);
      const b = c.find(b => b.dataset.k === e.key);
      if (b) { e.preventDefault(); b.click(); }
    } else if (e.key === ' ') {
      const b = $('[data-replay]', main);
      if (b) { e.preventDefault(); b.click(); }
    }
  });
  /* cualquier [data-say] dice su texto */
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-say]');
    if (t) speak(t.dataset.say, { masha: t.dataset.masha === '1' });
  });

  function toast(msg) {
    const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t); setTimeout(() => t.remove(), 2200);
  }
  const sayBtn = (text, extra) => '<button class="icon-btn" data-say="' + esc(plain(text)) + '" ' + (extra || '') + ' aria-label="Escuchar" title="Escuchar">🔊</button>';

  /* ───────── bienvenida ───────── */
  function renderOnboard() {
    $$('#nav a').forEach(a => a.classList.remove('on'));
    if (!S.name) {
      say('Привет. Soy Masha. Voy a ser tu profesora de ruso. Primero lo primero: ¿cómo te llamas?', 'neutral');
      main.innerHTML = `<div class="card onboard"><div class="kicker">Bienvenida</div><h1>Ruso Advance</h1>
        <p>Vas a aprender ruso <b>conversando</b>: cada lección es una charla con Masha, unas frases clave y una idea pequeña de gramática. Después, el <b>repaso espaciado</b> te vuelve a preguntar cada cosa justo cuando estás a punto de olvidarla.</p>
        <label for="nm"><b>¿Cómo te llamas?</b></label>
        <input type="text" id="nm" maxlength="24" autocomplete="given-name" placeholder="Tu nombre">
        <button class="btn primary big wide" id="ok" data-enter>Seguir</button></div>`;
      const inp = $('#nm'); inp.focus();
      const ok = () => { const v = inp.value.trim(); if (!v) { say('Un nombre. Cualquiera. Hasta «Pelmén» sirve, pero ese ya está ocupado.', 'annoyed'); return; } S.name = v; save(); renderOnboard(); };
      $('#ok').onclick = ok;
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') ok(); });
      return;
    }
    say('Очень приятно, {name}. Pregunta importante: en ruso el pasado y algunos adjetivos cambian si eres hombre o mujer. «Я был» o «я была». ¿Cómo te hablo?', 'smirk');
    main.innerHTML = `<div class="card onboard"><div class="kicker">Una pregunta de gramática</div><h2>¿En masculino o en femenino?</h2>
      <p class="muted">Solo cambia las formas rusas que dices tú (я был / я была, я согласен / я согласна). Puedes cambiarlo luego en Ajustes.</p>
      <div class="choice-row"><button class="btn big" data-g="m">Masculino<br><small class="ru">я был</small></button><button class="btn big" data-g="f">Femenino<br><small class="ru">я была́</small></button></div></div>`;
    $$('[data-g]').forEach(b => b.onclick = () => {
      S.g = b.dataset.g; save();
      go('#home');
    });
  }

  /* ───────── inicio ───────── */
  function greeting() {
    const h = new Date().getHours();
    return pick(LINES[h < 5 ? 'night' : h < 12 ? 'morning' : h < 19 ? 'day' : h < 23 ? 'evening' : 'night']);
  }
  function renderHome() {
    const due = dueIds().length, nl = nextLesson(), inDeck = Object.keys(S.cards).length;
    const mature = Object.values(S.cards).filter(c => c.ivl >= 21).length;
    const st = streak();
    if (!S.seenIntro) { say('Así funciona: primero una lección nueva (una conversación conmigo). Mañana te pregunto lo que aprendiste. Y pasado. Y dentro de una semana. Lo que sabes bien, te lo pregunto menos. Simple. Como yo.', 'smirk'); S.seenIntro = true; save(); }
    else if (due >= 25) say(line('manyDue', { n: due }), 'annoyed');
    else if (!due && inDeck) say(line('noDue'), 'pleased');
    else if (S.days.length && !S.days.includes(new Date().toLocaleDateString('sv')) && Math.random() < 0.5) say(pick(LINES.back), 'smirk');
    else say(greeting(), 'neutral');

    /* previsión de 7 días */
    const fc = [];
    for (let d = 0; d < 7; d++) {
      const end = dayStart(Date.now()) + (d + 1) * DAY + 3 * 3600e3;
      const start = d === 0 ? -Infinity : end - DAY;
      fc.push(Object.values(S.cards).filter(c => c.due > start && c.due <= end).length);
    }
    const max = Math.max(1, ...fc);
    const days = ['hoy', 'mañ.', ...[2, 3, 4, 5, 6].map(i => { const d = new Date(Date.now() + i * DAY); return ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sá'][d.getDay()]; })];

    main.innerHTML = `
      <div class="kicker">Привет, ${esc(S.name)}</div>
      <div class="hero">
        <div class="card">
          <div class="kicker">Repaso de hoy</div>
          <div class="big-num">${due}</div>
          <p class="muted">${due ? 'tarjetas esperan su turno' : inDeck ? 'nada pendiente por ahora' : 'aún no tienes tarjetas: empieza una lección'}</p>
          <button class="btn ${due ? 'primary' : ''} wide" id="goRev" ${due ? 'data-enter' : 'disabled'}>Repasar</button>
        </div>
        <div class="card">
          <div class="kicker">${nl ? 'Lección ' + (LESSON_IDX[nl.id] + 1) + ' · Nivel ' + nl.level : 'Curso terminado'}</div>
          ${nl ? `<h2 class="ru">${show(nl.ru)}</h2><p class="muted">${esc(nl.es)}</p>
          <button class="btn ${due ? '' : 'primary'} wide" id="goLes" ${due ? '' : 'data-enter'}>Empezar lección</button>`
          : '<p>Terminaste las 24 lecciones. Ahora el repaso es tu vida. Y puedes repetir cualquier conversación.</p><button class="btn wide" id="goPath">Ver lecciones</button>'}
        </div>
      </div>
      <div class="stat-row">
        <div class="stat"><b>${st}</b><span>${st === 1 ? 'día' : 'días'} de racha</span></div>
        <div class="stat"><b>${S.xp}</b><span>XP</span></div>
        <div class="stat"><b>${inDeck}</b><span>tarjetas aprendidas</span></div>
        <div class="stat"><b>${mature}</b><span>dominadas (21+ días)</span></div>
      </div>
      ${inDeck ? `<div class="card dark"><h3>Próximos 7 días</h3><div class="forecast">${fc.map((n, i) => `<div><span>${n || ''}</span><i style="height:${Math.round(n / max * 44)}px"></i>${days[i]}</div>`).join('')}</div></div>` : ''}
      <div class="card dark small"><b>Cómo funciona.</b> Cada lección empieza con una conversación; luego ves las frases clave y una noción de gramática, y practicas. Todo lo que practicas entra al <b>repaso</b>: si aciertas, la tarjeta vuelve más tarde (1 día, 3, 8, 20…); si fallas, vuelve pronto. Unos minutos al día bastan.</div>`;
    const r = $('#goRev'); if (r) r.onclick = () => go('#review');
    const l = $('#goLes'); if (l) l.onclick = () => go('#lesson/' + nl.id);
    const p = $('#goPath'); if (p) p.onclick = () => go('#path');
  }

  /* ───────── lista de lecciones ───────── */
  function renderPath() {
    const nl = nextLesson();
    say(nl ? 'Las lecciones van en orden. Cada una abre la siguiente. Sí, como un videojuego. No, no hay jefe final. Bueno, yo.' : 'Todo terminado. Puedes repetir cualquier conversación. Te reto a hacerlo sin traducción.', 'smirk');
    main.innerHTML = LEVELS.map(lv => `
      <section class="level">
        <div class="level-head"><h2>Nivel ${lv.id} · <span class="ru">${show(lv.ru)}</span></h2><span class="muted small">${esc(lv.es)} — ${esc(lv.note)}</span></div>
        <div class="lessons">${LESSONS.filter(L => L.level === lv.id).map(L => {
          const i = LESSON_IDX[L.id] + 1, d = isDone(L), u = unlocked(L);
          return `<button class="lesson-tile ${d ? 'done' : ''} ${L === nl ? 'next' : ''} ${u ? '' : 'locked'}" data-l="${L.id}" ${u ? '' : 'aria-disabled="true"'}>
            <span class="n">${i}</span><span class="st">${d ? '✓ hecha' : L === nl ? '▶ siguiente' : u ? '' : '🔒'}</span>
            <span class="t">${show(L.ru)}</span><span class="s">${esc(L.es)}</span></button>`;
        }).join('')}</div>
      </section>`).join('');
    $$('[data-l]').forEach(b => b.onclick = () => {
      const L = LESSONS[LESSON_IDX[b.dataset.l]];
      if (!unlocked(L)) { say('Esa todavía no. Primero «' + show(nextLesson().ru) + '». Paciencia. Es una virtud rusa. Bueno, más o menos.', 'annoyed', true); return; }
      go('#lesson/' + L.id);
    });
  }

  /* ───────── lección ───────── */
  const STAGES = ['Escena', 'Diálogo', 'Frases', 'Gramática', 'Práctica'];
  function stepsBar(k) { return '<div class="steps" aria-label="Paso ' + (k + 1) + ' de 5">' + STAGES.map((s, i) => '<span class="' + (i < k ? 'done' : i === k ? 'on' : '') + '" title="' + s + '"></span>').join('') + '</div>'; }
  function lessonHead(L, k) {
    return stepsBar(k) + '<div class="kicker">Lección ' + (LESSON_IDX[L.id] + 1) + ' · ' + STAGES[k] + '</div>';
  }

  function renderLesson(L) {
    if (!unlocked(L)) { go('#path'); return; }
    stageScene(L);
  }

  function stageScene(L) {
    say(L.intro, 'smirk');
    main.innerHTML = lessonHead(L, 0) + `
      <div class="card"><div class="lesson-title"><h1 class="ru">${show(L.ru)}</h1><span class="muted">${esc(L.es)}</span></div>
      <p class="scene">${esc(resolve(L.scene))}</p>
      <p class="muted small">Primero, la conversación. Elige tus respuestas. Toca 🔊 para oír cualquier frase.</p>
      <button class="btn primary big" data-enter id="go">Empezar la conversación</button></div>`;
    $('#go').onclick = () => stageDialog(L);
  }

  function stageDialog(L) {
    const hideTrans = S.set.trans === 'hide' || (S.set.trans === 'auto' && L.level > 1);
    let showOpts = !hideTrans;
    let i = 0, mistakes = 0;
    main.innerHTML = lessonHead(L, 1) + `<div class="card"><div class="toolbar">
        <button class="chip ${showOpts ? 'on' : ''}" id="tt">Traducción</button>
        <button class="chip ${S.set.translit ? 'on' : ''}" id="tl">Transliteración</button></div>
      <div class="chat" id="chat"></div><div id="act"></div></div>`;
    const chat = $('#chat'), act = $('#act');
    $('#tt').onclick = e => { showOpts = !showOpts; e.target.classList.toggle('on', showOpts); $$('.msg .es', chat).forEach(x => x.classList.toggle('hid', !showOpts)); $$('.choice .es').forEach(x => x.hidden = !showOpts); };
    $('#tl').onclick = e => { S.set.translit = !S.set.translit; save(); e.target.classList.toggle('on', S.set.translit); toast(S.set.translit ? 'Transliteración activada' : 'Transliteración desactivada'); };

    function bubble(st, me) {
      const who = me ? esc(S.name) : st.who ? show(SPEAKERS[st.who].name) : 'Маша';
      const d = document.createElement('div');
      d.className = 'msg' + (me ? ' me' : '');
      d.innerHTML = '<div class="head">' + who + '</div><div class="line"><div class="grow">' + ruHTML(st.ru) +
        '<span class="es ' + (showOpts ? '' : 'hid') + '" title="Toca para ver">' + esc(resolve(st.es)) + '</span></div>' +
        sayBtn(st.ru, (me ? '' : 'data-masha="' + (st.who ? 0 : 1) + '"')) + '</div>';
      const es = $('.es', d); es.onclick = () => es.classList.remove('hid');
      chat.appendChild(d);
      d.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      return d;
    }
    function step() {
      act.innerHTML = '';
      if (i >= L.dialog.length) return finish();
      const st = L.dialog[i];
      if (st.n) {
        const d = document.createElement('div'); d.className = 'narr'; d.textContent = resolve(st.n); chat.appendChild(d);
        i++; return step();
      }
      if (st.ru) {
        bubble(st);
        if (!st.who) M.set(st.e || 'neutral');
        if (S.set.autoplay) speak(st.ru, { masha: !st.who, pitch: PITCH[st.who] });
        i++;
        if (L.dialog[i] && L.dialog[i].u) return step();
        act.innerHTML = '<div class="row" style="margin-top:14px"><button class="btn primary" data-enter id="nx">Siguiente ▸</button></div>';
        $('#nx').onclick = step;
        return;
      }
      if (st.u) return turn(st);
    }
    function turn(st) {
      const k = st.k || 1;
      const opts = shuffle(st.u.map((o, j) => ({ ru: o[0], es: o[1], c: o[2], ok: j < k })));
      act.innerHTML = '<div class="choices">' + opts.map((o, j) =>
        '<button class="choice" data-k="' + (j + 1) + '" data-j="' + j + '">' + ruHTML(o.ru) + '<span class="es" ' + (showOpts ? '' : 'hidden') + '>' + esc(resolve(o.es)) + '</span></button>').join('') + '</div>';
      $$('.choice', act).forEach(b => b.onclick = () => {
        const o = opts[+b.dataset.j];
        if (!o.ok) {
          mistakes++; b.classList.add('bad'); b.disabled = true; sfx('bad');
          say(o.c || line('wrong'), pick(['annoyed', 'eyeroll']));
          return;
        }
        sfx('ok');
        $$('.choice', act).forEach(x => x.disabled = true);
        const d = bubble({ ru: o.ru, es: o.es }, true);
        if (S.set.autoplay) speak(o.ru, { rate: S.set.rate });
        if (o.c) say(o.c, pick(['smirk', 'pleased']));
        else if (Math.random() < 0.35) say(line('right'), 'pleased');
        else say(pick(['Bien.', 'Ajá.', 'Хорошо.', 'Sigue.', 'Да. Eso.', 'Ну да.', 'Vale.']), pick(['neutral', 'pleased']));
        i++;
        const after = document.createElement('div');
        after.className = 'row';
        after.style.marginTop = '14px';
        after.innerHTML = (SR ? '<button class="btn ghost mic" id="mic">🎤 Dilo tú</button>' : '') + '<span class="grow"></span><button class="btn primary" data-enter id="nx">Siguiente ▸</button>';
        act.innerHTML = ''; act.appendChild(after);
        $('#nx').onclick = step;
        const mic = $('#mic');
        if (mic) mic.onclick = () => {
          if (synth) synth.cancel();
          mic.classList.add('mic-on'); mic.textContent = '🎤 Escuchando…';
          listen(o.ru, (sc, heard) => {
            mic.classList.remove('mic-on'); mic.textContent = '🎤 Otra vez';
            if (sc === -1) say('Tu navegador no me deja escucharte. O no le diste permiso al micrófono. Tímido.', 'eyeroll');
            else if (sc === -2) say('No oí nada. ¿Hablaste? ¿O solo moviste los labios?', 'annoyed');
            else if (sc >= 0.8) say('Oí «' + esc(heard) + '». ' + pick(['Casi nativo. Casi.', 'Bien dicho. Pelmén giró una oreja.', 'Хорошо. Se entendió todo.']), 'happy', true);
            else if (sc >= 0.5) say('Oí «' + esc(heard) + '». Se entiende. Más o menos. Escucha otra vez y repite.', 'smirk', true);
            else say('Oí «' + esc(heard) + '». Eso… no era la frase. Escúchala y prueba otra vez.', 'annoyed', true);
          });
        };
      });
    }
    function finish() {
      const good = mistakes === 0;
      say(good ? 'Conversación sin un solo error. Sospechoso. Muy bien.' : mistakes <= 2 ? 'Bien. Algunos tropiezos, pero llegamos.' : 'Llegamos al final. Con ' + mistakes + ' errores, pero llegamos. Para eso es la práctica.', good ? 'happy' : 'smirk');
      act.innerHTML = '<div class="row" style="margin-top:16px"><button class="btn ghost" id="again">↺ Repetir diálogo</button><span class="grow"></span><button class="btn primary" data-enter id="nx">Frases clave ▸</button></div>';
      $('#again').onclick = () => stageDialog(L);
      $('#nx').onclick = () => stagePhrases(L);
    }
    step();
  }

  function stagePhrases(L) {
    say('Estas son las frases que importan. Escúchalas. Repítelas en voz alta. Sí, en voz alta. Nadie te oye. Bueno, Pelmén.', 'neutral');
    main.innerHTML = lessonHead(L, 2) + `<div class="card">
      <div class="row" style="margin-bottom:6px"><h2 class="grow" style="margin:0">Frases clave</h2><button class="btn ghost" id="all">🔊 Todas</button></div>
      ${L.phrases.map(p => `<div class="phrase">${sayBtn(p[0])}<div class="grow">${ruHTML(p[0])}<span class="es">${esc(resolve(p[1]))}</span>${p[2] ? '<span class="note">' + esc(p[2]) + '</span>' : ''}</div></div>`).join('')}
      <div class="row" style="margin-top:16px"><span class="grow"></span><button class="btn primary" data-enter id="nx">Gramática ▸</button></div></div>`;
    $('#nx').onclick = () => stageGrammar(L);
    $('#all').onclick = () => {
      let j = 0;
      const next = () => { if (j < L.phrases.length && location.hash.includes(L.id)) speak(L.phrases[j++][0], { done: () => setTimeout(next, 450) }); };
      next();
    };
  }

  function stageGrammar(L) {
    const G = L.grammar;
    say('Una idea de gramática. Solo una. Volverá en el repaso, así que no hace falta memorizarla hoy. Entiéndela y ya.', 'neutral');
    main.innerHTML = lessonHead(L, 3) + `<div class="card"><div class="kicker">Gramática</div><h2>${show(G.title)}</h2>
      <div class="grammar-body">${rich(G.body)}</div>
      <p class="muted small">Toca las palabras resaltadas para oírlas.</p>
      <div class="row" style="margin-top:16px"><span class="grow"></span><button class="btn primary" data-enter id="nx">Practicar ▸</button></div></div>`;
    $('#nx').onclick = () => stagePractice(L);
  }

  function stagePractice(L) {
    const ids = lessonCards(L);
    const phr = ids.filter(id => CARDS[id].t === 'p'), conv = ids.filter(id => CARDS[id].t === 'c'), gid = ids.find(id => CARDS[id].t === 'g');
    let q = shuffle(phr.concat(conv));
    /* la gramática aparece tres veces, repartida */
    const at = [Math.floor(q.length / 3), Math.floor(q.length * 2 / 3), q.length];
    at.reverse().forEach(p => q.splice(p, 0, gid));
    /* y un poco de repaso de lecciones anteriores, intercalado */
    const old = dueIds().filter(id => CARDS[id].L !== L).slice(0, 3);
    old.forEach(id => q.splice(1 + Math.floor(Math.random() * q.length), 0, id));
    const before = new Set(Object.keys(S.cards));
    say('Ahora practicamos. Lo nuevo entra al repaso. Lo que falles, te lo vuelvo a preguntar aquí mismo.', 'smirk');
    runSession({
      queue: q, mode: 'lesson', head: lessonHead(L, 4), lesson: L,
      /* las tarjetas que ya tenías y no tocaba repasar no cambian su calendario */
      frozen: id => before.has(id) && S.cards[id].due > Date.now(),
      done: res => lessonEnd(L, res),
    });
  }

  function lessonEnd(L, res) {
    const first = !isDone(L);
    S.done[L.id] = { at: Date.now(), n: ((S.done[L.id] || {}).n || 0) + 1 };
    lessonCards(L).forEach(id => { if (!S.cards[id]) S.cards[id] = { ...newCard(), due: dueIn(1) }; });
    const xp = (first ? 50 : 15) + res.ok * 2;
    S.xp += xp; markDay(); save();
    sfx('done');
    say(L.outro, 'happy');
    const nl = nextLesson();
    const levelEnd = first && (!nl || nl.level !== L.level);
    main.innerHTML = stepsBar(5) + `<div class="card center"><div class="kicker">Lección completada</div>
      <h1 class="ru">${show(L.ru)}</h1>
      <p class="big-num">+${xp} XP</p>
      <p>${res.ok} de ${res.total} a la primera · ${lessonCards(L).length} tarjetas en tu repaso</p>
      ${levelEnd ? '<p><b>¡Nivel ' + L.level + ' terminado!</b></p>' : ''}
      <p class="muted small">Mañana te pregunto lo de hoy. No lo olvides. Bueno, olvídalo un poco: así funciona la memoria.</p>
      <div class="row" style="justify-content:center;margin-top:12px">
        <button class="btn" id="home">Inicio</button>
        ${nl ? '<button class="btn primary" data-enter id="next">Siguiente: ' + show(nl.ru) + '</button>' : ''}
      </div></div>`;
    $('#home').onclick = () => go('#home');
    const n = $('#next'); if (n) n.onclick = () => go('#lesson/' + nl.id);
  }

  /* ───────── repaso ───────── */
  function renderReview() {
    const ids = dueIds();
    if (!ids.length) {
      const nl = nextLesson();
      say(Object.keys(S.cards).length ? line('noDue') : 'No hay nada que repasar porque no has aprendido nada. Todavía. Empieza una lección.', 'pleased');
      main.innerHTML = `<div class="card center"><div class="kicker">Repaso</div><h1>Todo al día</h1>
        <p class="muted">Vuelve cuando haya tarjetas pendientes; el número aparece en el menú.</p>
        <div class="row" style="justify-content:center">${nl ? '<button class="btn primary" data-enter id="les">Lección: ' + show(nl.ru) + '</button>' : ''}<button class="btn" id="home">Inicio</button></div></div>`;
      const l = $('#les'); if (l) l.onclick = () => go('#lesson/' + nl.id);
      $('#home').onclick = () => go('#home');
      return;
    }
    /* se mezclan los tipos para que no salgan todas las de una lección juntas */
    const q = shuffle(ids.slice(0, S.set.limit));
    say(q.length > 30 ? 'Muchas tarjetas. Vamos poco a poco. Una cada vez.' : 'Repaso. La parte aburrida que funciona. Vamos.', 'neutral');
    runSession({ queue: q, mode: 'review', head: '', done: res => reviewEnd(res) });
  }
  function reviewEnd(res) {
    markDay(); save(); sfx('done');
    say(line('sessionEnd'), 'happy');
    const left = dueIds().length;
    main.innerHTML = `<div class="card center"><div class="kicker">Repaso terminado</div>
      <p class="big-num">${res.ok}/${res.total}</p><p>a la primera · +${res.xp} XP</p>
      ${left ? '<p class="muted">Quedan ' + left + ' tarjetas (por el límite de cada sesión).</p>' : ''}
      <div class="row" style="justify-content:center;margin-top:10px"><button class="btn" id="home">Inicio</button>
      ${left ? '<button class="btn primary" data-enter id="more">Seguir repasando</button>' : (nextLesson() ? '<button class="btn primary" data-enter id="les">Siguiente lección</button>' : '')}</div></div>`;
    $('#home').onclick = () => go('#home');
    const m = $('#more'); if (m) m.onclick = () => renderReview();
    const l = $('#les'); if (l) l.onclick = () => go('#lesson/' + nextLesson().id);
  }

  /* ───────── motor de ejercicios ───────── */
  function distractors(C, n, field) {
    const li = LESSON_IDX[C.L.id];
    /* primero frases de esta lección y de las cercanas ya vistas; solo si faltan, de más adelante */
    const all = Object.values(CARDS).filter(x => x.t === 'p' && x !== C);
    const near = all.filter(x => LESSON_IDX[x.L.id] <= li && li - LESSON_IDX[x.L.id] <= 5);
    const pool = shuffle(near).concat(shuffle(all.filter(x => !near.includes(x))));
    const seen = new Set([norm(C[field])]), out = [];
    for (const x of pool) {
      const k = norm(x[field]);
      if (!seen.has(k)) { seen.add(k); out.push(x); }
      if (out.length >= n) break;
    }
    return out;
  }
  const tokens = s => resolve(s).replace(/[.,!?¿¡«»…—]/g, ' ').split(/\s+/).filter(Boolean);
  const awkward = s => /[…\/]/.test(s);

  /* elige el tipo de ejercicio según lo madura que esté la tarjeta */
  function buildEx(id, mode) {
    const C = CARDS[id], st = S.cards[id] || newCard(), ivl = mode === 'lesson' ? 0 : st.ivl;
    if (C.t === 'p') {
      const n = tokens(C.ru).length;
      const canTiles = n >= 3 && !awkward(C.ru), canType = S.set.typing && n <= 4 && !awkward(C.ru);
      let kinds;
      if (mode === 'lesson') kinds = ['ru2es', 'ru2es', 'es2ru'];
      else if (ivl < 2) kinds = ['ru2es', 'es2ru'];
      else if (ivl < 7) kinds = ['es2ru', canTiles ? 'tiles' : 'listen', 'listen'];
      else kinds = [canType ? 'type' : 'es2ru', canTiles ? 'tiles' : 'listen', 'listen'];
      return { id, C, kind: pick(kinds) };
    }
    if (C.t === 'c') return { id, C, kind: ivl >= 7 ? 'conv-listen' : 'conv' };
    if (C.t === 'g') {
      const d = C.G.drills;
      let j = Math.floor(Math.random() * d.length);
      if (d.length > 1 && j === st.last) j = (j + 1) % d.length;
      return { id, C, kind: 'drill', j };
    }
    return { id, C, kind: ivl >= 3 ? 'abc-rev' : 'abc' };
  }

  function runSession(o) {
    const queue = o.queue.slice(), firstTry = {}, lastQ = {};
    let done = 0, total = new Set(queue).size, ok = 0, xp = 0, run = 0;
    function next() {
      if (!queue.length) return o.done({ ok, total, xp });
      const id = queue.shift();
      const ex = buildEx(id, o.mode);
      render(ex);
    }
    function top() {
      const pct = Math.round(done / (done + queue.length + 1) * 100);
      return o.head + `<div class="session-top"><span>${o.mode === 'lesson' ? 'Práctica' : 'Repaso'}</span><span class="grow"></span><span>${queue.length + 1} por delante</span>
        <button class="chip" id="quit">Salir</button></div><div class="progress"><i style="width:${pct}%"></i></div>`;
    }
    function render(ex) {
      const C = ex.C;
      let body = '', options = null, answerRu = '', autoAudio = '', check = null;
      const isNew = o.mode === 'lesson' && !S.cards[ex.id];
      if (ex.kind === 'ru2es' || ex.kind === 'listen') {
        const ds = distractors(C, 3, 'es');
        options = shuffle([{ h: esc(resolve(C.es)), ok: true }, ...ds.map(d => ({ h: esc(resolve(d.es)) }))]);
        answerRu = C.ru; autoAudio = C.ru;
        body = ex.kind === 'ru2es'
          ? `<div class="ex-type">${isNew ? 'Nueva · ' : ''}¿Qué significa?</div><div class="prompt">${ruHTML(C.ru)} ${sayBtn(C.ru, 'data-replay')}</div>`
          : `<div class="ex-type">Escucha · ¿Qué significa?</div><div class="listen-big"><button data-say="${esc(plain(C.ru))}" data-replay aria-label="Escuchar otra vez">🔊</button></div>`;
      } else if (ex.kind === 'es2ru') {
        const ds = distractors(C, 3, 'ru');
        options = shuffle([{ h: ruHTML(C.ru), ok: true }, ...ds.map(d => ({ h: ruHTML(d.ru) }))]);
        answerRu = C.ru;
        body = `<div class="ex-type">¿Cómo se dice en ruso?</div><div class="prompt es-p">${esc(resolve(C.es))}</div>`;
      } else if (ex.kind === 'tiles') {
        answerRu = C.ru;
        const right = tokens(C.ru);
        const extra = shuffle(distractors(C, 6, 'ru').flatMap(d => tokens(d.ru)).filter(w => !right.some(r => norm(r) === norm(w)))).slice(0, 3);
        const bank = shuffle(right.concat(extra)).map((w, j) => ({ w, j }));
        body = `<div class="ex-type">Arma la frase en ruso</div><div class="prompt es-p">${esc(resolve(C.es))}</div>
          <div class="tiles answer" id="ans"></div><div class="tiles" id="bank">${bank.map(b => `<button class="tile" data-j="${b.j}">${show(b.w)}</button>`).join('')}</div>
          <div class="row"><button class="btn ghost" id="clr">Borrar</button><span class="grow"></span><button class="btn primary" id="chk" data-enter>Comprobar</button></div>`;
        check = () => norm($$('#ans .tile').map(t => t.textContent).join(' ')) === norm(C.ru);
      } else if (ex.kind === 'type') {
        answerRu = C.ru;
        body = `<div class="ex-type">Escríbelo en ruso</div><div class="prompt es-p">${esc(resolve(C.es))}</div>
          <input class="type-in" id="tin" autocomplete="off" autocapitalize="off" spellcheck="false" lang="ru" placeholder="по-русски…">
          ${keyboard()}<div class="row"><button class="btn ghost" id="skip">No sé</button><span class="grow"></span><button class="btn primary" id="chk" data-enter>Comprobar</button></div>`;
      } else if (ex.kind === 'conv' || ex.kind === 'conv-listen') {
        const p = C.prompt, k = C.k;
        const right = pick(C.u.slice(0, k)), wrong = shuffle(C.u.slice(k)).slice(0, 2);
        options = shuffle([{ h: ruHTML(right[0]), ok: true, ru: right[0] }, ...wrong.map(w => ({ h: ruHTML(w[0]), c: w[2], ru: w[0] }))]);
        answerRu = right[0]; autoAudio = p.ru;
        const who = p.who ? show(SPEAKERS[p.who].name) : 'Маша';
        body = `<div class="ex-type">Conversación · ¿Qué respondes?</div>
          <div class="msg" style="max-width:100%"><div class="head">${who}</div><div class="line"><div class="grow">
          ${ex.kind === 'conv-listen' ? '<span class="ru hidden-line" id="hl">· · ·</span><button class="chip" id="showl">Ver texto</button>' : ruHTML(p.ru)}
          <span class="es hid" id="pes">${esc(resolve(p.es))}</span></div>${sayBtn(p.ru, 'data-replay data-masha="' + (p.who ? 0 : 1) + '"')}</div></div>`;
      } else if (ex.kind === 'drill') {
        const d = C.G.drills[ex.j];
        options = shuffle(d.o.map((t, j) => ({ h: isCyr(t) ? ruHTML(t) : esc(t), ok: j === 0, ru: t })));
        answerRu = d.q ? d.q.replace('___', d.o[0]) : (isCyr(d.o[0]) ? d.o[0] : '');
        body = `<div class="ex-type">Gramática · ${show(C.G.title)}</div>
          ${d.p ? `<div class="prompt es-p">${show(d.p)}</div>` : ''}
          ${d.q ? `<div class="prompt">${show(d.q).replace('___', '<span class="blank"></span>')}</div>` : ''}
          ${d.es ? `<div class="prompt-sub">${esc(d.es)}</div>` : ''}`;
        ex.explain = d.x;
      } else if (ex.kind === 'abc' || ex.kind === 'abc-rev') {
        const a = C.a, others = shuffle(ALPHABET.filter(x => x !== a)).slice(0, 3);
        autoAudio = a[2];
        if (ex.kind === 'abc') {
          options = shuffle([{ h: esc(a[1]), ok: true }, ...others.map(x => ({ h: esc(x[1]) }))]);
          body = `<div class="ex-type">Alfabeto · ¿Cómo suena?</div><div class="big-letter">${a[0]}</div><p class="center muted">como en ${ruHTML(a[2])} ${sayBtn(a[2], 'data-replay')}</p>`;
        } else {
          options = shuffle([{ h: '<span class="ru" style="font-size:26px">' + a[0] + '</span>', ok: true }, ...others.map(x => ({ h: '<span class="ru" style="font-size:26px">' + x[0] + '</span>' }))]);
          body = `<div class="ex-type">Alfabeto · ¿Qué letra es?</div><div class="prompt es-p">Suena: ${esc(a[1])}</div><p class="muted">Escucha: ${sayBtn(a[2], 'data-replay')}</p>`;
        }
        answerRu = a[2];
      }

      main.innerHTML = top() + '<div class="card" id="ex">' + body +
        (options ? '<div class="choices">' + options.map((op, j) => '<button class="choice" data-k="' + (j + 1) + '" data-j="' + j + '">' + op.h + '</button>').join('') + '</div>' : '') +
        '<div id="fb"></div></div>';
      $('#quit').onclick = () => { save(); go(o.mode === 'lesson' ? '#path' : '#home'); };
      if (autoAudio && S.set.autoplay) speak(autoAudio, { masha: ex.kind === 'conv' || ex.kind === 'conv-listen' ? !C.prompt.who : false, pitch: ex.C.prompt && PITCH[ex.C.prompt.who] });
      const pes = $('#pes'); if (pes) pes.onclick = () => pes.classList.remove('hid');
      const sl = $('#showl'); if (sl) sl.onclick = () => { $('#hl').outerHTML = ruHTML(C.prompt.ru); sl.remove(); };

      if (options) $$('.choice', main).forEach(b => b.onclick = () => {
        const op = options[+b.dataset.j];
        $$('.choice', main).forEach((x, j) => { x.disabled = true; if (options[j].ok) x.classList.add('ok'); else if (x !== b) x.classList.add('dim'); });
        if (!op.ok) b.classList.add('bad');
        answered(ex, !!op.ok, { answerRu, comment: op.c, chosen: op });
      });
      if (ex.kind === 'tiles') {
        const ans = $('#ans');
        $$('#bank .tile').forEach(t => t.onclick = () => {
          if (t.classList.contains('used')) return;
          t.classList.add('used');
          const c = document.createElement('button'); c.className = 'tile'; c.textContent = t.textContent; c.dataset.j = t.dataset.j;
          c.onclick = () => { c.remove(); t.classList.remove('used'); };
          ans.appendChild(c);
          speak(t.textContent, { rate: S.set.rate });
        });
        $('#clr').onclick = () => { ans.innerHTML = ''; $$('#bank .tile').forEach(t => t.classList.remove('used')); };
        $('#chk').onclick = () => {
          if (!ans.children.length) return;
          const r = check();
          $$('#ex button').forEach(b => b.disabled = true);
          answered(ex, r, { answerRu });
        };
      }
      if (ex.kind === 'type') {
        const inp = $('#tin');
        if (!matchMedia('(pointer: coarse)').matches) inp.focus();
        $$('.kbd button').forEach(b => b.onclick = () => {
          const k = b.dataset.key;
          if (k === 'bs') inp.value = inp.value.slice(0, -1); else inp.value += k;
          if (!matchMedia('(pointer: coarse)').matches) inp.focus();
        });
        if (matchMedia('(pointer: coarse)').matches) inp.readOnly = true;
        const go2 = () => {
          const v = inp.value.trim(); if (!v) return;
          const a = norm(v), b = norm(C.ru);
          const exact = a === b, close = !exact && b.length > 4 && lev(a, b) <= 1;
          inp.disabled = true; $$('#ex button').forEach(x => x.disabled = true);
          answered(ex, exact || close, { answerRu, typo: close });
        };
        $('#chk').onclick = go2;
        inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); go2(); } });
        $('#skip').onclick = () => { inp.disabled = true; $$('#ex button').forEach(x => x.disabled = true); answered(ex, false, { answerRu }); };
      }
    }

    function answered(ex, right, info) {
      const id = ex.id, first = !(id in firstTry);
      if (first) { firstTry[id] = right; if (right) ok++; }
      run = right ? run + 1 : 0;
      sfx(right ? 'ok' : 'bad');
      if (ex.kind === 'drill') { S.cards[id] = S.cards[id] || newCard(); S.cards[id].last = ex.j; }
      const frozen = o.frozen && o.frozen(id);
      if (right) { xp += 2; S.xp += 2; }
      if (info.comment) say(info.comment, 'eyeroll');
      else if (right) say(run >= 3 && run % 3 === 0 ? line('streak') : line('right'), run >= 3 ? 'happy' : pick(['pleased', 'smirk', 'neutral']));
      else say(line('wrong'), pick(['annoyed', 'sad', 'eyeroll']));

      let html = '<div class="feedback ' + (right ? 'ok' : 'bad') + '"><h3>' + (right ? (info.typo ? 'Casi perfecto' : pick(['Правильно!', 'Хорошо!', 'Верно!'])) : 'Не совсем…') + '</h3>';
      if (info.answerRu) html += '<div class="row">' + sayBtn(info.answerRu) + '<div class="grow">' + ruHTML(info.answerRu) + (ex.C.es && ex.C.t === 'p' ? '<span class="es">' + esc(resolve(ex.C.es)) + '</span>' : '') + '</div></div>';
      if (ex.kind.startsWith('conv')) html += '<p class="small muted" style="margin-top:6px">' + show(ex.C.prompt.ru) + ' — ' + esc(resolve(ex.C.prompt.es)) + '</p>';
      if (ex.explain) html += '<p class="small" style="margin-top:6px">' + show(ex.explain) + '</p>';
      if (ex.C.note && !right) html += '<p class="small">' + esc(ex.C.note) + '</p>';

      /* calendario */
      const graded = q => {
        /* en la lección, una tarjeta repetida (la gramática sale tres veces) solo se agenda una vez, salvo si se falla */
        if (!frozen && (o.mode !== 'lesson' || q === 0 || !lastQ[id])) grade(id, q);
        lastQ[id] = q;
        if (q === 0) {
          /* vuelve en esta misma sesión, unas tarjetas más adelante */
          const pos = Math.min(queue.length, 3 + Math.floor(Math.random() * 3));
          queue.splice(pos, 0, id);
        } else done++;
        save(); next();
      };
      if (!right) {
        html += '<div class="row" style="margin-top:12px"><span class="grow"></span><button class="btn red" data-enter id="cont">Continuar</button></div>';
      } else if (o.mode === 'lesson' || frozen) {
        html += '<div class="row" style="margin-top:12px"><span class="grow"></span><button class="btn green" data-enter id="cont">Continuar</button></div>';
      } else {
        const c = S.cards[id] || newCard();
        const iv = q => fmtIvl(nextState(c, q, true).ivl);
        html += '<div class="grades"><button class="btn" data-k="1" data-q="1">Difícil<small>' + iv(1) + '</small></button>' +
          '<button class="btn green" data-k="2" data-q="2" data-enter>Bien<small>' + iv(2) + '</small></button>' +
          '<button class="btn" data-k="3" data-q="3">Fácil<small>' + iv(3) + '</small></button></div>';
      }
      html += '</div>';
      $('#fb').innerHTML = html;
      $('#fb').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      if (info.answerRu && !right && S.set.autoplay) speak(info.answerRu);
      const cont = $('#cont');
      if (cont) cont.onclick = () => graded(right ? (info.typo ? 1 : 2) : 0);
      $$('.grades .btn').forEach(b => b.onclick = () => graded(+b.dataset.q));
    }
    next();
  }

  function keyboard() {
    const rows = ['йцукенгшщзхъ', 'фывапролджэ', 'ячсмитьбюё'];
    return '<div class="kbd" aria-label="Teclado ruso">' + rows.map((r, i) => '<div>' + [...r].map(ch => '<button type="button" data-key="' + ch + '">' + ch + '</button>').join('') +
      (i === 2 ? '<button type="button" class="w" data-key="bs" aria-label="Borrar">⌫</button>' : '') + '</div>').join('') +
      '<div><button type="button" class="w" data-key=" " style="max-width:260px;flex:8">espacio</button></div></div>';
  }

  /* ───────── notas: gramática y alfabeto ───────── */
  function renderNotes(tab) {
    tab = tab || 'grammar';
    const tabs = `<div class="tabs"><a class="btn ${tab === 'grammar' ? 'primary' : ''}" href="#notes/grammar">Gramática</a><a class="btn ${tab === 'abc' ? 'primary' : ''}" href="#notes/abc">Alfabeto</a></div>`;
    if (tab === 'abc') {
      const inDeck = ALPHABET.every((_, i) => S.cards['a:' + i]);
      say('El alfabeto. Treinta y tres letras. Cinco son trampas: В, Н, Р, С, У, Х. Parecen latinas y no lo son. Bueno, seis.', 'smirk');
      main.innerHTML = tabs + `<div class="card dark"><p>No hace falta aprender el alfabeto antes de empezar: las lecciones llevan transliteración. Pero cuanto antes leas cirílico, mejor.</p>
        <button class="btn ${inDeck ? '' : 'primary'}" id="addabc" ${inDeck ? 'disabled' : ''}>${inDeck ? 'El alfabeto ya está en tu repaso' : 'Añadir las 33 letras al repaso'}</button></div>
        <div class="abc">${ALPHABET.map(a => `<button data-say="${esc(plain(a[2]))}"><span class="L">${a[0]}</span><span class="snd">${esc(a[1])}</span><span class="ex">${show(a[2])}</span></button>`).join('')}</div>`;
      const b = $('#addabc');
      if (b && !inDeck) b.onclick = () => {
        ALPHABET.forEach((_, i) => { if (!S.cards['a:' + i]) S.cards['a:' + i] = newCard(); });
        save(); toast('33 letras añadidas al repaso'); renderNotes('abc');
      };
      return;
    }
    say('Todas las notas de gramática que ya viste. Las que faltan se abren con cada lección. No hagas trampa leyéndolas antes. Bueno, puedes. No te veo.', 'neutral');
    main.innerHTML = tabs + LESSONS.map(L => {
      const G = L.grammar, open = isDone(L) || S.set.unlockAll;
      return `<details class="gnote ${open ? '' : 'locked'}" ${open ? '' : 'data-locked'}><summary><span class="grow">${show(G.title)}</span><span class="muted">Lección ${LESSON_IDX[L.id] + 1}${open ? '' : ' 🔒'}</span></summary>${open ? '<div class="grammar-body">' + rich(G.body) + '</div>' : ''}</details>`;
    }).join('');
    $$('details[data-locked]').forEach(d => d.addEventListener('toggle', () => { if (d.open) { d.open = false; say('Esa nota se abre con su lección. Todo a su tiempo.', 'annoyed'); } }));
  }

  /* ───────── ajustes ───────── */
  function renderSettings() {
    say('Ajustes. Puedes cambiar casi todo. Menos a mí.', 'smirk');
    const sw = (k, label, sub) => `<div class="set"><label for="s-${k}">${label}<small>${sub}</small></label><span class="switch"><input type="checkbox" id="s-${k}" data-set="${k}" ${S.set[k] ? 'checked' : ''}><span></span></span></div>`;
    const voices = ruVoices.length
      ? `<select id="s-voice"><option value="">Automática</option>${ruVoices.map(v => `<option ${v.name === S.set.voice ? 'selected' : ''}>${esc(v.name)}</option>`).join('')}</select>`
      : '<span class="muted small">No encontré voces en ruso en este navegador. Prueba Chrome, Edge o Safari, o instala la voz rusa en tu sistema.</span>';
    main.innerHTML = `<h1>Ajustes</h1>
      <div class="card">
        <div class="set"><label for="s-name">Tu nombre<small>Masha lo usa en los diálogos.</small></label><input type="text" id="s-name" maxlength="24" value="${esc(S.name)}"></div>
        <div class="set"><label>Cómo te hablo<small>Cambia tus formas rusas: я был / я была.</small></label><span class="seg"><button data-g="m" class="${S.g === 'm' ? 'on' : ''}">Masculino</button><button data-g="f" class="${S.g === 'f' ? 'on' : ''}">Femenino</button></span></div>
        <div class="set"><label>Traducción en los diálogos<small>«Auto»: visible en el nivel 1, oculta después (toca para verla).</small></label><span class="seg">${['show', 'auto', 'hide'].map(v => `<button data-tr="${v}" class="${S.set.trans === v ? 'on' : ''}">${{ show: 'Siempre', auto: 'Auto', hide: 'Oculta' }[v]}</button>`).join('')}</span></div>
        ${sw('translit', 'Transliteración', 'El ruso en letras latinas debajo, con la sílaba tónica marcada.')}
        ${sw('autoplay', 'Audio automático', 'Lee en voz alta cada frase nueva.')}
        ${sw('typing', 'Ejercicios de escribir', 'Con teclado ruso en pantalla, para las tarjetas más maduras.')}
        ${sw('sfx', 'Sonidos', 'Pitidos de acierto y error.')}
        ${sw('unlockAll', 'Desbloquear todas las lecciones', 'Si ya sabes algo de ruso y quieres saltar.')}
      </div>
      <div class="card">
        <div class="set"><label for="s-voice">Voz rusa<small>Depende de tu navegador y sistema.</small></label>${voices} <button class="btn ghost" id="test">Probar</button></div>
        <div class="set"><label for="s-rate">Velocidad de la voz<small id="ratev">${S.set.rate.toFixed(2)}×</small></label><input type="range" id="s-rate" min="0.5" max="1.2" step="0.05" value="${S.set.rate}"></div>
        <div class="set"><label for="s-limit">Tarjetas por sesión de repaso<small>Las que sobren quedan para la siguiente.</small></label><select id="s-limit">${[20, 40, 60, 100, 200].map(n => `<option ${n === S.set.limit ? 'selected' : ''}>${n}</option>`).join('')}</select></div>
      </div>
      <div class="card">
        <h3>Tu progreso</h3>
        <p class="muted small">Se guarda solo en este navegador. Puedes descargarlo para pasarlo a otro dispositivo.</p>
        <div class="row"><button class="btn" id="exp">Descargar copia</button><label class="btn" for="imp" style="margin:0">Cargar copia</label><input type="file" id="imp" accept="application/json,.json" hidden><span class="grow"></span><button class="btn red" id="reset">Borrar todo</button></div>
      </div>
      <p class="muted small center">Ruso Advance · Masha y su gato Pelmén te esperan cada día.</p>`;
    $$('[data-set]').forEach(c => c.onchange = () => { S.set[c.dataset.set] = c.checked; save(); });
    $('#s-name').onchange = e => { const v = e.target.value.trim(); if (v) { S.name = v; save(); toast('Nombre guardado'); } };
    $$('[data-g]').forEach(b => b.onclick = () => { S.g = b.dataset.g; save(); renderSettings(); });
    $$('[data-tr]').forEach(b => b.onclick = () => { S.set.trans = b.dataset.tr; save(); renderSettings(); });
    const sv = $('#s-voice'); if (sv) sv.onchange = () => { S.set.voice = sv.value; save(); };
    $('#test').onclick = () => speak('Приве\'т! Меня\' зову\'т Ма\'ша. Я люблю\' чай.', { masha: true });
    $('#s-rate').oninput = e => { S.set.rate = +e.target.value; $('#ratev').textContent = S.set.rate.toFixed(2) + '×'; save(); };
    $('#s-limit').onchange = e => { S.set.limit = +e.target.value; save(); };
    $('#exp').onclick = () => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify(S)], { type: 'application/json' }));
      a.download = 'ruso-advance-' + new Date().toLocaleDateString('sv') + '.json';
      a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    };
    $('#imp').onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      f.text().then(t => {
        const s = JSON.parse(t);
        if (!s || typeof s.cards !== 'object') throw new Error('formato');
        S = { ...fresh(), ...s, set: { ...DEFAULT_SET, ...(s.set || {}) } }; save(); toast('Progreso cargado'); route();
      }).catch(() => say('Ese archivo no es una copia de Ruso Advance. ¿Me quieres engañar?', 'annoyed'));
    };
    $('#reset').onclick = () => {
      if (!confirm('¿Borrar todo tu progreso? No se puede deshacer.')) return;
      S = fresh(); save(); location.hash = ''; route();
    };
  }

  /* ───────── arranque ───────── */
  updateBadge();
  route();
  if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(() => {});
})();
