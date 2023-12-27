const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const userrouter = require('./routes/userrouter.js');
const contactRoutes = require('./routes/contactRoute'); // Import the contact routes

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userrouter); // Mount the user routes
app.use('/api/contact', contactRoutes); // Mount the contact form routes

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  return res.status(statusCode).json({ success: false, statusCode, message });
});

module.exports = app;
