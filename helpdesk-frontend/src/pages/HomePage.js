// HomePage.js
import React from 'react';
import TicketForm from '../components/TicketForm';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-center">
              <h1>Submit a Support Ticket</h1>
            </div>
            <div className="card-body">
              <TicketForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
