import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Research1 from './components/Research1';
import Research2 from './components/Research2';
import Research3 from './components/Research3';
import Research4 from './components/Research4';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/USDA McGovern-Dole Grant" element={<Research1 />} />
            <Route path="/Rapid review of the Mastercard Foundation" element={<Research2 />} />
            <Route path="/Impact study of World Vision" element={<Research3 />} />
            <Route path="/USDA McGovern-Dole Grant Midterm" element={<Research4 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;