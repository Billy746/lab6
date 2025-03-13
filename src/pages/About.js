import React from 'react';

function About() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">About Me</h1>
      
      <section className="mb-5">
        <h2>Education</h2>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="card-title">Bachelor of Computer Science</h3>
            <p className="card-subtitle mb-2 text-muted">Dalhousie University, 2022-2026</p>
            <p className="card-text">Currently pursuing a degree in Computer Science with focus on web development and artificial intelligence.</p>
          </div>
        </div>
      </section>
      
      <section className="mb-5">
        <h2>Experience</h2>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="card-title">Web Development Intern</h3>
            <p className="card-subtitle mb-2 text-muted">Tech Solutions Inc., Summer 2024</p>
            <p className="card-text">Developed and maintained web applications using React and Node.js. Collaborated with the design team to implement responsive user interfaces.</p>
          </div>
        </div>
      </section>
      
      <section className="mb-5">
        <h2>Career Goals</h2>
        <p>I aim to become a full-stack developer specializing in creating accessible and user-friendly web applications. My long-term goal is to work on projects that make a positive impact on people's lives through technology.</p>
      </section>
      
      <section className="mb-5">
        <h2>Technical Skills</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-header">Programming Languages</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">JavaScript/TypeScript</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">Java</li>
                <li className="list-group-item">HTML/CSS</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-header">Frameworks & Tools</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React</li>
                <li className="list-group-item">Node.js</li>
                <li className="list-group-item">Bootstrap</li>
                <li className="list-group-item">Git</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;