const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ticketRoutes = require('./routes/tickets');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8002;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

// Enable CORS for all origins and headers
app.use(cors());

app.use('/api/tickets', ticketRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
