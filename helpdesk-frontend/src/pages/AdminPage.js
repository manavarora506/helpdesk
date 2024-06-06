// AdminPage.js
import React from 'react';
import TicketList from '../components/TicketList';


const AdminPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Admin Panel</h1>
      <div className="card">
        <div className="card-body">
          <TicketList />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

