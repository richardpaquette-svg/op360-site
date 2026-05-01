const CACHE_NAME = 'op360-v3';

const PRECACHE_URLS = [
  '/',
  '/styles.css',
  '/scripts.js',
  '/contenu.js',
  '/favicon.svg',
  '/logo-white.png',
  '/logo-color.png',
  '/apple-touch-icon.png',
  '/site.webmanifest'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Helper : ne mettre en cache que les réponses complètes (pas 206 Partial)
function safePut(cache, request, response) {
  if (response && response.ok && response.status !== 206) {
    cache.put(request, response);
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Bypass: non-GET, chrome-extension, external domains
  if (request.method !== 'GET') return;
  if (url.protocol === 'chrome-extension:') return;
  if (url.origin !== self.location.origin) return;

  const isHTML = request.destination === 'document' ||
                 url.pathname.endsWith('.html') ||
                 url.pathname === '/';

  // Toujours resservir le manifest depuis le réseau
  const isManifest = url.pathname === '/site.webmanifest';

  // Network-first pour les icônes PWA
  const isPWAIcon = url.pathname === '/icon-maskable.png' ||
                    url.pathname === '/apple-touch-icon.png';

  if (isManifest || isPWAIcon) {
    event.respondWith(fetch(request));
    return;
  }

  if (isHTML) {
    // Network-first for HTML pages
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => safePut(cache, request, clone));
          return response;
        })
        .catch(() => caches.match(request))
    );
  } else {
    // Cache-first for CSS, JS, images, fonts
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => safePut(cache, request, clone));
          return response;
        });
      })
    );
  }
});
