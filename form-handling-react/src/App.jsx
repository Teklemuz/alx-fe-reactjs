import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FormikForm from './components/FormikForm';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/blog/1">Blog Post 1</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <ProtectedRoute path="/profile/*" element={<Profile />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <h2>User Registration</h2>
        <FormikForm />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
