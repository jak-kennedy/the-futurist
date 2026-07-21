/* The Futurist — service worker. Offline-first, cache all local assets.
   Bump CACHE when any precached file changes to force a refresh. */
const CACHE = "futurist-v2";

const SHELL = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/styles.css",
  "js/timeline.js",
  "js/views.js",
  "js/app.js",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
  "data/_schema.js",
  "data/intelligence.js",
  "data/energy.js",
  "data/biology.js",
  "data/machines.js",
  "data/planet-space.js",
  "data/security-defense.js",
  "data/money-institutions.js",
  "data/chains-intelligence.js",
  "data/chains-energy.js",
  "data/chains-biology.js",
  "data/chains-machines.js",
  "data/chains-planet-space.js",
  "data/chains-security-defense.js",
  "data/chains-money-institutions.js",
  "data/invest-intelligence.js",
  "data/invest-energy.js",
  "data/invest-biology.js",
  "data/invest-machines.js",
  "data/invest-planet-space.js",
  "data/invest-security-defense.js",
  "data/invest-money-institutions.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      // addAll is atomic; do best-effort per-file so one 404 can't abort install.
      .then((c) => Promise.all(SHELL.map((u) => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache-first, then network (and cache the result). Fonts and other cross-origin
// GETs get cached opaquely on first online load so they work offline afterward.
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy).catch(() => {}));
          return res;
        })
        .catch(() => {
          // Offline and uncached: fall back to the app shell for navigations.
          if (req.mode === "navigate") return caches.match("index.html");
        });
    })
  );
});
