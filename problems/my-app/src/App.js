import React, { useEffect, useState } from "react";
import axios from "axios";

// Fetch data from API
const fetchFromAPI = async (endpoint) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com${endpoint}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return [];
  }
};

// Fetch data from cache
const fetchFromCache = async (endpoint) => {
  const cache = await caches.open("api-cache");
  const response = await cache.match(endpoint);
  if (response) {
    return await response.json();
  }
  return null;
};

// Store data in cache
const storeInCache = async (endpoint, data) => {
  const cache = await caches.open("api-cache");
  console.log("cache", cache);
  const response = new Response(JSON.stringify(data));
  cache.put(endpoint, response);
};

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      const cachedPosts = await fetchFromCache("/posts");
      if (cachedPosts) {
        // Use cached data if available
        setPosts(cachedPosts);
      } else {
        // Fetch from API if no cache available
        const apiPosts = await fetchFromAPI("/posts");
        setPosts(apiPosts);
        storeInCache("/posts", apiPosts); // Store in cache for future use
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
