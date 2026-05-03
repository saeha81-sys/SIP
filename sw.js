const CACHE = 'sip-v1';
const ASSETS = [
  '/SIP/',
  '/SIP/index.html'
];

self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open(CACHE).then(cache=>cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e=>{
  e.respondWith(
    caches.match(e.request).then(cached=>{
      return cached || fetch(e.request).catch(()=>caches.match('/SIP/'));
    })
  );
});
