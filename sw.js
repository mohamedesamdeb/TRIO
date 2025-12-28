const CACHE_NAME = 'attendance-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
 './file.png'
];

// مرحلة التثبيت: حفظ الملفات الأساسية
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// مرحلة الاستجابة: الرد من الكاش إذا كان متاحاً
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
