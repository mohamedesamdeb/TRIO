self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  // هذا الكود ضروري حتى لو كان فارغاً ليسمح بالتثبيت
});