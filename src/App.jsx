import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Certificates from './pages/Certificates';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
