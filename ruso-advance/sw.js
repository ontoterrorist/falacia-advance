/* Ruso Advance — service worker: guarda la app en el teléfono para usarla sin conexión. */
const PREFIX = 'ruso-advance-';
const CACHE = PREFIX + 'v3';
const AUDIO = PREFIX + 'audio';
const SHELL = ['./', 'index.html', 'styles.css', 'masha.js', 'data.js', 'app.js', 'manifest.webmanifest', 'avatar/pixel.js',
  'lecciones/n03.js', 'lecciones/n04.js', 'lecciones/n05.js', 'lecciones/n06.js', 'lecciones/n07.js', 'lecciones/n08.js', 'lecciones/n09.js', 'lecciones/n10.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png', 'icons/apple-touch-icon.png',
  'fonts/PTSans-400n-cyrillic.woff2', 'fonts/PTSans-400n-latin.woff2', 'fonts/PTSans-700n-cyrillic.woff2', 'fonts/PTSans-700n-latin.woff2',
  'fonts/PTSans-400i-cyrillic.woff2', 'fonts/PTSans-400i-latin.woff2', 'fonts/Unbounded-700n-cyrillic.woff2', 'fonts/Unbounded-700n-latin.woff2'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(PREFIX) && k !== CACHE && k !== AUDIO).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || !req.url.startsWith(self.registration.scope)) return;
  /* los audios no cambian nunca (el nombre es un hash del texto): primero la copia guardada */
  if (req.url.includes('/audio/')) {
    e.respondWith(caches.open(AUDIO).then(c => c.match(req).then(h => h || fetch(req).then(res => { if (res && res.ok) c.put(req, res.clone()); return res; }))));
    return;
  }
  e.respondWith(caches.open(CACHE).then(c => {
    const hit = () => c.match(req, { ignoreSearch: true });
    const net = () => fetch(req.url, { cache: 'no-cache' }).then(res => { if (res && res.ok) c.put(req, res.clone()); return res; });
    /* primero la red, para ver siempre la última versión; sin conexión o con red lenta, la copia guardada */
    const fresh = net();
    const slow = new Promise(r => setTimeout(r, 3500)).then(hit).then(h => h || fresh);
    return Promise.race([fresh, slow]).catch(() => hit());
  }));
});
