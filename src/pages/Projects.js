import React from 'react';

function Projects() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">My Projects</h1>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">Inventory Management System</h2>
              <p className="card-text"><strong>Problem Solved:</strong> Developed a solution for small businesses to track inventory levels, sales, and restocking needs.</p>
              <p className="card-text"><strong>Technologies Used:</strong> React, Node.js, Express, MongoDB, Bootstrap</p>
              <p className="card-text"><strong>My Role:</strong> Full-stack developer responsible for creating the frontend UI components and implementing the backend API.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Academic Project - Fall 2024</small>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">Weather Visualization App</h2>
              <p className="card-text"><strong>Problem Solved:</strong> Created an intuitive interface for users to view weather data through interactive charts and maps.</p>
              <p className="card-text"><strong>Technologies Used:</strong> React, Chart.js, OpenWeatherMap API, CSS Grid</p>
              <p className="card-text"><strong>My Role:</strong> Frontend developer focusing on data visualization components and API integration.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Personal Project - Summer 2024</small>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">Community Event Planner</h2>
              <p className="card-text"><strong>Problem Solved:</strong> Built a platform for community organizers to plan and promote local events.</p>
              <p className="card-text"><strong>Technologies Used:</strong> React, Firebase, Google Maps API, Material UI</p>
              <p className="card-text"><strong>My Role:</strong> Led development of user authentication system and event creation interface.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Group Project - Winter 2024</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;