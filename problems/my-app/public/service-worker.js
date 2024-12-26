import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { NetworkFirst, CacheFirst } from "workbox-strategies";

// Precache all assets
precacheAndRoute(self.__WB_MANIFEST);

// NetworkFirst strategy for API requests
registerRoute(
  ({ url }) => url.origin === "https://jsonplaceholder.typicode.com", // Fake API URL
  new NetworkFirst({
    cacheName: "api-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10, // Limit cache to 10 entries
        maxAgeSeconds: 24 * 60 * 60, // Cache for 1 day
      }),
    ],
  })
);

// Cache API responses for posts
registerRoute(
  ({ url }) => url.pathname === "/posts",
  new NetworkFirst({
    cacheName: "posts-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10,
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ],
  })
);

// Cache additional data like comments
registerRoute(
  ({ url }) => url.pathname.startsWith("/comments"),
  new NetworkFirst({
    cacheName: "comments-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10,
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ],
  })
);

// Cache images with CacheFirst
registerRoute(
  ({ url }) => url.pathname.endsWith(".jpg") || url.pathname.endsWith(".png"),
  new CacheFirst({
    cacheName: "image-cache",
  })
);

// For other assets (CSS, JS, etc.), use CacheFirst strategy
registerRoute(
  ({ url }) => url.origin === "http://localhost:3000",
  new CacheFirst({
    cacheName: "react-app-cache",
  })
);
