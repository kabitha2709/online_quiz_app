import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 text-center" style={{ maxWidth: "500px" }}>
        <h1 className="mb-3 text-primary">Welcome to Online Quiz App</h1>
        <p className="text-muted mb-4">
          Manage your data efficiently using our mobile app.
        </p>
        <Link to="/registration" className="btn btn-lg btn-primary">
          Register Now
        </Link>
      </div>
    </div>
  );
}

export default Home;
