import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-4">Welcome to My Portfolio</h1>
          <p className="lead">Hi, I'm sonic, a web developer passionate about creating accessible and engaging digital experiences.</p>
          <p>I specialize in building modern web applications using React and other cutting-edge technologies. I'm constantly learning and expanding my skill set to stay current with industry trends.</p>
          <div className="mt-4">
            <Link to="/projects" className="btn btn-primary me-3">View My Work</Link>
            <Link to="/about" className="btn btn-outline-secondary">Learn About Me</Link>
          </div>
        </div>
        <div className="col-md-6 text-center">
          {/* Placeholder for a profile image */}
          <div className="bg-secondary py-5 rounded-circle mx-auto d-flex align-items-center justify-content-center" style={{ width: "300px", height: "300px" }}>
            <span className="text-white">Profile Image</span>
          </div>
        </div>
      </div>
      
      <section className="my-5">
        <h2 className="text-center mb-4">Featured Technologies</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <h3 className="card-title">React</h3>
                <p className="card-text">Building interactive UIs with the most popular frontend library</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <h3 className="card-title">Node.js</h3>
                <p className="card-text">Creating scalable backend services with JavaScript</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <h3 className="card-title">Bootstrap</h3>
                <p className="card-text">Designing responsive and accessible user interfaces</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;