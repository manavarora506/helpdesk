import React, { useEffect, useState } from 'react';
import { getTickets, updateTicket } from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await getTickets();
      setTickets(response.data);
    };
    
    fetchTickets();
  }, []);

  const handleStatusChange = async (e, ticketId) => {
    const newStatus = e.target.value;
    await updateTicket(ticketId, { status: newStatus });
    setTickets(tickets.map(ticket => ticket._id === ticketId ? { ...ticket, status: newStatus } : ticket));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Tickets</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket._id}>
              <td>{ticket._id}</td>
              <td>{ticket.name}</td>
              <td>{ticket.email}</td>
              <td>{ticket.description}</td>
              <td>
                <select
                  className="form-select"
                  value={ticket.status}
                  onChange={(e) => handleStatusChange(e, ticket._id)}
                >
                  <option value="new">New</option>
                  <option value="in progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;
