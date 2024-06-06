import React, { useState, useEffect } from 'react';
import { getTicket, updateTicket } from '../api';
import { useParams } from 'react-router-dom';

const AdminPanel = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchTicket = async () => {
      const response = await getTicket(id);
      setTicket(response.data);
    };
    fetchTicket();
  }, [id]);

  const handleStatusChange = async (e) => {
    const updatedTicket = { ...ticket, status: e.target.value };
    await updateTicket(id, updatedTicket);
    setTicket(updatedTicket);
  };

  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{ticket.name}</h2>
      <p>{ticket.description}</p>
      <select value={ticket.status} onChange={handleStatusChange}>
        <option value="new">New</option>
        <option value="in progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
    </div>
  );
};

export default AdminPanel;
