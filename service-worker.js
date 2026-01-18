const CACHE_NAME = "sprint-starter-cache-v1";
const urlsToCache = [
  "./index.html",
  "./bang.mp3",
  "./on_your_marks.mp3",
  "./set.mp3",
  "./manifest.json",
  "./icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
