import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
      <Link to="/services" style={{ margin: '0 10px' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
