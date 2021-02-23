import React, { useState, useEffect } from 'react';

const App = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => setPosts(json))
      .catch(e => console.log('Request failed: ', e));
  });
  return <ul>{posts ? posts.map(post => <li key={post.id}>{post.title}</li>) : 'Loading...'}</ul>;
};

export default App;
