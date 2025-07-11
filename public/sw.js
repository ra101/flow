self.addEventListener('install', event => {
    // Service worker installed
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    // Service worker activated
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    // Default fetch handler (ju            st passes through)
    event.respondWith(fetch(event.request));
});
