/* handbook-59-final */
/* handbook-path-fix-final */
const CACHE="okinawa-trip-v33-rycom-shopping-guide";
const PRECACHE=["./","index.html","style.css","app.js","manifest.webmanifest","assets/family.jpg","assets/apple-touch-icon.png","assets/icon-192.png","assets/icon-512.png","assets/thumbs/01.webp","assets/thumbs/02.webp","assets/thumbs/03.webp","assets/thumbs/04.webp","assets/thumbs/05.webp","assets/thumbs/06.webp","assets/thumbs/07.webp","assets/thumbs/08.webp","assets/thumbs/09.webp","assets/thumbs/10.webp","assets/thumbs/11.webp","assets/thumbs/12.webp","assets/thumbs/13.webp","assets/thumbs/14.webp","assets/thumbs/15.webp","assets/thumbs/16.webp","assets/thumbs/17.webp","assets/thumbs/18.webp","assets/thumbs/19.webp","assets/thumbs/20.webp","assets/thumbs/21.webp","assets/thumbs/22.webp","assets/thumbs/23.webp","assets/thumbs/24.webp","assets/thumbs/25.webp","assets/thumbs/26.webp","assets/thumbs/27.webp","assets/thumbs/28.webp","assets/thumbs/29.webp","assets/thumbs/30.webp","assets/thumbs/31.webp","assets/thumbs/32.webp","assets/thumbs/33.webp","assets/thumbs/34.webp","assets/thumbs/35.webp","assets/thumbs/36.webp","assets/thumbs/37.webp","assets/thumbs/38.webp","assets/thumbs/39.webp","assets/thumbs/40.webp","assets/thumbs/41.webp","assets/thumbs/42.webp","assets/thumbs/43.webp","assets/thumbs/44.webp","assets/thumbs/45.webp","assets/thumbs/46.webp","assets/thumbs/47.webp","assets/thumbs/48.webp","assets/thumbs/49.webp","assets/thumbs/50.webp","assets/thumbs/51.webp","assets/thumbs/52.webp","assets/thumbs/53.webp","assets/thumbs/54.webp","assets/thumbs/55.webp","assets/thumbs/56.webp","assets/thumbs/57.webp","assets/thumbs/58.webp","assets/thumbs/59.webp","assets/pages/pages/01.webp","assets/pages/pages/02.webp","assets/pages/pages/03.webp","assets/pages/pages/04.webp","assets/pages/pages/05.webp","assets/pages/pages/06.webp","assets/pages/pages/07.webp","assets/pages/pages/08.webp","assets/pages/pages/09.webp","assets/pages/pages/10.webp","assets/pages/pages/11.webp","assets/pages/pages/12.webp","assets/pages/pages/13.webp","assets/pages/pages/14.webp","assets/pages/pages/15.webp","assets/pages/pages/16.webp","assets/pages/pages/17.webp","assets/pages/pages/18.webp","assets/pages/pages/19.webp","assets/pages/pages/20.webp","assets/pages/pages/21.webp","assets/pages/pages/22.webp","assets/pages/pages/23.webp","assets/pages/pages/24.webp","assets/pages/pages/25.webp","assets/pages/pages/26.webp","assets/pages/pages/27.webp","assets/pages/pages/28.webp","assets/pages/pages/29.webp","assets/pages/pages/30.webp","assets/pages/pages/31.webp","assets/pages/pages/32.webp","assets/pages/pages/33.webp","assets/pages/pages/34.webp","assets/pages/pages/35.webp","assets/pages/pages/36.webp","assets/pages/pages/37.webp","assets/pages/pages/38.webp","assets/pages/pages/39.webp","assets/pages/pages/40.webp","assets/pages/pages/41.webp","assets/pages/pages/42.webp","assets/pages/pages/43.webp","assets/pages/pages/44.webp","assets/pages/pages/45.webp","assets/pages/pages/46.webp","assets/pages/pages/47.webp","assets/pages/pages/48.webp","assets/pages/pages/49.webp","assets/pages/pages/50.webp","assets/pages/pages/51.webp","assets/pages/pages/52.webp","assets/pages/pages/53.webp","assets/pages/pages/54.webp","assets/pages/pages/55.webp","assets/pages/pages/56.webp","assets/pages/pages/57.webp","assets/pages/pages/58.webp","assets/pages/pages/59.webp"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(async cache => {
      for (const url of PRECACHE) {
        try { await cache.add(url); } catch(e) {}
      }
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("index.html"));
    })
  );
});
