const CACHE_NAME = "app-cache-v1";
const urlsToCache = [
    "/alergenos-leche/index.html",
    "/alergenos-leche/manifest.json",
    "/alergenos-leche/icono.png",
    "/alergenos-leche/icono-grande.png"
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log("Archivos en caché");
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                return response || fetch(event.request);
            })
    );
});
