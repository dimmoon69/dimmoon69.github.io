var cacheName = 'phaser-v1';
var filesToCache = [
  '/',
  '/index.html',
  '/img/logo.png',
  '/img/icon-192.png',
  '/img/icon-256.png',
  '/img/icon-512.png',
  '/js/game.js',
  '/css/style.css',
  'https://cdn.jsdelivr.net/npm/phaser@3.20.1/dist/phaser.min.js'
];
 
self.addEventListener('install', function(event) {
  console.log('установка sw');
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('sw кеширует файлы');
      return cache.addAll(filesToCache);
    }).catch(function(err) {
      console.log(err);
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('sw fetch');
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    }).catch(function (error) {
      console.log(error);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('событие activate sw');
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('удаление старого кеша sw', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

