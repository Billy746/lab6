import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="h5">My Portfolio</h2>
            <p>Showcasing my work and skills in web development.</p>
          </div>
          <div className="col-md-3">
            <h2 className="h5">Navigation</h2>
            <ul className="list-unstyled">
              <li><Link className="text-light text-decoration-none" to="/">Home</Link></li>
              <li><Link className="text-light text-decoration-none" to="/about">About</Link></li>
              <li><Link className="text-light text-decoration-none" to="/projects">Projects</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2 className="h5">Contact</h2>
            <ul className="list-unstyled">
              <li><a href="mailto:your.email@example.com" className="text-light text-decoration-none">Email Me</a></li>
              <li><a href="https://github.com/yourusername" className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/yourusername" className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-3 bg-secondary" />
        <div className="text-center">
          <p>© {currentYear} My Portfolio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;