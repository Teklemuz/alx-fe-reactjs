import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/blog/1">Go to Blog Post 1</Link>
    </div>
  );
}

export default Home;
