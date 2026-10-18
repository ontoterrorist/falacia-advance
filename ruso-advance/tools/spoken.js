// Lista todos los textos rusos que la app pronuncia, con cada variante de género resuelta.
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..');
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'data.js'), 'utf8') + ';this.LESSONS=LESSONS;this.SPEAKERS=SPEAKERS;this.ALPHABET=ALPHABET;', ctx);
for (const f of fs.readdirSync(path.join(root, 'lecciones')).sort()) vm.runInContext(fs.readFileSync(path.join(root, 'lecciones', f), 'utf8'), ctx);
const { LESSONS, ALPHABET } = ctx;
const isCyr = s => /[а-яё]/i.test(s);
const items = []; // {text, voice}
const gender = (s, g) => s.replace(/\{([^{}|]*)\|([^{}|]*)\}/g, (m, a, b) => g === 'f' ? b : a);
function add(text, voice) {
  if (!isCyr(text)) return;
  const forms = /\{[^{}|]*\|/.test(text) ? [['m', gender(text, 'm')], ['f', gender(text, 'f')]] : [[null, text]];
  for (const [g, t] of forms) {
    const v = voice === 'user' ? (g === 'f' ? 'user_f' : g === 'm' ? 'user_m' : null) : voice;
    if (voice === 'user' && !g) { add2(t, 'user_m'); add2(t, 'user_f'); } else add2(t, v);
  }
}
function add2(t, v) { for (const part of t.split('{name}')) { const p = part.trim(); if (isCyr(p)) items.push({ text: p, voice: v }); } }
for (const L of LESSONS) {
  add(L.ru, 'masha');
  for (const st of L.dialog) {
    if (st.ru) add(st.ru, st.who || 'masha');
    if (st.u) for (const o of st.u) add(o[0], 'user');
  }
  for (const p of L.phrases) add(p[0], 'masha');
  for (const m of L.grammar.body.matchAll(/\[\[(.+?)\]\]/g)) add(m[1], 'masha');
  for (const d of L.grammar.drills) {
    if (d.q) add(d.q.replace('___', d.o[0]), 'masha');
    else add(d.o[0], 'masha'); // la respuesta que se oye al corregir
  }
}
for (const a of ALPHABET) add(a[2], 'masha');
const seen = new Set(), out = [];
for (const it of items) { const k = it.voice + '|' + it.text; if (!seen.has(k)) { seen.add(k); out.push(it); } }
fs.writeFileSync(process.argv[2] || '/dev/stdout', JSON.stringify(out));
if (process.argv[2]) console.log(out.length + ' clips');
