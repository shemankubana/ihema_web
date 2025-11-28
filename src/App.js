import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Research1 from './components/Research1';
import Research2 from './components/Research2';
import Research3 from './components/Research3';
import Research4 from './components/Research4';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research/mcgovern-dole" element={<Research1 />} />
            <Route path="/research/mastercard-foundation" element={<Research2 />} />
            <Route path="/research/world-vision" element={<Research3 />} />
            <Route path="/research/mcgovern-dole-midterm" element={<Research4 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;