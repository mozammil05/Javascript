#!/bin/bash

# Step 1: Create React App
echo "Creating React App..."
npx create-react-app my-app
cd my-app || exit

# Step 2: Install dependencies
echo "Installing necessary dependencies..."
npm install axios workbox-core workbox-precaching workbox-routing workbox-strategies

# Step 3: Set up service worker and Workbox
echo "Setting up Service Worker and Workbox..."

# Create service-worker.js in the public folder
cat <<EOL > public/service-worker.js
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';

// Precache all assets built by React in production build
precacheAndRoute(self.__WB_MANIFEST);

// Cache API responses from fake APIs using NetworkFirst strategy
registerRoute(
  ({ url }) => url.origin === 'https://jsonplaceholder.typicode.com', // Fake API URL
  new NetworkFirst({
    cacheName: 'api-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10, // Limit cache to 10 entries
        maxAgeSeconds: 24 * 60 * 60, // 1 day cache expiration
      }),
    ],
  })
);

// Cache additional API responses
registerRoute(
  ({ url }) => url.pathname.startsWith('/comments'),
  new NetworkFirst({
    cacheName: 'comments-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10,
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ],
  })
);

// Cache images using CacheFirst strategy
registerRoute(
  ({ url }) => url.pathname.endsWith('.jpg') || url.pathname.endsWith('.png'),
  new CacheFirst({
    cacheName: 'image-cache',
  })
);

// Default strategy for all other assets (StaleWhileRevalidate)
registerRoute(
  ({ url }) => url.origin === 'http://localhost:3000', // Localhost (React App URL)
  new StaleWhileRevalidate({
    cacheName: 'react-app-cache',
  })
);
EOL

# Create serviceWorkerRegistration.js in the src folder
cat <<EOL > src/serviceWorkerRegistration.js
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname === '127.0.0.1'
);

export function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = \`\${process.env.PUBLIC_URL}/service-worker.js\`;

      if (isLocalhost) {
        checkValidServiceWorker(swUrl);
      } else {
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      console.log('Service Worker registered:', registration);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}

function checkValidServiceWorker(swUrl) {
  fetch(swUrl)
    .then((response) => {
      if (response.status === 404 || response.headers.get('content-type')?.indexOf('javascript') === -1) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister();
        });
      } else {
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log('No internet connection found. App is running in offline mode.');
    });
}
EOL

# Step 4: Modify index.js to Register Service Worker
echo "Modifying index.js to register service worker..."

sed -i '' "s|import './index.css';|import './index.css';\nimport * as serviceWorkerRegistration from './serviceWorkerRegistration';|g" src/index.js
sed -i '' "s|ReactDOM.render( |ReactDOM.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,|g" src/index.js
sed -i '' "s|// Register the service worker to enable caching and offline functionality|serviceWorkerRegistration.register();|g" src/index.js

# Step 5: Create API handler using Axios for Multiple APIs
echo "Creating API handler using Axios for multiple APIs..."

mkdir -p src/api
cat <<EOL > src/api/api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com'; // Fake API URL

// Fetch posts
export const fetchPosts = async () => {
  try {
    const response = await axios.get(\`\${API_URL}/posts\`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

// Fetch comments
export const fetchComments = async () => {
  try {
    const response = await axios.get(\`\${API_URL}/comments\`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};

// Fetch users
export const fetchUsers = async () => {
  try {
    const response = await axios.get(\`\${API_URL}/users\`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
EOL

# Step 6: Modify App.js to Use the Fake APIs
echo "Modifying App.js to display data from multiple fake APIs..."

cat <<EOL > src/App.js
import React, { useEffect, useState } from 'react';
import { fetchPosts, fetchComments, fetchUsers } from './api/api';

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const postData = await fetchPosts();
      setPosts(postData);
    };

    const loadComments = async () => {
      const commentData = await fetchComments();
      setComments(commentData);
    };

    const loadUsers = async () => {
      const userData = await fetchUsers();
      setUsers(userData);
    };

    loadPosts();
    loadComments();
    loadUsers();
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>

      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
EOL

# Step 7: Modify index.html for PWA Configuration
echo "Modifying index.html for PWA..."

sed -i '' 's|<div id="root"></div>|<div id="root"></div>\n<script src="%PUBLIC_URL%/service-worker.js"></script>|g' public/index.html

# Step 8: Build the Production Version
echo "Building the production version..."
npm run build

# Step 9: Install Serve for Local Testing
echo "Installing Serve for local testing..."
npm install -g serve

# Step 10: Serve the Production Build
echo "Serving the production build..."
serve -s build
