import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/tickets';

export const getTickets = async () => {
  return axios.get(API_URL);
};

export const getTicket = async (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createTicket = async (ticket) => {
  try {
    const response = await axios.post(API_URL, ticket);
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const updateTicket = async (id, ticket) => {
  return axios.patch(`${API_URL}/${id}`, ticket);
};
