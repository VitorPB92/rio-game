// Service worker simples: cache-first para o app shell/estáticos, rede para o resto.
const CACHE = 'rio3d-v1';
self.addEventListener('install', (e) => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(['/', '/manifest.webmanifest']))); });
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => { if (r.ok) { const cl = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cl)); } return r; }).catch(() => caches.match('/'))));
});
