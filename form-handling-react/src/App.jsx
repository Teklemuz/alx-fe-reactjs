import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './hooks/useAuth';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/blog/1">Blog Post 1</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
