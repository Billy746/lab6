import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import "./css/styles.css";

function App() {
  return (
    <Router>
      {/* Skip to content link for keyboard users */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;