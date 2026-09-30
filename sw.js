const CACHE_NAME = 'smart-fit-v1';
self.addEventListener('install', (event) => {
    self.skipWaiting();
});
self.addEventListener('fetch', (event) => {
    // Modo online-first para que siempre cargue la última rutina
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
