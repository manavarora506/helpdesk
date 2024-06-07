require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ticketRoutes = require('./helpdesk-backend/routes/tickets'); // Adjust this path if necessary

const app = express();


var mongoURI = process.env.MONGODB_URI

console.log(mongoURI)
if (!mongoURI) {
  console.error('MONGODB_URI is not defined in the environment variables');
  process.exit(1);
}

mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/tickets', ticketRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'helpdesk-frontend/build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'helpdesk-frontend/build/index.html'));
});

const PORT = process.env.PORT || 8003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
