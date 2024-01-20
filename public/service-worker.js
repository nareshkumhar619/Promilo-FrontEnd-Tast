// Import Workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// Set up precaching. All the files that need to be cached are passed into precaching
workbox.precaching.precacheAndRoute([]);

// Default to `networkFirst` strategy
workbox.routing.setDefaultHandler(
 new workbox.strategies.NetworkFirst()
);

// Let's use a stale-while-revalidate strategy for all other routes.
workbox.routing.registerRoute(
 /.*/,
 new workbox.strategies.StaleWhileRevalidate(),
 'GET'
);

// Add a specific caching strategy for product images
workbox.routing.registerRoute(
 /\.(?:png|gif|jpg)$/,
 new workbox.strategies.CacheFirst({
   cacheName: 'images',
 }),
 'GET'
);

self.addEventListener('push', function(event) {
 var options = {
   body: event.data.text(),
   icon: '',
   badge: ''
 };
 event.waitUntil(
   self.registration.showNotification('Push Notification', options)
 );
});