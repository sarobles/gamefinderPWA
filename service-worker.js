const CACHE_NAME = 'gamefinder-shell-v2';
const APP_SHELL = [
  '/',
  '/index.html',
  '/pages/onboarding.html',
  '/pages/detalle-juego.html',
  '/pages/mapa.html',
  '/pages/perfil.html',
  '/css/shared.css',
  '/js/tailwind-config.js',
  '/js/pwa-register.js',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('freetogame.com/api')) {
    return; // se implementará la estrategia de la API en la siguiente entrega
  }
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() =>
          caches.match(event.request).then((cached) => {
            if (cached) return cached;
            return caches.match('./index.html');
          })
        )
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});