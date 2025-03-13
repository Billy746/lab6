import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="display-1">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="lead mb-5">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <Link to="/" className="btn btn-primary">Return to Home Page</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;