// Revisa el contenido del curso: formas de género sin llaves, acentos mal puestos,
// letras latinas dentro de palabras rusas, hablantes inexistentes y turnos sin opciones incorrectas.
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..');
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'data.js'), 'utf8') + ';this.LESSONS=LESSONS;this.SPEAKERS=SPEAKERS;this.LEVELS=LEVELS;', ctx);
for (const f of fs.readdirSync(path.join(root, 'lecciones')).sort()) vm.runInContext(fs.readFileSync(path.join(root, 'lecciones', f), 'utf8'), ctx);
const { LESSONS, SPEAKERS, LEVELS } = ctx;
const errs = [], warn = [];
const VOW = 'аеёиоуыэюяАЕЁИОУЫЭЮЯ';
function checkRu(s, where) {
  if (typeof s !== 'string') return;
  const outside = s.replace(/\{[^{}]*\}/g, '');
  if (outside.includes('|')) errs.push(where + ': | fuera de llaves: ' + s);
  for (const m of s.matchAll(/(.)'/g)) if (/[а-яё]/i.test(m[1]) && !VOW.includes(m[1])) errs.push(where + ': acento tras consonante: ' + s);
  if (/[а-яё][a-z]|[a-z][а-яё]/i.test(s.replace(/\{name\}/g, ''))) errs.push(where + ': mezcla latín/cirílico: ' + s);
  for (const w of s.replace(/\{name\}/g, '').match(/[а-яёА-ЯЁ']+/g) || []) {
    const n = (w.match(/'/g) || []).length;
    if (n > 1) errs.push(where + ': dos acentos en «' + w + '»');
  }
}
const ids = new Set();
LESSONS.forEach((L, i) => {
  const W = L.id;
  if (ids.has(L.id)) errs.push('id repetido ' + L.id); ids.add(L.id);
  if (L.id !== 'l' + (i + 1)) errs.push('orden: ' + L.id + ' en posición ' + (i + 1));
  if (!LEVELS.find(l => l.id === L.level)) errs.push(W + ': nivel inexistente ' + L.level);
  checkRu(L.ru, W + '.ru');
  L.dialog.forEach((st, j) => {
    if (st.ru) checkRu(st.ru, W + '.dialog' + j);
    if (st.who && !SPEAKERS[st.who]) errs.push(W + ': hablante inexistente ' + st.who);
    if (st.u) {
      st.u.forEach(o => checkRu(o[0], W + '.dialog' + j + '.opt'));
      const k = st.k || 1;
      if (k > st.u.length) errs.push(W + '.dialog' + j + ': k > opciones');
      if (st.u.length === k && st.u.length > 1) warn.push(W + '.dialog' + j + ': todas correctas');
    }
  });
  if (!L.dialog.some(st => st.u && st.u.length > (st.k || 1))) warn.push(W + ': sin tarjetas de conversación');
  L.phrases.forEach((p, j) => checkRu(p[0], W + '.phrase' + j));
  const G = L.grammar;
  for (const m of G.body.matchAll(/\[\[(.+?)\]\]/g)) checkRu(m[1], W + '.grammar');
  G.drills.forEach((d, j) => {
    if (d.q) { checkRu(d.q, W + '.drill' + j); if (!d.q.includes('___')) errs.push(W + '.drill' + j + ': q sin ___'); }
    d.o.forEach(o => checkRu(o, W + '.drill' + j + '.o'));
    if (new Set(d.o).size !== d.o.length) errs.push(W + '.drill' + j + ': opciones repetidas');
  });
});
console.log(LESSONS.length + ' lecciones, ' + LEVELS.length + ' niveles');
warn.forEach(w => console.log('aviso: ' + w));
errs.forEach(e => console.log('ERROR: ' + e));
process.exit(errs.length ? 1 : 0);
