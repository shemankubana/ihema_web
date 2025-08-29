import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Education from './components/Education'; // Assuming you still want this page
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
            <Route path="/education" element={<Education />} />
            {/* You can add other routes like /about, /research etc. here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;